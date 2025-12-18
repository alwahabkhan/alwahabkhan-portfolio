import { 
  Web, 
  Smartphone, 
  CloudQueue, 
  Code, 
  DesignServices,
  Settings,
  ArrowForward
} from '@mui/icons-material';

export default function Services() {
  const services = [
    {
      icon: Web,
      title: 'Web Development',
      description: 'Building responsive and modern web applications using the latest technologies and best practices.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications with excellent user experience and performance.',
    },
    {
      icon: CloudQueue,
      title: 'Cloud Solutions',
      description: 'Designing and deploying scalable cloud-based solutions on AWS, Azure, and other platforms.',
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'Developing robust RESTful and GraphQL APIs with proper documentation and security measures.',
    },
    {
      icon: DesignServices,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that enhance user experience and engagement.',
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Providing ongoing maintenance, updates, and technical support for existing applications.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-3xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900 rounded-xl p-12 md:p-16 text-white">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Do you have a Project Idea?<br />
              Let's discuss your project!
            </h3>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              I'm always open to discussing new projects and creative ideas. Let's
              connect and build something amazing together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Let's work Together
              <ArrowForward />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

