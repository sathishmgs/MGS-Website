import sathishImg from '../assets/images/sathish.jpg';
import inventoryBillingImg from '../assets/images/project-inventory-billing.png';
import logisticsImg from '../assets/images/project-logistics.png';
import flowerShopImg from '../assets/images/project-flower-shop.png';
import aquariumShopImg from '../assets/images/project-aquarium-shop.png';
import movieBookingImg from '../assets/images/project-movie-booking.png';

export const PERSONAL_INFO = {
  brand: 'MGS Freelance',
  brandShort: 'MGS Freelance',
  founder: 'Sathish M',
  name: 'Sathish M',
  role: 'Freelance Web & Software Developer',
  title: 'Freelance Developer | Custom Websites & Workshop / POS Billing Software',
  tagline: 'Smart Websites & Smart Billing Software For Your Business.',
  locationShort: 'Rajapalayam, Tamil Nadu',
  locationFull: 'Rajapalayam, Virudhunagar - 626117, Tamil Nadu, India',
  college: 'Ayya Nadar Janaki Ammal College, Sivakasi',
  degree: 'Bachelor of Computer Applications (BCA)',
  phone: '7708691940',
  phoneDisplay: '+91 7708691940',
  phoneHref: 'tel:+917708691940',
  whatsappHref:
    'https://wa.me/917708691940?text=Hi%20Sathish%2C%20I%20am%20interested%20in%20building%20a%20website%20or%20billing%20software%20for%20my%20business.',
  email: 'sathishsenthil2005@gmail.com',
  github: 'https://github.com/sathishmgs',
  profileImage: sathishImg,
  resumeFile: '/Sathish-Resume-Placeholder.html',
  resumeDownloadName: 'Sathish_M_Resume.html',

  heroIntro:
    'We build modern, high-speed websites, custom e-commerce stores, and smart POS & workshop billing software. Designed to help retail shops, bike service centers, car garages, and local businesses grow with affordable, high-quality digital solutions.',
  aboutIntro:
    'MGS Freelance, run by Sathish M in Rajapalayam, delivers practical and cost-effective digital solutions. Whether you are running a two-wheeler workshop, retail shop, boutique, startup, or local business, we build tailored software that is easy to manage, 100% mobile-friendly, and built to increase your sales.',

  socials: {
    phone: {
      label: '+91 7708691940',
      href: 'tel:+917708691940',
    },
    whatsapp: {
      label: 'WhatsApp',
      href: 'https://wa.me/917708691940?text=Hi%20Sathish%2C%20I%20am%20interested%20in%20a%20website%20or%20software.',
    },
    email: {
      label: 'sathishsenthil2005@gmail.com',
      href: 'mailto:sathishsenthil2005@gmail.com',
    },
    github: {
      label: 'github.com/sathishmgs',
      href: 'https://github.com/sathishmgs',
    },
    linkedin: {
      label: 'linkedin.com/in/sathish-m2005',
      href: 'https://www.linkedin.com/in/sathish-m2005/',
    },
  },
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'What We Build' },
  { id: 'projects', label: 'Live Demos' },
  { id: 'calculator', label: 'Cost Estimator' },
  { id: 'process', label: 'How We Work' },
  { id: 'reviews', label: 'Client Reviews' },
  { id: 'about', label: 'About MGS' },
  { id: 'contact', label: 'Contact' },
];

export const STATS = [
  { value: '10+', label: 'Software Categories' },
  { value: '100%', label: 'Mobile Responsive' },
  { value: '24/7', label: 'WhatsApp Support' },
  { value: 'Fast', label: 'Quick Turnaround' },
];

// Plain-English, client-first services list explaining what we build
export const SERVICES_LIST = [
  {
    id: 'billing-pos-software',
    title: 'Smart Retail Billing & POS Software',
    tamilTitle: 'கடை மற்றும் சில்லறை வணிக பில்லிங் சாப்ட்வேர்',
    badge: 'Popular for Retail Shops',
    icon: 'Receipt',
    description:
      'Fast, simple billing and inventory software for retail stores, supermarkets, textile, mobile shops, provision stores, and wholesale traders.',
    targetClients: 'Supermarkets, Grocery, Hardware, Medical & Retail Shops',
    keyFeatures: [
      'Quick barcode scanning & thermal receipt printing',
      'Automatic GST tax breakdown & PDF invoices',
      'Low-stock alerts & real-time inventory tracking',
      'Daily profit, sales report & customer credit ledger',
    ],
    demoTag: 'Demo Available',
    whatsappMessage:
      'Hi Sathish, I want a Smart Billing & POS Software for my shop. Please share details and pricing.',
  },
  {
    id: 'workshop-billing-management',
    title: 'Two-Wheeler & All Workshop Billing Software',
    tamilTitle: 'இருசக்கர வாகன & அனைத்து பட்டறை பில்லிங் சாப்ட்வேர்',
    badge: 'Best for Bike & Car Workshops',
    icon: 'Wrench',
    description:
      'Tailor-made billing and management software for two-wheeler service centers, bike mechanic shops, car garages, and water wash centers. Create vehicle job cards, track spare parts stock, mechanic labor charges, and auto-remind customers for their next service.',
    targetClients: 'Two-Wheeler Workshops, Bike Service Centers, Car Garages, Auto Electricals & Repair Shops',
    keyFeatures: [
      'Vehicle entry with job card creation & complaint checklist',
      'Spare parts inventory & mechanic labor charges auto-split',
      'Fast thermal bill printing & WhatsApp/SMS bill share',
      'Automated next service due date reminder alerts to customers',
    ],
    demoTag: 'Workshop Specialist',
    whatsappMessage:
      'Hi Sathish, I want a Two-Wheeler / Workshop Billing Software for my service center. Please share details and pricing.',
  },
  {
    id: 'business-websites',
    title: 'Business & Company Websites',
    tamilTitle: 'நிறுவனங்களுக்கான அறிமுக இணையதளம்',
    badge: 'Essential for Businesses',
    icon: 'Briefcase',
    description:
      'Professional, modern websites designed to showcase your company profile, services, client testimonials, and Google Map location to attract new customers.',
    targetClients: 'Companies, Agencies, Clinics, Service Providers & Startups',
    keyFeatures: [
      '100% Mobile & Computer responsive layout',
      'One-click WhatsApp chat & Call buttons',
      'Google Maps & interactive contact inquiry form',
      'SEO friendly structure for Google search visibility',
    ],
    demoTag: 'Fast Delivery',
    whatsappMessage:
      'Hi Sathish, I want a Business Website for my company. Please share details and pricing.',
  },
  {
    id: 'ecommerce-stores',
    title: 'E-Commerce & Online Stores',
    tamilTitle: 'ஆன்லைன் விற்பனை கடைகள்',
    badge: 'Sell Products Online',
    icon: 'ShoppingCart',
    description:
      'Launch your own online shop to sell products directly to customers with product catalog, shopping cart, and instant WhatsApp order notifications.',
    targetClients: 'Clothing Boutiques, Bakeries, Gift Shops, Flower Stores, Electronics',
    keyFeatures: [
      'Dynamic product showcase with search & categories',
      'Persistent shopping cart & fast checkout workflow',
      'Instant WhatsApp order forwarding for fast fulfillment',
      'UPI, GPay, PhonePe, Cards & Cash on Delivery options',
    ],
    demoTag: 'Live Store Demo',
    whatsappMessage:
      'Hi Sathish, I want an E-Commerce Website to sell my products online. Please share details.',
  },
  {
    id: 'logistics-transport-system',
    title: 'Logistics & Fleet Transport Tracking',
    tamilTitle: 'சரக்கு & போக்குவரத்து மேலாண்மை',
    badge: 'Supply Chain Solution',
    icon: 'Truck',
    description:
      'High-efficiency consignment and fleet management platform for tracking parcels, dispatching vehicles, and giving customers live delivery status.',
    targetClients: 'Courier Companies, Lorry Transport, Cargo Carriers, Fleet Operators',
    keyFeatures: [
      'Consignment booking & automatic AWB tracking numbers',
      'Hub-to-hub manifest creation & vehicle load scheduling',
      'Driver delivery logs & digital proof of delivery (POD)',
      'Customer parcel tracking portal with real-time milestones',
    ],
    demoTag: 'Fleet System',
    whatsappMessage:
      'Hi Sathish, I want a Logistics & Transport Management Software. Please share details.',
  },
  {
    id: 'restaurant-food-ordering',
    title: 'Restaurant, Cafe & Food Ordering Sites',
    tamilTitle: 'ஹோட்டல் & உணவக இணையதளம்',
    badge: 'Food & Hospitality',
    icon: 'UtensilsCrossed',
    description:
      'Modern digital menu and food ordering websites for restaurants, cafes, and bakeries with contactless QR menu and takeaway order support.',
    targetClients: 'Restaurants, Cafes, Bakeries, Cloud Kitchens & Caterers',
    keyFeatures: [
      'Visual digital food menu with prices and photos',
      'Table reservation system with instant confirmation',
      'Takeaway online ordering forwarded straight to WhatsApp',
      'Customer feedback collection & Google review link',
    ],
    demoTag: 'Fast Setup',
    whatsappMessage:
      'Hi Sathish, I want a Restaurant Website with Digital Menu. Please share details and pricing.',
  },
  {
    id: 'booking-appointment-systems',
    title: 'Booking & Appointment Systems',
    tamilTitle: 'முன்பதிவு & அப்பாயிண்ட்மென்ட் சாப்ட்வேர்',
    badge: 'Automated Booking',
    icon: 'Calendar',
    description:
      'Interactive online booking systems for cinemas, event halls, salons, and consultants with visual seat/time-slot selection.',
    targetClients: 'Cinemas, Event Halls, Salons, Spas & Consultants',
    keyFeatures: [
      'Interactive visual seat matrix or calendar time slots',
      'Automated booking confirmation via SMS / WhatsApp',
      'Digital ticket / pass generation with QR code',
      'Admin dashboard to manage schedule and capacity',
    ],
    demoTag: 'Interactive UI',
    whatsappMessage:
      'Hi Sathish, I want an Online Booking & Appointment System. Please share details.',
  },
  {
    id: 'personal-portfolio-websites',
    title: 'Personal Portfolio & Professional Websites',
    tamilTitle: 'தனிநபர் & துறை வல்லுநர் இணையதளங்கள்',
    badge: 'Personal Branding',
    icon: 'User',
    description:
      'Stand out from the crowd with a sleek personal portfolio showcasing your resume, projects, skills, and contact info for high-paying roles and clients.',
    targetClients: 'Doctors, Lawyers, Photographers, Artists, Freelancers, Job Seekers',
    keyFeatures: [
      'Modern glassmorphic or minimalist layout',
      'Downloadable PDF resume & interactive project previews',
      'Social links, direct call, and email integration',
      'Ultra-fast loading speed with custom domain',
    ],
    demoTag: 'Personal Brand',
    whatsappMessage:
      'Hi Sathish, I want a Personal Portfolio Website. Please share details and pricing.',
  },
  {
    id: 'website-redesign-maintenance',
    title: 'Website Redesign & Maintenance',
    tamilTitle: 'பழைய இணையதளங்களை புதுப்பித்தல்',
    badge: 'Modern Upgrade',
    icon: 'Sparkles',
    description:
      'Give your old or slow website a fresh modern look with 3x faster loading speed, 100% mobile compatibility, and ongoing monthly maintenance.',
    targetClients: 'Existing website owners seeking better sales and design',
    keyFeatures: [
      'Complete UI/UX redesign with modern responsive layouts',
      'Speed optimization for instant mobile loading',
      'SSL certificate, security updates & monthly backups',
      'Bug fixes, content updates & technical support',
    ],
    demoTag: 'Speed Boost',
    whatsappMessage:
      'Hi Sathish, I have an existing website and want to redesign/improve it. Please review.',
  },
];

// Live project demos showcase with actual PNG screenshots
export const PROJECTS_DATA = [
  {
    id: 'inventory-billing-system',
    title: 'Inventory & POS Billing System',
    category: 'Commercial POS & Stock Solution',
    type: 'Billing & POS Software',
    image: inventoryBillingImg,
    description:
      'Full-featured Point-of-Sale (POS) and inventory control software built for retail shops and workshops. Features fast barcode scanning, automated GST invoices, low-stock warnings, and revenue analytics.',
    clientBenefit:
      'Helps shop and workshop owners bill customers in seconds, avoid stock shortages, and track daily profit effortlessly.',
    highlights: [
      'Fast barcode scanner checkout with instant thermal receipt print',
      'Automated GST tax calculation and professional PDF invoice generation',
      'Real-time inventory audit with automatic low-stock threshold alerts',
      'Customer credit/debit ledger and daily profit & sales analytics',
    ],
    technologies: ['React.js', 'PHP / Laravel', 'MySQL', 'Chart.js', 'CSS3'],
    repoUrl: 'https://github.com/sathishmgs',
    liveUrl: 'https://github.com/sathishmgs',
    demoType: 'POS Software',
  },
  {
    id: 'logistics-fleet-system',
    title: 'Logistics & Fleet Transport System',
    category: 'Supply Chain & Distribution Platform',
    type: 'Logistics Software',
    image: logisticsImg,
    description:
      'End-to-end logistics platform designed for courier and transport companies to manage consignment manifests, vehicle routing, driver delivery schedules, and real-time customer parcel tracking.',
    clientBenefit:
      'Enables logistics operators to track fleet vehicles in real time and offers customers live AWB tracking.',
    highlights: [
      'Consignment booking with automatic AWB tracking number generation',
      'Hub-to-hub manifest creation and carrier vehicle load dispatching',
      'Driver delivery logs and digital Proof of Delivery (POD)',
      'Customer-facing parcel tracking portal with live transit updates',
    ],
    technologies: ['React.js', 'Node.js', 'PHP', 'MySQL', 'RESTful APIs', 'CSS3'],
    repoUrl: 'https://github.com/sathishmgs',
    liveUrl: 'https://github.com/sathishmgs',
    demoType: 'Logistics System',
  },
  {
    id: 'flower-shop-ecommerce',
    title: 'Flower Shop E-Commerce Website',
    category: 'Online Store & E-Commerce',
    type: 'E-Commerce Website',
    image: flowerShopImg,
    description:
      'A responsive floral e-commerce storefront with dynamic bouquet catalog, real-time pricing calculation, interactive shopping cart, and smooth order checkout flow.',
    clientBenefit:
      'Allows retail shops to showcase beautiful products and accept customer orders online easily.',
    highlights: [
      'Interactive floral catalog with categorization and live price calculations',
      'Persistent shopping cart with dynamic total amount calculator',
      'Smooth responsive ordering interface with contact integration',
      'Live deployed on Vercel at flowershop-rouge-eight.vercel.app',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    repoUrl: 'https://github.com/sathishmgs',
    liveUrl: 'https://flowershop-rouge-eight.vercel.app',
    demoType: 'Live Online Store',
  },
  {
    id: 'aquarium-shop-management',
    title: 'Aquarium Shop Management System',
    category: 'Full-Stack Web Application',
    type: 'E-Commerce & Inventory',
    image: aquariumShopImg,
    description:
      'A dynamic database-driven web application featuring aquatic species inventory, secure customer authentication, shopping cart, and automated stock calculation via MySQL.',
    clientBenefit:
      'Provides specialty store owners with combined inventory management and online customer purchasing.',
    highlights: [
      'Product and aquatic species inventory tracking with photo previews',
      'Customer accounts, login authentication, and cart persistence',
      'Direct relational MySQL CRUD operations with order logging',
      'Mobile-friendly responsive storefront and admin control',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    repoUrl: 'https://github.com/sathishmgs',
    liveUrl: 'https://github.com/sathishmgs',
    demoType: 'Web Application',
  },
  {
    id: 'cinema-booking-system',
    title: 'Movie Ticket Booking System',
    category: 'Interactive Web Application',
    type: 'Booking System',
    image: movieBookingImg,
    description:
      'An interactive cinema booking application offering movie schedule selection, real-time interactive seat matrix selection, and dedicated admin controls.',
    clientBenefit:
      'Demonstrates interactive seat/slot booking logic with categorized ticket pricing and instant confirmations.',
    highlights: [
      'Dynamic movie catalog with genre filtering and showtime picker',
      'Interactive seat map with real-time visual seat availability state',
      'Admin dashboard for movie scheduling and hall seat configuration',
      'Fast client-side state handling with React components',
    ],
    technologies: ['React.js', 'JavaScript (ES6+)', 'CSS3', 'HTML5'],
    repoUrl: 'https://github.com/sathishmgs',
    liveUrl: 'https://github.com/sathishmgs',
    demoType: 'Booking System',
  },
];

// Initial real client feedback & reviews data
export const INITIAL_CLIENT_REVIEWS = [
  {
    id: 'rev-1',
    name: 'K. Murugan',
    business: 'Murugan Two-Wheeler Auto Care',
    category: 'Bike Service & Workshop',
    location: 'Rajapalayam',
    rating: 5,
    date: 'February 2026',
    comment:
      'The workshop billing software with job card feature is excellent! We easily track spare parts and mechanic labor, and customer service reminders on WhatsApp brought repeated bike service customers. Highly recommended!',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'R. Senthil Kumar',
    business: 'Sri Krishna Textiles & Readymades',
    category: 'Retail Clothing Shop',
    location: 'Sivakasi',
    rating: 5,
    date: 'January 2026',
    comment:
      'Sathish built our barcode billing system and inventory management within a week. Simple to use on mobile and computer, and training in Tamil was very clear.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Anitha Raj',
    business: 'Fresh Bloom Florals & Gifts',
    category: 'Online Flower Store',
    location: 'Madurai',
    rating: 5,
    date: 'December 2025',
    comment:
      'Our online flower shop website works smoothly. Customers order directly and orders come to our WhatsApp immediately. Clean mobile responsive design and fast delivery!',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'M. Pandian',
    business: 'SpeedExpress Logistics & Parcels',
    category: 'Logistics & Transport',
    location: 'Virudhunagar',
    rating: 5,
    date: 'November 2025',
    comment:
      'Live consignment tracking and dispatch management helped organize our daily parcel runs. Fast support anytime we need help.',
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'G. Vignesh',
    business: 'Vignesh Car Care & Garage',
    category: 'Automobile Garage & Workshop',
    location: 'Rajapalayam',
    rating: 5,
    date: 'October 2025',
    comment:
      'Customer billing with GST breakdown and spare parts stock management runs very smooth. Zero technical hassle and works perfectly on our mobile phones.',
    verified: true,
  },
];

// 4-Step Working Process for Clients
export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Share Your Requirement',
    tamilTitle: 'உங்களின் தேவையை கூறுங்கள்',
    description:
      'Call or WhatsApp us to discuss what kind of website or software your business needs. No technical terms required—just tell us your vision!',
    icon: 'MessageSquare',
  },
  {
    step: '02',
    title: 'Free Plan & Price Quote',
    tamilTitle: 'இலவச திட்ட வடிவம் & மதிப்பீடு',
    description:
      'We provide a clear layout design preview, timeline, and an affordable, transparent price quote with zero hidden charges.',
    icon: 'FileText',
  },
  {
    step: '03',
    title: 'We Build & Test',
    tamilTitle: 'விரைவான உருவாக்கம் & சோதனை',
    description:
      'We develop your custom website or billing software, ensuring it is 100% mobile-friendly, secure, and tested on all devices.',
    icon: 'Code2',
  },
  {
    step: '04',
    title: 'Live Launch & Easy Training',
    tamilTitle: 'வெளியீடு & எளிய பயிற்சி',
    description:
      'We launch your website live, connect your domain, and guide you step-by-step in Tamil or English on how to use it effortlessly.',
    icon: 'Rocket',
  },
];

// Why clients choose MGS Freelance
export const CLIENT_BENEFITS = [
  {
    title: '100% Mobile & Computer Friendly',
    description:
      'Your website or software works smoothly on Android phones, iPhones, tablets, and computers with automatic responsive scaling.',
    icon: 'Smartphone',
  },
  {
    title: 'Super Simple To Operate',
    description:
      'No complex technical skills needed. We design simple, easy-to-use interfaces and provide personal training in Tamil or English.',
    icon: 'Smile',
  },
  {
    title: 'Affordable For Small Businesses',
    description:
      'Quality digital solutions at budget-friendly rates. Ideal for local shops, workshops, startups, and growing businesses.',
    icon: 'BadgePercent',
  },
  {
    title: 'Fast Turnaround & Delivery',
    description:
      'We value your time. We build and deliver your completed website or software quickly without unnecessary delays.',
    icon: 'Zap',
  },
  {
    title: 'WhatsApp & Online Payment Ready',
    description:
      'Easily receive customer orders directly on your WhatsApp and accept UPI, Google Pay, PhonePe, and Card payments.',
    icon: 'CreditCard',
  },
  {
    title: 'Free Support & Maintenance',
    description:
      'You are never left alone after launch. We provide free post-launch support and technical assistance whenever you need it.',
    icon: 'ShieldCheck',
  },
];

// Client FAQs answered simply
export const FAQS = [
  {
    q: 'How much does a website or billing software cost?',
    a: 'Our pricing is very affordable and depends on your business requirements. We have budget-friendly starter packages for small shops and custom quotes for larger systems. Contact us on WhatsApp for an instant free quote!',
  },
  {
    q: 'Can I use the billing software or website on my mobile phone?',
    a: 'Yes, absolutely! Every website and software we build is 100% mobile responsive. You can monitor your sales, view stock, or manage customer orders directly from your smartphone.',
  },
  {
    q: 'Will you teach me how to use the software?',
    a: 'Yes! We provide complete, step-by-step guidance in Tamil or English. We show you how to add products, create job cards, print bills, and view reports so you can manage everything with confidence.',
  },
  {
    q: 'Can customers order directly through WhatsApp?',
    a: 'Yes! We can integrate a 1-click WhatsApp order button into your website so customers can send their product choices straight to your WhatsApp number.',
  },
  {
    q: 'How long does it take to deliver my project?',
    a: 'Standard business websites take 3 to 7 days. E-commerce stores and workshop/billing systems take 5 to 10 days, depending on customization. We always deliver on time.',
  },
  {
    q: 'How do I get started?',
    a: 'Getting started is super simple! Just chat with us on WhatsApp or click the "Contact Us" button below.',
  },
];
