import React, { useState, useEffect, useCallback } from 'react'
import { useTheme } from '../../hooks/useTheme'
import Step from './Step'
import TimelineIllustration from './TimelineIllustration'

const TimelineSection = () => {
  const { isDark } = useTheme()
  const [activeAchievement, setActiveAchievement] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Timeline achievements data
  const achievements = [
    {
      year: "2020",
      title: "Computer Science Foundation",
      description: "Started my journey in Computer Science at University, building strong fundamentals in programming, algorithms, and software engineering principles.",
      skills: ["Python", "Java", "Data Structures", "Algorithms"]
    },
    {
      year: "2021",
      title: "Academic Excellence",
      description: "Maintained high academic performance while expanding into web technologies and modern development frameworks.",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"]
    },
    {
      year: "2022",
      title: "Full-Stack Development",
      description: "Mastered full-stack development through hands-on projects, internships, and real-world application building.",
      skills: ["MongoDB", "Express.js", "REST APIs", "Git"]
    },
    {
      year: "2023",
      title: "Innovation & Leadership",
      description: "Led development teams, created innovative solutions, and contributed to open-source projects while mentoring fellow students.",
      skills: ["Team Leadership", "Project Management", "DevOps", "Cloud Services"]
    },
    {
      year: "2024",
      title: "Advanced Specialization",
      description: "Specialized in cutting-edge technologies including AI/ML, advanced web frameworks, and modern development practices.",
      skills: ["Machine Learning", "TypeScript", "Next.js", "Docker"]
    },
    {
      year: "2024",
      title: "Industry Ready Professional",
      description: "Evolved into a versatile software engineer ready to tackle complex challenges in the modern tech landscape.",
      skills: ["System Design", "Microservices", "CI/CD", "Cloud Architecture"]
    },
    {
      year: "Future",
      title: "Continuous Innovation",
      description: "Committed to lifelong learning, staying current with emerging technologies, and contributing to the future of software development.",
      skills: ["Emerging Tech", "Innovation", "Mentorship", "Technical Leadership"]
    }
  ]

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-advance timeline for demo effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAchievement(prev => (prev + 1) % achievements.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [achievements.length])

  const handleAchievementClick = useCallback((index) => {
    setActiveAchievement(index)
  }, [])

  return (
    <Step
      title="My Journey"
      subtitle="Professional Timeline"
      backgroundColor={isDark ? 'bg-gray-900' : 'bg-gray-50'}
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Desktop Timeline */}
        {!isMobile ? (
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
            
            {/* Active Progress Line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
              style={{
                height: `${(activeAchievement + 1) * (100 / achievements.length)}%`
              }}
            ></div>

            {/* Timeline Items */}
            {achievements.map((achievement, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Side */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div 
                    className={`timeline-card cursor-pointer transition-all duration-700 transform ${
                      activeAchievement === index 
                        ? 'scale-105 opacity-100' 
                        : 'scale-95 opacity-70 hover:opacity-90 hover:scale-100'
                    }`}
                    onClick={() => handleAchievementClick(index)}
                  >
                    <div className={`p-6 rounded-2xl shadow-2xl border ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
                        : 'bg-white border-gray-200 hover:bg-gray-50'
                    } ${activeAchievement === index ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
                      <div className={`text-3xl font-bold mb-2 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {achievement.year}
                      </div>
                      <h3 className={`text-xl font-semibold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className={`text-sm leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {achievement.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {achievement.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              isDark 
                                ? 'bg-blue-900 text-blue-200 border border-blue-800' 
                                : 'bg-blue-100 text-blue-800 border border-blue-200'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Point */}
                <div className="w-2/12 flex justify-center">
                  <div 
                    className={`timeline-dot w-6 h-6 rounded-full border-4 transition-all duration-700 cursor-pointer ${
                      activeAchievement === index
                        ? 'bg-blue-500 border-white shadow-lg scale-125 ring-4 ring-blue-200'
                        : isDark 
                          ? 'bg-gray-700 border-gray-600 hover:bg-gray-600 hover:border-gray-500' 
                          : 'bg-gray-200 border-gray-300 hover:bg-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => handleAchievementClick(index)}
                  ></div>
                </div>

                {/* Illustration Side */}
                <TimelineIllustration 
                  achievementIndex={index} 
                  activeAchievement={activeAchievement} 
                />
              </div>
            ))}
          </div>
        ) : (
          /* Mobile Timeline */
          <div className="relative">
            {/* Mobile Timeline Line */}
            <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
            
            {/* Mobile Active Progress Line */}
            <div 
              className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
              style={{
                height: `${(activeAchievement + 1) * (100 / achievements.length)}%`
              }}
            ></div>

            {/* Mobile Timeline Items */}
            {achievements.map((achievement, index) => (
              <div key={index} className="relative flex items-start mb-12 pl-16">
                {/* Mobile Timeline Dot */}
                <div 
                  className={`absolute left-6 w-4 h-4 rounded-full border-3 transition-all duration-700 cursor-pointer ${
                    activeAchievement === index
                      ? 'bg-blue-500 border-white shadow-lg scale-125 ring-2 ring-blue-200'
                      : isDark 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'bg-gray-200 border-gray-300'
                  }`}
                  onClick={() => handleAchievementClick(index)}
                ></div>

                {/* Mobile Content */}
                <div 
                  className={`timeline-card-mobile cursor-pointer transition-all duration-700 transform w-full ${
                    activeAchievement === index 
                      ? 'scale-105 opacity-100' 
                      : 'scale-95 opacity-70'
                  }`}
                  onClick={() => handleAchievementClick(index)}
                >
                  <div className={`p-5 rounded-xl shadow-xl border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700' 
                      : 'bg-white border-gray-200'
                  } ${activeAchievement === index ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
                    <div className={`text-2xl font-bold mb-2 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {achievement.year}
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-3 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {achievement.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            isDark 
                              ? 'bg-blue-900 text-blue-200 border border-blue-800' 
                              : 'bg-blue-100 text-blue-800 border border-blue-200'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Timeline Navigation */}
        <div className="flex justify-center mt-12 space-x-2">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => handleAchievementClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeAchievement === index
                  ? 'bg-blue-500 scale-125'
                  : isDark 
                    ? 'bg-gray-600 hover:bg-gray-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to ${achievements[index].year}`}
            />
          ))}
        </div>
      </div>
    </Step>
  )
}

export default TimelineSection
