import aquariumShopImg from '../assets/images/project-aquarium-shop.svg';
import movieBookingImg from '../assets/images/project-movie-booking.svg';
import collegeManagementImg from '../assets/images/project-college-management.svg';
import flowerShopImg from '../assets/images/project-flower-shop.svg';
import laravelBookstoreImg from '../assets/images/project-laravel-bookstore.svg';

export const PROJECT_FILTERS = ['All', 'React', 'PHP', 'Laravel', 'JavaScript'];

export const PROJECTS_DATA = [
  {
    id: 'aquarium-shop',
    title: 'Aquarium Shop Management System',
    category: 'Full Stack Web Application',
    image: aquariumShopImg,
    description:
      'An aquarium shop management application to manage products, customers, cart operations and orders.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    filterTags: ['PHP', 'JavaScript'],
    highlights: [
      'Product and aquatic species inventory management',
      'Customer accounts and authentication',
      'Interactive cart operations and live total calculation',
      'Structured order placement and MySQL transaction records',
    ],
    details: {
      overview:
        'A comprehensive database-driven web application designed for aquarium retailers. It centralizes fish and supply cataloging, customer orders, and inventory tracking through a responsive interface powered by PHP and MySQL.',
      keyFeatures: [
        'Admin dashboard to add, edit, and delete fish stock and supplies',
        'Customer shopping cart with quantity adjustments and session persistence',
        'Order placement workflow with MySQL relational tables',
        'Clean, responsive design for desktop and mobile shoppers',
      ],
      techStack: 'HTML5, CSS3, JavaScript, PHP 8, MySQL',
      architecture: 'Client-Server MVC architecture with PHP backend and relational MySQL schema.',
    },
    githubUrl: '', // Editable placeholder: e.g. 'https://github.com/your-username/aquarium-shop'
    liveUrl: '', // Editable placeholder: e.g. 'https://your-demo-url.com'
  },
  {
    id: 'mgs-cinema',
    title: 'M-G-S Cinema – Movie Ticket Booking System',
    category: 'Interactive Web Application',
    image: movieBookingImg,
    description:
      'A movie ticket booking application with movie listings, booking interface and administrative features.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'PHP'],
    filterTags: ['React', 'JavaScript', 'PHP'],
    highlights: [
      'Interactive seat map with visual selection state',
      'Dynamic movie listings, showtimes, and genre filters',
      'Admin controls for movie scheduling and hall capacity',
      'Ticket confirmation workflow with LocalStorage / PHP storage',
    ],
    details: {
      overview:
        'A full-featured cinema ticketing web application with modern React frontend components and PHP backend support. Provides cinema-goers with a seamless seat reservation experience and provides cinema managers with scheduling tools.',
      keyFeatures: [
        'Real-time interactive seat matrix with categorized pricing tiers',
        'Detailed movie cards with synopsis, trailers, and showtime slots',
        'Admin portal for adding new releases and monitoring booked seats',
        'Client-side state management for fast, smooth booking interactions',
      ],
      techStack: 'React.js, Modern JavaScript, HTML5, CSS3, PHP / LocalStorage',
      architecture: 'Component-based UI with reactive booking state and administrative API endpoints.',
    },
    githubUrl: '', // Editable placeholder: e.g. 'https://github.com/your-username/mgs-cinema'
    liveUrl: '', // Editable placeholder: e.g. 'https://your-demo-url.com'
  },
  {
    id: 'college-management',
    title: 'College Management System',
    category: 'Database-Driven Web Application',
    image: collegeManagementImg,
    description:
      'A web-based college management application designed to manage academic and administrative information.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    filterTags: ['PHP'],
    highlights: [
      'Student and faculty academic profile management',
      'Departmental course catalogs and subject enrollments',
      'Normalized MySQL database with relational integrity',
      'Administrative reporting and record filtering',
    ],
    details: {
      overview:
        'An academic ERP web application tailored for educational institutions. Designed to manage student enrollments, faculty allocations, course curricula, and administrative records with strong relational database modeling.',
      keyFeatures: [
        'Student information system with roll-number lookup and profile records',
        'Staff directory with departmental assignments and course teaching logs',
        'Secure session-based administrative login and role controls',
        'Structured database schemas with foreign key relationships for reliable data flow',
      ],
      techStack: 'PHP, MySQL, HTML5, CSS3',
      architecture: 'Modular PHP backend with MySQL relational database and server-rendered templates.',
    },
    githubUrl: '', // Editable placeholder: e.g. 'https://github.com/your-username/college-management-system'
    liveUrl: '', // Editable placeholder: e.g. 'https://your-demo-url.com'
  },
  {
    id: 'flower-shop',
    title: 'Flower Shop Website',
    category: 'Responsive Storefront',
    image: flowerShopImg,
    description:
      'A responsive flower shop website with product listings, pricing and shopping-related user interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    filterTags: ['JavaScript'],
    highlights: [
      'Vibrant product catalog with floral imagery and categories',
      'Transparent pricing and item details breakdown',
      'Interactive shopping cart drawer with live subtotal',
      'Fully responsive mobile-first UI layout',
    ],
    details: {
      overview:
        'An elegant e-commerce storefront for floral boutiques. Crafted with clean HTML5 markup, responsive CSS3 styling, and JavaScript cart interactions to deliver a delightful shopping experience on any device.',
      keyFeatures: [
        'Curated floral collections: roses, exotic orchids, bouquets, and occasion flowers',
        'Real-time cart badge counter and price calculation using vanilla JavaScript',
        'Quick view product modal with high-resolution imagery and flower care tips',
        'Smooth animations, accessible button states, and zero third-party framework dependencies',
      ],
      techStack: 'HTML5, CSS3, Modern JavaScript (ES6+)',
      architecture: 'Lightweight client-side application optimized for instant load times and high visual appeal.',
    },
    githubUrl: '', // Editable placeholder: e.g. 'https://github.com/your-username/flower-shop-website'
    liveUrl: '', // Editable placeholder: e.g. 'https://your-demo-url.com'
  },
  {
    id: 'laravel-bookstore',
    title: 'Laravel Bookstore Application',
    category: 'Laravel MVC Application',
    image: laravelBookstoreImg,
    description:
      'A Laravel-based bookstore application with book management and CRUD functionality.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    filterTags: ['Laravel', 'PHP'],
    highlights: [
      'Comprehensive CRUD engine for books, authors, and genres',
      'Eloquent ORM relationships and database migrations',
      'Form request validations and error feedback',
      'Blade component architecture with responsive layout',
    ],
    details: {
      overview:
        'A robust web application engineered using the Laravel PHP framework. Implements complete Create, Read, Update, and Delete (CRUD) operations for book cataloging, inventory stock levels, and genre classifications.',
      keyFeatures: [
        'Resource controllers handling full book lifecycle operations',
        'Eloquent relationships between books, authors, and categories',
        'Database seeders and migration files for reproducible schema deployment',
        'Flash message notifications, CSRF protection, and server-side validation',
      ],
      techStack: 'Laravel 10.x, PHP 8, MySQL, Blade, Bootstrap / Custom CSS',
      architecture: 'Model-View-Controller (MVC) architecture leveraging Eloquent ORM and MySQL.',
    },
    githubUrl: '', // Editable placeholder: e.g. 'https://github.com/your-username/laravel-bookstore'
    liveUrl: '', // Editable placeholder: e.g. 'https://your-demo-url.com'
  },
];
