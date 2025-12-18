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
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
            <Image
              src="/next.svg"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          M Alwahab Ali Khan
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-blue-100">
          Full Stack Developer (MERN Stack)
        </p>
        
        <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
          With 2+ years of experience creating robust and scalable web applications
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

