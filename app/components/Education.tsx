import { School, CalendarToday, LocationOn } from '@mui/icons-material';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      major: 'Software Engineering',
      institution: 'Foundation University Islamabad',
      location: 'Islamabad, Pakistan',
      period: 'Graduated',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-8xl mx-auto">
          <div className="bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900 rounded-[40px] p-12 md:p-16 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Education
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                Academic background and qualifications
              </p>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <School className="text-3xl text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-100 mb-4 font-semibold">
                        {edu.major}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-blue-100">
                          <School className="mr-2 text-sm" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center text-blue-100 text-sm">
                          <LocationOn className="mr-2 text-sm" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center text-blue-100 text-sm">
                          <CalendarToday className="mr-2 text-sm" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

