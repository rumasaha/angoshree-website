// ===== Data (loaded from API) =====
let siteData = {};
let products = [];
let galleryImages = [];
let offers = [];
let galleryVideos = [];
let videoIndex = 0;
let storeWhatsapp = '91XXXXXXXXXX';
let timeSlots = [];

async function loadSiteData() {
  try {
    const res = await fetch('/api/data?_=' + Date.now());
    siteData = await res.json();
  } catch {}

  products = siteData.products || [
    { id: 1, name: 'Royal Kanjivaram Silk', category: 'silk', image: 'https://images.unsplash.com/photo-1610030469983-98e550c7ec8e?w=500&q=80', badge: 'Bestseller' },
    { id: 2, name: 'Banarasi Brocade', category: 'silk', image: 'https://images.unsplash.com/photo-1583391734527-fdc18f329775?w=500&q=80', badge: null },
    { id: 3, name: 'Bridal Red Zari', category: 'bridal', image: 'https://images.unsplash.com/photo-1595777216528-069e332891ce?w=500&q=80', badge: 'New' },
    { id: 4, name: 'Handloom Cotton', category: 'cotton', image: 'https://images.unsplash.com/photo-1617629631168-51353d1b9c3e?w=500&q=80', badge: null },
    { id: 5, name: 'Tussar Silk Natural', category: 'silk', image: 'https://images.unsplash.com/photo-1583391734527-fdc18f329775?w=500&q=80', badge: 'Sale' },
    { id: 6, name: 'Khadi Block Print', category: 'cotton', image: 'https://images.unsplash.com/photo-1617629631168-51353d1b9c3e?w=500&q=80', badge: null },
    { id: 7, name: 'Maroon Bridal Silk', category: 'bridal', image: 'https://images.unsplash.com/photo-1595777216528-069e332891ce?w=500&q=80', badge: null },
    { id: 8, name: 'Contemporary Geometric', category: 'designer', image: 'https://images.unsplash.com/photo-1610030469983-98e550c7ec8e?w=500&q=80', badge: 'New' },
    { id: 9, name: 'Floral Designer Print', category: 'designer', image: 'https://images.unsplash.com/photo-1617629631168-51353d1b9c3e?w=500&q=80', badge: null },
    { id: 10, name: 'Temple Border Silk', category: 'silk', image: 'https://images.unsplash.com/photo-1610030469983-98e550c7ec8e?w=500&q=80', badge: 'Bestseller' },
    { id: 11, name: 'Bengal Cotton Jamdani', category: 'cotton', image: 'https://images.unsplash.com/photo-1583391734527-fdc18f329775?w=500&q=80', badge: null },
    { id: 12, name: 'Gold Embroidered Bridal', category: 'bridal', image: 'https://images.unsplash.com/photo-1595777216528-069e332891ce?w=500&q=80', badge: 'Premium' },
  ];
  galleryImages = siteData.galleryImages || [
    'https://images.unsplash.com/photo-1610030469983-98e550c7ec8e?w=800&q=80',
    'https://images.unsplash.com/photo-1583391734527-fdc18f329775?w=800&q=80',
    'https://images.unsplash.com/photo-1595777216528-069e332891ce?w=800&q=80',
    'https://images.unsplash.com/photo-1617629631168-51353d1b9c3e?w=800&q=80',
  ];
  galleryVideos = siteData.galleryVideos || [];
  offers = siteData.offers || [
    { id: 1, title: 'Durga Puja Collection', description: 'Exclusive pujo special sarees — tant, silk, and cotton. Limited stock!', image: 'https://images.unsplash.com/photo-1610030469983-98e550c7ec8e?w=500&q=80', badge: 'Festive Offer' },
    { id: 2, title: 'Flat 20% Off on Silks', description: 'On all Kanjivaram, Banarasi & Tussar silk sarees. Offer valid till stock lasts.', image: 'https://images.unsplash.com/photo-1583391734527-fdc18f329775?w=500&q=80', badge: '20% OFF' },
    { id: 3, title: 'Trending: Pastel Cottons', description: 'Light, airy pastel cotton sarees — perfect for everyday elegance this season.', image: 'https://images.unsplash.com/photo-1617629631168-51353d1b9c3e?w=500&q=80', badge: 'Trending' },
    { id: 4, title: 'Bridal Preview', description: 'Book a personal video call preview of our bridal collection. Zero commitment.', image: 'https://images.unsplash.com/photo-1595777216528-069e332891ce?w=500&q=80', badge: 'New' },
  ];
  storeWhatsapp = siteData.storeWhatsapp || '91XXXXXXXXXX';
  timeSlots = siteData.timeSlots || [
    '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 1:00 PM',
    '2:00 PM - 3:00 PM', '3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM', '6:00 PM - 7:00 PM',
  ];
}

// ===== Gallery =====
let galleryIndex = 0;
let galleryTimer;

function galleryShow() {
  const img = document.getElementById('galleryImage');
  const empty = document.getElementById('galleryEmpty');
  const counter = document.getElementById('galleryCounter');

  if (galleryImages.length === 0) {
    img.hidden = true;
    empty.hidden = false;
    counter.textContent = '0 / 0';
    return;
  }

  empty.hidden = true;
  img.hidden = false;
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = galleryImages[galleryIndex];
    img.style.opacity = '1';
  }, 50);
  counter.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
}

function galleryNext() {
  if (galleryImages.length === 0) return;
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
  galleryShow();
  restartGalleryTimer();
}

function galleryPrev() {
  if (galleryImages.length === 0) return;
  galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
  galleryShow();
  restartGalleryTimer();
}

function restartGalleryTimer() {
  clearInterval(galleryTimer);
  if (galleryImages.length > 1) {
    galleryTimer = setInterval(galleryNext, 5000);
  }
}

function initGallery() {
  const saved = localStorage.getItem('angoshree-gallery');
  if (saved) {
    try { galleryImages = JSON.parse(saved); } catch (_) {}
  }

  if (galleryImages.length === 0) {
    galleryImages = [
      'https://images.unsplash.com/photo-1610030469983-98e550c7ec8e?w=800&q=80',
      'https://images.unsplash.com/photo-1583391734527-fdc18f329775?w=800&q=80',
      'https://images.unsplash.com/photo-1595777216528-069e332891ce?w=800&q=80',
      'https://images.unsplash.com/photo-1617629631168-51353d1b9c3e?w=800&q=80',
    ];
  }

  galleryShow();
  restartGalleryTimer();

  document.getElementById('galleryPrev').addEventListener('click', galleryPrev);
  document.getElementById('galleryNext').addEventListener('click', galleryNext);
}

function renderVideoSlideshow() {
  const wrap = document.getElementById('galleryVideoWrap');
  if (!wrap) return;
  if (!galleryVideos.length) { wrap.hidden = true; return; }
  wrap.hidden = false;
  videoIndex = 0;
  showVideo(0);
}

function showVideo(index) {
  const player = document.getElementById('videoPlayer');
  const source = document.getElementById('videoSource');
  const empty = document.getElementById('videoEmpty');
  const counter = document.getElementById('videoCounter');
  const prev = document.getElementById('videoPrev');
  const next = document.getElementById('videoNext');

  if (!galleryVideos.length) {
    player.hidden = true;
    empty.hidden = false;
    counter.textContent = '0 / 0';
    prev.disabled = true;
    next.disabled = true;
    return;
  }

  player.pause();
  videoIndex = (index + galleryVideos.length) % galleryVideos.length;
  source.src = galleryVideos[videoIndex];
  player.hidden = false;
  empty.hidden = true;
  player.load();
  counter.textContent = `${videoIndex + 1} / ${galleryVideos.length}`;
  prev.disabled = galleryVideos.length <= 1;
  next.disabled = galleryVideos.length <= 1;
}

function prevVideo() { showVideo(videoIndex - 1); }
function nextVideo() { showVideo(videoIndex + 1); }

function initVideoSlideshow() {
  document.getElementById('videoPrev')?.addEventListener('click', prevVideo);
  document.getElementById('videoNext')?.addEventListener('click', nextVideo);
}


// ===== Translate with fallback =====
function _tt(key, fallback) {
  const val = t(key);
  return val === key ? fallback : val;
}

// ===== Render Offers =====
function renderOffers() {
  const grid = document.getElementById('offersGrid');
  if (!grid) return;
  grid.innerHTML = offers.map((item) => `
    <article class="offer-card">
      <div class="offer-image">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        ${item.badge ? `<span class="offer-badge">${_tt('badge.' + item.badge.toLowerCase().replace(/[^a-z0-9]/g,''), item.badge)}</span>` : ''}
      </div>
      <div class="offer-info">
        <h3>${_tt('offer.title.' + item.id, item.title)}</h3>
        <p>${_tt('offer.desc.' + item.id, item.description)}</p>
      </div>
    </article>
  `).join('');
}

// ===== Render Products =====
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all'
    ? products
    : products.filter((p) => p.category === filter);

  grid.innerHTML = filtered.map((product) => {
    const prodName = _tt('product.name.' + product.id, product.name);
    const badgeText = product.badge ? _tt('badge.' + product.badge.toLowerCase().replace(/[^a-z0-9]/g,''), product.badge) : '';

    return `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${prodName}" loading="lazy">
        ${badgeText ? `<span class="product-badge">${badgeText}</span>` : ''}
        <div class="product-actions">
          <button class="product-action product-wishlist" aria-label="Add to wishlist" data-id="${product.id}">♡</button>
          <button class="product-action product-share" aria-label="Share on WhatsApp" data-id="${product.id}">↗</button>
        </div>
      </div>
      <div class="product-info">
        <h3>${prodName}</h3>
      </div>
    </article>`;
  }).join('');

  attachProductListeners();
}

// ===== Product Listeners =====
function attachProductListeners() {
  document.querySelectorAll('.product-wishlist').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('active');
      btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
    });
  });

  document.querySelectorAll('.product-share').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      const product = products.find((p) => p.id === id);
      if (!product) return;
      const msg = `Check out this *${product.name}* at Angoshree!\nView more: https://angoshree.com`;
      window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
    });
  });
}

// ===== Product Filter =====
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const footerLinks = document.querySelectorAll('.footer-links a[data-filter]');

  function setFilter(filter) {
    currentFilter = filter;
    filterBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderProducts(filter);
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  footerLinks.forEach((el) => {
    el.addEventListener('click', (e) => {
      const filter = el.dataset.filter;
      if (filter) {
        e.preventDefault();
        setFilter(filter);
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ===== Hero Slider =====
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  let interval;

  function goToSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function nextSlide() {
    goToSlide((current + 1) % slides.length);
  }

  function startAutoplay() {
    interval = setInterval(nextSlide, 5000);
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      clearInterval(interval);
      goToSlide(parseInt(dot.dataset.slide, 10));
      startAutoplay();
    });
  });

  startAutoplay();
}

// ===== Mobile Navigation =====
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const header = document.getElementById('header');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    });
  });

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== WhatsApp Configuration =====

function openWhatsApp(message) {
  window.open(`https://wa.me/${storeWhatsapp}?text=${encodeURIComponent(message)}`, '_blank');
}

function initWhatsappFloat() {
  const btn = document.getElementById('whatsappFloat');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp('Hi Angoshree!');
    });
  }
}

// ===== Contact Form =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const phone = form.querySelector('#phone').value;
    const message = form.querySelector('#message').value;

    openWhatsApp(
      `Hi Angoshree, I have a query.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`
    );

    form.reset();
    success.hidden = false;
    setTimeout(() => { success.hidden = true; }, 5000);
  });
}

// ===== Newsletter =====
function initNewsletter() {
  const form = document.getElementById('newsletterForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;

    openWhatsApp(
      `Hi Angoshree, I'd like to subscribe to updates.\n\nEmail: ${email}`
    );

    form.reset();
    alert('Thank you for subscribing!');
  });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll(
    '.feature, .product-card, .testimonial, .about-content, .contact-info, .gallery-item'
  ).forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ===== Video Call Modal =====
function initVideoCallModal() {
  const triggerBtns = document.querySelectorAll('.video-trigger-btn');
  const overlay = document.getElementById('videoModalOverlay');
  const closeBtn = document.getElementById('videoModalClose');
  const form = document.getElementById('videoCallForm');
  const successMsg = document.getElementById('videoSuccessMsg');
  const successCloseBtn = document.getElementById('successCloseBtn');
  const successName = document.getElementById('successCustomerName');
  const successPhone = document.getElementById('successCustomerPhone');
  
  if (!overlay) return;

  const timeSelect = document.getElementById('videoTime');
  const dateInput = document.getElementById('videoDate');

  function populateTimeSlots() {
    timeSelect.innerHTML = '<option value="">Select a time slot</option>' +
      timeSlots.map((slot) => `<option value="${slot}">${slot}</option>`).join('');
  }

  function setDefaultDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.setAttribute('min', `${yyyy}-${mm}-${dd}`);
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  function openModal() {
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    populateTimeSlots();
    setDefaultDate();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = '';
    form.reset();
    form.hidden = false;
    successMsg.hidden = true;
  }

  triggerBtns.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });
  closeBtn.addEventListener('click', closeModal);
  successCloseBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) {
      closeModal();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('videoName').value;
    const email = document.getElementById('videoEmail').value;
    const phone = document.getElementById('videoPhone').value;
    const date = document.getElementById('videoDate').value;
    const time = document.getElementById('videoTime').value;

    if (!time) {
      timeSelect.focus();
      return;
    }

    const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-IN', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    });

    openWhatsApp(
      `Hi Angoshree, I'd like a saree video call.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Date: ${formattedDate}\nPreferred Time: ${time}`
    );

    successName.textContent = name;
    successPhone.textContent = phone;
    const desc = document.getElementById('successDesc');
    if (desc) {
      const template = t('videoModal.successDesc');
      desc.innerHTML = template.replace('{name}', `<strong>${name}</strong>`).replace('{phone}', `<strong>${phone}</strong>`);
    }
    successPhone.textContent = phone;
    
    form.hidden = true;
    successMsg.hidden = false;

    setTimeout(() => {
      if (!overlay.hidden && form.hidden) {
        closeModal();
      }
    }, 6000);
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', async () => {
  await loadSiteData();
  populateContactInfo();
  populateSocialLinks();
  populateLogo();
  renderProducts();
  renderOffers();
  initFilters();
  initGallery();
  renderVideoSlideshow();
  initVideoSlideshow();
  initHeroSlider();
  initNav();
  initContactForm();
  initNewsletter();
  initScrollAnimations();
  initVideoCallModal();
  initWhatsappFloat();
  document.addEventListener('languageChanged', () => {
    renderProducts(currentFilter || 'all');
    renderOffers();
  });
  initI18n();
});

let currentFilter = 'all';

function populateContactInfo() {
  const c = siteData.contact;
  if (!c) return;
  const phoneEl = document.getElementById('storePhone');
  if (phoneEl && c.phone) phoneEl.textContent = c.phone;
  const emailEl = document.getElementById('storeEmail');
  if (emailEl && c.email) { emailEl.textContent = c.email; emailEl.href = 'mailto:' + c.email; }
  const addrEl = document.getElementById('storeAddress');
  const mapEl = document.getElementById('storeMap');
  if (addrEl && c.address) addrEl.textContent = c.address;
  if (mapEl && c.mapsUrl) mapEl.href = c.mapsUrl;
  const waContactEl = document.getElementById('storeWhatsappContact');
  if (waContactEl && c.whatsapp) waContactEl.textContent = c.whatsapp;
  const hoursEl = document.querySelector('.contact-details li:last-child p');
  if (hoursEl && c.hours) hoursEl.textContent = c.hours;
  const ai = siteData.aboutImages;
  if (ai) {
    const mainEl = document.querySelector('.about-img-main');
    const accentEl = document.querySelector('.about-img-accent');
    if (mainEl && ai.main) mainEl.src = ai.main;
    if (accentEl && ai.accent) accentEl.src = ai.accent;
  }
  const ctaImg = document.getElementById('videoCtaImg');
  if (ctaImg && siteData.videoCtaImage) ctaImg.src = siteData.videoCtaImage;
}

function populateSocialLinks() {
  const s = siteData.social || {};
  const el = (id) => document.getElementById(id);
  const ig = el('socialInstagram');
  const fb = el('socialFacebook');
  const yt = el('socialYoutube');
  if (ig && s.instagram) ig.href = s.instagram;
  if (fb && s.facebook) fb.href = s.facebook;
  if (yt && s.youtube) yt.href = s.youtube;
}

function populateLogo() {
  const logo = siteData.logo || {};
  const isImage = logo.type === 'image';

  if (logo.fontUrl) {
    const ext = logo.fontUrl.split('.').pop().toLowerCase();
    const format = ({ ttf: 'truetype', otf: 'opentype', woff: 'woff', woff2: 'woff2' })[ext] || 'truetype';
    const styleId = 'angoshree-custom-font';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `@font-face{font-family:'AngoshreeCustom';src:url('${logo.fontUrl}') format('${format}');font-weight:normal;font-style:normal}`;
      document.head.appendChild(style);
    }
  }

  const fontName = logo.fontUrl ? `AngoshreeCustom, ${logo.fontFamily || 'var(--font-display)'}` : (logo.fontFamily || '');

  const applyTo = (prefix) => {
    const text = document.getElementById(prefix + 'Text');
    const icon = document.getElementById(prefix + 'Icon');
    const imgWrap = document.getElementById(prefix + 'ImageWrap');
    const img = document.getElementById(prefix + 'Img');

    if (isImage && logo.image && img && imgWrap) {
      img.src = logo.image;
      imgWrap.hidden = false;
      if (text) text.hidden = true;
      if (icon) icon.hidden = true;
    } else {
      if (imgWrap) imgWrap.hidden = true;
      if (text) text.hidden = false;
      if (icon) icon.hidden = false;
    }
    if (fontName && text) text.style.fontFamily = fontName;
    if (logo.fontSize && text) text.style.fontSize = logo.fontSize;
  };
  applyTo('logo');
  applyTo('footerLogo');
}

function initI18n() {
  const saved = localStorage.getItem('angoshree_lang');
  if (saved && TRANSLATIONS[saved]) setLanguage(saved);
  else setLanguage('en');
  const btn = document.getElementById('langSwitcherBtn');
  const dropdown = document.getElementById('langDropdown');
  if (!btn || !dropdown) return;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  dropdown.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      setLanguage(b.dataset.lang);
      dropdown.classList.remove('open');
    });
  });
  document.addEventListener('click', () => dropdown.classList.remove('open'));
}
