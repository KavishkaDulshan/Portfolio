import React, { useState, useEffect } from 'react'
import { useTheme } from '../../hooks/useTheme'
import Step from './Step'

const PersonalStory = () => {
  const { isDark } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const checkReducedMotion = () => {
      setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }

    checkReducedMotion()
    
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

    const currentElement = document.getElementById('personal-story')
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      mediaQuery.removeEventListener('change', checkReducedMotion)
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  const getAnimationClass = (baseClass) => {
    return isReducedMotion ? '' : baseClass
  }

  return (
    <div 
      id="personal-story"
      className={`transform transition-all ${getAnimationClass('duration-1000 delay-400')} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}
    >
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
  )
}

export default PersonalStory
