export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  images: string[];
  liveUrl: string;
  githubUrl: string;
  company: string;
  role: string;
  timeline: {
    startDate: string;
    endDate: string;
    duration: string;
  };
  responsibilities: string[];
  achievements: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'nexkey',
    title: 'Nexkey – Smart IoT Lock Management System',
    description: 'A complete IoT-based smart lock management system that allows users to lock and unlock doors through both mobile applications and a web portal with advanced business logic for secure access control.',
    fullDescription: 'NexKey is a comprehensive IoT-based smart lock management system (US-Based Project) that enables users to control smart locks through mobile applications and web portals. The system features advanced business logic including automatic unlocking during business hours, blackout periods for restricted access, and multi-level access control (Owner, Admin, User). The platform includes grouping functionality for managing locks via groups with role-based permissions, an internal portal for key sharing and customer management, and a user web portal with analytics and personalized lock control features.',
    technologies: ['React.js', 'Material UI', 'Redux Toolkit', 'Node.js', 'Express.js', 'Parse Server', 'Java SpringBoot', 'MongoDB', 'Heroku', 'AWS EC2'],
    images: ['/Nexkey PIcture.png', '/nexkey picture 2.png', '/nexkey picture 3.png'],
    liveUrl: 'https://portal.nexkey.com/',
    githubUrl: '#',
    company: 'US-Based Project',
    role: 'Backend Developer (Primary) / Frontend Developer',
    timeline: {
      startDate: 'June 2024',
      endDate: 'December 2025',
      duration: '18 months'
    },
    responsibilities: [
      'Developed and optimized REST APIs using Node.js, Express, and Parse Server',
      'Created multiple cron jobs for automated tasks and system maintenance',
      'Designed backend architecture, logic flow, and system structures',
      'Worked on Java Spring Boot grouping service, handling authorization and business logic',
      'Debugging, fixing issues, and improving system reliability',
      'Built the Analytics Dashboard using React and Material UI',
      'Designed and developed the Broadcast feature (complete UI/UX + integration)',
      'Managed and improved the User Web Portal functionality',
      'Worked with Redux Toolkit for global state management',
      'Implemented IoT-based smart lock control (unlock/lock devices via mobile or web)',
      'Developed business hours automation (locks automatically stay unlocked during business hours)',
      'Implemented blackout functionality (no access allowed during blackout; only Admins and Owners can override)',
      'Created access level management system (Owner, Admin, User roles)',
      'Developed grouping functionality for managing locks via groups with role assignments',
      'Built internal portal features: share key ownership, manage customers, download reports, view all locks',
      'Developed user web portal: view lock activity, access personalized analytics, manage individual customers and locks, add/remove business hours and blackouts, lock/unlock controls'
    ],
    achievements: [
      'Gained strong experience in IoT systems and smart lock management',
      'Developed scalable backend architecture for cloud deployment',
      'Successfully integrated multiple services (Parse Server, Spring Boot, Express)',
      'Implemented complex business logic for access control and security',
      'Built comprehensive analytics dashboard for user insights',
      'Deployed frontend on Heroku and backend on AWS EC2',
      'Developed business-critical functionalities for production use',
      'Enhanced system reliability through debugging and optimization'
    ]
  },
  {
    id: '2',
    slug: 'hm-ecommerce',
    title: 'H&M E-Commerce',
    description: 'Full-stack e-commerce solution for H&M with admin dashboard, inventory management, and user authentication.',
    fullDescription: 'A complete e-commerce solution for H&M featuring a modern shopping interface, comprehensive admin dashboard, and robust inventory management system. The platform includes advanced features like product filtering, search functionality, shopping cart, wishlist, order tracking, and customer reviews. The admin panel provides real-time analytics, inventory tracking, and order management capabilities.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Express', 'Tailwind CSS', 'Prisma', 'NextAuth'],
    images: ['/H and M.jpg', '/landing3.jpg', '/landing4.jpg'],
    liveUrl: '#',
    githubUrl: '#',
    company: 'H&M Group',
    role: 'Senior Full Stack Developer',
    timeline: {
      startDate: 'March 2023',
      endDate: 'September 2023',
      duration: '7 months'
    },
    responsibilities: [
      'Architected the entire application using Next.js and TypeScript',
      'Developed admin dashboard with real-time analytics',
      'Implemented inventory management system with PostgreSQL',
      'Created secure authentication system using NextAuth',
      'Built RESTful APIs for product and order management',
      'Designed responsive UI components with Tailwind CSS',
      'Implemented advanced search and filtering capabilities'
    ],
    achievements: [
      'Delivered project 2 weeks ahead of schedule',
      'Improved inventory accuracy by 95%',
      'Reduced checkout abandonment rate by 40%',
      'Successfully handled 50,000+ concurrent users'
    ]
  },
  {
    id: '3',
    slug: 'zara-fashion',
    title: 'Zara Fashion Platform',
    description: 'E-commerce platform for Zara with real-time inventory, product catalog, and secure checkout system.',
    fullDescription: 'A sophisticated e-commerce platform for Zara featuring real-time inventory management, comprehensive product catalog, and secure checkout system. The platform includes features like size and color variations, product recommendations, customer reviews, and seamless payment processing. Built with scalability in mind, it handles high traffic volumes during sales events.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Material UI', 'Socket.io', 'Redis', 'JWT'],
    images: ['/zara-forum6257.jpg', '/landing5.jpg', '/landing6.jpg'],
    liveUrl: '#',
    githubUrl: '#',
    company: 'Inditex (Zara)',
    role: 'Full Stack Developer',
    timeline: {
      startDate: 'July 2023',
      endDate: 'December 2023',
      duration: '6 months'
    },
    responsibilities: [
      'Developed frontend components using React and Material UI',
      'Implemented real-time inventory updates using Socket.io',
      'Built scalable backend APIs with Node.js and Express',
      'Designed MongoDB schemas for products and orders',
      'Implemented caching strategies using Redis',
      'Created secure authentication with JWT tokens',
      'Developed responsive mobile-first design'
    ],
    achievements: [
      'Reduced inventory discrepancies by 90%',
      'Improved page load speed by 60%',
      'Successfully handled Black Friday traffic spike',
      'Achieved zero downtime during major sales events'
    ]
  },
  {
    id: '4',
    slug: 'smartfolio',
    title: 'SmartFolio',
    description: 'An AI-Powered Web Application with AI-generated cover letters, customizable resume builder, and portfolio generator features.',
    fullDescription: 'SmartFolio is an innovative AI-powered web application that revolutionizes job application processes. The platform features an AI-generated cover letter system with an interactive questionnaire that collects user information to create personalized cover letters. It includes resume and job description matching that analyzes compatibility before generating cover letters, ensuring relevance and quality through conditional generation. The application also offers a customizable resume builder with multiple templates and multilingual support, allowing users to translate resumes into different languages. Additionally, it includes a portfolio generator for showcasing projects with detailed descriptions and shareable links. The application implements robust security with Http-only cookies for authentication, protected routes for sensitive operations, and comprehensive error handling throughout.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AI/ML', 'Material UI', 'JWT', 'MERN Stack'],
    images: ['/Smartfolio 1.png', '/Smartfolio 2.png', '/Smartfolio 3.png'],
    liveUrl: '#',
    githubUrl: 'https://github.com/alwahabkhan/smartfolio-mern',
    company: 'Personal Project',
    role: 'Full Stack Developer',
    timeline: {
      startDate: 'October 2023',
      endDate: 'May 2024',
      duration: '8 months'
    },
    responsibilities: [
      'Developed AI-powered cover letter generation system with interactive questionnaire',
      'Implemented resume and job description matching algorithm for compatibility analysis',
      'Created conditional generation logic to ensure cover letter relevance and quality',
      'Built customizable resume builder with multiple template options',
      'Implemented multilingual support for resume translation',
      'Developed portfolio generator with project showcase and shareable links',
      'Implemented secure authentication using Http-only cookies generated server-side',
      'Created protected routes for sensitive operations (shipping, payment methods)',
      'Designed and developed robust error handling throughout the application',
      'Built RESTful APIs using Node.js and Express',
      'Designed MongoDB database schemas for user data, resumes, and portfolios',
      'Developed frontend components using React and Material UI',
      'Implemented secure session management and authentication flow'
    ],
    achievements: [
      'Successfully integrated AI/ML capabilities for intelligent cover letter generation',
      'Developed advanced matching algorithm for resume-job description compatibility',
      'Created multilingual resume translation feature for broader reach',
      'Implemented comprehensive security measures with Http-only cookies',
      'Built user-friendly interface with multiple customizable templates',
      'Developed shareable portfolio links for easy access and sharing',
      'Created robust error handling system for enhanced user experience',
      'Successfully deployed full-stack MERN application'
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

