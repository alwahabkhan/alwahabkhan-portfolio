'use client';

import Image from 'next/image';
import { ArrowDownward } from '@mui/icons-material';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in">
              M Alwahab Ali Khan
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Full Stack Developer (MERN Stack)
            </p>
            
            <p className="text-lg md:text-xl mb-8 text-blue-50 leading-relaxed">
              With 3 years of experience creating robust and scalable web applications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Side - Vertical Carousels */}
          <div className="flex justify-center gap-12">
            <div className="relative h-[500px] md:h-[600px] w-32 overflow-hidden">
              {/* First Carousel - Scrolling Up */}
              <div className="animate-scroll-vertical-up">
                {duplicatedTools.map((tool, index) => (
                  <div
                    key={`up-${index}`}
                    className="flex-shrink-0 my-4 flex flex-col items-center justify-center group"
                  >
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg p-3">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={60}
                        height={60}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] md:h-[600px] w-32 overflow-hidden">
              {/* Second Carousel - Scrolling Down */}
              <div className="animate-scroll-vertical-down">
                {duplicatedTools.map((tool, index) => (
                  <div
                    key={`down-${index}`}
                    className="flex-shrink-0 my-4 flex flex-col items-center justify-center group"
                  >
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg p-3">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={60}
                        height={60}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-blue-200 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDownward className="text-4xl" />
        </button>
      </div>
    </section>
  );
}

