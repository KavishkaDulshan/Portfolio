import React, { useState, useEffect, useCallback } from 'react'
import { useTheme } from '../../hooks/useTheme'
import Step from './Step'
import PrimaryButton from './PrimaryButton'
import './About.css'

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

    // Timeline scroll-based progression
    const handleTimelineScroll = () => {
      const timelineSection = document.getElementById('timeline-section')
      if (!timelineSection) return

      const rect = timelineSection.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height
      
      // Calculate scroll progress through the timeline section
      // When top of section reaches bottom of viewport, progress starts (scrollProgress = 0)
      // When bottom of section reaches top of viewport, progress ends (scrollProgress = 1)
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + sectionHeight)
      ))
      
      // Map scroll progress to achievement index (hardcoded 7 achievements)
      const totalAchievements = 7
      const achievementIndex = Math.floor(scrollProgress * totalAchievements)
      const clampedIndex = Math.max(0, Math.min(totalAchievements - 1, achievementIndex))
      
      setActiveAchievement(clampedIndex)
    }

    // Add scroll listener for timeline progression
    window.addEventListener('scroll', handleTimelineScroll)
    
    // Initial call to set correct state
    handleTimelineScroll()

    return () => {
      window.removeEventListener('resize', checkMobile)
      mediaQuery.removeEventListener('change', checkReducedMotion)
      window.removeEventListener('scroll', handleTimelineScroll)
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
        <svg className="w-6 h-6 animate-bounce-slow" fill="currentColor" viewBox="0 0 24 24">
          <g className="animate-pulse-slow">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9z"/>
            <path className="animate-float" d="M17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" opacity="0.7"/>
          </g>
          <circle cx="12" cy="9" r="1" className="animate-ping" opacity="0.3"/>
        </svg>
      )
    },
    {
      title: 'Started Software Engineering Degree',
      institution: 'NSBM Green University',
      description: 'Enrolled in Software Engineering program at NSBM Green University, beginning my formal journey in software development and computer science.',
      year: '2023',
      icon: (
        <svg className="w-6 h-6 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
          <g className="animate-pulse-slow">
            <path d="M12 2L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z"/>
            <path className="animate-fade-in-out" d="M12 6l6 3.2-6 3.2-6-3.2L12 6z" opacity="0.8"/>
            <circle cx="12" cy="12" r="2" className="animate-pulse" opacity="0.6"/>
          </g>
          <path className="animate-draw-line" stroke="currentColor" strokeWidth="0.5" fill="none" d="M5 15l7-7 7 7"/>
        </svg>
      )
    },
    {
      title: 'Learned Software Industry Technologies',
      institution: 'Self-Learning & University',
      description: 'Mastered modern web development technologies including React.js, Node.js, JavaScript ES6+, HTML5, CSS3, and various development tools.',
      year: '2023',
      icon: (
        <svg className="w-6 h-6 animate-wobble" fill="currentColor" viewBox="0 0 24 24">
          <g className="animate-scale-pulse">
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" className="animate-draw-circle"/>
            <path d="M9 12l2 2 4-4" strokeWidth="2" stroke="currentColor" fill="none" className="animate-check-draw"/>
            <circle cx="12" cy="12" r="3" className="animate-pulse" opacity="0.4"/>
          </g>
          <g className="animate-orbit">
            <circle cx="18" cy="12" r="1" opacity="0.6"/>
            <circle cx="6" cy="12" r="1" opacity="0.6"/>
            <circle cx="12" cy="6" r="1" opacity="0.6"/>
            <circle cx="12" cy="18" r="1" opacity="0.6"/>
          </g>
        </svg>
      )
    },
    {
      title: 'Learned Software Industry Concepts',
      institution: 'Online Courses & Practice',
      description: 'Studied software engineering principles, design patterns, database design, API development, version control, and agile development methodologies.',
      year: '2023 - 2024',
      icon: (
        <svg className="w-6 h-6 animate-glow" fill="currentColor" viewBox="0 0 24 24">
          <g className="animate-brightness-pulse">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            <circle cx="12" cy="12" r="4" className="animate-pulse" opacity="0.3"/>
          </g>
          <g className="animate-sparkle">
            <circle cx="12" cy="4" r="0.5" className="animate-twinkle" opacity="0.8"/>
            <circle cx="20" cy="9" r="0.5" className="animate-twinkle" style={{animationDelay: '0.5s'}} opacity="0.8"/>
            <circle cx="4" cy="9" r="0.5" className="animate-twinkle" style={{animationDelay: '1s'}} opacity="0.8"/>
            <circle cx="12" cy="20" r="0.5" className="animate-twinkle" style={{animationDelay: '1.5s'}} opacity="0.8"/>
          </g>
        </svg>
      )
    },
    {
      title: 'Started Personal Projects',
      institution: 'Personal Development',
      description: 'Began building personal web applications and software projects to apply learned concepts and create a professional portfolio.',
      year: '2024',
      icon: (
        <svg className="w-6 h-6 animate-typing" fill="currentColor" viewBox="0 0 24 24">
          <g className="animate-slide-up">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M7 8h10M7 12h8M7 16h6" stroke="currentColor" strokeWidth="1.5" className="animate-type-lines"/>
          </g>
          <g className="animate-float-gentle">
            <circle cx="19" cy="5" r="2" className="animate-notification-pulse" opacity="0.7"/>
            <path d="M18 4.5l1 0.5 1-0.5" stroke="currentColor" strokeWidth="0.5" fill="none" className="animate-check-small"/>
          </g>
          <rect x="6" y="10" width="1" height="2" className="animate-cursor-blink" opacity="0.8"/>
        </svg>
      )
    },
    {
      title: 'Started IoT Projects',
      institution: 'Self-Learning',
      description: 'Explored Internet of Things development using Arduino and Raspberry Pi, integrating sensors and building smart automation systems.',
      year: '2024',
      icon: (
        <svg className="w-6 h-6 animate-tech-pulse" fill="currentColor" viewBox="0 0 24 24">
          <g className="animate-circuit-flow">
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" fill="none" className="animate-circle-draw"/>
            <circle cx="12" cy="12" r="3" className="animate-core-pulse"/>
            <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="2" className="animate-signal-flow"/>
          </g>
          <g className="animate-sensor-blink">
            <circle cx="8" cy="8" r="1" className="animate-sensor-pulse" opacity="0.8"/>
            <circle cx="16" cy="8" r="1" className="animate-sensor-pulse" style={{animationDelay: '0.3s'}} opacity="0.8"/>
            <circle cx="8" cy="16" r="1" className="animate-sensor-pulse" style={{animationDelay: '0.6s'}} opacity="0.8"/>
            <circle cx="16" cy="16" r="1" className="animate-sensor-pulse" style={{animationDelay: '0.9s'}} opacity="0.8"/>
          </g>
          <path d="M12 8l2 2-2 2-2-2z" className="animate-data-flow" opacity="0.6"/>
        </svg>
      )
    },
    {
      title: 'Seeking New Technologies & Projects',
      institution: 'Continuous Learning',
      description: 'Currently exploring emerging technologies, experimenting with new frameworks, and working on innovative projects to stay ahead in the software industry.',
      year: '2024 - Present',
      icon: (
        <svg className="w-6 h-6 animate-lightning" fill="currentColor" viewBox="0 0 24 24">
          <g className="animate-electric-pulse">
            <path d="M13 2L4 14h7v7l9-11h-7V2z" className="animate-lightning-strike"/>
            <path d="M11 6L8 10h4v4l3-4h-4V6z" className="animate-inner-lightning" opacity="0.7"/>
          </g>
          <g className="animate-energy-sparks">
            <circle cx="6" cy="8" r="0.5" className="animate-spark" opacity="0.9"/>
            <circle cx="18" cy="16" r="0.5" className="animate-spark" style={{animationDelay: '0.2s'}} opacity="0.9"/>
            <circle cx="15" cy="6" r="0.5" className="animate-spark" style={{animationDelay: '0.4s'}} opacity="0.9"/>
            <circle cx="9" cy="18" r="0.5" className="animate-spark" style={{animationDelay: '0.6s'}} opacity="0.9"/>
          </g>
          <path d="M12 2L12 22" stroke="currentColor" strokeWidth="0.5" className="animate-energy-beam" opacity="0.3"/>
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
        <div 
          id="timeline-section"
          className={`mb-12 transform transition-all ${getAnimationClass('duration-1000 delay-1000')} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
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
                       height: `${(activeAchievement / Math.max(7 - 1, 1)) * (100 - (100 / 7 / 2) - (100 / 7 / 2))}%`,
                       top: `${100 / 7 / 2}%`
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse"></div>
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
                        <div
                          className={`relative w-12 h-12 rounded-full transition-all duration-500 border-3 cursor-default ${
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
                              : (isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300')
                          } ${activeAchievement === index ? 'scale-110 rotate-6' : ''}`}
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
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                        <div 
                          className={`relative transition-all duration-700 transform ${
                            activeAchievement === index 
                              ? 'scale-105 rotate-1' 
                              : ''
                          }`}
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

                      {/* 3D Animated Illustration - Opposite side */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pl-12' : 'pr-12'} flex items-center justify-center`}>
                        <div className={`transition-all duration-700 transform ${
                          activeAchievement === index 
                            ? 'scale-110 opacity-100' 
                            : 'scale-95 opacity-60'
                        }`}>
                          {/* Achievement 0: Graduation Cap 3D */}
                          {index === 0 && (
                            <div className="relative w-48 h-48 flex items-center justify-center">
                              <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
                                {/* Graduation Cap Base */}
                                <ellipse cx="100" cy="120" rx="60" ry="12" fill={isDark ? '#1e3a8a' : '#3b82f6'} className="animate-shadow-pulse" opacity="0.3"/>
                                <path d="M40 100 L100 80 L160 100 L160 120 L100 140 L40 120 Z" 
                                      fill={isDark ? '#1d4ed8' : '#2563eb'} 
                                      className="animate-three-d-cap-tilt"/>
                                {/* Cap Top */}
                                <ellipse cx="100" cy="100" rx="60" ry="15" fill={isDark ? '#2563eb' : '#1d4ed8'}/>
                                {/* Tassel */}
                                <circle cx="130" cy="95" r="3" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-tassel-swing"/>
                                <path d="M130 98 Q135 105 130 112 Q125 105 130 98" 
                                      fill={isDark ? '#fbbf24' : '#f59e0b'} 
                                      className="animate-tassel-swing"/>
                                {/* Floating Books */}
                                <rect x="65" y="60" width="12" height="16" rx="2" fill={isDark ? '#dc2626' : '#ef4444'} className="animate-book-float-1"/>
                                <rect x="125" y="65" width="12" height="16" rx="2" fill={isDark ? '#16a34a' : '#22c55e'} className="animate-book-float-2"/>
                                {/* Sparkles */}
                                <circle cx="70" cy="50" r="2" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-sparkle-1"/>
                                <circle cx="140" cy="45" r="2" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-sparkle-2"/>
                                <circle cx="90" cy="40" r="1.5" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-sparkle-3"/>
                              </svg>
                            </div>
                          )}

                          {/* Achievement 1: University Building 3D */}
                          {index === 1 && (
                            <div className="relative w-48 h-48 flex items-center justify-center">
                              <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
                                {/* Building Shadow */}
                                <ellipse cx="100" cy="170" rx="70" ry="15" fill={isDark ? '#065f46' : '#10b981'} className="animate-shadow-pulse" opacity="0.3"/>
                                {/* Main Building */}
                                <rect x="60" y="80" width="80" height="90" fill={isDark ? '#059669' : '#10b981'} className="animate-building-glow"/>
                                {/* Roof */}
                                <path d="M50 80 L100 50 L150 80 Z" fill={isDark ? '#047857' : '#059669'}/>
                                {/* Windows */}
                                <rect x="70" y="95" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-1"/>
                                <rect x="85" y="95" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-2"/>
                                <rect x="100" y="95" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-3"/>
                                <rect x="115" y="95" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-1"/>
                                <rect x="70" y="115" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-2"/>
                                <rect x="85" y="115" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-3"/>
                                <rect x="100" y="115" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-1"/>
                                <rect x="115" y="115" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-2"/>
                                {/* Door */}
                                <rect x="90" y="140" width="20" height="30" fill={isDark ? '#92400e' : '#d97706'}/>
                                {/* Flag */}
                                <line x1="45" y1="30" x2="45" y2="75" stroke={isDark ? '#6b7280' : '#4b5563'} strokeWidth="2"/>
                                <path d="M45 30 L70 35 L70 50 L45 45 Z" fill={isDark ? '#dc2626' : '#ef4444'} className="animate-flag-wave"/>
                                {/* Floating Elements */}
                                <circle cx="40" cy="60" r="3" fill={isDark ? '#06b6d4' : '#0891b2'} className="animate-float-element-1"/>
                                <circle cx="160" cy="70" r="2.5" fill={isDark ? '#8b5cf6' : '#7c3aed'} className="animate-float-element-2"/>
                              </svg>
                            </div>
                          )}

                          {/* Achievement 2: Coding Monitor 3D */}
                          {index === 2 && (
                            <div className="relative w-48 h-48 flex items-center justify-center">
                              <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
                                {/* Monitor Shadow */}
                                <ellipse cx="100" cy="170" rx="65" ry="12" fill={isDark ? '#581c87' : '#7c3aed'} className="animate-shadow-pulse" opacity="0.3"/>
                                {/* Monitor Base */}
                                <rect x="90" y="150" width="20" height="15" fill={isDark ? '#4b5563' : '#6b7280'}/>
                                <ellipse cx="100" cy="165" rx="25" ry="5" fill={isDark ? '#374151' : '#4b5563'}/>
                                {/* Monitor Screen */}
                                <rect x="50" y="60" width="100" height="90" rx="8" fill={isDark ? '#1f2937' : '#374151'} className="animate-screen-glow"/>
                                <rect x="55" y="65" width="90" height="80" rx="4" fill={isDark ? '#111827' : '#1f2937'}/>
                                {/* Code Lines */}
                                <rect x="65" y="75" width="30" height="3" fill={isDark ? '#10b981' : '#059669'} className="animate-code-type-1"/>
                                <rect x="65" y="85" width="45" height="3" fill={isDark ? '#3b82f6' : '#2563eb'} className="animate-code-type-2"/>
                                <rect x="75" y="95" width="35" height="3" fill={isDark ? '#f59e0b' : '#d97706'} className="animate-code-type-3"/>
                                <rect x="65" y="105" width="50" height="3" fill={isDark ? '#ef4444' : '#dc2626'} className="animate-code-type-1"/>
                                <rect x="75" y="115" width="25" height="3" fill={isDark ? '#8b5cf6' : '#7c3aed'} className="animate-code-type-2"/>
                                <rect x="65" y="125" width="40" height="3" fill={isDark ? '#06b6d4' : '#0891b2'} className="animate-code-type-3"/>
                                {/* Cursor */}
                                <rect x="105" y="125" width="2" height="3" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-cursor-blink"/>
                                {/* Floating Code Symbols */}
                                <text x="160" y="50" fill={isDark ? '#10b981' : '#059669'} fontSize="16" className="animate-symbol-float-1">{'<}'}</text>
                                <text x="35" y="55" fill={isDark ? '#3b82f6' : '#2563eb'} fontSize="14" className="animate-symbol-float-2">{'{ }'}</text>
                                <text x="170" y="120" fill={isDark ? '#f59e0b' : '#d97706'} fontSize="12" className="animate-symbol-float-3">{'( )'}</text>
                              </svg>
                            </div>
                          )}

                          {/* Achievement 3: Light Bulb Idea 3D */}
                          {index === 3 && (
                            <div className="relative w-48 h-48 flex items-center justify-center">
                              <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
                                {/* Bulb Shadow */}
                                <ellipse cx="100" cy="170" rx="45" ry="10" fill={isDark ? '#92400e' : '#f59e0b'} className="animate-shadow-pulse" opacity="0.3"/>
                                {/* Bulb Base */}
                                <rect x="85" y="130" width="30" height="20" rx="5" fill={isDark ? '#6b7280' : '#9ca3af'}/>
                                <rect x="90" y="145" width="20" height="8" fill={isDark ? '#4b5563' : '#6b7280'}/>
                                {/* Bulb */}
                                <circle cx="100" cy="100" r="35" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-bulb-glow"/>
                                <circle cx="100" cy="100" r="30" fill={isDark ? '#fed7aa' : '#fef3c7'} className="animate-inner-glow"/>
                                {/* Filament */}
                                <path d="M85 90 Q100 85 115 90 Q100 95 85 90" stroke={isDark ? '#92400e' : '#b45309'} strokeWidth="2" fill="none" className="animate-filament-glow"/>
                                <path d="M85 110 Q100 105 115 110 Q100 115 85 110" stroke={isDark ? '#92400e' : '#b45309'} strokeWidth="2" fill="none" className="animate-filament-glow"/>
                                {/* Light Rays */}
                                <line x1="45" y1="100" x2="35" y2="100" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="3" className="animate-ray-1"/>
                                <line x1="155" y1="100" x2="165" y2="100" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="3" className="animate-ray-2"/>
                                <line x1="100" y1="45" x2="100" y2="35" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="3" className="animate-ray-3"/>
                                <line x1="65" y1="65" x2="58" y2="58" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-ray-4"/>
                                <line x1="135" y1="65" x2="142" y2="58" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-ray-5"/>
                                <line x1="65" y1="135" x2="58" y2="142" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-ray-6"/>
                                <line x1="135" y1="135" x2="142" y2="142" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-ray-7"/>
                                {/* Floating Ideas */}
                                <circle cx="60" cy="40" r="4" fill={isDark ? '#fef3c7' : '#fffbeb'} className="animate-idea-float-1"/>
                                <circle cx="150" cy="45" r="3" fill={isDark ? '#fef3c7' : '#fffbeb'} className="animate-idea-float-2"/>
                                <circle cx="45" cy="140" r="3.5" fill={isDark ? '#fef3c7' : '#fffbeb'} className="animate-idea-float-3"/>
                              </svg>
                            </div>
                          )}

                          {/* Achievement 4: Project Folder 3D */}
                          {index === 4 && (
                            <div className="relative w-48 h-48 flex items-center justify-center">
                              <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
                                {/* Folder Shadow */}
                                <ellipse cx="100" cy="165" rx="60" ry="12" fill={isDark ? '#be185d' : '#ec4899'} className="animate-shadow-pulse" opacity="0.3"/>
                                {/* Main Folder */}
                                <path d="M40 80 L40 150 L160 150 L160 90 L120 90 L110 80 Z" 
                                      fill={isDark ? '#ec4899' : '#f472b6'} 
                                      className="animate-folder-glow"/>
                                {/* Folder Tab */}
                                <path d="M40 80 L110 80 L120 90 L40 90 Z" fill={isDark ? '#be185d' : '#ec4899'}/>
                                {/* File Icons */}
                                <rect x="55" y="105" width="20" height="25" rx="2" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-file-bob-1"/>
                                <rect x="85" y="110" width="20" height="25" rx="2" fill={isDark ? '#3b82f6' : '#60a5fa'} className="animate-file-bob-2"/>
                                <rect x="115" y="108" width="20" height="25" rx="2" fill={isDark ? '#10b981' : '#34d399'} className="animate-file-bob-3"/>
                                {/* Progress Bars on Files */}
                                <rect x="58" y="120" width="14" height="2" fill={isDark ? '#065f46' : '#059669'} className="animate-progress-fill-1"/>
                                <rect x="88" y="125" width="14" height="2" fill={isDark ? '#1e40af' : '#2563eb'} className="animate-progress-fill-2"/>
                                <rect x="118" y="123" width="14" height="2" fill={isDark ? '#be185d' : '#ec4899'} className="animate-progress-fill-3"/>
                                {/* Floating Code Elements */}
                                <circle cx="170" cy="60" r="8" fill={isDark ? '#374151' : '#6b7280'} className="animate-code-orbit"/>
                                <rect x="166" y="56" width="8" height="1" fill={isDark ? '#10b981' : '#059669'}/>
                                <rect x="166" y="59" width="6" height="1" fill={isDark ? '#3b82f6' : '#2563eb'}/>
                                <rect x="166" y="62" width="5" height="1" fill={isDark ? '#f59e0b' : '#d97706'}/>
                                {/* Notification Badge */}
                                <circle cx="145" cy="75" r="6" fill={isDark ? '#dc2626' : '#ef4444'} className="animate-notification-pulse"/>
                                <text x="145" y="78" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">3</text>
                              </svg>
                            </div>
                          )}

                          {/* Achievement 5: IoT Circuit 3D */}
                          {index === 5 && (
                            <div className="relative w-48 h-48 flex items-center justify-center">
                              <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
                                {/* Circuit Shadow */}
                                <ellipse cx="100" cy="170" rx="70" ry="15" fill={isDark ? '#0c4a6e' : '#0284c7'} className="animate-shadow-pulse" opacity="0.3"/>
                                {/* Circuit Board */}
                                <rect x="50" y="70" width="100" height="80" rx="8" fill={isDark ? '#065f46' : '#059669'} className="animate-circuit-glow"/>
                                {/* Central Processor */}
                                <rect x="85" y="95" width="30" height="30" fill={isDark ? '#1f2937' : '#374151'} className="animate-processor-pulse"/>
                                <rect x="90" y="100" width="20" height="20" fill={isDark ? '#4b5563' : '#6b7280'}/>
                                {/* Circuit Traces */}
                                <path d="M100 70 L100 95" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-trace-flow-1"/>
                                <path d="M100 125 L100 150" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-trace-flow-2"/>
                                <path d="M50 110 L85 110" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-trace-flow-3"/>
                                <path d="M115 110 L150 110" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-trace-flow-4"/>
                                {/* Sensors */}
                                <circle cx="70" cy="85" r="6" fill={isDark ? '#3b82f6' : '#60a5fa'} className="animate-sensor-pulse-1"/>
                                <circle cx="130" cy="85" r="6" fill={isDark ? '#ec4899' : '#f472b6'} className="animate-sensor-pulse-2"/>
                                <circle cx="70" cy="135" r="6" fill={isDark ? '#f59e0b' : '#fbbf24'} className="animate-sensor-pulse-3"/>
                                <circle cx="130" cy="135" r="6" fill={isDark ? '#10b981' : '#34d399'} className="animate-sensor-pulse-4"/>
                                {/* LED Indicators */}
                                <circle cx="95" cy="75" r="2" fill={isDark ? '#dc2626' : '#ef4444'} className="animate-led-blink-1"/>
                                <circle cx="105" cy="75" r="2" fill={isDark ? '#10b981' : '#22c55e'} className="animate-led-blink-2"/>
                                {/* WiFi Signal */}
                                <path d="M160 50 Q170 60 160 70" stroke={isDark ? '#06b6d4' : '#0891b2'} strokeWidth="2" fill="none" className="animate-wifi-signal-1"/>
                                <path d="M165 55 Q170 60 165 65" stroke={isDark ? '#06b6d4' : '#0891b2'} strokeWidth="2" fill="none" className="animate-wifi-signal-2"/>
                                <circle cx="170" cy="60" r="1.5" fill={isDark ? '#06b6d4' : '#0891b2'} className="animate-wifi-dot"/>
                                {/* Data Flow */}
                                <circle cx="40" cy="50" r="3" fill={isDark ? '#8b5cf6' : '#a78bfa'} className="animate-data-particle-1"/>
                                <circle cx="45" cy="160" r="2.5" fill={isDark ? '#8b5cf6' : '#a78bfa'} className="animate-data-particle-2"/>
                                <circle cx="155" cy="40" r="2" fill={isDark ? '#8b5cf6' : '#a78bfa'} className="animate-data-particle-3"/>
                              </svg>
                            </div>
                          )}

                          {/* Achievement 6: Lightning Tech 3D */}
                          {index === 6 && (
                            <div className="relative w-48 h-48 flex items-center justify-center">
                              <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
                                {/* Lightning Shadow */}
                                <ellipse cx="100" cy="170" rx="50" ry="12" fill={isDark ? '#ea580c' : '#f97316'} className="animate-shadow-pulse" opacity="0.3"/>
                                {/* Main Lightning Bolt */}
                                <path d="M85 40 L70 90 L90 90 L80 160 L130 80 L110 80 L115 40 Z" 
                                      fill={isDark ? '#f97316' : '#fb923c'} 
                                      className="animate-lightning-flash"/>
                                {/* Inner Lightning */}
                                <path d="M90 50 L80 85 L95 85 L85 140 L115 90 L105 90 L110 50 Z" 
                                      fill={isDark ? '#fed7aa' : '#ffedd5'} 
                                      className="animate-inner-lightning-glow"/>
                                {/* Electric Arcs */}
                                <path d="M50 70 Q60 65 70 70 Q80 75 90 70" 
                                      stroke={isDark ? '#fbbf24' : '#f59e0b'} 
                                      strokeWidth="2" 
                                      fill="none" 
                                      className="animate-electric-arc-1"/>
                                <path d="M110 110 Q120 105 130 110 Q140 115 150 110" 
                                      stroke={isDark ? '#fbbf24' : '#f59e0b'} 
                                      strokeWidth="2" 
                                      fill="none" 
                                      className="animate-electric-arc-2"/>
                                {/* Energy Spheres */}
                                <circle cx="60" cy="120" r="8" fill={isDark ? '#06b6d4' : '#0891b2'} className="animate-energy-sphere-1"/>
                                <circle cx="140" cy="60" r="6" fill={isDark ? '#8b5cf6' : '#a78bfa'} className="animate-energy-sphere-2"/>
                                <circle cx="45" cy="45" r="5" fill={isDark ? '#ec4899' : '#f472b6'} className="animate-energy-sphere-3"/>
                                <circle cx="155" cy="140" r="7" fill={isDark ? '#10b981' : '#22c55e'} className="animate-energy-sphere-4"/>
                                {/* Tech Grid Background */}
                                <defs>
                                  <pattern id="techGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect width="20" height="20" fill="none" stroke={isDark ? '#374151' : '#6b7280'} strokeWidth="0.5" opacity="0.3"/>
                                  </pattern>
                                </defs>
                                <rect x="30" y="30" width="140" height="140" fill="url(#techGrid)" className="animate-grid-pulse"/>
                                {/* Particle Effects */}
                                <circle cx="35" cy="100" r="1.5" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-particle-1"/>
                                <circle cx="170" cy="80" r="1" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-particle-2"/>
                                <circle cx="25" cy="150" r="1.2" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-particle-3"/>
                                <circle cx="175" cy="120" r="0.8" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-particle-4"/>
                              </svg>
                            </div>
                          )}
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
                        <div
                          key={index}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            activeAchievement >= index
                              ? (index === 0 
                                  ? 'bg-emerald-400 shadow-md' 
                                  : index === 1 
                                    ? 'bg-violet-400 shadow-md' 
                                    : 'bg-orange-400 shadow-md')
                              : (isDark ? 'bg-gray-600' : 'bg-gray-300')
                          } ${activeAchievement === index ? 'scale-125' : ''}`}
                        />
                      ))}
                    </div>
                    <div className="h-4 w-px bg-gray-400 mx-3"></div>
                    <span className={`font-semibold ${
                      activeAchievement === 0 ? (isDark ? 'text-emerald-400' : 'text-emerald-600') 
                      : activeAchievement === 1 ? (isDark ? 'text-violet-400' : 'text-violet-600') 
                      : (isDark ? 'text-orange-400' : 'text-orange-600')
                    }`}>
                      {activeAchievement + 1} / 7
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
                       height: `${(activeAchievement / Math.max(7 - 1, 1)) * (100 - (100 / 7 / 2) - (100 / 7 / 2))}%`,
                       top: `${100 / 7 / 2}%`
                     }}>
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
                      <div
                        className={`relative w-10 h-10 rounded-full flex-shrink-0 transition-all duration-500 border-2 cursor-default ${
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
                      </div>

                      {/* Mobile Content */}
                      <div className="ml-5 flex-1">
                        <div 
                          className={`transition-all duration-500 transform ${
                            activeAchievement === index ? 'scale-102' : ''
                          }`}
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
                      {activeAchievement + 1}/7
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
      
    </section>
  )
}

export default About
