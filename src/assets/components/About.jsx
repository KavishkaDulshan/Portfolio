import React, { useState, useEffect, useCallback } from 'react'
import { useTheme } from '../../hooks/useTheme'
import Step from './Step'
import PrimaryButton from './PrimaryButton'
import rocketVideo from '../videos/rocket.webm'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSkill, setActiveSkill] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [activeAchievement, setActiveAchievement] = useState(0) // Start at first achievement
  const { isDark } = useTheme()

  // Detect mobile devices and reduced motion preference
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const checkReducedMotion = () => {
      setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }

    checkMobile()
    checkReducedMotion()

    window.addEventListener('resize', checkMobile)
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', checkReducedMotion)

    // Intersection Observer for reveal animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      observer.observe(aboutSection)
    }

    return () => {
      window.removeEventListener('resize', checkMobile)
      mediaQuery.removeEventListener('change', checkReducedMotion)
      if (aboutSection) observer.unobserve(aboutSection)
    }
  }, [])

  const getAnimationClass = useCallback((baseClass) => {
    return isReducedMotion ? '' : baseClass
  }, [isReducedMotion])

  const handleSkillHover = useCallback((skill) => {
    if (!isMobile) {
      setActiveSkill(skill)
    }
  }, [isMobile])

  const handleSkillLeave = useCallback(() => {
    if (!isMobile) {
      setActiveSkill(null)
    }
  }, [isMobile])

  const handleDownloadCV = useCallback(() => {
    if ('vibrate' in navigator && isMobile) {
      navigator.vibrate(50)
    }
    // Add your CV download logic here
    console.log('Download CV clicked')
  }, [isMobile])

  const handleContactMe = useCallback(() => {
    if ('vibrate' in navigator && isMobile) {
      navigator.vibrate(50)
    }
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isMobile])

  const handleAchievementClick = useCallback((index) => {
    if ('vibrate' in navigator && isMobile) {
      navigator.vibrate(50)
    }
    setActiveAchievement(index)
  }, [isMobile])

  const skills = [
    {
      category: 'Frontend Development',
      items: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design'],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.64 9 11 5.16-1.36 9-5.45 9-11V7l-10-5z"/>
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Express.js', 'API Development', 'Database Design', 'Server Management'],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6L9 17l-5-5 1.41-1.41L9 14.17l9.59-9.59L20 6z"/>
        </svg>
      ),
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'IoT & Hardware',
      items: ['Arduino', 'Raspberry Pi', 'Sensor Integration', 'Circuit Design', 'Embedded Systems'],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3h-2v2h2V3zm4.83 2.17l-1.42 1.42L17.83 8l1.42-1.42L18.83 5.17zM11 7h2v6h-2V7zm6.2 1L19 8v8h-1.8L15 12l-1.2 4H12l1.5-5.5L12 8h1.2L15 12l2.2-4zM5 8l1.41 1.41L7.83 8 6.41 6.58 5 8zm8 4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"/>
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Tools & Technologies',
      items: ['Git & GitHub', 'VS Code', 'Linux', 'Network Security', 'Project Management'],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: 'from-orange-500 to-red-500'
    }
  ]

  const achievements = [
    {
      title: 'Completed Advanced Levels',
      institution: 'G/Bandaranayake College',
      description: 'Successfully completed G.C.E Advanced Level examination in Physical Science stream, laying the foundation for my technical education.',
      year: '2022',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      )
    },
    {
      title: 'Started Software Engineering Degree',
      institution: 'NSBM Green University',
      description: 'Enrolled in Software Engineering program at NSBM Green University, beginning my formal journey in software development and computer science.',
      year: '2023',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
        </svg>
      )
    },
    {
      title: 'Learned Software Industry Technologies',
      institution: 'Self-Learning & University',
      description: 'Mastered modern web development technologies including React.js, Node.js, JavaScript ES6+, HTML5, CSS3, and various development tools.',
      year: '2023',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: 'Learned Software Industry Concepts',
      institution: 'Online Courses & Practice',
      description: 'Studied software engineering principles, design patterns, database design, API development, version control, and agile development methodologies.',
      year: '2023 - 2024',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      )
    },
    {
      title: 'Started Personal Projects',
      institution: 'Personal Development',
      description: 'Began building personal web applications and software projects to apply learned concepts and create a professional portfolio.',
      year: '2024',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      title: 'Started IoT Projects',
      institution: 'Self-Learning',
      description: 'Explored Internet of Things development using Arduino and Raspberry Pi, integrating sensors and building smart automation systems.',
      year: '2024',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: 'Seeking New Technologies & Projects',
      institution: 'Continuous Learning',
      description: 'Currently exploring emerging technologies, experimenting with new frameworks, and working on innovative projects to stay ahead in the software industry.',
      year: '2024 - Present',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    }
  ]

  return (
    <section 
      id="about" 
      className="relative min-h-screen transition-colors duration-500 overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">

            <h2 className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
              <span className={`bg-gradient-to-r ${isDark ? 'from-cyan-400 via-pink-400 to-cyan-400' : 'from-blue-600 via-purple-600 to-blue-600'} bg-clip-text text-transparent ${getAnimationClass('animate-gradient-x')}`}>
                About Me
              </span>
            </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Personal Story */}
          <div className={`transform transition-all ${getAnimationClass('duration-1000 delay-400')} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
            <Step 
              delay={400}
              padding="p-6 lg:p-8"
              shadow="shadow-xl"
              className="h-full"
            >
              <h3 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-6`}>
                My Journey
              </h3>
              <div className="space-y-4 text-base lg:text-lg leading-relaxed">
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm a dedicated Software Engineering undergraduate at NSBM Green University, where I've discovered my passion for creating innovative digital solutions that make a real difference.
                </p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  My journey began with curiosity about how technology works, which led me to explore web development, IoT systems, and network security. I believe in the power of continuous learning and staying updated with the latest technological trends.
                </p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  What drives me most is the opportunity to build solutions that combine creativity with technical expertise, whether it's a responsive web application or an IoT automation system.
                </p>
              </div>
            </Step>
          </div>

          {/* Quick Stats */}
          <div className={`transform transition-all ${getAnimationClass('duration-1000 delay-600')} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}>
            <Step 
              delay={600}
              padding="p-6 lg:p-8"
              shadow="shadow-xl"
              className="h-full"
            >
              <h3 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-6`}>
                Quick Facts
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2`}>
                    2+
                  </div>
                  <p className={`text-sm lg:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Years of Learning</p>
                </div>
                <div className="text-center">
                  <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2`}>
                    10+
                  </div>
                  <p className={`text-sm lg:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Projects Built</p>
                </div>
                <div className="text-center">
                  <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2`}>
                    5+
                  </div>
                  <p className={`text-sm lg:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Technologies</p>
                </div>
                <div className="text-center">
                  <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2`}>
                    24/7
                  </div>
                  <p className={`text-sm lg:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Learning Mode</p>
                </div>
              </div>
            </Step>
          </div>
        </div>

        {/* Skills Section */}
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
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white mr-3`}>
                      {skill.icon}
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

        {/* Interactive Journey Timeline */}
        <div className={`mb-12 transform transition-all ${getAnimationClass('duration-1000 delay-1000')} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Step 
            delay={1000}
            padding="p-6 lg:p-8"
            shadow="shadow-2xl"
          >
            <div className="text-center mb-8">
              <h3 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-3`}>
                <span className={`bg-gradient-to-r ${isDark ? 'from-cyan-400 via-purple-400 to-pink-400' : 'from-blue-600 via-indigo-600 to-purple-600'} bg-clip-text text-transparent`}>
                  My Journey Timeline
                </span>
              </h3>
              <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Explore my learning journey through interactive milestones
              </p>
            </div>
            
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="relative max-w-6xl mx-auto">
                
                {/* Central Timeline Line */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${isDark ? 'bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500' : 'bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500'} rounded-full opacity-30`}></div>
                
                {/* Animated Timeline Progress */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full ${isDark ? 'bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400' : 'bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400'} transition-all duration-1000 ease-out shadow-lg`} 
                     style={{ 
                       height: `${(activeAchievement / Math.max(achievements.length - 1, 1)) * (100 - (100 / achievements.length / 2) - (100 / achievements.length / 2))}%`,
                       top: `${100 / achievements.length / 2}%`
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse"></div>
                  
                  {/* Rocket at Progress End */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-[100]">
                    <div className="relative w-40 h-40">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                        style={{
                          filter: `hue-rotate(${activeAchievement * 60}deg)`,
                          transform: 'rotate(-15deg)'
                        }}
                      >
                        <source src={rocketVideo} type="video/webm" />
                      </video>
                    </div>
                  </div>
                </div>

                {/* Timeline Items */}
                <div className="relative space-y-16">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={achievement.title}
                      className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}
                      style={{ animationDelay: `${1200 + index * 400}ms` }}
                    >
                      {/* Timeline Node */}
                      <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1`}>
                        <button
                          onClick={() => handleAchievementClick(index)}
                          className={`relative w-12 h-12 rounded-full transition-all duration-500 border-3 ${
                            activeAchievement >= index
                              ? (index === 0 
                                  ? (isDark ? 'bg-gradient-to-br from-blue-500 to-indigo-600 border-blue-300 shadow-lg' : 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-300 shadow-lg') 
                                  : index === 1 
                                    ? (isDark ? 'bg-gradient-to-br from-emerald-500 to-teal-600 border-emerald-300 shadow-lg' : 'bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-300 shadow-lg')
                                    : index === 2
                                      ? (isDark ? 'bg-gradient-to-br from-violet-500 to-purple-600 border-violet-300 shadow-lg' : 'bg-gradient-to-br from-violet-500 to-indigo-600 border-violet-300 shadow-lg')
                                      : index === 3
                                        ? (isDark ? 'bg-gradient-to-br from-amber-500 to-orange-600 border-amber-300 shadow-lg' : 'bg-gradient-to-br from-amber-500 to-yellow-600 border-amber-300 shadow-lg')
                                        : index === 4
                                          ? (isDark ? 'bg-gradient-to-br from-pink-500 to-rose-600 border-pink-300 shadow-lg' : 'bg-gradient-to-br from-pink-500 to-red-600 border-pink-300 shadow-lg')
                                          : index === 5
                                            ? (isDark ? 'bg-gradient-to-br from-cyan-500 to-blue-600 border-cyan-300 shadow-lg' : 'bg-gradient-to-br from-cyan-500 to-sky-600 border-cyan-300 shadow-lg')
                                            : (isDark ? 'bg-gradient-to-br from-orange-500 to-red-600 border-orange-300 shadow-lg' : 'bg-gradient-to-br from-orange-500 to-red-600 border-orange-300 shadow-lg'))
                              : (isDark ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-gray-200 border-gray-300 hover:bg-gray-300')
                          } ${activeAchievement === index ? 'scale-110 rotate-6' : 'hover:scale-105'} focus:outline-none focus:ring-2 ${
                            index === 0 ? 'focus:ring-blue-400/30' 
                            : index === 1 ? 'focus:ring-emerald-400/30'
                            : index === 2 ? 'focus:ring-violet-400/30'
                            : index === 3 ? 'focus:ring-amber-400/30'
                            : index === 4 ? 'focus:ring-pink-400/30'
                            : index === 5 ? 'focus:ring-cyan-400/30'
                            : 'focus:ring-orange-400/30'
                          }`}
                        >
                          <div className={`flex items-center justify-center text-white transition-all duration-300 ${activeAchievement === index ? 'scale-105' : ''}`}>
                            <div className="w-6 h-6">
                              {achievement.icon}
                            </div>
                          </div>
                          
                          {/* Subtle pulse for active only */}
                          {activeAchievement === index && (
                            <div className={`absolute inset-0 rounded-full ${
                              index === 0 ? 'bg-blue-400' 
                              : index === 1 ? 'bg-emerald-400'
                              : index === 2 ? 'bg-violet-400' 
                              : index === 3 ? 'bg-amber-400'
                              : index === 4 ? 'bg-pink-400'
                              : index === 5 ? 'bg-cyan-400'
                              : 'bg-orange-400'
                            } opacity-10 animate-pulse`}></div>
                          )}
                        </button>
                      </div>

                      {/* Content Card */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                        <div 
                          className={`relative cursor-pointer transition-all duration-700 transform ${
                            activeAchievement === index 
                              ? 'scale-105 rotate-1' 
                              : 'hover:scale-102 hover:-rotate-1'
                          }`}
                          onClick={() => handleAchievementClick(index)}
                        >
                          <div className={`relative p-6 rounded-xl border backdrop-blur-xl transition-all duration-500 ${
                            activeAchievement === index
                              ? (index === 0 
                                  ? (isDark 
                                      ? 'bg-gradient-to-br from-gray-800/95 via-blue-900/20 to-gray-900/95 border-blue-500/40 shadow-xl' 
                                      : 'bg-gradient-to-br from-white/95 via-blue-50/30 to-gray-50/95 border-blue-500/40 shadow-xl')
                                  : index === 1 
                                    ? (isDark 
                                        ? 'bg-gradient-to-br from-gray-800/95 via-emerald-900/20 to-gray-900/95 border-emerald-500/40 shadow-xl' 
                                        : 'bg-gradient-to-br from-white/95 via-emerald-50/30 to-gray-50/95 border-emerald-500/40 shadow-xl')
                                    : index === 2
                                      ? (isDark 
                                          ? 'bg-gradient-to-br from-gray-800/95 via-violet-900/20 to-gray-900/95 border-violet-500/40 shadow-xl' 
                                          : 'bg-gradient-to-br from-white/95 via-violet-50/30 to-gray-50/95 border-violet-500/40 shadow-xl')
                                      : index === 3
                                        ? (isDark 
                                            ? 'bg-gradient-to-br from-gray-800/95 via-amber-900/20 to-gray-900/95 border-amber-500/40 shadow-xl' 
                                            : 'bg-gradient-to-br from-white/95 via-amber-50/30 to-gray-50/95 border-amber-500/40 shadow-xl')
                                        : index === 4
                                          ? (isDark 
                                              ? 'bg-gradient-to-br from-gray-800/95 via-pink-900/20 to-gray-900/95 border-pink-500/40 shadow-xl' 
                                              : 'bg-gradient-to-br from-white/95 via-pink-50/30 to-gray-50/95 border-pink-500/40 shadow-xl')
                                          : index === 5
                                            ? (isDark 
                                                ? 'bg-gradient-to-br from-gray-800/95 via-cyan-900/20 to-gray-900/95 border-cyan-500/40 shadow-xl' 
                                                : 'bg-gradient-to-br from-white/95 via-cyan-50/30 to-gray-50/95 border-cyan-500/40 shadow-xl')
                                            : (isDark 
                                                ? 'bg-gradient-to-br from-gray-800/95 via-orange-900/20 to-gray-900/95 border-orange-500/40 shadow-xl' 
                                                : 'bg-gradient-to-br from-white/95 via-orange-50/30 to-gray-50/95 border-orange-500/40 shadow-xl'))
                              : (isDark 
                                  ? 'bg-gray-800/80 border-gray-600/30 shadow-lg hover:shadow-xl hover:border-gray-500/50' 
                                  : 'bg-white/80 border-gray-200/30 shadow-lg hover:shadow-xl hover:border-gray-300/50')
                          }`}>
                            
                            {/* Floating Year Badge */}
                            <div className={`absolute -top-3 ${index % 2 === 0 ? 'right-4' : 'left-4'} px-4 py-1 rounded-full font-bold text-xs transition-all duration-500 ${
                              activeAchievement === index
                                ? (index === 0 
                                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' 
                                    : index === 1 
                                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                                      : index === 2
                                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-md'
                                        : index === 3
                                          ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                                          : index === 4
                                            ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md'
                                            : index === 5
                                              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                                              : 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md')
                                : (isDark 
                                    ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                                    : 'bg-gray-100 text-gray-700 border border-gray-300')
                            }`}>
                              {achievement.year}
                            </div>

                            {/* Title */}
                            <h4 className={`text-xl font-bold mb-2 transition-all duration-300 ${
                              isDark ? 'text-gray-100' : 'text-gray-900'
                            } ${activeAchievement === index ? 'text-shadow-lg' : ''}`}>
                              {achievement.title}
                            </h4>

                            {/* Institution with Icon */}
                            <div className={`flex items-center mb-3 text-base font-semibold transition-all duration-300 ${
                              activeAchievement === index
                                ? (index === 0 
                                    ? (isDark ? 'text-blue-400' : 'text-blue-600') 
                                    : index === 1 
                                      ? (isDark ? 'text-emerald-400' : 'text-emerald-600')
                                      : index === 2
                                        ? (isDark ? 'text-violet-400' : 'text-violet-600') 
                                        : index === 3
                                          ? (isDark ? 'text-amber-400' : 'text-amber-600')
                                          : index === 4
                                            ? (isDark ? 'text-pink-400' : 'text-pink-600')
                                            : index === 5
                                              ? (isDark ? 'text-cyan-400' : 'text-cyan-600')
                                              : (isDark ? 'text-orange-400' : 'text-orange-600'))
                                : (isDark ? 'text-gray-400' : 'text-gray-600')
                            }`}>
                              <div className={`w-4 h-4 mr-2 transition-all duration-300`}>
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                              </div>
                              {achievement.institution}
                            </div>

                            {/* Description */}
                            <p className={`text-sm leading-relaxed ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {achievement.description}
                            </p>

                            {/* Subtle accent dot */}
                            <div className={`absolute top-3 ${index % 2 === 0 ? 'left-3' : 'right-3'} w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                              activeAchievement === index
                                ? (index === 0 ? 'bg-blue-400' 
                                  : index === 1 ? 'bg-emerald-400' 
                                  : index === 2 ? 'bg-violet-400'
                                  : index === 3 ? 'bg-amber-400'
                                  : index === 4 ? 'bg-pink-400'
                                  : index === 5 ? 'bg-cyan-400'
                                  : 'bg-orange-400')
                                : 'bg-gray-400 opacity-50'
                            }`}></div>
                          </div>

                          {/* Connection Line to Node */}
                          <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-12 h-0.5 transition-all duration-500 ${
                            activeAchievement >= index
                              ? (index === 0 
                                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 opacity-80' 
                                  : index === 1 
                                    ? 'bg-gradient-to-r from-violet-400 to-purple-400 opacity-80' 
                                    : 'bg-gradient-to-r from-orange-400 to-red-400 opacity-80')
                              : (isDark ? 'bg-gray-600 opacity-30' : 'bg-gray-300 opacity-30')
                          } ${index % 2 === 0 ? 'translate-x-full' : '-translate-x-full'}`}>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-12 text-center">
                  <div className={`inline-flex items-center space-x-2 px-5 py-2 rounded-full ${
                    isDark 
                      ? 'bg-gray-800/90 border border-gray-600/50 text-gray-300' 
                      : 'bg-white/90 border border-gray-200/50 text-gray-700'
                  } backdrop-blur-sm shadow-lg text-sm`}>
                    <div className={`flex space-x-2`}>
                      {achievements.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleAchievementClick(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            activeAchievement >= index
                              ? (index === 0 
                                  ? 'bg-emerald-400 shadow-md' 
                                  : index === 1 
                                    ? 'bg-violet-400 shadow-md' 
                                    : 'bg-orange-400 shadow-md')
                              : (isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400')
                          } ${activeAchievement === index ? 'scale-125' : 'hover:scale-110'}`}
                        />
                      ))}
                    </div>
                    <div className="h-4 w-px bg-gray-400 mx-3"></div>
                    <span className={`font-semibold ${
                      activeAchievement === 0 ? (isDark ? 'text-emerald-400' : 'text-emerald-600') 
                      : activeAchievement === 1 ? (isDark ? 'text-violet-400' : 'text-violet-600') 
                      : (isDark ? 'text-orange-400' : 'text-orange-600')
                    }`}>
                      {activeAchievement + 1} / {achievements.length}
                    </span>
                    <span>-</span>
                    <span className="font-medium">
                      {achievements[activeAchievement]?.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden">
              <div className="relative max-w-md mx-auto">
                
                {/* Mobile Timeline Line */}
                <div className={`absolute left-6 top-0 w-0.5 h-full ${isDark ? 'bg-gradient-to-b from-cyan-500 to-purple-500' : 'bg-gradient-to-b from-blue-500 to-indigo-500'} opacity-30`}></div>
                
                {/* Mobile Timeline Progress */}
                <div className={`absolute left-6 w-0.5 rounded-full ${isDark ? 'bg-gradient-to-b from-cyan-400 to-purple-400' : 'bg-gradient-to-b from-blue-400 to-indigo-400'} transition-all duration-1000 ease-out`} 
                     style={{ 
                       height: `${(activeAchievement / Math.max(achievements.length - 1, 1)) * (100 - (100 / achievements.length / 2) - (100 / achievements.length / 2))}%`,
                       top: `${100 / achievements.length / 2}%`
                     }}>
                  
                  {/* Mobile Rocket at Progress End */}
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-[100]">
                    <div className="relative w-15 h-15">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                        style={{
                          filter: `hue-rotate(${activeAchievement * 60}deg)`,
                          transform: 'rotate(0deg)'
                        }}
                      >
                        <source src={rocketVideo} type="video/webm" />
                      </video>
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Items */}
                <div className="space-y-8">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={achievement.title}
                      className="relative flex items-start"
                      style={{ animationDelay: `${1200 + index * 300}ms` }}
                    >
                      {/* Mobile Node */}
                      <button
                        onClick={() => handleAchievementClick(index)}
                        className={`relative w-10 h-10 rounded-full flex-shrink-0 transition-all duration-500 border-2 ${
                          activeAchievement >= index
                            ? (index === 0 
                                ? (isDark ? 'bg-gradient-to-br from-blue-500 to-cyan-600 border-blue-300 shadow-lg' : 'bg-gradient-to-br from-blue-500 to-indigo-600 border-blue-300 shadow-lg') 
                                : index === 1 
                                  ? (isDark ? 'bg-gradient-to-br from-emerald-500 to-teal-600 border-emerald-300 shadow-lg' : 'bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-300 shadow-lg')
                                  : index === 2
                                    ? (isDark ? 'bg-gradient-to-br from-violet-500 to-purple-600 border-violet-300 shadow-lg' : 'bg-gradient-to-br from-violet-500 to-indigo-600 border-violet-300 shadow-lg')
                                    : index === 3
                                      ? (isDark ? 'bg-gradient-to-br from-amber-500 to-yellow-600 border-amber-300 shadow-lg' : 'bg-gradient-to-br from-amber-500 to-orange-600 border-amber-300 shadow-lg')
                                      : index === 4
                                        ? (isDark ? 'bg-gradient-to-br from-pink-500 to-rose-600 border-pink-300 shadow-lg' : 'bg-gradient-to-br from-pink-500 to-red-600 border-pink-300 shadow-lg')
                                        : index === 5
                                          ? (isDark ? 'bg-gradient-to-br from-cyan-500 to-blue-600 border-cyan-300 shadow-lg' : 'bg-gradient-to-br from-cyan-500 to-teal-600 border-cyan-300 shadow-lg')
                                          : (isDark ? 'bg-gradient-to-br from-orange-500 to-red-600 border-orange-300 shadow-lg' : 'bg-gradient-to-br from-orange-500 to-pink-600 border-orange-300 shadow-lg'))
                            : (isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300')
                        } ${activeAchievement === index ? 'scale-105' : ''} z-0`}
                      >
                        <div className="flex items-center justify-center text-white w-full h-full">
                          <div className="w-5 h-5">
                            {achievement.icon}
                          </div>
                        </div>
                        
                        {activeAchievement === index && (
                          <div className={`absolute inset-0 rounded-full ${
                            index === 0 ? 'bg-blue-400' 
                            : index === 1 ? 'bg-emerald-400' 
                            : index === 2 ? 'bg-violet-400'
                            : index === 3 ? 'bg-amber-400'
                            : index === 4 ? 'bg-pink-400'
                            : index === 5 ? 'bg-cyan-400'
                            : 'bg-orange-400'
                          } opacity-15 animate-pulse`}></div>
                        )}
                      </button>

                      {/* Mobile Content */}
                      <div className="ml-5 flex-1">
                        <div 
                          className={`cursor-pointer transition-all duration-500 transform ${
                            activeAchievement === index ? 'scale-102' : ''
                          }`}
                          onClick={() => handleAchievementClick(index)}
                        >
                          <div className={`relative p-4 rounded-lg backdrop-blur-sm transition-all duration-500 ${
                            activeAchievement === index
                              ? (index === 0 
                                  ? (isDark 
                                      ? 'bg-gray-800/90 border border-blue-500/40 shadow-lg' 
                                      : 'bg-white/90 border border-blue-500/40 shadow-lg')
                                  : index === 1 
                                    ? (isDark 
                                        ? 'bg-gray-800/90 border border-emerald-500/40 shadow-lg' 
                                        : 'bg-white/90 border border-emerald-500/40 shadow-lg')
                                    : index === 2
                                      ? (isDark 
                                          ? 'bg-gray-800/90 border border-violet-500/40 shadow-lg' 
                                          : 'bg-white/90 border border-violet-500/40 shadow-lg')
                                      : index === 3
                                        ? (isDark 
                                            ? 'bg-gray-800/90 border border-amber-500/40 shadow-lg' 
                                            : 'bg-white/90 border border-amber-500/40 shadow-lg')
                                        : index === 4
                                          ? (isDark 
                                              ? 'bg-gray-800/90 border border-pink-500/40 shadow-lg' 
                                              : 'bg-white/90 border border-pink-500/40 shadow-lg')
                                          : index === 5
                                            ? (isDark 
                                                ? 'bg-gray-800/90 border border-cyan-500/40 shadow-lg' 
                                                : 'bg-white/90 border border-cyan-500/40 shadow-lg')
                                            : (isDark 
                                                ? 'bg-gray-800/90 border border-orange-500/40 shadow-lg' 
                                                : 'bg-white/90 border border-orange-500/40 shadow-lg'))
                              : (isDark 
                                  ? 'bg-gray-800/70 border border-gray-600/30 shadow-md' 
                                  : 'bg-white/70 border border-gray-200/30 shadow-md')
                          }`}>
                            
                            {/* Mobile Year Badge */}
                            <div className={`inline-block px-3 py-1 rounded-full font-bold text-xs mb-2 transition-all duration-300 ${
                              activeAchievement === index
                                ? (index === 0 
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white' 
                                    : index === 1 
                                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' 
                                      : index === 2
                                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white'
                                        : index === 3
                                          ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white'
                                          : index === 4
                                            ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white'
                                            : index === 5
                                              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                                              : 'bg-gradient-to-r from-orange-500 to-red-600 text-white')
                                : (isDark 
                                    ? 'bg-gray-700 text-gray-300' 
                                    : 'bg-gray-100 text-gray-700')
                            }`}>
                              {achievement.year}
                            </div>

                            <h4 className={`text-base font-bold mb-1 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                              {achievement.title}
                            </h4>

                            <div className={`flex items-center mb-2 text-xs font-semibold ${
                              activeAchievement === index
                                ? (index === 0 
                                    ? (isDark ? 'text-blue-400' : 'text-blue-600') 
                                    : index === 1 
                                      ? (isDark ? 'text-emerald-400' : 'text-emerald-600') 
                                      : index === 2
                                        ? (isDark ? 'text-violet-400' : 'text-violet-600')
                                        : index === 3
                                          ? (isDark ? 'text-amber-400' : 'text-amber-600')
                                          : index === 4
                                            ? (isDark ? 'text-pink-400' : 'text-pink-600')
                                            : index === 5
                                              ? (isDark ? 'text-cyan-400' : 'text-cyan-600')
                                              : (isDark ? 'text-orange-400' : 'text-orange-600'))
                                : (isDark ? 'text-gray-400' : 'text-gray-600')
                            }`}>
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                              </svg>
                              {achievement.institution}
                            </div>

                            <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                              {achievement.description}
                            </p>

                            {/* Mobile Glow Effect */}
                            <div className={`absolute inset-0 rounded-lg opacity-0 transition-all duration-500 pointer-events-none ${
                              activeAchievement === index
                                ? (isDark 
                                    ? 'bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-100'
                                    : 'bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-100')
                                : ''
                            }`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Progress Indicator */}
                <div className="mt-8 text-center">
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                    isDark 
                      ? 'bg-gray-800/90 border border-gray-600/50 text-gray-300' 
                      : 'bg-white/90 border border-gray-200/50 text-gray-700'
                  } backdrop-blur-sm shadow-lg text-xs`}>
                    <span className={`font-bold ${
                      activeAchievement === 0 ? (isDark ? 'text-emerald-400' : 'text-emerald-600') 
                      : activeAchievement === 1 ? (isDark ? 'text-violet-400' : 'text-violet-600') 
                      : (isDark ? 'text-orange-400' : 'text-orange-600')
                    }`}>
                      {activeAchievement + 1}/{achievements.length}
                    </span>
                    <span>-</span>
                    <span className="font-medium">
                      {achievements[activeAchievement]?.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </Step>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all ${getAnimationClass('duration-1000 delay-1200')} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Step 
            delay={1200}
            padding="p-6 lg:p-8"
            shadow="shadow-xl"
          >
            <h3 className={`text-xl lg:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-6`}>
              Let's Build Something Amazing Together
            </h3>
            <p className={`text-base lg:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
              I'm always excited to work on new projects and collaborate with like-minded individuals. 
              Whether you have an idea or just want to connect, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PrimaryButton 
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  <path d="M14 2v6h6"/>
                  <path d="M12 18v-6m-3 3l3 3 3-3"/>
                </svg>}
                iconPosition="left"
                className="tracking-wide hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent"
              >
                Download CV
              </PrimaryButton>
              
              <PrimaryButton 
                variant="primary"
                size="lg"
                onClick={handleContactMe}
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>}
                iconPosition="left"
                className="tracking-wide hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 hover:text-white"
              >
                Get In Touch
              </PrimaryButton>
            </div>
          </Step>
        </div>
      </div>
      
      {/* Enhanced Timeline Styles */}
      <style jsx>{`
        /* Modern Timeline Animations */
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes timelineGlow {
          0%, 100% {
            opacity: 0.8;
            filter: blur(1px);
          }
          50% {
            opacity: 1;
            filter: blur(0px);
          }
        }
        
        @keyframes floatingBadge {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes nodeRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes cardSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
        
        @keyframes cardSlideInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
        
        @keyframes rocketBoost {
          0%, 100% {
            transform: scale(1) rotate(-15deg);
          }
          50% {
            transform: scale(1.05) rotate(-12deg);
          }
        }
        
        @keyframes rocketTrail {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.1);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-timeline-glow {
          animation: timelineGlow 2s ease-in-out infinite;
        }
        
        .animate-floating-badge {
          animation: floatingBadge 2s ease-in-out infinite;
        }
        
        .animate-node-rotate {
          animation: nodeRotate 20s linear infinite;
        }
        
        .animate-slide-in-left {
          animation: cardSlideIn 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: cardSlideInRight 0.6s ease-out forwards;
        }
        
        .animate-rocket-boost {
          animation: rocketBoost 2s ease-in-out infinite;
        }
        
        .animate-rocket-trail {
          animation: rocketTrail 1.5s ease-in-out infinite;
        }
        
        /* Timeline Node Specific Styles */
        .timeline-node {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform, box-shadow;
        }
        
        .timeline-node:hover {
          transform: scale(1.1) rotate(5deg);
        }
        
        .timeline-node.active {
          transform: scale(1.2) rotate(12deg);
        }
        
        /* Timeline Card Hover Effects */
        .timeline-card {
          transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
          will-change: transform, box-shadow, filter;
        }
        
        .timeline-card:hover {
          transform: scale(1.02) rotate(-0.5deg);
          filter: brightness(1.05);
        }
        
        .timeline-card.active {
          transform: scale(1.05) rotate(1deg);
          filter: brightness(1.1);
        }
        
        /* Connection Line Animation */
        .connection-line {
          position: relative;
          overflow: hidden;
        }
        
        .connection-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.8s ease-out;
        }
        
        .connection-line.active::after {
          left: 100%;
        }
        
        /* Text Shadow for Active States */
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        /* Enhanced Glow Effects */
        .glow-effect {
          filter: drop-shadow(0 0 20px currentColor);
        }
        
        .glow-cyan {
          filter: drop-shadow(0 0 15px rgba(34, 211, 238, 0.5));
        }
        
        .glow-blue {
          filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.5));
        }
        
        /* Modern Glassmorphism */
        .glass-effect {
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.125);
        }
        
        /* Performance Optimizations */
        .timeline-container {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        /* Responsive Animations */
        @media (prefers-reduced-motion: reduce) {
          .animate-gradient-x,
          .animate-timeline-glow,
          .animate-floating-badge,
          .animate-node-rotate,
          .animate-slide-in-left,
          .animate-slide-in-right,
          .animate-rocket-boost,
          .animate-rocket-trail,
          [style*="animation"] {
            animation: none !important;
          }
          
          .timeline-node,
          .timeline-card,
          .connection-line {
            transition: none !important;
          }
        }
        
        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .timeline-card {
            will-change: auto;
          }
          
          .timeline-node {
            will-change: auto;
          }
        }
      `}</style>
    </section>
  )
}

export default About
