'use client';

import { useRef, useState, useEffect } from 'react';
import { Work, CalendarToday, LocationOn, ChevronLeft, ChevronRight } from '@mui/icons-material';

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export default function Experience() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const experiences: ExperienceItem[] = [
    {
      title: 'Sr. Full Stack Developer',
      company: 'Giga Group of Companies',
      location: 'Islamabad',
      period: 'Jan 2025 - Present',
      description: [
        'Building scalable web applications using Node.js, Nest.js, Next.js, MongoDB, and PostgreSQL',
        'Developing and integrating RESTful APIs for frontend-backend communication',
        'Containerizing applications with Docker and deploying via CI/CD pipelines to AWS and cloud platforms',
        'Implementing serverless solutions with Azure Functions where required',
        'Integrating Stripe for payment processing and subscription management',
        'Working with AWS services for infrastructure and deployment',
        'Ensuring code quality through version control, code reviews, and automated testing',
        'Collaborating with cross-functional teams on project planning, debugging, and performance optimization',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'E-Strats',
      location: 'Pwd, Islambad',
      period: 'Jan 2023 - Dec 2024',
      description: [
        'Led the end-to-end development of scalable web applications using the Full stack (MongoDB, Express.js, React.js, Node.js, Nest.js, Next.js)',
        'Built and integrated RESTful APIs for smooth frontend-backend communication',
        'Developed responsive UIs using React.js, Tailwind CSS, and Material UI, ensuring cross-device compatibility and accessibility',
        'Utilized Redux and Context API for efficient state management across complex components',
        'Worked with Docker for containerizing applications and deploying to AWS and Vercel using CI/CD pipelines',
        'Integrated PostgreSQL and MySQL where relational data management was needed',
        'Ensured code quality through GitHub version control, code reviews, and automated testing workflows',
        'Actively collaborated with cross-functional teams, contributing to project planning, debugging, and performance optimization',
      ],
    },
    {
      title: 'MERN Stack Developer',
      company: 'Abt IT Innovation Ltd Pvt',
      location: 'I8, Islambad',
      period: 'Jan 2021 - Dec 2022',
      description: [
        'Developed dynamic UI components in React.js, implementing responsive layouts with Bootstrap and Tailwind CSS',
        'Created and connected MongoDB databases and implemented backend logic using Express.js and Node.js',
        'Practiced GitHub-based version control and agile collaboration for team-based development',
        'Strengthened understanding of modern JavaScript, OOP principles, and coding practices',
        'Gained exposure to Next.js for server-side rendering and performance optimization in frontend projects',
      ],
    },
  ];

  useEffect(() => {
    const refs = cardRefs.current.filter((el): el is HTMLDivElement => el != null);
    if (refs.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = entry.target.getAttribute('data-experience-index');
          if (index === null) return;
          const i = parseInt(index, 10);
          setVisibleCards((prev) => {
            const next = [...prev];
            if (!next[i]) {
              next[i] = true;
              return next;
            }
            return prev;
          });
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [experiences.length]);

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

  const ExperienceCard = ({
    exp,
    isMobile = false,
    animate,
  }: {
    exp: ExperienceItem;
    isMobile?: boolean;
    animate?: boolean;
  }) => (
    <div
      className={`bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg h-full ${
        isMobile ? 'p-4 active:scale-[0.98] transition-transform' : 'p-6 hover:shadow-xl transition-shadow'
      } ${
        isMobile
          ? ''
          : animate
            ? 'animate-experience-morph-from-left'
            : 'opacity-0'
      }`}
    >
      <div className={isMobile ? 'mb-3' : 'mb-4'}>
        <h3
          className={`font-bold text-gray-900 dark:text-white ${
            isMobile ? 'text-lg mb-1.5' : 'text-2xl mb-2'
          }`}
        >
          {exp.title}
        </h3>
        <div
          className={`flex items-center text-blue-600 dark:text-blue-400 ${
            isMobile ? 'mb-1 text-sm' : 'mb-2'
          }`}
        >
          <Work className={`mr-1.5 ${isMobile ? '!text-base' : 'mr-2 text-lg'}`} />
          <span className="font-semibold">{exp.company}</span>
        </div>
        <div
          className={`flex items-center text-gray-600 dark:text-gray-400 ${
            isMobile ? 'text-xs mb-1' : 'text-sm mb-2'
          }`}
        >
          <LocationOn className="mr-1 !text-sm" />
          <span>{exp.location}</span>
        </div>
        <div
          className={`flex items-center text-gray-600 dark:text-gray-400 ${
            isMobile ? 'text-xs' : 'text-sm'
          }`}
        >
          <CalendarToday className="mr-1 !text-sm" />
          <span>{exp.period}</span>
        </div>
      </div>

      <ul className={isMobile ? 'space-y-1.5 mt-3' : 'space-y-2 mt-4'}>
        {exp.description.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className={`text-gray-600 dark:text-gray-300 flex items-start ${
              isMobile ? 'text-xs leading-relaxed' : ''
            }`}
          >
            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5 shrink-0">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            4 years of professional experience building scalable web applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mobile carousel */}
          <div className="md:hidden">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
            >
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="w-[calc(100%-1.5rem)] shrink-0 snap-center snap-always"
                >
                  <ExperienceCard exp={exp} isMobile />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-5 mt-6">
              <button
                type="button"
                onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                disabled={activeSlide === 0}
                aria-label="Previous experience"
                className="p-2.5 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed active:bg-gray-50 dark:active:bg-gray-700 transition-colors"
              >
                <ChevronLeft fontSize="small" />
              </button>

              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 tabular-nums min-w-[4rem] text-center">
                {activeSlide + 1} / {experiences.length}
              </span>

              <button
                type="button"
                onClick={() => scrollToSlide(Math.min(experiences.length - 1, activeSlide + 1))}
                disabled={activeSlide === experiences.length - 1}
                aria-label="Next experience"
                className="p-2.5 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed active:bg-gray-50 dark:active:bg-gray-700 transition-colors"
              >
                <ChevronRight fontSize="small" />
              </button>
            </div>
          </div>

          {/* Desktop timeline */}
          <div className="relative hidden md:block">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-experience-index={index}
                className="relative mb-16"
              >
                <div className="flex items-start">
                  <div className="absolute left-0 w-16 h-16 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  </div>

                  <div className="ml-24 w-full">
                    <ExperienceCard exp={exp} animate={visibleCards[index]} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
