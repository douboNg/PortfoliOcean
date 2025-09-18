import React from 'react'
import personalData from '../../data/personal.json'

const About = () => {
  const { personal, journey } = personalData

  return (
    <section id="about" className="section-padding bg-beach-sand">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 gradient-ocean mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {journey.introduction}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-ocean-400 to-navy-500 p-1">
                <div className="w-full h-full rounded-2xl bg-beach-sand flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full gradient-ocean flex items-center justify-center">
                      <span className="text-white font-bold text-4xl">
                        {personal.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-ocean-500 mb-2">4+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-ocean-500 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">My Philosophy</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {journey.philosophy}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">Currently Focused On</h3>
              <ul className="space-y-3">
                {journey.currentFocus.map((focus, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ocean-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{focus}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">Future Goals</h3>
              <ul className="space-y-3">
                {journey.goals.slice(0, 2).map((goal, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-beach-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-gray-600 mb-1">Based in</p>
                  <p className="font-semibold text-navy-500">{personal.location}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Available for</p>
                  <p className="font-semibold text-navy-500">New opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About