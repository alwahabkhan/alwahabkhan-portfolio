'use client';

import { useRef, useState, useEffect } from 'react';
import { Work, CalendarToday, LocationOn } from '@mui/icons-material';

export default function Experience() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  const experiences = [
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

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            6 years of professional experience building scalable web applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-experience-index={index}
                className="relative mb-12 md:mb-16"
              >
                <div className="md:flex items-start">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`md:ml-24 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${
                      visibleCards[index] ? 'animate-experience-morph-from-left' : 'opacity-0'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                          <Work className="mr-2 text-lg" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                          <LocationOn className="mr-1 text-sm" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                          <CalendarToday className="mr-1 text-sm" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-600 dark:text-gray-300 flex items-start"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

