'use client';

import { useRef, useState, useEffect } from 'react';
import {
  Web,
  Smartphone,
  CloudQueue,
  Code,
  DesignServices,
  Settings,
  ArrowForward,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import type { SvgIconComponent } from '@mui/icons-material';

const CARD_DELAY_CLASSES = [
  'animate-morph-in-from-bottom-delay-1',
  'animate-morph-in-from-bottom-delay-2',
  'animate-morph-in-from-bottom-delay-3',
  'animate-morph-in-from-bottom-delay-4',
  'animate-morph-in-from-bottom-delay-5',
  'animate-morph-in-from-bottom-delay-6',
] as const;

type ServiceItem = {
  icon: SvgIconComponent;
  title: string;
  description: string;
};

export default function Services() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards) return;

    const triggerAnimation = () => {
      if (hasTriggeredRef.current) return;
      hasTriggeredRef.current = true;
      setHasAnimated(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          triggerAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px 50px 0px' }
    );

    observer.observe(cards);

    const fallback = window.setTimeout(triggerAnimation, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slides = Array.from(container.children) as HTMLElement[];
      const containerCenter = container.scrollLeft + container.clientWidth / 2;

      let closest = 0;
      let minDistance = Infinity;

      slides.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const distance = Math.abs(containerCenter - slideCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      setActiveSlide(closest);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const slide = container.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setActiveSlide(index);
  };

  const services: ServiceItem[] = [
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

  const ServiceCard = ({
    service,
    isMobile = false,
    animate = false,
    delayClass = '',
  }: {
    service: ServiceItem;
    isMobile?: boolean;
    animate?: boolean;
    delayClass?: string;
  }) => {
    const Icon = service.icon;

    return (
      <div
        className={`bg-gray-50 dark:bg-gray-800 rounded-xl h-full ${
          isMobile
            ? 'p-5 active:scale-[0.98] transition-transform'
            : 'p-8 hover:shadow-xl transition-all transform hover:-translate-y-2'
        } ${
          isMobile
            ? ''
            : animate
              ? delayClass
              : 'opacity-0'
        }`}
      >
        <div
          className={`bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center ${
            isMobile ? 'w-12 h-12 mb-4' : 'w-16 h-16 mb-6'
          }`}
        >
          <Icon
            className={`text-blue-600 dark:text-blue-400 ${
              isMobile ? 'text-2xl' : 'text-3xl'
            }`}
          />
        </div>
        <h3
          className={`font-bold text-gray-900 dark:text-white ${
            isMobile ? 'text-lg mb-2' : 'text-xl mb-4'
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`text-gray-600 dark:text-gray-400 leading-relaxed ${
            isMobile ? 'text-sm' : ''
          }`}
        >
          {service.description}
        </p>
      </div>
    );
  };

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

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className="w-[calc(100%-1.5rem)] shrink-0 snap-center snap-always"
              >
                <ServiceCard service={service} isMobile />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-5 mt-6">
            <button
              type="button"
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              aria-label="Previous service"
              className="p-2.5 rounded-full bg-gray-50 dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed active:bg-gray-100 dark:active:bg-gray-700 transition-colors"
            >
              <ChevronLeft fontSize="small" />
            </button>

            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 tabular-nums min-w-[4rem] text-center">
              {activeSlide + 1} / {services.length}
            </span>

            <button
              type="button"
              onClick={() => scrollToSlide(Math.min(services.length - 1, activeSlide + 1))}
              disabled={activeSlide === services.length - 1}
              aria-label="Next service"
              className="p-2.5 rounded-full bg-gray-50 dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed active:bg-gray-100 dark:active:bg-gray-700 transition-colors"
            >
              <ChevronRight fontSize="small" />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div
          ref={cardsRef}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              animate={hasAnimated}
              delayClass={CARD_DELAY_CLASSES[index]}
            />
          ))}
        </div>

        {/* Call to Action - Do you have a Project Idea? */}
        <div
          className={`mt-16 text-center transition-opacity duration-300 ${
            hasAnimated ? 'animate-morph-in-from-bottom-cta' : 'md:opacity-0'
          }`}
        >
          <div className="bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900 rounded-xl p-8 md:p-16 text-white">
            <h3 className="text-2xl md:text-5xl font-bold mb-6">
              Do you have a Project Idea?<br />
              Let&apos;s discuss your project!
            </h3>
            <p className="text-base md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects and creative ideas. Let&apos;s
              connect and build something amazing together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Let&apos;s work Together
              <ArrowForward />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
