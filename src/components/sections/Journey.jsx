import React from 'react'
import portfolioData from '../../data/portfolio.json'

const Journey = () => {
  const { experience, skills } = portfolioData

  const formatDate = (dateString) => {
    if (!dateString) return 'Present'
    const [year, month] = dateString.split('-')
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    return `${months[parseInt(month) - 1]} ${year}`
  }

  const getSkillColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-beach-coral'
      case 'Advanced': return 'bg-ocean-500'
      case 'Intermediate': return 'bg-beach-turquoise'
      default: return 'bg-gray-400'
    }
  }

  return (
    <section id="journey" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-6">
            My Journey
          </h2>
          <div className="w-24 h-1 gradient-ocean mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From curiosity to expertise - here's my professional journey and the skills I've developed along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-navy-500 mb-8 text-center lg:text-left">
              Professional Experience
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-ocean-200"></div>

              {/* Experience Items */}
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 w-4 h-4 rounded-full ${
                      exp.current ? 'bg-beach-coral' : 'bg-ocean-500'
                    } border-4 border-white shadow-lg`}></div>

                    {/* Experience Card */}
                    <div className="ml-16 card p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-bold text-navy-500">{exp.position}</h4>
                        {exp.current && (
                          <span className="inline-block px-3 py-1 bg-beach-coral text-white text-sm font-medium rounded-full mt-2 sm:mt-0">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <div className="text-ocean-600 font-semibold mb-2">
                        {exp.company} • {exp.location}
                      </div>
                      
                      <div className="text-gray-500 text-sm mb-4">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.slice(0, 2).map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-ocean-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-ocean-100 text-ocean-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            +{exp.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-navy-500 mb-8 text-center lg:text-left">
              Technical Skills
            </h3>

            <div className="space-y-8">
              {/* Frontend Skills */}
              <div className="card p-6">
                <h4 className="text-lg font-bold text-navy-500 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-beach-coral rounded-full mr-3"></div>
                  Frontend Development
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.years}y</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                            style={{
                              width: skill.level === 'Expert' ? '100%' : 
                                     skill.level === 'Advanced' ? '80%' : '60%'
                            }}
                          ></div>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          skill.level === 'Expert' ? 'bg-beach-coral text-white' :
                          skill.level === 'Advanced' ? 'bg-ocean-500 text-white' :
                          'bg-beach-turquoise text-white'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="card p-6">
                <h4 className="text-lg font-bold text-navy-500 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-ocean-500 rounded-full mr-3"></div>
                  Backend Development
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.years}y</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                            style={{
                              width: skill.level === 'Expert' ? '100%' : 
                                     skill.level === 'Advanced' ? '80%' : '60%'
                            }}
                          ></div>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          skill.level === 'Expert' ? 'bg-beach-coral text-white' :
                          skill.level === 'Advanced' ? 'bg-ocean-500 text-white' :
                          'bg-beach-turquoise text-white'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="card p-6">
                <h4 className="text-lg font-bold text-navy-500 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-beach-turquoise rounded-full mr-3"></div>
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span
                      key={index}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        tool.level === 'Expert' 
                          ? 'bg-beach-coral text-white' 
                          : tool.level === 'Advanced'
                          ? 'bg-ocean-500 text-white'
                          : 'bg-beach-turquoise text-white'
                      }`}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey