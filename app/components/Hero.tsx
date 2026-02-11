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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex items-center justify-center min-h-screen">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center justify-center w-full py-8 md:py-20">
          {/* Carousels - Shown first on mobile, second on desktop */}
          <div className="flex justify-center gap-6 md:gap-12 order-1 md:order-2">
            <div className="relative h-[300px] sm:h-[350px] md:h-[600px] w-24 sm:w-28 md:w-32 overflow-hidden">
              {/* First Carousel - Scrolling Up */}
              <div className="animate-scroll-vertical-up">
                {duplicatedTools.map((tool, index) => (
                  <div
                    key={`up-${index}`}
                    className="flex-shrink-0 my-3 sm:my-4 flex flex-col items-center justify-center group"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg p-2 sm:p-3">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={60}
                        height={60}
                        className="w-10 h-10 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[350px] md:h-[600px] w-24 sm:w-28 md:w-32 overflow-hidden">
              {/* Second Carousel - Scrolling Down */}
              <div className="animate-scroll-vertical-down">
                {duplicatedTools.map((tool, index) => (
                  <div
                    key={`down-${index}`}
                    className="flex-shrink-0 my-3 sm:my-4 flex flex-col items-center justify-center group"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg p-2 sm:p-3">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={60}
                        height={60}
                        className="w-10 h-10 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Content - Shown second on mobile, first on desktop */}
          <div className="text-center md:text-left order-2 md:order-1 overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white animate-slide-in-from-left">
              M Alwahab Ali Khan
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-blue-100 animate-slide-in-from-left-delay-1">
              Full Stack Developer
            </p>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-blue-50 leading-relaxed animate-slide-in-from-left-delay-2">
              With 6 years of experience creating robust and scalable web applications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start animate-slide-in-from-left-delay-3">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105 text-sm sm:text-base"
              >
                Get In Touch
              </button>
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

