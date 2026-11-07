const products = [
  {
    id: "watch",
    category: "fashion",
    image: "/images/watch.jpg",
    price: 590,
    name: { th: "นาฬิกาข้อมือสไตล์มินิมอล", en: "Minimal Everyday Watch" },
    detail: { th: "นาฬิกาตัวอย่างดีไซน์เรียบง่าย สำหรับใส่ได้ทุกวัน", en: "A sample timepiece with a clean, everyday design." },
  },
  {
    id: "sneakers",
    category: "fashion",
    image: "/images/sneakers.jpg",
    price: 890,
    name: { th: "รองเท้าผ้าใบสีสด", en: "Bright Everyday Sneakers" },
    detail: { th: "รองเท้าตัวอย่างสีโดดเด่นสำหรับลุคลำลอง", en: "A colorful sample sneaker for casual outfits." },
  },
  {
    id: "headphones",
    category: "tech",
    image: "/images/headphones.jpg",
    price: 1290,
    name: { th: "หูฟังครอบหูรุ่นคลาสสิก", en: "Classic Over-Ear Headphones" },
    detail: { th: "หูฟังตัวอย่างดีไซน์คลาสสิกสำหรับฟังเพลง", en: "A sample pair of classic-style headphones for listening to music." },
  },
  {
    id: "camera",
    category: "tech",
    image: "/images/camera.jpg",
    price: 2450,
    name: { th: "กล้องฟิล์มดีไซน์วินเทจ", en: "Vintage-Style Film Camera" },
    detail: { th: "กล้องตัวอย่างพร้อมรูปลักษณ์วินเทจที่สะดุดตา", en: "A sample camera with a distinctive vintage look." },
  },
  {
    id: "bottle",
    category: "home",
    image: "/images/bottle.jpg",
    price: 320,
    name: { th: "กระบอกน้ำพกพา", en: "Reusable Everyday Bottle" },
    detail: { th: "กระบอกน้ำตัวอย่างสำหรับพกพาในชีวิตประจำวัน", en: "A sample reusable bottle for your daily routine." },
  },
  {
    id: "smartwatch",
    category: "tech",
    image: "/images/smartwatch.jpg",
    price: 1590,
    name: { th: "สมาร์ตวอทช์หน้าปัดกลม", en: "Round-Face Smartwatch" },
    detail: { th: "สมาร์ตวอทช์ตัวอย่างดีไซน์หน้าปัดกลมทันสมัย", en: "A sample smartwatch with a modern round-face design." },
  },
  {
    id: "beauty",
    category: "beauty",
    image: "/images/beauty.jpg",
    price: 450,
    name: { th: "เซรั่มบำรุงผิว", en: "Daily Skincare Serum" },
    detail: { th: "เซรั่มตัวอย่างสำหรับเพิ่มความชุ่มชื้นให้ผิว", en: "A sample serum made for a simple daily skincare routine." },
  },
];

const translations = {
  th: {
    demoNotice: "แสดงตัวอย่าง · สินค้าและราคาเป็นเพียงตัวอย่าง",
    searchLabel: "ค้นหาสินค้า",
    searchPlaceholder: "ค้นหาสินค้า เช่น หูฟัง",
    searchButton: "ค้นหา",
    photoSearchLabel: "ค้นหาด้วยรูปภาพ",
    photoSearchUnavailable: "เลือกรูปแล้ว แต่การค้นหาด้วยรูปภาพยังไม่พร้อมใช้ รูปนี้จะไม่ถูกส่งออกจากเครื่อง",
    profileLabel: "เจ้าของร้าน",
    navAll: "สินค้าทั้งหมด",
    navFashion: "แฟชั่น",
    navTech: "อิเล็กทรอนิกส์",
    navBeauty: "ความงาม",
    navHome: "ของใช้ในบ้าน",
    navTrack: "ติดตามการจัดส่ง",
    navGames: "เกม",
    navSample: "หมวดหมู่ตัวอย่าง",
    welcomeEyebrow: "ยินดีต้อนรับสู่ร้านของเรา",
    welcomeTitle: "ช้อปง่าย ๆ",
    welcomeTitleAccent: "ในแบบของคุณ",
    welcomeDescription: "ค้นพบสินค้าหลากหลาย พร้อมเลือกดูได้สะดวกในที่เดียว",
    browseButton: "เลือกชมสินค้า",
    welcomeDisclaimer: "สินค้าและราคาในหน้านี้เป็นตัวอย่างสำหรับสาธิต",
    ownerOverline: "ร้านค้าโดย",
    ownerRole: "เจ้าของร้าน",
    contactLabel: "ช่องทางติดต่อ",
    callCta: "097-0730897",
    emailCta: "อีเมล",
    whatsappCta: "WhatsApp",
    lineCta: "LINE",
    tiktokCta: "TikTok",
    footerCustomerCare: "บริการลูกค้า",
    footerHowToBuy: "เลือกชมสินค้า",
    footerShipping: "ข้อมูลการจัดส่ง",
    footerPhone: "097-0730897",
    footerContact: "ติดต่อทาง WhatsApp",
    footerEmail: "ส่งอีเมลถึงร้าน",
    footerLine: "LINE · Rossukhon 123",
    phoneContactAria: "โทรหาร้าน Moddee Shop: 097-0730897",
    emailContactAria: "ส่งอีเมลถึงร้าน Moddee Shop: Sticmod@hotmail.com",
    lineContactAria: "เพิ่ม Rossukhon 123 ใน LINE",
    tiktokContactAria: "ไปที่ TikTok ของร้าน Moddee Shop: @30263595297mod",
    footerAbout: "เกี่ยวกับ Moddee Shop",
    footerAboutShop: "รู้จักร้าน",
    footerReseller: "สมัครเป็นตัวแทนจำหน่าย",
    footerTikTok: "ร้าน Moddee บน TikTok",
    chatTitle: "ผู้ช่วยร้าน Moddee",
    chatSubtitle: "ผู้ช่วย AI · พร้อมช่วยเหลือ",
    chatGreeting: "สวัสดีค่ะ! มีอะไรให้ช่วยเกี่ยวกับร้าน Moddee Shop ไหมคะ?",
    chatPrivacy: "คำถามจะถูกส่งให้ OpenAI ช่วยตอบ แชทนี้ไม่บันทึกประวัติ อย่าส่งข้อมูลชำระเงิน รหัสผ่าน หรือที่อยู่ส่วนตัว",
    chatPlaceholder: "พิมพ์คำถามของคุณ...",
    chatInputLabel: "พิมพ์คำถามของคุณ",
    chatSend: "ส่งข้อความ",
    chatClose: "ปิดแชท",
    chatOpen: "ถามผู้ช่วย Moddee",
    chatLog: "แชทกับผู้ช่วย Moddee Shop",
    chatThinking: "กำลังคิดคำตอบ...",
    chatError: "ขออภัย ระบบตอบคำถามไม่สำเร็จ ลองอีกครั้งได้เลย",
    chatRetry: "ลองอีกครั้ง",
    chatRateLimit: "มีคำถามเข้ามาเยอะในตอนนี้ กรุณารอสักครู่แล้วลองใหม่",
    chatNotConfigured: "ผู้ช่วย AI ยังไม่พร้อมใช้งาน กรุณาติดต่อร้านทาง WhatsApp",
    chatGenericError: "เชื่อมต่อไม่ได้ ลองอีกครั้งหรือติดต่อร้านทาง WhatsApp",
    catalogEyebrow: "เลือกดูในแบบที่ชอบ",
    catalogTitle: "สินค้าตัวอย่าง",
    featuredVideoTitle: "รองเท้าแตะ IVY SHOES",
    featuredVideoDescription: "ดูวิดีโอนี้บน TikTok เพื่อเรียนรู้เพิ่มเติม",
    featuredVideoLink: "ดูบน TikTok",
    featuredVideoLinkLabel: "เปิดวิดีโอแนะนำของ Moddee Shop บน TikTok ในแท็บใหม่",
    videoPlaylistTitle: "วิดีโอเพิ่มเติมจาก TikTok",
    videoPlaylistDescription: "เลือกวิดีโอเพื่อเปิดดูบน TikTok",
    videoProductNames: [
      "รองเท้าแตะผู้หญิง",
      "รองเท้าแตะลายตารางสีดำ",
      "รองเท้าแตะหัวเข็มขัดสีดำ",
      "เซ็ตผลิตภัณฑ์ดูแลผิวแบบขวด",
      "ข้าวหอมมะลิตราฉัตร",
      "ข้าวหอมมะลิ",
      "ผงโกโก้ชงดื่ม",
      "ผลิตภัณฑ์ทำสีผม Charlotte",
      "เครื่องดื่ม Choe",
      "รองเท้าแตะลายการ์ตูน",
      "หมวกแก๊ป",
      "แหวนประดับพลอย",
      "เซ็ตบำรุงผมเคราติน",
      "เซรั่มแครอท จุฬาเฮิร์บ",
      "หูฟังแปลภาษา GOOJODOQ",
      "เตาแก๊สแคมป์ปิ้ง Luckygreen",
      "ถุงซักผ้าตาข่าย",
      "ดินสอเขียนคิ้ว GMB",
      "กางเกงขาม้า",
      "ปลาเค็มปลาช่อนทะเลตากแห้ง",
      "NIVEA Thiamidol Extra Bright",
      "ชุดสายชาร์จ USB-C to Lightning",
      "ชุดนอนผ้าซาติน",
      "อายไลเนอร์ Yinofs",
      "แปรงสีฟันชาร์โคลสำหรับผู้ใหญ่",
      "ชุดสายชาร์จ USB-C to USB-C",
      "ปลาช่อนทะเลตากแห้ง",
      "หมึกแห้ง",
      "คัตตอนบัต 2 หัว",
      "กางเกงขาม้าเอวสูง",
      "ครีมจีจี้ JI JIE",
      "ผงซักฟอก Breeze Matic 8 กก.",
      "แป้งพัฟสุรีย์พร",
      "กระดาษทิชชู่ฟามิงโก้ลายดอกไม้",
      "เมล็ดพันธุ์มะละกอเตี้ยชุมแพ",
      "เคสซิลิโคน iPhone",
      "มาสคาร่าสีเขียวกันน้ำ",
      "กาต้มน้ำไฟฟ้า Thunderstorm",
      "กางเกงขายาวทรงบูทคัทสีดำ",
      "เคส iPhone MagSafe พร้อมขาตั้ง",
      "ผลไม้หั่นพร้อมน้ำจิ้ม",
      "ชุดไม้ถูพื้นพร้อมถังปั่น",
      "ชุดผลิตภัณฑ์แบบซอง",
      "รองเท้าแตะสีดำลายแถบ",
      "ชุดผลิตภัณฑ์ดูแลผิวเด็ก",
      "ลิปสติกสีชมพู",
      "ชั้นวางของพร้อมลิ้นชัก",
      "ผลิตภัณฑ์แต่งตา YINOFs",
      "รองเท้าคล็อกสีม่วง",
      "ชุดชั้นในผู้หญิง",
      "แหวนคู่สีเงินและทอง",
      "ไม้ถูพื้นสีเขียว",
      "ดินสอเขียนคิ้ว Skinny Brow Pencil",
      "ซอสปรุงรส",
      "เปลญวน",
      "กระเป๋าคาดลำตัว",
      "รองเท้าคล็อกสีครีม",
      "กางเกงในสีดำแบบแพ็ก",
      "ชุดผลิตภัณฑ์ซักผ้า",
      "กางเกงขายาวทรงตรง",
      "รองเท้าแตะลายพิมพ์",
      "กางเกงขายาวลายขาวดำ",
      "หูฟังบลูทูธไร้สาย",
      "เกาลัดคั่ว",
      "พัดลมมือถือแบบพกพา",
      "แว่นกันแดดเลนส์สีชมพู",
      "กางเกงผ้าอ้อมเด็ก",
      "กระดาษทิชชู่แพ็กหลากสี",
      "หมูหยองกรอบ",
      "แผ่นมาสก์ใต้ตาสีทอง",
      "ถุงเท้าเด็กแพ็กใหญ่",
      "ทิชชู่เปียกแบบพกพาหลายแพ็ก",
      "กระเป๋าสะพายข้าง",
      "หมอนตุ๊กตานุ่ม",
      "ลูกอมรวมรสแพ็กใหญ่",
      "ช่อผมต่อแบบคลิป",
      "หมึกฉีกปรุงรส",
      "วุ้นเส้นอบแห้ง",
      "ทิชชู่กล่องลายน่ารัก",
      "ชุดไฟวงแหวนพร้อมขาตั้ง",
      "กระเป๋าสะพายไหล่บุนวม",
      "สายชาร์จ 3-in-1",
      "เสื้อแจ็กเก็ตมีฮู้ดสีชมพู",
      "ชุดเสื้อและกางเกงขาสั้นลายพิมพ์",
      "กางเกงขายาวลายพิมพ์",
      "รองเท้าใส่สบาย",
      "ถุงเท้าข้อสั้น",
      "ชุดผลิตภัณฑ์ซักผ้า",
    ],
    gameTitle: "Bubble Pop",
    gameDescription: "เกมสั้น ๆ เล่นได้ฟรี ไม่ต้องสมัครสมาชิก",
    bubbleScore: "คะแนน",
    bubbleLives: "หัวใจ",
    bubbleStart: "เริ่มการผจญภัย",
    bubbleRestart: "เล่นอีกครั้ง",
    bubbleRunning: "กำลังเล่น…",
    bubbleReady: "เคลื่อนที่ กระโดด และยิงฟองเพื่อดักจับตัวประหลาด",
    bubblePlaying: "ดักจับตัวประหลาดในฟอง แล้วแตะฟองเพื่อรับคะแนน",
    bubbleGameOver: (score) => `จบเกม! คุณได้ ${score} คะแนน`,
    bubbleControlsLabel: "ปุ่มควบคุมเกมฟองสบู่",
    bubbleLeft: "เดินซ้าย",
    bubbleRight: "เดินขวา",
    bubbleJump: "กระโดด",
    bubbleShoot: "ยิงฟองสบู่",
    bubbleHint: "ลูกศรเพื่อเดิน, Space เพื่อกระโดด และ X เพื่อยิงฟองสบู่",
    bubbleCanvasLabel: "เกมแพลตฟอร์มยิงฟองสบู่",
    bubbleScoreLabel: (score) => `คะแนน ${score}`,
    bubbleLivesLabel: (lives) => `หัวใจ ${lives}`,
    resellerTitle: "สมัครเป็นตัวแทนจำหน่ายกับ Moddee Shop",
    resellerDescription: "สนใจจำหน่ายสินค้าของเรา? ติดต่อร้านเพื่อสมัครเป็นตัวแทนจำหน่าย",
    resellerApproval: "ร้านจะคัดเลือกผู้ขายและจัดเตรียมบัญชีให้ผู้ที่ได้รับเลือก",
    resellerCta: "สอบถามเรื่องตัวแทนจำหน่าย",
    sortLabel: "เรียงตาม",
    sortFeatured: "แนะนำ",
    sortPriceLow: "ราคาต่ำไปสูง",
    sortPriceHigh: "ราคาสูงไปต่ำ",
    filterAll: "ทั้งหมด",
    filterFashion: "แฟชั่น",
    filterTech: "อิเล็กทรอนิกส์",
    filterBeauty: "ความงาม",
    filterHome: "ของใช้ในบ้าน",
    resultCount: (count) => `${count} รายการตัวอย่าง`,
    sampleItem: "สินค้าตัวอย่าง",
    samplePrice: "ราคาตัวอย่าง",
    viewProduct: "ดูสินค้า",
    emptyTitle: "ไม่พบสินค้าที่ค้นหา",
    emptyDescription: "ลองใช้คำค้นหาอื่นหรือเลือกหมวดหมู่ใหม่",
    emptyReset: "ล้างการค้นหา",
    demoFooter: "แคตตาล็อกนี้เป็นตัวอย่างสำหรับสาธิต รายการสินค้าและราคายังไม่ใช่ข้อเสนอขายจริง",
    footerNote: "Moddee Shop · ร้านค้าออนไลน์",
    dialogDisclaimer: "ราคาเป็นตัวอย่างเท่านั้น ยังไม่เปิดรับคำสั่งซื้อ",
    categories: { fashion: "แฟชั่น", tech: "อิเล็กทรอนิกส์", beauty: "ความงาม", home: "ของใช้ในบ้าน" },
    ownerAlt: "เจ้าของร้าน Moddee Shop",
    ownerProfileLabel: "โปรไฟล์เจ้าของร้าน",
    sortControlLabel: "เรียงสินค้า",
    demoNoteLabel: "หมายเหตุแคตตาล็อกตัวอย่าง",
    pageTitle: "Moddee Shop | เลือกชมสินค้า",
    navLabel: "หมวดหมู่สินค้า",
    filterLabel: "กรองสินค้าตามหมวดหมู่",
    closeProduct: "ปิดรายละเอียดสินค้า",
  },
  en: {
    demoNotice: "Demo storefront · Products and prices are examples only",
    searchLabel: "Search products",
    searchPlaceholder: "Search products, e.g. headphones",
    searchButton: "Search",
    photoSearchLabel: "Search with a photo",
    photoSearchUnavailable: "Photo selected, but image search isn't available yet. The photo stays on your device.",
    profileLabel: "Shop owner",
    navAll: "All products",
    navFashion: "Fashion",
    navTech: "Electronics",
    navBeauty: "Beauty",
    navHome: "Home",
    navTrack: "Track delivery",
    navGames: "Games",
    navSample: "Sample categories",
    welcomeEyebrow: "Welcome to our store",
    welcomeTitle: "Easy shopping,",
    welcomeTitleAccent: "your way.",
    welcomeDescription: "Discover a variety of products and browse them all in one place.",
    browseButton: "Browse products",
    welcomeDisclaimer: "Products and prices on this page are sample demo content.",
    ownerOverline: "A store by",
    ownerRole: "Shop owner",
    contactLabel: "Contact the shop",
    callCta: "097-0730897",
    emailCta: "Email",
    whatsappCta: "WhatsApp",
    lineCta: "LINE",
    tiktokCta: "TikTok",
    footerCustomerCare: "Customer Care",
    footerHowToBuy: "Browse the catalog",
    footerShipping: "Shipping & delivery",
    footerPhone: "097-0730897",
    footerContact: "Message us on WhatsApp",
    footerEmail: "Email the shop",
    footerLine: "LINE · Rossukhon 123",
    phoneContactAria: "Call Moddee Shop: 097-0730897",
    emailContactAria: "Email Moddee Shop: Sticmod@hotmail.com",
    lineContactAria: "Add Rossukhon 123 on LINE",
    tiktokContactAria: "Visit Moddee Shop on TikTok: @30263595297mod",
    footerAbout: "About Moddee Shop",
    footerAboutShop: "Meet the shop",
    footerReseller: "Become a reseller",
    footerTikTok: "Moddee Shop on TikTok",
    chatTitle: "Moddee Shop helper",
    chatSubtitle: "AI assistant · Here to help",
    chatGreeting: "Hi! What can I help you with about Moddee Shop?",
    chatPrivacy: "Messages are sent to OpenAI to generate replies; this site doesn't save chat history. Don't share payment details, passwords, or your private address.",
    chatPlaceholder: "Type your question...",
    chatInputLabel: "Type your question",
    chatSend: "Send message",
    chatClose: "Close chat",
    chatOpen: "Ask Moddee",
    chatLog: "Chat with the Moddee Shop assistant",
    chatThinking: "Thinking...",
    chatError: "Sorry, I couldn't get an answer. You can try again.",
    chatRetry: "Try again",
    chatRateLimit: "There are lots of questions right now. Please wait a moment and try again.",
    chatNotConfigured: "The AI assistant isn't connected yet. Please contact the shop on WhatsApp.",
    chatGenericError: "I couldn't connect. Please try again or contact the shop on WhatsApp.",
    catalogEyebrow: "Find something you like",
    catalogTitle: "Sample products",
    featuredVideoTitle: "IVY SHOES Women's Sandals",
    featuredVideoDescription: "Open this video on TikTok to learn more.",
    featuredVideoLink: "Watch on TikTok",
    featuredVideoLinkLabel: "Open Moddee Shop's featured TikTok video in a new tab",
    videoPlaylistTitle: "More videos from TikTok",
    videoPlaylistDescription: "Choose a video to open it on TikTok.",
    videoProductNames: [
      "Women's sandals",
      "Black checkerboard slides",
      "Black buckle-strap sandals",
      "Blue and pink personal-care bottles",
      "Chang jasmine rice",
      "Jasmine rice",
      "Cocoa drink powder",
      "Charlotte hair-color products",
      "Choe bottled drinks",
      "Cartoon-print slides",
      "Baseball caps",
      "Gemstone-style ring",
      "Keratin hair-care set",
      "Chula Herb carrot serum",
      "GOOJODOQ AI translation earbuds",
      "Luckygreen portable camping gas stove",
      "Mesh laundry bag",
      "GMB waterproof eyebrow pencil",
      "Flare-leg trousers",
      "Salted dried sea snakehead fish",
      "NIVEA Thiamidol Extra Bright",
      "USB-C to Lightning fast-charging cable kit",
      "Satin sleepwear set",
      "Yinofs eyeliner",
      "Adult charcoal toothbrush",
      "USB-C to USB-C fast-charging cable kit",
      "Dried sea snakehead fish",
      "Dried squid",
      "Double-ended cotton swabs",
      "High-waisted flare-leg trousers",
      "Ji Jie Cream skincare",
      "Breeze Matic detergent powder, 8 kg",
      "Sureeporn compact powder duo",
      "Flamingo floral tissue paper multipack",
      "Chum Phae dwarf papaya seeds",
      "Silicone iPhone case",
      "Green waterproof mascara",
      "Thunderstorm electric kettle",
      "Black bootcut trousers",
      "MagSafe iPhone case with stand",
      "Sliced fruit with dipping sauce",
      "Spin-mop and bucket set",
      "Sachet product bundle",
      "Black striped slides",
      "Baby skincare set",
      "Pink lipstick",
      "Storage shelf with drawers",
      "YINOFs eye makeup",
      "Purple clogs",
      "Women's underwear set",
      "Silver and gold ring set",
      "Green floor mop",
      "Skinny Brow Pencil",
      "Seasoning sauce",
      "Hammock",
      "Crossbody bags",
      "Cream clogs",
      "Black underwear multipack",
      "Laundry product set",
      "3-in-1 charging cable",
      "Women's pink hooded jacket",
      "Printed top and shorts set",
      "Printed wide-leg trousers",
      "Comfortable shoes",
      "Low-cut socks",
      "Laundry detergent set",
      "Straight-leg trousers",
      "Printed flip-flops",
      "Black-and-white printed trousers",
      "Wireless Bluetooth earbuds",
      "Roasted chestnuts",
      "Portable handheld fan",
      "Pink lens sunglasses",
      "Baby diaper pants",
      "Colorful tissue multipack",
      "Crispy pork floss",
      "Gold under-eye masks",
      "Baby socks multipack",
      "Pocket wet wipes multipack",
      "Crossbody bag",
      "Plush character pillow",
      "Assorted candy multipack",
      "Clip-in hair extension",
      "Seasoned shredded squid",
      "Dried glass noodles",
      "Decorative tissue boxes",
      "Ring light kit with stand",
      "Quilted shoulder bag",
    ],
    gameTitle: "Bubble Pop",
    gameDescription: "A quick, free game. No account needed.",
    bubbleScore: "Score",
    bubbleLives: "Hearts",
    bubbleStart: "Start adventure",
    bubbleRestart: "Play again",
    bubbleRunning: "Playing…",
    bubbleReady: "Move, jump, and shoot bubbles to trap the little monsters.",
    bubblePlaying: "Trap a monster in a bubble, then touch it to score.",
    bubbleGameOver: (score) => `Game over! You scored ${score} points.`,
    bubbleControlsLabel: "Bubble game controls",
    bubbleLeft: "Move left",
    bubbleRight: "Move right",
    bubbleJump: "Jump",
    bubbleShoot: "Shoot a bubble",
    bubbleHint: "Arrow keys to move, Space to jump, and X to shoot a bubble.",
    bubbleCanvasLabel: "Bubble platform adventure game",
    bubbleScoreLabel: (score) => `Score ${score}`,
    bubbleLivesLabel: (lives) => `${lives} hearts`,
    resellerTitle: "Become a Moddee Shop reseller",
    resellerDescription: "Interested in selling our products? Contact the shop to apply.",
    resellerApproval: "The shop selects sellers and provides accounts to approved resellers.",
    resellerCta: "Ask about reselling",
    sortLabel: "Sort by",
    sortFeatured: "Featured",
    sortPriceLow: "Price: low to high",
    sortPriceHigh: "Price: high to low",
    filterAll: "All",
    filterFashion: "Fashion",
    filterTech: "Electronics",
    filterBeauty: "Beauty",
    filterHome: "Home",
    resultCount: (count) => `${count} sample items`,
    sampleItem: "Sample item",
    samplePrice: "Example price",
    viewProduct: "Quick view",
    emptyTitle: "No products found",
    emptyDescription: "Try another search or choose a different category.",
    emptyReset: "Clear search",
    demoFooter: "This catalog is a demo. These example products and prices are not real offers for sale.",
    footerNote: "Moddee Shop · Online store",
    dialogDisclaimer: "Example price only. Orders are not available.",
    categories: { fashion: "Fashion", tech: "Electronics", beauty: "Beauty", home: "Home" },
    ownerAlt: "Owner of Moddee Shop",
    ownerProfileLabel: "Shop owner profile",
    sortControlLabel: "Sort products",
    demoNoteLabel: "Demo catalog notice",
    pageTitle: "Moddee Shop | Browse products",
    navLabel: "Shop categories",
    filterLabel: "Filter products by category",
    closeProduct: "Close product details",
  },
};

const state = { language: localStorage.getItem("moddee-language") === "en" ? "en" : "th", category: "all", query: "", sort: "featured" };
const bubbleGameState = {
  score: 0,
  lives: 3,
  running: false,
  gameOver: false,
  lastFrame: 0,
  frameId: 0,
  lastShot: 0,
  lastDamage: 0,
  jumpRequested: false,
  keys: new Set(),
  touchControls: new Set(),
  player: { x: 54, y: 334, width: 34, height: 38, vx: 0, vy: 0, facing: 1, grounded: false },
  enemies: [],
  bubbles: [],
};
const bubbleCanvas = document.querySelector("#bubble-canvas");
const bubbleContext = bubbleCanvas.getContext("2d");
const chatState = { history: [], busy: false, initialized: false };
const chatPanel = document.querySelector("#chat-panel");
const chatMessages = document.querySelector("#chat-messages");
const chatInput = document.querySelector("#chat-input");
const chatForm = document.querySelector("#chat-form");
const chatSendButton = document.querySelector("#chat-send");
const chatLauncher = document.querySelector("#chat-launcher");
const chatOriginUrl = import.meta.env.VITE_SUPABASE_URL?.trim().replace(/\/+$/, "");
const chatPublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();
let chatEndpoint = "";
try {
  const parsedChatOrigin = new URL(chatOriginUrl ?? "");
  const isLocalChatOrigin = ["localhost", "127.0.0.1"].includes(parsedChatOrigin.hostname);
  if (parsedChatOrigin.protocol === "https:" || (parsedChatOrigin.protocol === "http:" && isLocalChatOrigin)) {
    chatEndpoint = `${parsedChatOrigin.origin}/functions/v1/moddee-chat`;
  }
} catch {
  chatEndpoint = "";
}
const productGrid = document.querySelector("#product-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search-input");
const searchPhotoInput = document.querySelector("#search-photo-input");
const searchPhotoStatus = document.querySelector("#search-photo-status");
const searchCameraButton = document.querySelector("#search-camera");
let searchPhotoStatusTimeout;
const sortSelect = document.querySelector("#sort-select");
const dialog = document.querySelector("#product-dialog");
const formatter = new Intl.NumberFormat("th-TH");

function currentText(key) {
  return translations[state.language][key];
}

function applyTranslations() {
  const text = translations[state.language];
  document.documentElement.lang = state.language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = text[element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
  });
  document.querySelectorAll(".video-playlist__label").forEach((element, index) => {
    const value = text.videoProductNames[index];
    if (typeof value === "string") element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = text[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", text[element.dataset.i18nAriaLabel]);
  });

  document.querySelector("#language-label").textContent = state.language === "th" ? "EN" : "ไทย";
  document.querySelector("#language-switch").setAttribute(
    "aria-label",
    state.language === "th" ? "Switch language to English" : "เปลี่ยนภาษาเป็นภาษาไทย",
  );
  searchCameraButton.setAttribute("aria-label", text.photoSearchLabel);
  searchCameraButton.title = text.photoSearchLabel;
  if (!searchPhotoStatus.hidden) searchPhotoStatus.textContent = text.photoSearchUnavailable;
  document.title = text.pageTitle;
  document.querySelector(".category-nav").setAttribute("aria-label", text.navLabel);
  document.querySelector("#category-filters").setAttribute("aria-label", text.filterLabel);
  document.querySelector("#owner-shortcut").setAttribute("aria-label", text.profileLabel);
  document.querySelector("#owner-profile").setAttribute("aria-label", text.ownerProfileLabel);
  document.querySelector(".owner-profile__actions").setAttribute("aria-label", text.contactLabel);
  document.querySelector(".owner-profile__contact--phone").setAttribute("aria-label", text.phoneContactAria);
  document.querySelector(".owner-profile__contact--email").setAttribute("aria-label", text.emailContactAria);
  document.querySelector(".owner-profile__contact--whatsapp").setAttribute("aria-label", state.language === "th" ? "ส่งข้อความถึง Moddee Shop บน WhatsApp" : "Message Moddee Shop on WhatsApp");
  document.querySelector(".owner-profile__contact--line").setAttribute("aria-label", text.lineContactAria);
  document.querySelector(".owner-profile__contact--tiktok").setAttribute("aria-label", text.tiktokContactAria);
  document.querySelector("#sort-select").setAttribute("aria-label", text.sortControlLabel);
  document.querySelector(".demo-note").setAttribute("aria-label", text.demoNoteLabel);
  document.querySelector("#dialog-close").setAttribute("aria-label", text.closeProduct);
  document.querySelector("#bubble-canvas").setAttribute("aria-label", text.bubbleCanvasLabel);
  document.querySelector("#bubble-score").setAttribute("aria-label", text.bubbleScoreLabel(bubbleGameState.score));
  document.querySelector("#bubble-lives").setAttribute("aria-label", text.bubbleLivesLabel(bubbleGameState.lives));
  document.querySelector("#chat-messages").setAttribute("aria-label", text.chatLog);
  document.querySelector("#chat-close").setAttribute("aria-label", text.chatClose);
  document.querySelector("#chat-input").setAttribute("aria-label", text.chatInputLabel);
  document.querySelector("#chat-send").setAttribute("aria-label", text.chatSend);
  chatLauncher.querySelector("span").textContent = chatPanel.hidden ? text.chatOpen : text.chatClose;
  chatLauncher.setAttribute("aria-label", chatPanel.hidden ? text.chatOpen : text.chatClose);
  document.querySelector(".owner-profile__photo").alt = text.ownerAlt;
  document.querySelector("#result-count").textContent = text.resultCount(getFilteredProducts().length);
  renderProducts();
  renderBubbleGame();
  if (chatState.initialized && chatState.history.length === 1) {
    const greeting = chatMessages.querySelector(".chat-message--assistant .chat-message__text");
    if (greeting) {
      greeting.textContent = text.chatGreeting;
      chatState.history[0].content = text.chatGreeting;
    }
  }
}

function getFilteredProducts() {
  const normalizedQuery = state.query.trim().toLocaleLowerCase(state.language);
  const filtered = products.filter((product) => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    const searchable = [
      product.name.th,
      product.name.en,
      product.detail.th,
      product.detail.en,
      translations.th.categories[product.category],
      translations.en.categories[product.category],
    ].join(" ").toLocaleLowerCase();
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  });

  if (state.sort === "price-low") return filtered.sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") return filtered.sort((a, b) => b.price - a.price);
  return filtered;
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();
  document.querySelector("#result-count").textContent = currentText("resultCount")(visibleProducts.length);
  emptyState.hidden = visibleProducts.length > 0;
  productGrid.hidden = visibleProducts.length === 0;
  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="product-card__visual">
        <img class="product-card__image" src="${product.image}" alt="${product.name[state.language]}" loading="lazy" width="640" height="560">
        <span class="product-card__badge">${currentText("sampleItem")}</span>
      </div>
      <div class="product-card__body">
        <p class="product-card__category">${translations[state.language].categories[product.category]}</p>
        <h3 class="product-card__name">${product.name[state.language]}</h3>
        <div class="product-card__bottom">
          <p class="product-card__price">฿${formatter.format(product.price)}<span class="product-card__price-note">${currentText("samplePrice")}</span></p>
          <button class="product-card__view" type="button" data-product-id="${product.id}">${currentText("viewProduct")}</button>
        </div>
      </div>
    </article>
  `).join("");
}

function setCategory(category) {
  state.category = category;
  document.querySelectorAll(".filter-chip").forEach((button) => {
    const active = button.dataset.category === category;
    button.classList.toggle("filter-chip--active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderProducts();
}

const bubblePlatforms = [
  { x: 0, y: 380, width: 720, height: 40 },
  { x: 68, y: 300, width: 165, height: 14 },
  { x: 281, y: 237, width: 158, height: 14 },
  { x: 487, y: 300, width: 165, height: 14 },
  { x: 226, y: 164, width: 212, height: 14 },
];

function createBubbleEnemies() {
  return [
    { x: 150, y: 272, spawnX: 150, spawnY: 272, width: 28, height: 28, min: 82, max: 215, speed: 58, direction: 1, trapped: false },
    { x: 356, y: 209, spawnX: 356, spawnY: 209, width: 28, height: 28, min: 293, max: 415, speed: 68, direction: -1, trapped: false },
    { x: 560, y: 272, spawnX: 560, spawnY: 272, width: 28, height: 28, min: 502, max: 635, speed: 62, direction: 1, trapped: false },
    { x: 490, y: 352, spawnX: 490, spawnY: 352, width: 28, height: 28, min: 400, max: 660, speed: 74, direction: -1, trapped: false },
  ];
}

function renderBubbleGame() {
  const score = document.querySelector("#bubble-score");
  const lives = document.querySelector("#bubble-lives");
  const start = document.querySelector("#bubble-start");
  score.textContent = String(bubbleGameState.score);
  score.setAttribute("aria-label", currentText("bubbleScoreLabel")(bubbleGameState.score));
  lives.textContent = String(bubbleGameState.lives);
  lives.setAttribute("aria-label", currentText("bubbleLivesLabel")(bubbleGameState.lives));
  start.textContent = currentText(bubbleGameState.running ? "bubbleRunning" : bubbleGameState.gameOver ? "bubbleRestart" : "bubbleStart");
  start.disabled = bubbleGameState.running;
  document.querySelector("#bubble-status").textContent = bubbleGameState.running
    ? currentText("bubblePlaying")
    : bubbleGameState.gameOver
      ? currentText("bubbleGameOver")(bubbleGameState.score)
      : currentText("bubbleReady");
  drawBubbleScene();
}

function drawBubbleCharacter(context, x, y, width, height, color, isPlayer = false) {
  context.fillStyle = color;
  context.beginPath();
  context.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#fff8fb";
  context.beginPath();
  context.arc(x + width * 0.35, y + height * 0.39, 3.2, 0, Math.PI * 2);
  context.arc(x + width * 0.68, y + height * 0.39, 3.2, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#47172d";
  context.beginPath();
  context.arc(x + width * 0.36, y + height * 0.4, 1.4, 0, Math.PI * 2);
  context.arc(x + width * 0.69, y + height * 0.4, 1.4, 0, Math.PI * 2);
  context.fill();
  if (isPlayer) {
    context.strokeStyle = "#fff8fb";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(x + width / 2, y + 3);
    context.quadraticCurveTo(x + width / 2 + 8, y - 10, x + width / 2 + 12, y - 4);
    context.stroke();
    context.fillStyle = "#ffd35f";
    context.beginPath();
    context.arc(x + width / 2 + 12, y - 4, 3, 0, Math.PI * 2);
    context.fill();
  }
}

function drawBubbleScene() {
  if (!bubbleContext) return;
  const context = bubbleContext;
  context.clearRect(0, 0, bubbleCanvas.width, bubbleCanvas.height);
  context.fillStyle = "#f9dbe6";
  context.fillRect(0, 0, bubbleCanvas.width, bubbleCanvas.height);
  context.fillStyle = "#ed9ab4";
  context.beginPath();
  context.moveTo(0, 180);
  context.lineTo(116, 90);
  context.lineTo(232, 180);
  context.lineTo(350, 73);
  context.lineTo(486, 180);
  context.lineTo(603, 103);
  context.lineTo(720, 180);
  context.lineTo(720, 380);
  context.lineTo(0, 380);
  context.closePath();
  context.fill();
  context.fillStyle = "#ffeef4";
  context.beginPath();
  context.arc(605, 72, 30, 0, Math.PI * 2);
  context.fill();
  for (const platform of bubblePlatforms) {
    context.fillStyle = "#651b39";
    context.fillRect(platform.x, platform.y, platform.width, platform.height);
    context.fillStyle = "#ed4e82";
    context.fillRect(platform.x, platform.y, platform.width, 4);
    for (let x = platform.x + 14; x < platform.x + platform.width; x += 34) {
      context.beginPath();
      context.arc(x, platform.y + 9, 2, 0, Math.PI * 2);
      context.fill();
    }
  }
  for (const enemy of bubbleGameState.enemies) {
    if (!enemy.trapped) drawBubbleCharacter(context, enemy.x, enemy.y, enemy.width, enemy.height, "#79264e");
  }
  for (const bubble of bubbleGameState.bubbles) {
    context.fillStyle = bubble.enemy ? "rgb(255 250 252 / 78%)" : "rgb(255 247 251 / 63%)";
    context.strokeStyle = bubble.enemy ? "#d4145a" : "#b33a68";
    context.lineWidth = 3;
    context.beginPath();
    context.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.fillStyle = "#fff";
    context.beginPath();
    context.arc(bubble.x - 6, bubble.y - 7, 3, 0, Math.PI * 2);
    context.fill();
    if (bubble.enemy) {
      drawBubbleCharacter(context, bubble.x - 11, bubble.y - 12, 22, 24, "#d4145a");
    }
  }
  const player = bubbleGameState.player;
  drawBubbleCharacter(context, player.x, player.y, player.width, player.height, "#d4145a", true);
}

function addChatMessage(role, text) {
  const article = document.createElement("article");
  article.className = `chat-message chat-message--${role}`;
  const paragraph = document.createElement("p");
  paragraph.className = "chat-message__text";
  paragraph.textContent = text;
  article.append(paragraph);
  chatMessages.append(article);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return article;
}

function openChat() {
  chatPanel.hidden = false;
  chatLauncher.setAttribute("aria-expanded", "true");
  chatLauncher.classList.add("chat-launcher--open");
  chatLauncher.querySelector("span").textContent = currentText("chatClose");
  chatLauncher.setAttribute("aria-label", currentText("chatClose"));
  if (!chatState.initialized) {
    const greeting = currentText("chatGreeting");
    addChatMessage("assistant", greeting);
    chatState.history.push({ role: "assistant", content: greeting });
    chatState.initialized = true;
  }
  chatInput.focus();
}

function closeChat() {
  chatPanel.hidden = true;
  chatLauncher.setAttribute("aria-expanded", "false");
  chatLauncher.classList.remove("chat-launcher--open");
  chatLauncher.querySelector("span").textContent = currentText("chatOpen");
  chatLauncher.setAttribute("aria-label", currentText("chatOpen"));
  chatLauncher.focus();
}

function setChatBusy(busy) {
  chatState.busy = busy;
  chatInput.disabled = busy;
  chatSendButton.disabled = busy;
  chatLauncher.disabled = busy;
}

function appendWhatsAppChatLink(container) {
  container.querySelector(".chat-message__contact")?.remove();
  const link = document.createElement("a");
  link.className = "chat-message__contact";
  link.href = "https://wa.me/66970730897";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = currentText("footerContact");
  container.append(link);
}

function showChatError(message, replyBubble, question) {
  const replyText = replyBubble.querySelector(".chat-message__text");
  replyText.textContent = message;
  replyBubble.querySelector(".chat-message__retry")?.remove();
  const retry = document.createElement("button");
  retry.className = "chat-message__retry";
  retry.type = "button";
  retry.textContent = currentText("chatRetry");
  retry.addEventListener("click", () => requestChatReply(question, replyBubble));
  replyBubble.append(retry);
}

async function requestChatReply(question, existingReply = null) {
  const replyBubble = existingReply ?? addChatMessage("assistant", currentText("chatThinking"));
  replyBubble.querySelector(".chat-message__text").textContent = currentText("chatThinking");
  replyBubble.querySelector(".chat-message__retry")?.remove();
  replyBubble.querySelector(".chat-message__contact")?.remove();

  if (!chatEndpoint || !chatPublishableKey) {
    showChatError(currentText("chatNotConfigured"), replyBubble, question);
    replyBubble.querySelector(".chat-message__retry")?.remove();
    appendWhatsAppChatLink(replyBubble);
    return;
  }

  setChatBusy(true);
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch(chatEndpoint, {
      method: "POST",
      credentials: "omit",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        apikey: chatPublishableKey,
        Authorization: `Bearer ${chatPublishableKey}`,
      },
      body: JSON.stringify({
        messages: [...chatState.history, { role: "user", content: question }].slice(-12),
      }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      showChatError(
        response.status === 429
          ? currentText("chatRateLimit")
          : result.error === "chat_not_configured"
            ? currentText("chatNotConfigured")
            : currentText("chatGenericError"),
        replyBubble,
        question,
      );
      if (result.error === "chat_not_configured") {
        replyBubble.querySelector(".chat-message__retry")?.remove();
        appendWhatsAppChatLink(replyBubble);
      } else if (response.status >= 500) {
        appendWhatsAppChatLink(replyBubble);
      }
      return;
    }

    if (typeof result.reply !== "string" || !result.reply.trim()) {
      showChatError(currentText("chatGenericError"), replyBubble, question);
      return;
    }
    replyBubble.querySelector(".chat-message__text").textContent = result.reply.trim();
    chatState.history.push({ role: "user", content: question }, { role: "assistant", content: result.reply.trim() });
    chatState.history = chatState.history.slice(-10);
  } catch {
    showChatError(currentText("chatError"), replyBubble, question);
    appendWhatsAppChatLink(replyBubble);
  } finally {
    window.clearTimeout(timeout);
    setChatBusy(false);
    if (!chatPanel.hidden) chatInput.focus();
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

chatLauncher.addEventListener("click", () => {
  if (chatPanel.hidden) openChat();
  else closeChat();
});

document.querySelector("#chat-close").addEventListener("click", closeChat);

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (chatState.busy) return;
  const question = chatInput.value.trim();
  if (!question) return;
  chatInput.value = "";
  addChatMessage("user", question);
  requestChatReply(question);
});

chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    chatForm.requestSubmit();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !chatPanel.hidden) closeChat();
});

function resetBubbleGame() {
  bubbleGameState.score = 0;
  bubbleGameState.lives = 3;
  bubbleGameState.running = false;
  bubbleGameState.gameOver = false;
  bubbleGameState.lastShot = 0;
  bubbleGameState.lastDamage = 0;
  bubbleGameState.jumpRequested = false;
  bubbleGameState.keys.clear();
  bubbleGameState.touchControls.clear();
  bubbleGameState.player = { x: 54, y: 334, width: 34, height: 38, vx: 0, vy: 0, facing: 1, grounded: false };
  bubbleGameState.enemies = createBubbleEnemies();
  bubbleGameState.bubbles = [];
}

function startBubbleGame() {
  if (bubbleGameState.frameId) window.cancelAnimationFrame(bubbleGameState.frameId);
  resetBubbleGame();
  bubbleGameState.running = true;
  bubbleGameState.lastFrame = 0;
  renderBubbleGame();
  bubbleCanvas.focus();
  bubbleGameState.frameId = window.requestAnimationFrame(runBubbleFrame);
}

function shootBubble(timestamp) {
  if (timestamp - bubbleGameState.lastShot < 520) return;
  bubbleGameState.lastShot = timestamp;
  const player = bubbleGameState.player;
  bubbleGameState.bubbles.push({
    x: player.x + player.width / 2 + player.facing * 22,
    y: player.y + 15,
    radius: 16,
    velocityX: player.facing * 260,
    age: 0,
    enemy: null,
  });
}

function respawnBubbleEnemy(enemy) {
  enemy.trapped = false;
  enemy.x = enemy.spawnX;
  enemy.y = enemy.spawnY;
}

function rectsOverlap(a, b) {
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

function finishBubbleGame() {
  bubbleGameState.running = false;
  bubbleGameState.gameOver = true;
  bubbleGameState.keys.clear();
  bubbleGameState.touchControls.clear();
  renderBubbleGame();
  if (document.activeElement === bubbleCanvas) document.querySelector("#bubble-start").focus();
}

function runBubbleFrame(timestamp) {
  if (!bubbleGameState.running) return;
  if (document.visibilityState === "hidden") {
    bubbleGameState.frameId = window.requestAnimationFrame(runBubbleFrame);
    return;
  }
  const delta = bubbleGameState.lastFrame ? Math.min((timestamp - bubbleGameState.lastFrame) / 1000, 0.04) : 0;
  bubbleGameState.lastFrame = timestamp;
  const player = bubbleGameState.player;
  const left = bubbleGameState.keys.has("arrowleft") || bubbleGameState.keys.has("a") || bubbleGameState.touchControls.has("left");
  const right = bubbleGameState.keys.has("arrowright") || bubbleGameState.keys.has("d") || bubbleGameState.touchControls.has("right");
  const direction = Number(right) - Number(left);
  player.vx = direction * 225;
  if (direction) player.facing = direction;
  player.x = Math.max(6, Math.min(bubbleCanvas.width - player.width - 6, player.x + player.vx * delta));
  const previousBottom = player.y + player.height;
  player.vy = Math.min(player.vy + 880 * delta, 520);
  player.y += player.vy * delta;
  player.grounded = false;
  for (const platform of bubblePlatforms) {
    const crossedPlatform = previousBottom <= platform.y && player.y + player.height >= platform.y;
    const overlapsPlatform = player.x + player.width > platform.x && player.x < platform.x + platform.width;
    if (player.vy >= 0 && crossedPlatform && overlapsPlatform) {
      player.y = platform.y - player.height;
      player.vy = 0;
      player.grounded = true;
    }
  }
  if (bubbleGameState.jumpRequested && player.grounded) {
    player.vy = -410;
    player.grounded = false;
  }
  bubbleGameState.jumpRequested = false;
  if (bubbleGameState.keys.has("x") || bubbleGameState.touchControls.has("shoot")) shootBubble(timestamp);

  for (const enemy of bubbleGameState.enemies) {
    if (enemy.trapped) continue;
    enemy.x += enemy.direction * enemy.speed * delta;
    if (enemy.x <= enemy.min || enemy.x + enemy.width >= enemy.max) enemy.direction *= -1;
    if (timestamp - bubbleGameState.lastDamage > 1250 && rectsOverlap(player, enemy)) {
      bubbleGameState.lives -= 1;
      bubbleGameState.lastDamage = timestamp;
      player.x = 54;
      player.y = 334;
      player.vy = 0;
      respawnBubbleEnemy(enemy);
      renderBubbleGame();
      if (bubbleGameState.lives <= 0) {
        finishBubbleGame();
        return;
      }
    }
  }

  const remainingBubbles = [];
  for (const bubble of bubbleGameState.bubbles) {
    bubble.age += delta * 1000;
    bubble.y -= (bubble.enemy ? 42 : 13) * delta;
    if (!bubble.enemy) {
      bubble.x += bubble.velocityX * delta;
      const trappedEnemy = bubbleGameState.enemies.find((enemy) => (
        !enemy.trapped
        && bubble.x + bubble.radius > enemy.x
        && bubble.x - bubble.radius < enemy.x + enemy.width
        && bubble.y + bubble.radius > enemy.y
        && bubble.y - bubble.radius < enemy.y + enemy.height
      ));
      if (trappedEnemy) {
        trappedEnemy.trapped = true;
        bubble.enemy = trappedEnemy;
      }
    }
    if (bubble.enemy && rectsOverlap(player, {
      x: bubble.x - bubble.radius,
      y: bubble.y - bubble.radius,
      width: bubble.radius * 2,
      height: bubble.radius * 2,
    })) {
      respawnBubbleEnemy(bubble.enemy);
      bubbleGameState.score += 100;
      renderBubbleGame();
      continue;
    }
    if (bubble.enemy && (bubble.age > 4000 || bubble.y < 18)) {
      respawnBubbleEnemy(bubble.enemy);
      continue;
    }
    if (!bubble.enemy && (bubble.age > 2200 || bubble.x < -24 || bubble.x > bubbleCanvas.width + 24)) continue;
    remainingBubbles.push(bubble);
  }
  bubbleGameState.bubbles = remainingBubbles;
  drawBubbleScene();
  bubbleGameState.frameId = window.requestAnimationFrame(runBubbleFrame);
}

document.querySelector("#bubble-start").addEventListener("click", startBubbleGame);
document.querySelectorAll("[data-bubble-control]").forEach((button) => {
  const action = button.dataset.bubbleControl;
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    button.setPointerCapture(event.pointerId);
    bubbleGameState.touchControls.add(action);
    if (action === "jump") bubbleGameState.jumpRequested = true;
    if (action === "shoot") shootBubble(performance.now());
  });
  const release = () => bubbleGameState.touchControls.delete(action);
  button.addEventListener("pointerup", release);
  button.addEventListener("pointercancel", release);
  button.addEventListener("lostpointercapture", release);
});

window.addEventListener("keydown", (event) => {
  if (!document.activeElement?.closest("#bubble-game-panel") || !bubbleGameState.running) return;
  const key = event.key.toLowerCase();
  if (["arrowleft", "arrowright", "arrowup", " ", "x", "a", "d"].includes(key)) event.preventDefault();
  bubbleGameState.keys.add(key);
  if (!event.repeat && (key === " " || key === "arrowup")) bubbleGameState.jumpRequested = true;
  if (!event.repeat && key === "x") shootBubble(performance.now());
});

window.addEventListener("keyup", (event) => {
  bubbleGameState.keys.delete(event.key.toLowerCase());
});

window.addEventListener("blur", () => {
  bubbleGameState.keys.clear();
  bubbleGameState.touchControls.clear();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    if (bubbleGameState.frameId) window.cancelAnimationFrame(bubbleGameState.frameId);
    bubbleGameState.frameId = 0;
    return;
  }
  if (bubbleGameState.running) bubbleGameState.frameId = window.requestAnimationFrame(runBubbleFrame);
});

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = searchInput.value;
  renderProducts();
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
});

searchCameraButton.addEventListener("click", () => searchPhotoInput.click());

searchPhotoInput.addEventListener("change", () => {
  const [photo] = searchPhotoInput.files ?? [];
  if (!photo) return;
  if (!photo.type.startsWith("image/")) {
    searchPhotoStatus.textContent = currentText("photoSearchUnavailable");
    searchPhotoStatus.hidden = false;
    searchPhotoInput.value = "";
    return;
  }
  searchPhotoStatus.textContent = currentText("photoSearchUnavailable");
  searchPhotoStatus.hidden = false;
  searchPhotoInput.value = "";
  window.clearTimeout(searchPhotoStatusTimeout);
  searchPhotoStatusTimeout = window.setTimeout(() => {
    searchPhotoStatus.hidden = true;
  }, 7000);
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  renderProducts();
});

document.querySelector("#category-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) setCategory(button.dataset.category);
});

document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => setCategory(link.dataset.categoryLink));
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  renderProducts();
});

document.querySelector("#language-switch").addEventListener("click", () => {
  state.language = state.language === "th" ? "en" : "th";
  localStorage.setItem("moddee-language", state.language);
  applyTranslations();
});

document.querySelector("#reset-search").addEventListener("click", () => {
  searchInput.value = "";
  state.query = "";
  setCategory("all");
  searchInput.focus();
});

document.querySelector("#owner-shortcut").addEventListener("click", () => {
  document.querySelector("#owner-profile").scrollIntoView({ behavior: "smooth", block: "center" });
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");
  if (!button) return;

  const product = products.find((item) => item.id === button.dataset.productId);
  if (!product) return;

  document.querySelector("#dialog-image").src = product.image;
  document.querySelector("#dialog-image").alt = product.name[state.language];
  document.querySelector("#dialog-category").textContent = translations[state.language].categories[product.category];
  document.querySelector("#dialog-title").textContent = product.name[state.language];
  document.querySelector("#dialog-description").textContent = product.detail[state.language];
  document.querySelector("#dialog-price").textContent = `฿${formatter.format(product.price)}`;
  if (typeof dialog.showModal === "function") dialog.showModal();
});

document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  const trigger = document.activeElement;
  if (trigger instanceof HTMLElement && trigger.matches(".product-card__view")) trigger.focus();
});

document.querySelectorAll(".category-nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".category-nav__link").forEach((item) => item.classList.remove("category-nav__link--active"));
    link.classList.add("category-nav__link--active");
  });
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
bubbleGameState.enemies = createBubbleEnemies();
applyTranslations();
