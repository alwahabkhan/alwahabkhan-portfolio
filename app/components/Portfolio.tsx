import Image from 'next/image';
import { Launch, Code as CodeIcon, GitHub } from '@mui/icons-material';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/next.svg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
      image: '/next.svg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
      technologies: ['React', 'D3.js', 'Express', 'MySQL'],
      image: '/next.svg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
      technologies: ['Next.js', 'OpenWeather API', 'Tailwind CSS'],
      image: '/next.svg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, SEO optimization, and content management system.',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      image: '/next.svg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'API Gateway',
      description: 'Microservices API gateway with authentication, rate limiting, and request routing capabilities.',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
      image: '/next.svg',
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
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80"
                />
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

