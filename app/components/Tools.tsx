'use client';

import Image from 'next/image';

export default function Tools() {
  const tools = [
    { name: 'GitHub', image: '/GitHub.png' },
    { name: 'VS Code', image: '/Visual Studio Code (VS Code).png' },
    { name: 'AWS', image: '/AWS.png' },
    { name: 'MongoDB', image: '/MongoDB.png' },
    { name: 'PostgreSQL', image: '/PostgresSQL.png' },
    { name: 'Vercel', image: '/Vercel.png' },
    { name: 'Heroku', image: '/Heroku.png' },
    { name: 'Postman', image: '/Postman.png' },
    { name: 'Git', image: '/Git.png' },
    { name: 'Node.js', image: '/Node.js.png' },
    { name: 'Express', image: '/Express.png' },
    { name: 'React', image: '/React.png' },
    { name: 'Next.js', image: '/Next.js.png' },
    { name: 'JavaScript', image: '/JavaScript.png' },
    { name: 'TypeScript', image: '/TypeScript.png' },
    { name: 'HTML5', image: '/HTML5.png' },
    { name: 'CSS3', image: '/CSS3.png' },
    { name: 'Tailwind CSS', image: '/Tailwind CSS.png' },
    { name: 'Material UI', image: '/Material UI.png' },
    { name: 'GraphQL', image: '/GraphQL.png' },
    { name: 'Firebase', image: '/Firebase.png' },
    { name: 'MySQL', image: '/MySQL.png' },
    { name: 'Nest.js', image: '/Nest.js.png' },
    { name: 'Vite', image: '/Vite.js.png' },
    { name: 'NPM', image: '/NPM.png' },
    { name: 'Linux', image: '/Linux.png' },
    { name: 'Jira', image: '/Jira.png' },
    { name: 'Slack', image: '/Slack.png' },
  ];

  // Duplicate tools for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools];

  return (
    <section id="tools" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tools & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've had the pleasure of working with a diverse range of tools and technologies, from development environments to cloud platforms.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Carousel */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedTools.map((tool, index) => {
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-6 flex flex-col items-center justify-center group"
                  >
                    <div className="w-32 h-32 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 hover:shadow-lg p-4">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={80}
                        height={80}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {tool.name}
                    </span>
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

