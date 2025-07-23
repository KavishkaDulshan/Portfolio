import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import Step from './Step'

const SkillsSection = ({ 
  isVisible, 
  getAnimationClass, 
  skills, 
  activeSkill, 
  handleSkillHover, 
  handleSkillLeave 
}) => {
  const { isDark } = useTheme()

  return (
    <div className={`mb-16 transform transition-all ${getAnimationClass('duration-1000 delay-800')} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <Step 
        delay={800}
        padding="p-6 lg:p-8"
        shadow="shadow-2xl"
      >
        <h3 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-8 text-center`}>
          Technical Skills
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className={`relative p-4 lg:p-6 rounded-2xl border ${isDark ? 'bg-gray-800/40 border-gray-600/30' : 'bg-white/80 border-gray-200/50'} backdrop-blur-sm transition-all duration-300 cursor-pointer group ${getAnimationClass('hover:scale-105')} ${getAnimationClass('hover:shadow-xl')}`}
              onMouseEnter={() => handleSkillHover(skill.category)}
              onMouseLeave={handleSkillLeave}
              style={{ animationDelay: `${1000 + index * 200}ms` }}
            >
              <div className={`flex items-center mb-4`}>
                <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white mr-3 text-xl`}>
                  💻
                </div>
                <h4 className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'} text-sm lg:text-base`}>
                  {skill.category}
                </h4>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li 
                    key={item}
                    className={`text-xs lg:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} transition-all duration-300 ${activeSkill === skill.category ? 'translate-x-2 text-cyan-400' : ''}`}
                  >
                    • {item}
                  </li>
                ))}
              </ul>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>
      </Step>
    </div>
  )
}

export default SkillsSection
