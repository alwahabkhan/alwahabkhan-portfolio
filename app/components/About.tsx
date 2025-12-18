import Image from 'next/image';
import { Code, DesignServices, CloudQueue } from '@mui/icons-material';

export default function About() {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: DesignServices,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces',
    },
    {
      icon: CloudQueue,
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/next.svg"
                alt="About me"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              M Alwahab Ali Khan
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I am a full-stack developer (MERN stack) with 3 years of experience creating robust and scalable web applications. 
              Proficient in building efficient backend systems with Node.js and Express while crafting dynamic and responsive 
              frontends using React Js.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Experienced in database management with MongoDB and integrating APIs. Strong problem-solving abilities and a keen 
              eye for detail. Committed to delivering high-quality code and continuously learning new technologies to stay at the 
              forefront of Front-End and Back-End web development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My expertise includes working with Docker for containerizing applications, deploying to AWS and Vercel using CI/CD 
              pipelines, and utilizing various databases including PostgreSQL and MySQL for relational data management.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Icon className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

