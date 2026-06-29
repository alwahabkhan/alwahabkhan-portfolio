'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Code, 
  Storage, 
  Cloud, 
  Settings, 
  Web, 
  MobileFriendly,
  DataObject,
  Api,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';

export default function Skills() {
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

    // Fallback: ensure cards are visible if observer never fires (e.g. short viewports)
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

  const tools = [
    { name: 'GitHub', image: '/Logos/GitHub.png' },
    { name: 'VS Code', image: '/Logos/Visual Studio Code (VS Code).png' },
    { name: 'AWS', image: '/Logos/AWS.png' },
    { name: 'MongoDB', image: '/Logos/MongoDB.png' },
    { name: 'PostgreSQL', image: '/Logos/PostgresSQL.png' },
    { name: 'Vercel', image: '/Logos/Vercel.png' },
    { name: 'Heroku', image: '/Logos/Heroku.png' },
    { name: 'Postman', image: '/Logos/Postman.png' },
    { name: 'Git', image: '/Logos/Git.png' },
    { name: 'Node.js', image: '/Logos/Node.js.png' },
    { name: 'Express', image: '/Logos/Express.png' },
    { name: 'React', image: '/Logos/React.png' },
    { name: 'Next.js', image: '/Logos/Next.js.png' },
    { name: 'JavaScript', image: '/Logos/JavaScript.png' },
    { name: 'TypeScript', image: '/Logos/TypeScript.png' },
    { name: 'HTML5', image: '/Logos/HTML5.png' },
    { name: 'CSS3', image: '/Logos/CSS3.png' },
    { name: 'Tailwind CSS', image: '/Logos/Tailwind CSS.png' },
    { name: 'Material UI', image: '/Logos/Material UI.png' },
    { name: 'GraphQL', image: '/Logos/GraphQL.png' },
    { name: 'Firebase', image: '/Logos/Firebase.png' },
    { name: 'MySQL', image: '/Logos/MySQL.png' },
    { name: 'Nest.js', image: '/Logos/Nest.js.png' },
    { name: 'Vite', image: '/Logos/Vite.js.png' },
    { name: 'NPM', image: '/Logos/NPM.png' },
    { name: 'Linux', image: '/Logos/Linux.png' },
    { name: 'Jira', image: '/Logos/Jira.png' },
    { name: 'Slack', image: '/Logos/Slack.png' },
  ];

  // Duplicate tools for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools];
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Web,
      skills: ['HTML', 'CSS', 'JavaScript', 'React Js', 'Next Js', 'Material UI', 'Tailwind CSS', 'Bootstrap'],
      color: 'blue',
    },
    {
      title: 'Backend',
      icon: Storage,
      skills: ['Node Js', 'Express Js', 'Nest Js', 'REST APIs', 'GraphQL', 'MongoDB', 'MySQL', 'PostgreSQL'],
      color: 'green',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS Lambda', 'AWS S3', 'AWS EC2', 'Vercel', 'Heroku', 'Docker', 'CI/CD Pipelines', 'Redis'],
      color: 'purple',
    },
    {
      title: 'State Management & Tools',
      icon: Settings,
      skills: ['Redux', 'Context API', 'OOP', 'Github', 'Git'],
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800',
    };
    return colors[color] || colors.blue;
  };

  const SkillCategoryCard = ({
    category,
    isMobile = false,
    animate = false,
    delayClass = '',
  }: {
    category: (typeof skillCategories)[0];
    isMobile?: boolean;
    animate?: boolean;
    delayClass?: string;
  }) => {
    const Icon = category.icon;

    return (
      <div
        className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg h-full ${
          isMobile
            ? 'p-4 active:scale-[0.98] transition-transform'
            : 'p-6 hover:shadow-xl transition-shadow'
        } ${
          isMobile
            ? ''
            : animate
              ? delayClass
              : 'opacity-0'
        }`}
      >
        <div
          className={`${getColorClasses(category.color)} rounded-lg flex items-center justify-center ${
            isMobile ? 'w-12 h-12 mb-3' : 'w-16 h-16 mb-4'
          }`}
        >
          <Icon className={isMobile ? 'text-xl' : 'text-2xl'} />
        </div>
        <h3
          className={`font-bold text-gray-900 dark:text-white ${
            isMobile ? 'text-lg mb-3' : 'text-xl mb-4'
          }`}
        >
          {category.title}
        </h3>
        <ul className={isMobile ? 'space-y-1.5' : 'space-y-2'}>
          {category.skills.map((skill, skillIndex) => (
            <li
              key={skillIndex}
              className={`text-gray-600 dark:text-gray-400 flex items-center ${
                isMobile ? 'text-sm' : ''
              }`}
            >
              <span
                className={`bg-blue-600 rounded-full mr-2 shrink-0 ${
                  isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'
                }`}
              />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const delayClasses = [
    'animate-morph-in-from-bottom-delay-1',
    'animate-morph-in-from-bottom-delay-2',
    'animate-morph-in-from-bottom-delay-3',
    'animate-morph-in-from-bottom-delay-4',
  ] as const;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>

        {/* Tools Logos Carousel */}
        <div className="mb-16 relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Carousel */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedTools.map((tool, index) => {
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-6 flex flex-col items-center justify-center group"
                  >
                    <div className="w-32 h-32 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-110 hover:shadow-lg p-4">
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

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
          >
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="w-[calc(100%-1.5rem)] shrink-0 snap-center snap-always"
              >
                <SkillCategoryCard category={category} isMobile />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-5 mt-6">
            <button
              type="button"
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              aria-label="Previous skill category"
              className="p-2.5 rounded-full bg-white dark:bg-gray-900 shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed active:bg-gray-50 dark:active:bg-gray-800 transition-colors"
            >
              <ChevronLeft fontSize="small" />
            </button>

            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 tabular-nums min-w-[4rem] text-center">
              {activeSlide + 1} / {skillCategories.length}
            </span>

            <button
              type="button"
              onClick={() => scrollToSlide(Math.min(skillCategories.length - 1, activeSlide + 1))}
              disabled={activeSlide === skillCategories.length - 1}
              aria-label="Next skill category"
              className="p-2.5 rounded-full bg-white dark:bg-gray-900 shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed active:bg-gray-50 dark:active:bg-gray-800 transition-colors"
            >
              <ChevronRight fontSize="small" />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div
          ref={cardsRef}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              animate={hasAnimated}
              delayClass={delayClasses[index]}
            />
          ))}
        </div>

        {/* Additional Skills Section - Core Competencies */}
        <div
          className={`mt-12 bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg transition-opacity duration-300 ${
            hasAnimated ? 'animate-morph-in-from-bottom-delay-5' : 'opacity-0'
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Problem Solving', 'Team Collaboration', 'Code Review', 'Agile Development', 'Version Control', 'API Integration'].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

