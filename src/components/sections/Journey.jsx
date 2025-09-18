import React from 'react'
import portfolioData from '../../data/portfolio.json'

const Journey = () => {
  const { experience, skills } = portfolioData

  const getToolLogo = (toolName) => {
  const logos = {
    "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Miro": "https://asset.brandfetch.io/idAnDTFapY/idv_kTLCmY.svg",
    "draw.io": "https://app.diagrams.net/images/logo.svg",
    "StarUML": "https://staruml.io/image/staruml_logo.png",
    "Notion": "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    "MS Project": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Microsoft_Project_%282019–present%29.svg",
    "Balsamiq": "https://balsamiq.com/assets/company/brandassets/smileyface-transparent-1080x1080.png",
    "Azure Storage": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  }

  return logos[toolName] || "https://via.placeholder.com/50?text=No+Logo" 
}


  const formatDate = (dateString) => {
    if (!dateString) return 'Present'
    const [year, month] = dateString.split('-')
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    return `${months[parseInt(month) - 1]} ${year}`
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
            Here's my professional journey and the skills I've developed along the way.
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

                      {/* My Responsibilities */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 mb-2">My responsibilities:</h5>
                        <ul className="space-y-1">
                          {exp.responsibilities.slice(0, 2).map((responsibility, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-ocean-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{responsibility}</span>
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

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-2xl font-bold text-navy-500 mb-8 text-center lg:text-left">
              Skills & Expertise
            </h3>

            <div className="space-y-6">
              {/* Business Analysis Skills */}
              <div className="card p-6">
                <h4 className="text-lg font-bold text-navy-500 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-beach-coral rounded-full mr-3"></div>
                  Business Analysis
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.business_analysis?.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        skill.level === 'Expert' ? 'bg-beach-coral text-white' :
                        skill.level === 'Advanced' ? 'bg-ocean-500 text-white' :
                        'bg-beach-turquoise text-white'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  )) || []}
                </div>
              </div>

              {/* ERP & Systems */}
              <div className="card p-6">
                <h4 className="text-lg font-bold text-navy-500 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-ocean-500 rounded-full mr-3"></div>
                  ERP & Systems
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.erp_systems?.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        skill.level === 'Expert' ? 'bg-beach-coral text-white' :
                        skill.level === 'Advanced' ? 'bg-ocean-500 text-white' :
                        'bg-beach-turquoise text-white'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  )) || []}
                </div>
              </div>

              {/* Technical Tools */}
              <div className="card p-6">
                <h4 className="text-lg font-bold text-navy-500 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-beach-turquoise rounded-full mr-3"></div>
                  Technical Tools
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.technical_tools?.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={getToolLogo(skill.name)} 
                          alt={`${skill.name} logo`}
                          className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                        <span className="font-medium text-gray-800">{skill.name}</span>
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        skill.level === 'Expert' ? 'bg-beach-coral text-white' :
                        skill.level === 'Advanced' ? 'bg-ocean-500 text-white' :
                        'bg-beach-turquoise text-white'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  )) || []}
                </div>
              </div>

              {/* Programming & Analysis */}
              <div className="card p-6">
                <h4 className="text-lg font-bold text-navy-500 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  Programming & Analysis
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.programming?.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        skill.level === 'Expert' ? 'bg-beach-coral text-white' :
                        skill.level === 'Advanced' ? 'bg-ocean-500 text-white' :
                        'bg-beach-turquoise text-white'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  )) || []}
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