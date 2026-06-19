const TRANSLATIONS = {
  en: {
    brand: 'Angoshree',
    nav: { home: 'Home', gallery: 'Gallery', catalogue: 'Catalogue', offers: 'Offers', about: 'About', contact: 'Contact', bookVideoCall: 'Book Video Call' },
    hero: { tag: 'Siliguri, West Bengal', title: 'Timeless Elegance', titleEm: 'in Every Drape', desc: 'Discover silk, cotton, bridal, and festive sarees at our store. A wide range for every occasion and budget.', viewCatalogue: 'View Catalogue', bookVideoCall: '🎥 Book Video Call' },
    features: [
      { title: 'Wide Variety', desc: 'Silk, cotton, bridal, designer, and festive sarees for every taste and budget.' },
      { title: 'Quality Assured', desc: 'Every saree is carefully selected for fabric, weave, and finishing.' },
      { title: 'Visit Our Store', desc: 'Walk in, feel the fabric, and find your perfect saree with personal guidance.' },
      { title: 'Open Daily', desc: 'Open every day from 10 AM to 8 PM. We\'re here when you need us.' },
    ],
    gallery: { tag: 'Gallery', title: 'A Glimpse of Our World', addPhotos: 'Add photos to get started', videoTitle: 'Watch Our Collection', noVideos: 'No videos uploaded yet' },
    products: { tag: 'Catalogue', title: 'Featured Sarees', desc: 'Browse our collection below. Visit the store to see more — prices and availability may vary.', all: 'All', silk: 'Silk', cotton: 'Cotton', bridal: 'Bridal', designer: 'Designer' },
    badge: { bestseller: 'Bestseller', new: 'New', sale: 'Sale', premium: 'Premium', festiveoffer: 'Festive Offer', '20off': '20% OFF', trending: 'Trending' },
    product: { name: {
      1: 'Royal Kanjivaram Silk', 2: 'Banarasi Brocade', 3: 'Bridal Red Zari',
      4: 'Handloom Cotton', 5: 'Tussar Silk Natural', 6: 'Khadi Block Print',
      7: 'Maroon Bridal Silk', 8: 'Contemporary Geometric', 9: 'Floral Designer Print',
      10: 'Temple Border Silk', 11: 'Bengal Cotton Jamdani', 12: 'Gold Embroidered Bridal',
    } },
    offer: {
      title: { 1: 'Durga Puja Collection', 2: 'Flat 20% Off on Silks', 3: 'Trending: Pastel Cottons', 4: 'Bridal Preview' },
      desc: { 1: 'Exclusive pujo special sarees — tant, silk, and cotton. Limited stock!', 2: 'On all Kanjivaram, Banarasi & Tussar silk sarees. Offer valid till stock lasts.', 3: 'Light, airy pastel cotton sarees — perfect for everyday elegance this season.', 4: 'Book a personal video call preview of our bridal collection. Zero commitment.' },
    },
    videoCta: { tag: 'Shop Live from Home', title: 'Experience Our Siliguri Store\non a Personal Video Call', desc: 'Can\'t visit our store in person? Let our personal shoppers show you our exclusive silks, light cottons, and bridal collections live on a WhatsApp video call. Touch, feel, and see the drape quality from the comfort of your home.', button: 'Schedule Your Free Video Call Now' },
    about: { tag: 'Our Story', title: 'Angoshree — Your Trusted\nSaree Destination in Siliguri', p1: 'Welcome to Angoshree, our saree shop in the heart of Siliguri, West Bengal. For the past few years, we\'ve been helping customers find the perfect saree — whether it\'s for a wedding, festival, or everyday elegance.', p2: 'From rich Bengali tant and silk to bridal reds and contemporary designs, we curate sarees that celebrate tradition while fitting modern tastes. Walk into our store and experience the fabrics firsthand.', stat1Num: '50+', stat1: 'Saree Styles', stat2Num: '1000+', stat2: 'Happy Customers', stat3Num: 'All', stat3: 'Occasions Covered', badgeNum: '5+', badgeText: 'Years Serving\nSiliguri' },
    testimonials: { tag: 'Testimonials', title: 'What Our Customers Say', items: [
      { quote: '"Found the most beautiful tant saree for Durga Puja. The staff helped me pick the perfect colour — felt so welcome in the store!"', name: 'Customer Name' },
      { quote: '"Bought my wedding saree here. Great quality, fair prices, and they had so many options to choose from. Highly recommend visiting."', name: 'Customer Name' },
      { quote: '"Love their cotton collection for daily wear. Good variety from budget to premium — something for everyone in the family."', name: 'Customer Name' },
    ], location: 'Siliguri' },
    offers: { tag: 'Offers & Trends', title: 'Current Offers & Festive Favourites', desc: 'Check out the latest discounts, festive collections, and trending sarees picked just for you.' },
    contact: { tag: 'Get in Touch', title: 'Visit Our Store\nor Reach Out', desc: 'We\'d love to help you find your perfect saree. Walk into our store or send us a message — our team responds within 24 hours.', address: 'Address', phone: 'Phone', whatsapp: 'WhatsApp', email: 'Email', storeHours: 'Store Hours', hoursText: 'Open Daily: 10 AM – 8 PM', viewMap: 'View on Google Maps →', formTitle: 'Send a Message', formName: 'Your Name', formEmail: 'Email Address', formPhone: 'Phone Number', formMessage: 'Message', formSend: 'Send Message', formSuccess: 'Thank you! We\'ll get back to you soon.' },
    footer: { desc: 'Premium sarees in Siliguri, West Bengal. Angoshree — celebrating Bengali tradition, one drape at a time.', quickLinks: 'Quick Links', quickGallery: 'Gallery', quickCatalogue: 'Catalogue', quickAbout: 'About Us', quickContact: 'Contact', categories: 'Categories', catSilk: 'Silk Sarees', catCotton: 'Cotton Sarees', catBridal: 'Bridal', catDesigner: 'Designer', newsletter: 'Stay Updated', newsletterDesc: 'Subscribe for new arrivals and exclusive offers.', newsletterPlaceholder: 'Your email', newsletterBtn: 'Subscribe', copyright: '© 2026 Angoshree. All rights reserved.', location: 'Siliguri, West Bengal' },
    videoModal: { title: 'Request Saree Video Call', desc: 'See fabrics, patterns, and drape quality live from our Siliguri store on a WhatsApp Video Call.', name: 'Your Name', email: 'Email Address', phone: 'WhatsApp / Phone Number', date: 'Preferred Date', time: 'Preferred Time Slot', book: 'Book Free Consultation', successTitle: 'Booking Requested!', successDesc: 'Thank you, {name}. We will contact you at {phone} on WhatsApp shortly to schedule your live saree showcase.', successClose: 'Close' },
    placeholders: { name: 'Enter your name', email: 'you@example.com', phone: '+91 XXXXX XXXXX', message: 'Tell us what you\'re looking for...', videoName: 'Enter your full name' },
  },

  hi: {
    brand: 'अंगोश्री',
    nav: { home: 'होम', gallery: 'गैलरी', catalogue: 'कैटलॉग', offers: 'ऑफ़र', about: 'हमारे बारे में', contact: 'संपर्क', bookVideoCall: 'वीडियो कॉल बुक करें' },
    hero: { tag: 'सिलीगुड़ी, पश्चिम बंगाल', title: 'कालातीत सुंदरता', titleEm: 'हर आन में', desc: 'हमारे स्टोर पर रेशम, कॉटन, ब्राइडल और फेस्टिव साड़ियाँ खोजें। हर अवसर और बजट के लिए विस्तृत रेंज।', viewCatalogue: 'कैटलॉग देखें', bookVideoCall: '🎥 वीडियो कॉल बुक करें' },
    features: [
      { title: 'विस्तृत विविधता', desc: 'हर स्वाद और बजट के लिए रेशम, कॉटन, ब्राइडल, डिज़ाइनर और फेस्टिव साड़ियाँ।' },
      { title: 'गुणवत्ता आश्वस्त', desc: 'हर साड़ी को कपड़े, बुनाई और फिनिशिंग के लिए सावधानीपूर्वक चुना जाता है।' },
      { title: 'हमारे स्टोर पर आएँ', desc: 'आइए, कपड़े को छुएं और व्यक्तिगत मार्गदर्शन के साथ अपनी सही साड़ी खोजें।' },
      { title: 'रोज़ खुला', desc: 'सुबह 10 बजे से रात 8 बजे तक रोज़ खुला। जब आपको ज़रूरत हो, हम यहाँ हैं।' },
    ],
    gallery: { tag: 'गैलरी', title: 'हमारी दुनिया की एक झलक', addPhotos: 'शुरू करने के लिए फ़ोटो जोड़ें', videoTitle: 'हमारा संग्रह देखें', noVideos: 'अभी तक कोई वीडियो अपलोड नहीं हुआ' },
    products: { tag: 'कैटलॉग', title: 'फीचर्ड साड़ियाँ', desc: 'नीचे हमारा संग्रह ब्राउज़ करें। और देखने के लिए स्टोर पर आएँ — कीमतें और उपलब्धता भिन्न हो सकती है।', all: 'सभी', silk: 'रेशम', cotton: 'कॉटन', bridal: 'ब्राइडल', designer: 'डिज़ाइनर' },
    badge: { bestseller: 'बेस्टसेलर', new: 'नया', sale: 'सेल', premium: 'प्रीमियम', festiveoffer: 'त्योहारी ऑफ़र', '20off': '20% छूट', trending: 'ट्रेंडिंग' },
    product: { name: {
      1: 'रॉयल कांजीवरम सिल्क', 2: 'बनारसी ब्रोकेड', 3: 'ब्राइडल रेड ज़री',
      4: 'हैंडलूम कॉटन', 5: 'तुस्सर सिल्क नेचुरल', 6: 'खादी ब्लॉक प्रिंट',
      7: 'मैरून ब्राइडल सिल्क', 8: 'कंटेम्पररी ज्योमेट्रिक', 9: 'फ्लोरल डिज़ाइनर प्रिंट',
      10: 'टेंपल बॉर्डर सिल्क', 11: 'बंगाल कॉटन जामदानी', 12: 'गोल्ड एम्ब्रॉइडर्ड ब्राइडल',
    } },
    offer: {
      title: { 1: 'दुर्गा पूजा कलेक्शन', 2: 'सिल्क पर 20% फ्लैट छूट', 3: 'ट्रेंडिंग: पेस्टल कॉटन', 4: 'ब्राइडल प्रीव्यू' },
      desc: { 1: 'एक्सक्लूसिव पूजो स्पेशल साड़ियाँ — तांत, सिल्क और कॉटन। सीमित स्टॉक!', 2: 'सभी कांजीवरम, बनारसी और तुस्सर सिल्क साड़ियों पर। ऑफर स्टॉक खत्म होने तक वैध।', 3: 'हल्की, एयरी पेस्टल कॉटन साड़ियाँ — इस सीज़न रोज़ाना एलिगेंस के लिए परफेक्ट।', 4: 'हमारे ब्राइडल कलेक्शन का व्यक्तिगत वीडियो कॉल प्रीव्यू बुक करें। जीरो कमिटमेंट।' },
    },
    videoCta: { tag: 'घर से लाइव खरीदारी', title: 'हमारे सिलीगुड़ी स्टोर का अनुभव लें\nएक व्यक्तिगत वीडियो कॉल पर', desc: 'व्यक्तिगत रूप से नहीं आ सकते? हमारे परसनल शॉपर्स आपको हमारी एक्सक्लूसिव रेशम, कॉटन और ब्राइडल कलेक्शन व्हाट्सएप वीडियो कॉल पर लाइव दिखाएँगे।', button: 'अपनी मुफ्त वीडियो कॉल बुक करें' },
    about: { tag: 'हमारी कहानी', title: 'अंगोश्री — सिलीगुड़ी में आपका\nभरोसेमंद साड़ी गंतव्य', p1: 'अंगोश्री में आपका स्वागत है, सिलीगुड़ी के दिल में हमारी साड़ी की दुकान। पिछले कुछ वर्षों से हम ग्राहकों को उनकी सही साड़ी खोजने में मदद कर रहे हैं — चाहे वह शादी, त्योहार या रोज़मर्रा की सुंदरता के लिए हो।', p2: 'समृद्ध बंगाली तांत और रेशम से लेकर ब्राइडल लाल और समकालीन डिज़ाइन तक, हम ऐसी साड़ियाँ चुनते हैं जो परंपरा का जश्न मनाती हैं और आधुनिक स्वाद के अनुरूप हों।', stat1Num: '50+', stat1: 'साड़ी स्टाइल्स', stat2Num: '1000+', stat2: 'खुश ग्राहक', stat3Num: 'सभी', stat3: 'कवर किए गए अवसर', badgeNum: '5+', badgeText: 'सेवा के वर्ष\nसिलीगुड़ी' },
    testimonials: { tag: 'प्रशंसापत्र', title: 'हमारे ग्राहक क्या कहते हैं', items: [
      { quote: '"दुर्गा पूजा के लिए सबसे खूबसूरत तांत साड़ी मिली। स्टाफ ने सही रंग चुनने में मदद की — स्टोर में बहुत स्वागत महसूस हुआ!"', name: 'ग्राहक का नाम' },
      { quote: '"अपनी शादी की साड़ी यहाँ से खरीदी। बढ़िया क्वालिटी, उचित मूल्य, और चुनने के लिए बहुत सारे विकल्प थे। आने की ज़ोरदार सिफारिश करती हूँ।"', name: 'ग्राहक का नाम' },
      { quote: '"रोज़ पहनने के लिए उनका कॉटन कलेक्शन बहुत पसंद है। बजट से लेकर प्रीमियम तक अच्छी विविधता — परिवार में सभी के लिए कुछ न कुछ।"', name: 'ग्राहक का नाम' },
    ], location: 'सिलीगुड़ी' },
    offers: { tag: 'ऑफ़र और ट्रेंड्स', title: 'मौजूदा ऑफ़र और त्योहारी पसंदीदा', desc: 'नवीनतम डिस्काउंट, त्योहारी कलेक्शन और ट्रेंडिंग साड़ियाँ देखें, जो सिर्फ आपके लिए चुनी गई हैं।' },
    contact: { tag: 'संपर्क करें', title: 'हमारे स्टोर पर आएँ\nया संपर्क करें', desc: 'हमें आपकी सही साड़ी खोजने में मदद करने में खुशी होगी। हमारे स्टोर पर आएँ या हमें संदेश भेजें — हमारी टीम 24 घंटे के भीतर जवाब देती है।', address: 'पता', phone: 'फ़ोन', whatsapp: 'व्हाट्सएप', email: 'ईमेल', storeHours: 'स्टोर के घंटे', hoursText: 'रोज़ सुबह 10 – रात 8 बजे तक', viewMap: 'Google Maps पर देखें →', formTitle: 'संदेश भेजें', formName: 'आपका नाम', formEmail: 'ईमेल पता', formPhone: 'फ़ोन नंबर', formMessage: 'संदेश', formSend: 'संदेश भेजें', formSuccess: 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।' },
    footer: { desc: 'सिलीगुड़ी, पश्चिम बंगाल में प्रीमियम साड़ियाँ। अंगोश्री — हर आन में बंगाली परंपरा का जश्न।', quickLinks: 'त्वरित लिंक', quickGallery: 'गैलरी', quickCatalogue: 'कैटलॉग', quickAbout: 'हमारे बारे में', quickContact: 'संपर्क', categories: 'श्रेणियाँ', catSilk: 'रेशम साड़ियाँ', catCotton: 'कॉटन साड़ियाँ', catBridal: 'ब्राइडल', catDesigner: 'डिज़ाइनर', newsletter: 'अपडेट रहें', newsletterDesc: 'नई आवक और एक्सक्लूसिव ऑफ़र के लिए सब्सक्राइब करें।', newsletterPlaceholder: 'आपका ईमेल', newsletterBtn: 'सब्सक्राइब', copyright: '© 2026 अंगोश्री। सर्वाधिकार सुरक्षित।', location: 'सिलीगुड़ी, पश्चिम बंगाल' },
    videoModal: { title: 'साड़ी वीडियो कॉल का अनुरोध', desc: 'हमारे सिलीगुड़ी स्टोर से व्हाट्सएप वीडियो कॉल पर कपड़े, पैटर्न और ड्रेप क्वालिटी लाइव देखें।', name: 'आपका नाम', email: 'ईमेल पता', phone: 'व्हाट्सएप / फ़ोन नंबर', date: 'पसंदीदा तारीख', time: 'पसंदीदा समय स्लॉट', book: 'मुफ्त परामर्श बुक करें', successTitle: 'बुकिंग अनुरोधित!', successDesc: 'धन्यवाद, {name}। हम आपसे {phone} पर व्हाट्सएप पर जल्द ही संपर्क करेंगे।', successClose: 'बंद करें' },
    placeholders: { name: 'अपना नाम दर्ज करें', email: 'आप@example.com', phone: '+91 XXXXX XXXXX', message: 'हमें बताएं कि आप क्या ढूंढ रहे हैं...', videoName: 'अपना पूरा नाम दर्ज करें' },
  },

  bn: {
    brand: 'অঙ্গোশ্রী',
    nav: { home: 'হোম', gallery: 'গ্যালারি', catalogue: 'ক্যাটালগ', offers: 'অফার', about: 'আমাদের সম্পর্কে', contact: 'যোগাযোগ', bookVideoCall: 'ভিডিও কল বুক করুন' },
    hero: { tag: 'শিলিগুড়ি, পশ্চিমবঙ্গ', title: 'চিরন্তন সৌন্দর্য', titleEm: 'প্রতি আঁচলে', desc: 'আমাদের দোকানে সিল্ক, সুতি, ব্রাইডাল এবং উৎসবের শাড়ি আবিষ্কার করুন। প্রতি অনুষ্ঠান এবং বাজেটের জন্য বিস্তৃত পরিসর।', viewCatalogue: 'ক্যাটালগ দেখুন', bookVideoCall: '🎥 ভিডিও কল বুক করুন' },
    features: [
      { title: 'বিস্তৃত বৈচিত্র্য', desc: 'প্রতি রুচি এবং বাজেটের জন্য সিল্ক, সুতি, ব্রাইডাল, ডিজাইনার এবং উৎসবের শাড়ি।' },
      { title: 'গুণমান নিশ্চিত', desc: 'প্রতিটি শাড়ি কাপড়, বুনন এবং ফিনিশিংয়ের জন্য সাবধানে নির্বাচিত হয়।' },
      { title: 'আমাদের দোকানে আসুন', desc: 'ভিতরে আসুন, কাপড় ছুঁয়ে দেখুন এবং ব্যক্তিগত নির্দেশনায় আপনার নিখুঁত শাড়ি খুঁজুন।' },
      { title: 'প্রতিদিন খোলা', desc: 'সকাল ১০টা থেকে রাত ৮টা পর্যন্ত প্রতিদিন খোলা। যখন আপনার প্রয়োজন, আমরা এখানে।' },
    ],
    gallery: { tag: 'গ্যালারি', title: 'আমাদের বিশ্বের এক ঝলক', addPhotos: 'শুরু করতে ফটো যোগ করুন', videoTitle: 'আমাদের সংগ্রহ দেখুন', noVideos: 'এখনও কোনো ভিডিও আপলোড করা হয়নি' },
    products: { tag: 'ক্যাটালগ', title: 'বৈশিষ্ট্যযুক্ত শাড়ি', desc: 'নীচে আমাদের সংগ্রহ ব্রাউজ করুন। আরও দেখতে দোকানে আসুন — দাম এবং প্রাপ্যতা পরিবর্তিত হতে পারে।', all: 'সব', silk: 'সিল্ক', cotton: 'সুতি', bridal: 'ব্রাইডাল', designer: 'ডিজাইনার' },
    badge: { bestseller: 'বেস্টসেলার', new: 'নতুন', sale: 'সেল', premium: 'প্রিমিয়াম', festiveoffer: 'উৎসবের অফার', '20off': '২০% ছাড়', trending: 'ট্রেন্ডিং' },
    product: { name: {
      1: 'রয়্যাল কাঞ্জিভরম সিল্ক', 2: 'বনারসি ব্রোকেড', 3: 'ব্রাইডাল রেড জরি',
      4: 'হ্যান্ডলুম সুতি', 5: 'তুসার সিল্ক ন্যাচারাল', 6: 'খাদি ব্লক প্রিন্ট',
      7: 'মেরুন ব্রাইডাল সিল্ক', 8: 'কনটেম্পরারি জ্যামিতিক', 9: 'ফ্লোরাল ডিজাইনার প্রিন্ট',
      10: 'টেম্পল বর্ডার সিল্ক', 11: 'বেঙ্গল কটন জামদানি', 12: 'গোল্ড এমব্রয়ডার্ড ব্রাইডাল',
    } },
    offer: {
      title: { 1: 'দুর্গা পূজা কালেকশন', 2: 'সিল্কে ২০% ফ্ল্যাট ছাড়', 3: 'ট্রেন্ডিং: পেস্টেল সুতি', 4: 'ব্রাইডাল প্রিভিউ' },
      desc: { 1: 'এক্সক্লুসিভ পূজো স্পেশাল শাড়ি — তাঁত, সিল্ক এবং সুতি। সীমিত স্টক!', 2: 'সকল কাঞ্জিভরম, বনারসি ও তুসার সিল্ক শাড়িতে। অফার স্টক শেষ পর্যন্ত বৈধ।', 3: 'হালকা, এয়ারি পেস্টেল সুতি শাড়ি — এই মরসুমে দৈনন্দিন কমনীয়তার জন্য উপযুক্ত।', 4: 'আমাদের ব্রাইডাল কালেকশনের একটি ব্যক্তিগত ভিডিও কল প্রিভিউ বুক করুন। কোনো প্রতিশ্রুতি নয়।' },
    },
    videoCta: { tag: 'বাড়ি থেকে লাইভ কেনাকাটা', title: 'আমাদের শিলিগুড়ি স্টোরের অভিজ্ঞতা নিন\nএকটি ব্যক্তিগত ভিডিও কলের মাধ্যমে', desc: 'ব্যক্তিগতভাবে আসতে পারছেন না? আমাদের পার্সোনাল শপাররা আপনাকে আমাদের এক্সক্লুসিভ সিল্ক, সুতি এবং ব্রাইডাল কালেকশন হোয়াটসঅ্যাপ ভিডিও কলের মাধ্যমে লাইভ দেখাবেন।', button: 'আপনার বিনামূল্যের ভিডিও কল বুক করুন' },
    about: { tag: 'আমাদের গল্প', title: 'অঙ্গোশ্রী — আপনার বিশ্বস্ত\nশাড়ি গন্তব্য শিলিগুড়িতে', p1: 'অঙ্গোশ্রীতে স্বাগতম, শিলিগুড়ির হৃদয়ে আমাদের শাড়ির দোকান। গত কয়েক বছর ধরে আমরা গ্রাহকদের তাদের নিখুঁত শাড়ি খুঁজতে সাহায্য করছি — তা বিয়ে, উৎসব বা দৈনন্দিন সৌন্দর্যের জন্যই হোক।', p2: 'সমৃদ্ধ বাঙালি তাঁত ও সিল্ক থেকে ব্রাইডাল লাল এবং সমসাময়িক ডিজাইন পর্যন্ত, আমরা এমন শাড়ি নির্বাচন করি যা ঐতিহ্য উদযাপন করে এবং আধুনিক রুচির সাথে খাপ খায়।', stat1Num: '৫০+', stat1: 'শাড়ি স্টাইল', stat2Num: '১০০০+', stat2: 'সন্তুষ্ট গ্রাহক', stat3Num: 'সব', stat3: 'অনুষ্ঠান কভার করা', badgeNum: '৫+', badgeText: 'বছর সেবা\nশিলিগুড়ি' },
    testimonials: { tag: 'প্রশংসাপত্র', title: 'আমাদের গ্রাহকরা কী বলেন', items: [
      { quote: '"দুর্গা পূজার জন্য সবচেয়ে সুন্দর তাঁত শাড়ি পেয়েছি। স্টাফরা সঠিক রং বেছে নিতে সাহায্য করেছে — দোকানে খুব স্বাগত জানানো হয়েছে!"', name: 'গ্রাহকের নাম' },
      { quote: '"আমার বিয়ের শাড়ি এখান থেকে কিনেছি। দুর্দান্ত মান, ন্যায্য দাম, এবং বেছে নেওয়ার মতো অনেক অপশন ছিল। আসার জন্য জোরালো সুপারিশ।"', name: 'গ্রাহকের নাম' },
      { quote: '"দৈনন্দিন ব্যবহারের জন্য তাদের সুতি কালেকশন খুব পছন্দ। বাজেট থেকে প্রিমিয়াম পর্যন্ত ভাল বৈচিত্র্য — পরিবারের সবার জন্য কিছু না কিছু।"', name: 'গ্রাহকের নাম' },
    ], location: 'শিলিগুড়ি' },
    offers: { tag: 'অফার এবং ট্রেন্ড', title: 'বর্তমান অফার ও উৎসবের প্রিয়', desc: 'সাম্প্রতিক ডিসকাউন্ট, উৎসবের কালেকশন এবং ট্রেন্ডিং শাড়িগুলি দেখুন, যা শুধু আপনার জন্য বাছাই করা হয়েছে।' },
    contact: { tag: 'যোগাযোগ করুন', title: 'আমাদের দোকানে আসুন\nঅথবা যোগাযোগ করুন', desc: 'আমরা আপনার নিখুঁত শাড়ি খুঁজতে সাহায্য করতে পেরে খুশি। আমাদের দোকানে আসুন বা একটি বার্তা পাঠান — আমাদের টিম ২৪ ঘন্টার মধ্যে উত্তর দেয়।', address: 'ঠিকানা', phone: 'ফোন', whatsapp: 'হোয়াটসঅ্যাপ', email: 'ইমেল', storeHours: 'দোকানের সময়', hoursText: 'প্রতিদিন সকাল ১০ – রাত ৮টা', viewMap: 'Google Maps এ দেখুন →', formTitle: 'বার্তা পাঠান', formName: 'আপনার নাম', formEmail: 'ইমেল ঠিকানা', formPhone: 'ফোন নম্বর', formMessage: 'বার্তা', formSend: 'বার্তা পাঠান', formSuccess: 'ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।' },
    footer: { desc: 'শিলিগুড়ি, পশ্চিমবঙ্গে প্রিমিয়াম শাড়ি। অঙ্গোশ্রী — প্রতি আঁচলে বাঙালি ঐতিহ্যের উদযাপন।', quickLinks: 'দ্রুত লিংক', quickGallery: 'গ্যালারি', quickCatalogue: 'ক্যাটালগ', quickAbout: 'আমাদের সম্পর্কে', quickContact: 'যোগাযোগ', categories: 'বিভাগ', catSilk: 'সিল্ক শাড়ি', catCotton: 'সুতি শাড়ি', catBridal: 'ব্রাইডাল', catDesigner: 'ডিজাইনার', newsletter: 'আপডেট থাকুন', newsletterDesc: 'নতুন আগমন এবং এক্সক্লুসিভ অফারের জন্য সাবস্ক্রাইব করুন।', newsletterPlaceholder: 'আপনার ইমেল', newsletterBtn: 'সাবস্ক্রাইব', copyright: '© ২০২৬ অঙ্গোশ্রী। সর্বস্বত্ব সংরক্ষিত।', location: 'শিলিগুড়ি, পশ্চিমবঙ্গ' },
    videoModal: { title: 'শাড়ি ভিডিও কলের অনুরোধ', desc: 'আমাদের শিলিগুড়ি স্টোর থেকে হোয়াটসঅ্যাপ ভিডিও কলের মাধ্যমে কাপড়, প্যাটার্ন এবং ড্রেপ কোয়ালিটি লাইভ দেখুন।', name: 'আপনার নাম', email: 'ইমেল ঠিকানা', phone: 'হোয়াটসঅ্যাপ / ফোন নম্বর', date: 'পছন্দের তারিখ', time: 'পছন্দের সময় স্লট', book: 'বিনামূল্যে পরামর্শ বুক করুন', successTitle: 'বুকিং অনুরোধ করা হয়েছে!', successDesc: 'ধন্যবাদ, {name}। আমরা আপনার সাথে {phone} এ হোয়াটসঅ্যাপে শীঘ্রই যোগাযোগ করব।', successClose: 'বন্ধ করুন' },
    placeholders: { name: 'আপনার নাম লিখুন', email: 'আপনি@example.com', phone: '+91 XXXXX XXXXX', message: 'আপনি কী খুঁজছেন তা আমাদের জানান...', videoName: 'আপনার পুরো নাম লিখুন' },
  },

  kn: {
    brand: 'ಅಂಗೋಶ್ರೀ',
    nav: { home: 'ಮುಖಪುಟ', gallery: 'ಗ್ಯಾಲರಿ', catalogue: 'ಕ್ಯಾಟಲಾಗ್', offers: 'ಆಫರ್ಗಳು', about: 'ನಮ್ಮ ಬಗ್ಗೆ', contact: 'ಸಂಪರ್ಕ', bookVideoCall: 'ವೀಡಿಯೊ ಕಾಲ್ ಬುಕ್ ಮಾಡಿ' },
    hero: { tag: 'ಸಿಲಿಗುರಿ, ಪಶ್ಚಿಮ ಬಂಗಾಳ', title: 'ಕಾಲಾತೀತ ಸೊಬಗು', titleEm: 'ಪ್ರತಿ ಮಡಿಕೆಯಲ್ಲಿ', desc: 'ನಮ್ಮ ಅಂಗಡಿಯಲ್ಲಿ ರೇಷ್ಮೆ, ಹತ್ತಿ, ವಧುವಿನ ಮತ್ತು ಹಬ್ಬದ ಸೀರೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. ಪ್ರತಿ ಸಂದರ್ಭ ಮತ್ತು ಬಜೆಟ್ಗಾಗಿ ವಿಸ್ತೃತ ಶ್ರೇಣಿ.', viewCatalogue: 'ಕ್ಯಾಟಲಾಗ್ ವೀಕ್ಷಿಸಿ', bookVideoCall: '🎥 ವೀಡಿಯೊ ಕಾಲ್ ಬುಕ್ ಮಾಡಿ' },
    features: [
      { title: 'ವಿಸ್ತೃತ ವೈವಿಧ್ಯ', desc: 'ಪ್ರತಿ ರುಚಿ ಮತ್ತು ಬಜೆಟ್ಗಾಗಿ ರೇಷ್ಮೆ, ಹತ್ತಿ, ವಧುವಿನ, ಡಿಸೈನರ್ ಮತ್ತು ಹಬ್ಬದ ಸೀರೆಗಳು.' },
      { title: 'ಗುಣಮಟ್ಟ ಖಾತರಿ', desc: 'ಪ್ರತಿ ಸೀರೆಯನ್ನು ಬಟ್ಟೆ, ನೇಯ್ಗೆ ಮತ್ತು ಮುಕ್ತಾಯಕ್ಕಾಗಿ ಎಚ್ಚರಿಕೆಯಿಂದ ಆಯ್ಕೆ ಮಾಡಲಾಗುತ್ತದೆ.' },
      { title: 'ನಮ್ಮ ಅಂಗಡಿಗೆ ಭೇಟಿ ನೀಡಿ', desc: 'ಒಳಗೆ ಬನ್ನಿ, ಬಟ್ಟೆಯನ್ನು ಸ್ಪರ್ಶಿಸಿ ಮತ್ತು ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಸೀರೆಯನ್ನು ಕಂಡುಕೊಳ್ಳಿ.' },
      { title: 'ಪ್ರತಿದಿನ ತೆರೆದಿರುತ್ತದೆ', desc: 'ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ 10 ರಿಂದ ರಾತ್ರಿ 8 ರವರೆಗೆ ತೆರೆದಿರುತ್ತದೆ. ನಿಮಗೆ ಅಗತ್ಯವಿರುವಾಗ ನಾವು ಇಲ್ಲಿದ್ದೇವೆ.' },
    ],
    gallery: { tag: 'ಗ್ಯಾಲರಿ', title: 'ನಮ್ಮ ಜಗತ್ತಿನ ಒಂದು ನೋಟ', addPhotos: 'ಪ್ರಾರಂಭಿಸಲು ಫೋಟೋಗಳನ್ನು ಸೇರಿಸಿ', videoTitle: 'ನಮ್ಮ ಸಂಗ್ರಹ ವೀಕ್ಷಿಸಿ', noVideos: 'ಇನ್ನೂ ಯಾವುದೇ ವೀಡಿಯೊಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿಲ್ಲ' },
    products: { tag: 'ಕ್ಯಾಟಲಾಗ್', title: 'ವೈಶಿಷ್ಟ್ಯಪೂರ್ಣ ಸೀರೆಗಳು', desc: 'ನಮ್ಮ ಸಂಗ್ರಹವನ್ನು ಕೆಳಗೆ ಬ್ರೌಸ್ ಮಾಡಿ. ಹೆಚ್ಚಿನದನ್ನು ನೋಡಲು ಅಂಗಡಿಗೆ ಭೇಟಿ ನೀಡಿ — ಬೆಲೆಗಳು ಮತ್ತು ಲಭ್ಯತೆ ಬದಲಾಗಬಹುದು.', all: 'ಎಲ್ಲಾ', silk: 'ರೇಷ್ಮೆ', cotton: 'ಹತ್ತಿ', bridal: 'ವಧುವಿನ', designer: 'ಡಿಸೈನರ್' },
    badge: { bestseller: 'ಬೆಸ್ಟ್‌ಸೆಲ್ಲರ್', new: 'ಹೊಸ', sale: 'ಸೇಲ್', premium: 'ಪ್ರೀಮಿಯಂ', festiveoffer: 'ಹಬ್ಬದ ಆಫರ್', '20off': '20% ರಿಯಾಯಿತಿ', trending: 'ಟ್ರೆಂಡಿಂಗ್' },
    product: { name: {
      1: 'ರಾಯಲ್ ಕಾಂಜೀವರಂ ರೇಷ್ಮೆ', 2: 'ಬನಾರಸಿ ಬ್ರೊಕೇಡ್', 3: 'ವಧುವಿನ ಕೆಂಪು ಜರಿ',
      4: 'ಹ್ಯಾಂಡ್‌ಲೂಮ್ ಹತ್ತಿ', 5: 'ತುಸ್ಸರ್ ರೇಷ್ಮೆ ನ್ಯಾಚುರಲ್', 6: 'ಖಾದಿ ಬ್ಲಾಕ್ ಪ್ರಿಂಟ್',
      7: 'ಮೆರೂನ್ ವಧುವಿನ ರೇಷ್ಮೆ', 8: 'ಸಮಕಾಲೀನ ಜ್ಯಾಮಿತಿ', 9: 'ಫ್ಲೋರಲ್ ಡಿಸೈನರ್ ಪ್ರಿಂಟ್',
      10: 'ದೇವಾಲಯದ ಅಂಚಿನ ರೇಷ್ಮೆ', 11: 'ಬಂಗಾಳ ಹತ್ತಿ ಜಮ್ದಾನಿ', 12: 'ಗೋಲ್ಡ್ ಎಂಬ್ರಾಯ್ಡರ್ಡ್ ವಧುವಿನ',
    } },
    offer: {
      title: { 1: 'ದುರ್ಗಾ ಪೂಜಾ ಕಲೆಕ್ಷನ್', 2: 'ರೇಷ್ಮೆಯ ಮೇಲೆ 20% ಫ್ಲಾಟ್ ರಿಯಾಯಿತಿ', 3: 'ಟ್ರೆಂಡಿಂಗ್: ಪೇಸ್ಟಲ್ ಹತ್ತಿ', 4: 'ವಧುವಿನ ಪೂರ್ವವೀಕ್ಷಣೆ' },
      desc: { 1: 'ವಿಶೇಷ ಪೂಜಾ ಸೀರೆಗಳು — ತಾಂತ್, ರೇಷ್ಮೆ ಮತ್ತು ಹತ್ತಿ. ಸೀಮಿತ ಸ್ಟಾಕ್!', 2: 'ಎಲ್ಲಾ ಕಾಂಜೀವರಂ, ಬನಾರಸಿ ಮತ್ತು ತುಸ್ಸರ್ ರೇಷ್ಮೆ ಸೀರೆಗಳ ಮೇಲೆ. ಸ್ಟಾಕ್ ಮುಗಿಯುವವರೆಗೆ ಆಫರ್ ಮಾನ್ಯ.', 3: 'ಹಗುರವಾದ, ಗಾಳಿಯಾಡುವ ಪೇಸ್ಟಲ್ ಹತ್ತಿ ಸೀರೆಗಳು — ಈ ಋತುವಿನಲ್ಲಿ ದೈನಂದಿನ ಸೊಬಗಿಗೆ ಪರಿಪೂರ್ಣ.', 4: 'ನಮ್ಮ ವಧುವಿನ ಕಲೆಕ್ಷನ್ನ ವೈಯಕ್ತಿಕ ವೀಡಿಯೊ ಕಾಲ್ ಪೂರ್ವವೀಕ್ಷಣೆಯನ್ನು ಬುಕ್ ಮಾಡಿ. ಯಾವುದೇ ಬದ್ಧತೆ ಇಲ್ಲ.' },
    },
    videoCta: { tag: 'ಮನೆಯಿಂದ ಲೈವ್ ಶಾಪಿಂಗ್', title: 'ನಮ್ಮ ಸಿಲಿಗುರಿ ಅಂಗಡಿಯ ಅನುಭವ ಪಡೆಯಿರಿ\nವೈಯಕ್ತಿಕ ವೀಡಿಯೊ ಕಾಲ್‌ನಲ್ಲಿ', desc: 'ವೈಯಕ್ತಿಕವಾಗಿ ಭೇಟಿ ನೀಡಲು ಸಾಧ್ಯವಿಲ್ಲವೇ? ನಮ್ಮ ವೈಯಕ್ತಿಕ ಶಾಪರ್ಸ್ ನಿಮಗೆ ನಮ್ಮ ವಿಶೇಷ ರೇಷ್ಮೆ, ಹತ್ತಿ ಮತ್ತು ವಧುವಿನ ಸಂಗ್ರಹವನ್ನು ವಾಟ್ಸಾಪ್ ವೀಡಿಯೊ ಕಾಲ್‌ನಲ್ಲಿ ಲೈವ್ ತೋರಿಸುತ್ತಾರೆ.', button: 'ನಿಮ್ಮ ಉಚಿತ ವೀಡಿಯೊ ಕಾಲ್ ಬುಕ್ ಮಾಡಿ' },
    about: { tag: 'ನಮ್ಮ ಕಥೆ', title: 'ಅಂಗೋಶ್ರೀ — ಸಿಲಿಗುರಿಯಲ್ಲಿ ನಿಮ್ಮ\nನಂಬಲರ್ಹ ಸೀರೆ ತಾಣ', p1: 'ಅಂಗೋಶ್ರೀಗೆ ಸುಸ್ವಾಗತ, ಸಿಲಿಗುರಿಯ ಹೃದಯಭಾಗದಲ್ಲಿ ನಮ್ಮ ಸೀರೆ ಅಂಗಡಿ. ಕಳೆದ ಕೆಲವು ವರ್ಷಗಳಿಂದ ನಾವು ಗ್ರಾಹಕರಿಗೆ ಪರಿಪೂರ್ಣ ಸೀರೆಯನ್ನು ಕಂಡುಹಿಡಿಯಲು ಸಹಾಯ ಮಾಡುತ್ತಿದ್ದೇವೆ — ಮದುವೆ, ಹಬ್ಬ ಅಥವಾ ದೈನಂದಿನ ಸೊಬಗಿಗಾಗಿ.', p2: 'ಶ್ರೀಮಂತ ಬಂಗಾಳಿ ತಾಂತ್ ಮತ್ತು ರೇಷ್ಮೆಯಿಂದ ವಧುವಿನ ಕೆಂಪು ಮತ್ತು ಸಮಕಾಲೀನ ವಿನ್ಯಾಸಗಳವರೆಗೆ, ನಾವು ಸಂಪ್ರದಾಯವನ್ನು ಆಚರಿಸುವ ಮತ್ತು ಆಧುನಿಕ ಅಭಿರುಚಿಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಸೀರೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತೇವೆ.', stat1Num: '50+', stat1: 'ಸೀರೆ ಶೈಲಿಗಳು', stat2Num: '1000+', stat2: 'ಸಂತೋಷದ ಗ್ರಾಹಕರು', stat3Num: 'ಎಲ್ಲಾ', stat3: 'ಒಳಗೊಂಡ ಸಂದರ್ಭಗಳು', badgeNum: '5+', badgeText: 'ಸೇವೆಯ ವರ್ಷಗಳು\nಸಿಲಿಗುರಿ' },
    testimonials: { tag: 'ಪ್ರಶಂಸಾಪತ್ರಗಳು', title: 'ನಮ್ಮ ಗ್ರಾಹಕರು ಏನು ಹೇಳುತ್ತಾರೆ', items: [
      { quote: '"ದುರ್ಗಾ ಪೂಜೆಗಾಗಿ ಅತ್ಯಂತ ಸುಂದರವಾದ ತಾಂತ್ ಸೀರೆ ಸಿಕ್ಕಿತು. ಸಿಬ್ಬಂದಿ ಸರಿಯಾದ ಬಣ್ಣ ಆಯ್ಕೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡಿದರು — ಅಂಗಡಿಯಲ್ಲಿ ತುಂಬಾ ಸ್ವಾಗತ ಅನುಭವ!"', name: 'ಗ್ರಾಹಕರ ಹೆಸರು' },
      { quote: '"ನನ್ನ ಮದುವೆಯ ಸೀರೆಯನ್ನು ಇಲ್ಲಿ ಖರೀದಿಸಿದೆ. ಅತ್ಯುತ್ತಮ ಗುಣಮಟ್ಟ, ನ್ಯಾಯಯುತ ಬೆಲೆ, ಮತ್ತು ಆಯ್ಕೆ ಮಾಡಲು ಹಲವು ಆಯ್ಕೆಗಳಿದ್ದವು. ಭೇಟಿ ನೀಡಲು ಬಲವಾಗಿ ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ."', name: 'ಗ್ರಾಹಕರ ಹೆಸರು' },
      { quote: '"ದೈನಂದಿನ ಉಡುಗೆಗಾಗಿ ಅವರ ಹತ್ತಿ ಸಂಗ್ರಹ ತುಂಬಾ ಇಷ್ಟ. ಬಜೆಟ್ನಿಂದ ಪ್ರೀಮಿಯಂವರೆಗೆ ಉತ್ತಮ ವೈವಿಧ್ಯ — ಕುಟುಂಬದ ಎಲ್ಲರಿಗೂ ಏನಾದರೂ ಇದೆ."', name: 'ಗ್ರಾಹಕರ ಹೆಸರು' },
    ], location: 'ಸಿಲಿಗುರಿ' },
    offers: { tag: 'ಆಫರ್ಗಳು ಮತ್ತು ಟ್ರೆಂಡ್ಗಳು', title: 'ಪ್ರಸ್ತುತ ಆಫರ್ಗಳು ಮತ್ತು ಹಬ್ಬದ ಮೆಚ್ಚಿನವುಗಳು', desc: 'ಇತ್ತೀಚಿನ ರಿಯಾಯಿತಿಗಳು, ಹಬ್ಬದ ಸಂಗ್ರಹಗಳು ಮತ್ತು ಟ್ರೆಂಡಿಂಗ್ ಸೀರೆಗಳನ್ನು ನೋಡಿ, ನಿಮಗಾಗಿ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ.' },
    contact: { tag: 'ಸಂಪರ್ಕದಲ್ಲಿರಿ', title: 'ನಮ್ಮ ಅಂಗಡಿಗೆ ಭೇಟಿ ನೀಡಿ\nಅಥವಾ ಸಂಪರ್ಕಿಸಿ', desc: 'ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಸೀರೆಯನ್ನು ಕಂಡುಹಿಡಿಯಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ನಾವು ಸಂತೋಷಪಡುತ್ತೇವೆ. ನಮ್ಮ ಅಂಗಡಿಗೆ ಬನ್ನಿ ಅಥವಾ ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ — ನಮ್ಮ ತಂಡ 24 ಗಂಟೆಗಳ ಒಳಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ.', address: 'ವಿಳಾಸ', phone: 'ಫೋನ್', whatsapp: 'ವಾಟ್ಸಾಪ್', email: 'ಇಮೇಲ್', storeHours: 'ಅಂಗಡಿ ಸಮಯ', hoursText: 'ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ 10 – ರಾತ್ರಿ 8', viewMap: 'Google Maps ನಲ್ಲಿ ನೋಡಿ →', formTitle: 'ಸಂದೇಶ ಕಳುಹಿಸಿ', formName: 'ನಿಮ್ಮ ಹೆಸರು', formEmail: 'ಇಮೇಲ್ ವಿಳಾಸ', formPhone: 'ಫೋನ್ ಸಂಖ್ಯೆ', formMessage: 'ಸಂದೇಶ', formSend: 'ಸಂದೇಶ ಕಳುಹಿಸಿ', formSuccess: 'ಧನ್ಯವಾದಗಳು! ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.' },
    footer: { desc: 'ಸಿಲಿಗುರಿ, ಪಶ್ಚಿಮ ಬಂಗಾಳದಲ್ಲಿ ಪ್ರೀಮಿಯಂ ಸೀರೆಗಳು. ಅಂಗೋಶ್ರೀ — ಪ್ರತಿ ಮಡಿಕೆಯಲ್ಲಿ ಬಂಗಾಳಿ ಸಂಪ್ರದಾಯವನ್ನು ಆಚರಿಸುವುದು.', quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು', quickGallery: 'ಗ್ಯಾಲರಿ', quickCatalogue: 'ಕ್ಯಾಟಲಾಗ್', quickAbout: 'ನಮ್ಮ ಬಗ್ಗೆ', quickContact: 'ಸಂಪರ್ಕ', categories: 'ವರ್ಗಗಳು', catSilk: 'ರೇಷ್ಮೆ ಸೀರೆಗಳು', catCotton: 'ಹತ್ತಿ ಸೀರೆಗಳು', catBridal: 'ವಧುವಿನ', catDesigner: 'ಡಿಸೈನರ್', newsletter: 'ಅಪ್‌ಡೇಟ್ ಆಗಿರಿ', newsletterDesc: 'ಹೊಸ ಆಗಮನಗಳು ಮತ್ತು ವಿಶೇಷ ಆಫರ್ಗಳಿಗಾಗಿ ಚಂದಾದಾರರಾಗಿ.', newsletterPlaceholder: 'ನಿಮ್ಮ ಇಮೇಲ್', newsletterBtn: 'ಚಂದಾದಾರರಾಗಿ', copyright: '© 2026 ಅಂಗೋಶ್ರೀ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.', location: 'ಸಿಲಿಗುರಿ, ಪಶ್ಚಿಮ ಬಂಗಾಳ' },
    videoModal: { title: 'ಸೀರೆ ವೀಡಿಯೊ ಕಾಲ್ ವಿನಂತಿ', desc: 'ನಮ್ಮ ಸಿಲಿಗುರಿ ಅಂಗಡಿಯಿಂದ ವಾಟ್ಸಾಪ್ ವೀಡಿಯೊ ಕಾಲ್‌ನಲ್ಲಿ ಬಟ್ಟೆಗಳು, ಮಾದರಿಗಳು ಮತ್ತು ಡ್ರೇಪ್ ಗುಣಮಟ್ಟವನ್ನು ಲೈವ್‌ನಲ್ಲಿ ನೋಡಿ.', name: 'ನಿಮ್ಮ ಹೆಸರು', email: 'ಇಮೇಲ್ ವಿಳಾಸ', phone: 'ವಾಟ್ಸಾಪ್ / ಫೋನ್ ಸಂಖ್ಯೆ', date: 'ಆದ್ಯತೆಯ ದಿನಾಂಕ', time: 'ಆದ್ಯತೆಯ ಸಮಯ', book: 'ಉಚಿತ ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ', successTitle: 'ಬುಕಿಂಗ್ ವಿನಂತಿಸಲಾಗಿದೆ!', successDesc: 'ಧನ್ಯವಾದಗಳು, {name}. ನಾವು ನಿಮ್ಮನ್ನು {phone} ನಲ್ಲಿ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.', successClose: 'ಮುಚ್ಚಿ' },
    placeholders: { name: 'ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ', email: 'ನೀವು@example.com', phone: '+91 XXXXX XXXXX', message: 'ನೀವು ಏನನ್ನು ಹುಡುಕುತ್ತಿರುವಿರಿ ಎಂಬುದನ್ನು ನಮಗೆ ತಿಳಿಸಿ...', videoName: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ' },
  },
};

let currentLang = 'en';

function t(key) {
  const keys = key.split('.');
  let val = TRANSLATIONS[currentLang];
  for (const k of keys) {
    if (val && typeof val === 'object' && k in val) val = val[k];
    else return key;
  }
  return typeof val === 'string' ? val : key;
}

function applyTranslation() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const text = t(key);
    if (text.includes('\n')) {
      el.innerHTML = text.replace(/\n/g, '<br>');
    } else {
      el.textContent = text;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('angoshree_lang', lang);
  applyTranslation();
  document.documentElement.lang = lang === 'en' ? 'en' : lang;
  const btn = document.getElementById('langSwitcherBtn');
  if (btn) btn.textContent = ({ en: '🌐 EN', hi: '🌐 HI', bn: '🌐 BN', kn: '🌐 KN' })[lang];
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}
