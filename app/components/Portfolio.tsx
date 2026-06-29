'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Launch, Code as CodeIcon, GitHub, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { projects } from '@/app/data/projects';
import { getTechLogo } from '@/app/utils/techLogos';

const BATCH_SIZE = 3;
const BOTTOM_MORPH_DELAY_CLASSES = [
  'animate-morph-in-from-bottom-delay-1',
  'animate-morph-in-from-bottom-delay-2',
  'animate-morph-in-from-bottom-delay-3',
] as const;

export default function Portfolio() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const batchStartRefs = useRef<(HTMLDivElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleBatches, setVisibleBatches] = useState<Set<number>>(new Set());
  const [activeSlide, setActiveSlide] = useState(0);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const featuredProjects = [
    projects.find(p => p.slug === 'motive'),
    projects.find(p => p.slug === 'intersight'),
    projects.find(p => p.slug === 'nexkey'),
    projects.find(p => p.slug === 'maidslife'),
    projects.find(p => p.slug === 'cakeshares'),
    projects.find(p => p.slug === 'giga-mall'),
    projects.find(p => p.slug === 'eliya-residential-portal'),
    projects.find(p => p.slug === 'smartfolio')
  ].filter(Boolean) as typeof projects;

  useEffect(() => {
    const batchCount = Math.ceil(featuredProjects.length / BATCH_SIZE);
    const refs = batchStartRefs.current.filter((el): el is HTMLDivElement => el != null).slice(0, batchCount);
    if (refs.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const batchIndex = parseInt(entry.target.getAttribute('data-batch-index') ?? '', 10);
          if (Number.isNaN(batchIndex)) return;
          setVisibleBatches((prev) => {
            if (prev.has(batchIndex)) return prev;
            return new Set([...prev, batchIndex]);
          });
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [featuredProjects.length]);

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

  const ProjectCard = ({
    project,
    index,
    isMobile = false,
  }: {
    project: typeof projects[0];
    index: number;
    isMobile?: boolean;
  }) => {
    const techLimit = isMobile ? 4 : 6;

    return (
      <Link
        href={`/projects/${project.slug}`}
        className={`bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 group h-full flex flex-col cursor-pointer ${
          isMobile
            ? 'rounded-xl shadow-lg active:scale-[0.98]'
            : 'rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3'
        }`}
      >
        <div
          className={`relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 overflow-hidden ${
            isMobile ? 'h-44' : 'h-64'
          }`}
        >
          {imageErrors[index] ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
              <CodeIcon className={`text-white opacity-50 ${isMobile ? 'text-4xl' : 'text-6xl'}`} />
            </div>
          ) : (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className={`object-cover opacity-90 transition-all duration-500 ${
                isMobile ? '' : 'group-hover:opacity-100 group-hover:scale-110'
              }`}
              onError={() => handleImageError(index)}
              unoptimized
            />
          )}
          {!isMobile && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
        </div>

        <div className={`flex-1 flex flex-col ${isMobile ? 'p-4' : 'p-8'}`}>
          <h3
            className={`font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
              isMobile ? 'text-lg mb-2 line-clamp-2' : 'text-2xl mb-3'
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-gray-600 dark:text-gray-400 leading-relaxed flex-1 ${
              isMobile ? 'text-sm mb-4 line-clamp-3' : 'text-base mb-6'
            }`}
          >
            {project.description}
          </p>

          <div className={`flex flex-wrap gap-2 items-center ${isMobile ? 'mb-4' : 'mb-6'}`}>
            {project.technologies.slice(0, techLimit).map((tech, techIndex) => {
              const logoSrc = getTechLogo(tech);
              return logoSrc ? (
                <span
                  key={techIndex}
                  className={`inline-flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 ${
                    isMobile
                      ? 'w-8 h-8 p-1'
                      : 'w-10 h-10 p-1.5 rounded-xl hover:scale-110 transition-transform'
                  }`}
                  title={tech}
                >
                  <Image
                    src={logoSrc}
                    alt={tech}
                    width={isMobile ? 22 : 28}
                    height={isMobile ? 22 : 28}
                    className="object-contain"
                    unoptimized
                  />
                </span>
              ) : (
                <span
                  key={techIndex}
                  className={`bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full font-semibold shadow-sm ${
                    isMobile ? 'px-2.5 py-1 text-[10px]' : 'px-4 py-1.5 text-xs'
                  }`}
                >
                  {tech}
                </span>
              );
            })}
            {project.technologies.length > techLimit && (
              <span
                className={`bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full font-semibold ${
                  isMobile ? 'px-2.5 py-1 text-[10px]' : 'px-4 py-1.5 text-xs'
                }`}
              >
                +{project.technologies.length - techLimit} more
              </span>
            )}
          </div>

          <div
            className={`flex border-t border-gray-200 dark:border-gray-700 ${
              isMobile ? 'gap-4 pt-3 text-sm' : 'space-x-6 pt-4'
            }`}
          >
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
              }}
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium group/link"
            >
              <Launch className={`group-hover/link:rotate-12 transition-transform ${isMobile ? 'mr-1.5 !text-lg' : 'mr-2'}`} />
              <span>Live Demo</span>
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
              }}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors font-medium group/link"
            >
              <GitHub className={`group-hover/link:scale-110 transition-transform ${isMobile ? 'mr-1.5 !text-lg' : 'mr-2'}`} />
              <span>View Code</span>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of projects showcasing my skills and expertise
          </p>
        </div>

        {/* Featured Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-10 text-center">
            Featured Projects
          </h3>
          {/* Mobile carousel */}
          <div className="md:hidden">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
            >
              {featuredProjects.map((project, index) => (
                <div
                  key={project.slug}
                  className="w-[calc(100%-1.5rem)] shrink-0 snap-center snap-always"
                >
                  <ProjectCard project={project} index={index} isMobile />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-5 mt-6">
              <button
                type="button"
                onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                disabled={activeSlide === 0}
                aria-label="Previous project"
                className="p-2.5 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed active:bg-gray-50 dark:active:bg-gray-700 transition-colors"
              >
                <ChevronLeft fontSize="small" />
              </button>

              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 tabular-nums min-w-[4rem] text-center">
                {activeSlide + 1} / {featuredProjects.length}
              </span>

              <button
                type="button"
                onClick={() => scrollToSlide(Math.min(featuredProjects.length - 1, activeSlide + 1))}
                disabled={activeSlide === featuredProjects.length - 1}
                aria-label="Next project"
                className="p-2.5 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed active:bg-gray-50 dark:active:bg-gray-700 transition-colors"
              >
                <ChevronRight fontSize="small" />
              </button>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              const batchIndex = Math.floor(index / BATCH_SIZE);
              const isBatchStart = index % BATCH_SIZE === 0;
              const isVisible = visibleBatches.has(batchIndex);
              const morphClass = isVisible ? BOTTOM_MORPH_DELAY_CLASSES[index % BATCH_SIZE] : 'opacity-0';
              return (
                <div
                  key={project.slug}
                  ref={isBatchStart ? (el) => { batchStartRefs.current[batchIndex] = el; } : undefined}
                  data-batch-index={isBatchStart ? batchIndex : undefined}
                  className={`transition-opacity duration-300 ${morphClass}`}
                >
                  <ProjectCard project={project} index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

