'use client';

import Image from 'next/image';
import { Launch, Code as CodeIcon, GitHub } from '@mui/icons-material';
import { useState } from 'react';

export default function Portfolio() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const projects = [
    {
      title: 'Nike Project',
      description: 'A modern e-commerce platform for Nike products with seamless shopping experience and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/NIKE_-_WMoN.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'H&M E-Commerce',
      description: 'Full-stack e-commerce solution for H&M with admin dashboard, inventory management, and user authentication.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Express'],
      image: '/H and M.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Zara Fashion Platform',
      description: 'E-commerce platform for Zara with real-time inventory, product catalog, and secure checkout system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Material UI'],
      image: '/zara-forum6257.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Adidas Store',
      description: 'Modern online store for Adidas products with advanced filtering, search, and recommendation features.',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Tailwind CSS'],
      image: '/ADIDAS.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Sephora Beauty Platform',
      description: 'E-commerce platform for beauty products with product reviews, wishlist, and personalized recommendations.',
      technologies: ['React', 'Express', 'MySQL', 'Redis'],
      image: '/Sephora_2_1.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Victoria\'s Secret',
      description: 'Luxury fashion e-commerce platform with elegant UI, secure payments, and customer loyalty program.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/Victoria_s_Secret_Westfield_Stratford_City.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Fashion Retail Platform',
      description: 'Comprehensive retail management system with inventory tracking, sales analytics, and customer management.',
      technologies: ['React', 'Express', 'PostgreSQL', 'AWS'],
      image: '/_F1A0822.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Westfield Shopping Center',
      description: 'Interactive platform for shopping center with store locator, events calendar, and directory features.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Mapbox'],
      image: '/WESTFIELD_CENTURY_CITY_TAYLOR_SWIFT_2.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Retail Management System',
      description: 'Enterprise retail solution with POS integration, inventory management, and comprehensive reporting.',
      technologies: ['React', 'Node.js', 'MySQL', 'Docker'],
      image: '/DSC07901.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                {imageErrors[index] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                    <CodeIcon className="text-white text-6xl opacity-50" />
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80"
                    onError={() => handleImageError(index)}
                    unoptimized
                  />
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <Launch className="mr-1" />
                    <span className="text-sm">Live</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    <GitHub className="mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

