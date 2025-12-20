'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Launch, Code as CodeIcon, GitHub } from '@mui/icons-material';
import { useState } from 'react';
import { projects } from '@/app/data/projects';

export default function Portfolio() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const featuredProjects = [
    projects.find(p => p.slug === 'nexkey'),
    projects.find(p => p.slug === 'smartfolio'),
    projects.find(p => p.slug === 'zara-fashion')
  ].filter(Boolean) as typeof projects;

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <Link
      href={`/projects/${project.slug}`}
      className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group h-full flex flex-col cursor-pointer"
    >
      <div className="relative h-64 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 overflow-hidden">
        {imageErrors[index] ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
            <CodeIcon className="text-white text-6xl opacity-50" />
          </div>
        ) : (
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            onError={() => handleImageError(index)}
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-4 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold shadow-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-semibold">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        
        <div className="flex space-x-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
            }}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium group/link"
          >
            <Launch className="mr-2 group-hover/link:rotate-12 transition-transform" />
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
            <GitHub className="mr-2 group-hover/link:scale-110 transition-transform" />
            <span>View Code</span>
          </div>
        </div>
      </div>
    </Link>
  );

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
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

