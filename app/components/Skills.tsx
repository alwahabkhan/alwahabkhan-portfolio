import { 
  Code, 
  Storage, 
  Cloud, 
  Settings, 
  Web, 
  MobileFriendly,
  DataObject,
  Api
} from '@mui/icons-material';

export default function Skills() {
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
      skills: ['Node Js', 'Express Js', 'REST APIs', 'GraphQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'FireBase'],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 ${getColorClasses(category.color)} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-gray-600 dark:text-gray-400 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
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

