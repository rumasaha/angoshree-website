require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use(express.static(path.join(__dirname, '..')));

const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
app.use('/uploads', (_req, res, next) => { res.set('Access-Control-Allow-Origin', '*'); next(); });
app.use('/uploads', express.static(uploadsDir));

// Ensure correct MIME types for font files
express.static.mime.define({ 'font/woff2': ['woff2'], 'font/woff': ['woff'], 'font/ttf': ['ttf'], 'font/otf': ['otf'] });

const storage = multer.diskStorage({
  destination: uploadsDir,
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + '-' + Math.round(Math.random() * 1e9) + ext);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 200 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) cb(null, true);
    else cb(new Error('Only image and video files allowed'));
  },
});

const fontUpload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ['font/ttf', 'font/otf', 'font/woff', 'font/woff2', 'application/x-font-ttf', 'application/x-font-otf', 'application/font-woff', 'application/font-woff2', 'application/octet-stream'];
    if (allowed.includes(file.mimetype) || file.originalname.match(/\.(ttf|otf|woff|woff2)$/i)) cb(null, true);
    else cb(new Error('Only font files allowed (.ttf, .otf, .woff, .woff2)'));
  },
});

const DATA_FILE = path.join(__dirname, '..', 'data', 'data.json');
const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'admin123';

function checkAuth(req, res) {
  const pass = req.headers['x-admin-password'];
  if (pass !== ADMIN_PASS) {
    res.status(401).json({ error: 'Wrong password' });
    return false;
  }
  return true;
}

function readData() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return {};
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/data', (_req, res) => {
  res.json(readData());
});

app.post('/api/data', (req, res) => {
  if (!checkAuth(req, res)) return;
  writeData(req.body);
  res.json({ success: true });
});

app.post('/api/upload', (req, res) => {
  if (!checkAuth(req, res)) return;
  upload.single('image')(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    try {
      const result = await cloudinary.uploader.upload(req.file.path, { folder: 'angoshree' });
      fs.unlink(req.file.path, () => {});
      res.json({ url: result.secure_url });
    } catch (e) {
      res.status(500).json({ error: 'Upload failed' });
    }
  });
});

app.post('/api/upload-multiple', (req, res) => {
  if (!checkAuth(req, res)) return;
  upload.array('images', 100)(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!req.files || req.files.length === 0) return res.status(400).json({ error: 'No files uploaded' });
    try {
      const urls = await Promise.all(req.files.map((f) =>
        cloudinary.uploader.upload(f.path, { folder: 'angoshree' }).then((r) => { fs.unlink(f.path, () => {}); return r.secure_url; })
      ));
      res.json({ urls });
    } catch (e) {
      res.status(500).json({ error: 'Upload failed' });
    }
  });
});

app.post('/api/upload-font', (req, res) => {
  if (!checkAuth(req, res)) return;
  fontUpload.single('font')(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    try {
      const result = await cloudinary.uploader.upload(req.file.path, { folder: 'angoshree', resource_type: 'raw' });
      fs.unlink(req.file.path, () => {});
      res.json({ url: result.secure_url });
    } catch (e) {
      res.status(500).json({ error: 'Upload failed' });
    }
  });
});

async function sendNotifications(data) {
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
    return;
  }
  const { name, email, phone } = data;
  const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const body = [
    `New Video Call Request`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Time: ${now}`,
  ].join('\n');
  const twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  const tasks = [];
  if (process.env.OWNER_PHONE_NUMBER && process.env.TWILIO_PHONE_NUMBER) {
    tasks.push(
      twilio.messages.create({ body, from: process.env.TWILIO_PHONE_NUMBER, to: process.env.OWNER_PHONE_NUMBER })
    );
  }
  if (process.env.OWNER_WHATSAPP_NUMBER && process.env.TWILIO_WHATSAPP_NUMBER) {
    tasks.push(
      twilio.messages.create({ body, from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`, to: `whatsapp:${process.env.OWNER_WHATSAPP_NUMBER}` })
    );
  }
  await Promise.allSettled(tasks);
}

app.post('/api/video-call-request', async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required.' });
  }
  console.log('Video call request received:', { name, email, phone });
  try { await sendNotifications({ name, email, phone }); } catch {}
  res.json({ success: true, message: 'Request submitted.' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message: userMessage } = req.body;
  if (!name || !email || !userMessage) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  console.log('Contact form received:', { name, email, phone, message: userMessage });
  try { await sendNotifications({ name, email, phone: phone || 'Not provided', message: userMessage }); } catch {}
  res.json({ success: true, message: 'Message received.' });
});

app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required.' });
  console.log('Newsletter subscription:', { email });
  res.json({ success: true, message: 'Thank you for subscribing!' });
});

app.listen(PORT, () => {
  console.log(`Angoshree server running at http://localhost:${PORT}`);
  console.log(`Admin panel: http://localhost:${PORT}/admin.html`);
});
