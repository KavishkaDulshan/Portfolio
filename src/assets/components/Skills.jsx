import React, { useState, useEffect, useCallback } from 'react'
import { useTheme } from '../../hooks/useTheme'
import Step from './Step'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [activeSkillCategory, setActiveSkillCategory] = useState(null)
  const { isDark } = useTheme()

  // Mobile fallback: Make content visible on mobile devices
  useEffect(() => {
    if (isMobile) {
      setIsVisible(true)
    }
  }, [isMobile])

  // Detect mobile devices and reduced motion preference
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // Immediately set visible for mobile
      if (mobile) {
        setIsVisible(true)
      }
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
      { 
        threshold: isMobile ? 0.05 : 0.1, // Lower threshold for mobile
        rootMargin: isMobile ? '50px 0px' : '0px 0px' // Add margin for mobile
      }
    )

    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    // Fallback: Set visible after a delay if intersection observer fails
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true)
      }
    }, isMobile ? 1000 : 2000) // Shorter delay on mobile

    return () => {
      window.removeEventListener('resize', checkMobile)
      mediaQuery.removeEventListener('change', checkReducedMotion)
      clearTimeout(fallbackTimer) // Clean up timer
      if (skillsSection) observer.unobserve(skillsSection)
    }
  }, [isMobile, isVisible])

  const getAnimationClass = useCallback((baseClass) => {
    // Disable animations on mobile to prevent visibility issues
    return isReducedMotion || isMobile ? '' : baseClass
  }, [isReducedMotion, isMobile])

  const handleSkillHover = useCallback((skillCategory) => {
    if (!isMobile) {
      setActiveSkillCategory(skillCategory)
    }
  }, [isMobile])

  const handleSkillLeave = useCallback(() => {
    if (!isMobile) {
      setActiveSkillCategory(null)
    }
  }, [isMobile])

  // Skills data organized by categories
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      skills: [
        { 
          name: 'React.js', 
          level: 85, 
          color: 'bg-sky-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#61DAFB">
              <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
            </svg>
          )
        },
        { 
          name: 'JavaScript ES6+', 
          level: 80, 
          color: 'bg-yellow-400',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#F7DF1E">
              <rect width="24" height="24" fill="#F7DF1E"/>
              <path d="M20.3 16.1c-.2-.8-.9-1.5-2.4-1.5-1 0-1.6.5-1.9 1.2-.2.4-.2.6-.3 1.1h-1.5c.1-1.2.6-2.1 1.4-2.8.8-.7 1.9-1 3.2-1 2.7 0 4.3 1.4 4.3 3.6 0 1.8-.9 2.9-2.7 3.7l-1.1.5c-.9.4-1.3.8-1.3 1.5h-1.6c0-1.3.6-2.1 1.8-2.7l1.2-.6c1.2-.6 1.7-1.1 1.7-2z" fill="#000"/>
              <path d="M7.8 19.6c-.6 0-1.1-.1-1.6-.4-.5-.3-.8-.7-1-1.2-.2-.5-.3-1.1-.3-1.8V9.8h1.6v6.4c0 .6.1 1 .3 1.3.2.3.5.4.9.4.4 0 .7-.1.9-.4.2-.3.3-.7.3-1.3V9.8h1.6v6.4c0 .7-.1 1.3-.3 1.8-.2.5-.5.9-1 1.2-.5.3-1 .4-1.6.4z" fill="#000"/>
            </svg>
          )
        },
        { 
          name: 'HTML5', 
          level: 90, 
          color: 'bg-orange-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#E34F26">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
            </svg>
          )
        },
        { 
          name: 'CSS3', 
          level: 85, 
          color: 'bg-blue-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1572B6">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
            </svg>
          )
        },
        { 
          name: 'Tailwind CSS', 
          level: 75, 
          color: 'bg-cyan-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#06B6D4">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
            </svg>
          )
        },
        { 
          name: 'Bootstrap', 
          level: 70, 
          color: 'bg-purple-600',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#7952B3">
              <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572z"/>
              <path d="M20.893 0H3.107C1.393 0 0 1.393 0 3.107v17.786C0 22.607 1.393 24 3.107 24h17.786C22.607 24 24 22.607 24 20.893V3.107C24 1.393 22.607 0 20.893 0zM11.77 15.931H9.956v-3.129h2.174c1.582 0 2.387-.73 2.387-2.173 0-1.001-.508-1.709-1.455-2.022.616-.245 1.009-.95 1.009-1.85 0-1.316-.955-2.107-2.174-2.107H7.668v11.281h4.102c1.582 0 2.387-.73 2.387-2.173 0-1.001-.508-1.709-1.455-2.022.616-.245 1.009-.95 1.009-1.85z"/>
            </svg>
          )
        },
        { 
          name: 'Responsive Design', 
          level: 80, 
          color: 'bg-green-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#22C55E">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              <rect x="2" y="3" width="20" height="18" rx="2" ry="2" stroke="#22C55E" strokeWidth="2" fill="none"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Backend Development',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
      ),
      skills: [
        { 
          name: 'Java', 
          level: 80, 
          color: 'bg-red-600',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#ED8B00">
              <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218"/>
              <path d="M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
            </svg>
          )
        },
        { 
          name: 'Python', 
          level: 75, 
          color: 'bg-blue-600',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#3776AB">
              <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
            </svg>
          )
        },
        { 
          name: 'Java Servlet', 
          level: 70, 
          color: 'bg-orange-600',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#F89820">
              <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218"/>
              <path d="M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573"/>
            </svg>
          )
        },
        { 
          name: 'Spring Boot', 
          level: 65, 
          color: 'bg-green-600',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#6DB33F">
              <path d="m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942h-9.4856c-.8236 0-1.8308.5836-2.2402 1.2942L.2574 10.7058c-.4094.7106-.4094 1.8778 0 2.5884l4.73 8.1844c.4094.7106 1.4166 1.2942 2.2402 1.2942h9.4856c.8236 0 1.8308-.5836 2.2402-1.2942l4.73-8.1844c.4094-.7106.4094-1.8778 0-2.5884z"/>
              <path d="M11.9999 5.9333C8.6666 5.9333 5.9333 8.6666 5.9333 11.9999s2.7333 6.0666 6.0666 6.0666 6.0666-2.7333 6.0666-6.0666-2.7333-6.0666-6.0666-6.0666z" fill="#fff"/>
            </svg>
          )
        },
        { 
          name: 'PHP', 
          level: 60, 
          color: 'bg-indigo-600',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#777BB4">
              <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.347.32-.235.48-.578.48-1.021 0-.328-.095-.579-.263-.761-.159-.173-.421-.259-.783-.259-.618-.001-1.105-.001-1.105-.001zm-2.603 5.891H2.609L4.082 5.602h1.799l-.352 1.831h1.352c.179 0 .308.025.393.083a.472.472 0 01.231.252c.055.12.08.271.08.465a.86.86 0 01-.117.434 2.28 2.28 0 01-.321.401 1.617 1.617 0 01-.597.334c-.154.055-.533.083-1.136.083-.618 0-1.105 0-1.105 0l-.263 1.363h1.424c.324 0 .565.017.745.066.18.049.315.129.408.24.093.111.14.259.14.442 0 .214-.071.414-.214.6-.143.186-.348.334-.617.442-.269.108-.6.162-.99.162H1.026l1.381-7.496z"/>
            </svg>
          )
        },
        { 
          name: 'REST APIs', 
          level: 70, 
          color: 'bg-purple-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#A855F7">
              <path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10.04,15.76V7.24L20,3M3,13L9,12.09V18.5L3,17.25V13M20,13.25V22L10.04,18.76V16.24L20,13.25Z"/>
            </svg>
          )
        },
        { 
          name: 'Database Design', 
          level: 60, 
          color: 'bg-indigo-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#6366F1">
              <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      skills: [
        { 
          name: 'Git & GitHub', 
          level: 85, 
          color: 'bg-gray-700',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#181717">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          )
        },
        { 
          name: 'VS Code', 
          level: 90, 
          color: 'bg-blue-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#007ACC">
              <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
            </svg>
          )
        },
        { 
          name: 'Vite', 
          level: 70, 
          color: 'bg-purple-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#646CFF">
              <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355L8.422 14.48a.306.306 0 0 1-.57-.329l.434-3.573z"/>
              <path d="M15.974 3.335 6.19 5.282a.306.306 0 0 0-.252.368l1.885 7.243a.306.306 0 0 0 .596-.063L7.42 8.77a.306.306 0 0 1 .204-.305l6.038-1.595a.306.306 0 0 0 .312-.535z" fill="#FFCF00"/>
            </svg>
          )
        },
        { 
          name: 'npm/yarn', 
          level: 75, 
          color: 'bg-red-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#CB3837">
              <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/>
            </svg>
          )
        },
        { 
          name: 'Chrome DevTools', 
          level: 80, 
          color: 'bg-yellow-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#4285F4">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.303 0 9.6 4.297 9.6 9.6 0 5.303-4.297 9.6-9.6 9.6S2.4 17.303 2.4 12 6.697 2.4 12 2.4z"/>
              <circle cx="12" cy="12" r="6" fill="#EA4335"/>
              <circle cx="12" cy="12" r="3" fill="#FBBC04"/>
            </svg>
          )
        },
        { 
          name: 'GitHub Copilot', 
          level: 85, 
          color: 'bg-green-600',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#24292e">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.662c-.126.378-.463.72-.984.72-.507 0-.888-.315-1.01-.72-.033-.11-.082-.309-.082-.621 0-.931.573-1.704 1.092-1.704.519 0 1.092.773 1.092 1.704 0 .312-.049.511-.108.621zm-11.136 0c-.126.378-.463.72-.984.72-.507 0-.888-.315-1.01-.72-.033-.11-.082-.309-.082-.621 0-.931.573-1.704 1.092-1.704.519 0 1.092.773 1.092 1.704 0 .312-.049.511-.108.621z"/>
            </svg>
          )
        },
        { 
          name: 'ChatGPT', 
          level: 80, 
          color: 'bg-emerald-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#10A37F">
              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142.0852-4.7735 2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
            </svg>
          )
        },
        { 
          name: 'Perplexity', 
          level: 75, 
          color: 'bg-violet-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#8B5CF6">
              <path d="M12 0L0 7l12 5 12-5L12 0zm0 14L0 19l12 5 12-5-12-5z"/>
            </svg>
          )
        },
        { 
          name: 'DeepSeek', 
          level: 70, 
          color: 'bg-indigo-600',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#4F46E5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-13h4v6h-4z"/>
            </svg>
          )
        },
        { 
          name: 'Windows', 
          level: 85, 
          color: 'bg-blue-600',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#0078D4">
              <path d="M0,3.4l9.4-1.3v9.3H0V3.4z M10.6,2v9.8h13.4V0L10.6,2z M0,13.2h9.4v9.3L0,21.2V13.2z M10.6,13.1V24l13.4-1.8v-9.1 H10.6z"/>
            </svg>
          )
        },
        { 
          name: 'Linux', 
          level: 80, 
          color: 'bg-yellow-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FCC624">
              <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706c-.1.146-.247.273-.419.279-.17-.002-.236-.118-.299-.299-.069-.18-.093-.338-.093-.5v-.097c-.005-.216-.016-.434-.025-.646-.029-.307-.024-.542.095-.788.148-.29.318-.373.614-.332.295-.037.511.1.61.299.22.446.131.932-.055 1.102-.263.239-.959.142-1.074.398-.155.347-.022.719.441.719.299 0 .537-.142.537-.437 0-.32-.18-.599-.434-.599-.068 0-.120.021-.178.072-.09.09-.14.202-.14.321 0 .188.134.321.321.321.068 0 .134-.021.188-.072.054-.05.088-.134.088-.234 0-.188-.134-.321-.321-.321z"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'IoT & Hardware',
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      skills: [
        { 
          name: 'Arduino', 
          level: 70, 
          color: 'bg-teal-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#00979D">
              <path d="M23.82 12c0 6.522-5.298 11.82-11.82 11.82S.18 18.522.18 12 5.478.18 12 .18 23.82 5.478 23.82 12zM6.857 10.17h6.334v1.66H6.857v-1.66zm8.54 0h1.66v1.66h-1.66v-1.66zm0-2.157h1.66v1.66h-1.66v-1.66zm0 4.314h1.66v1.66h-1.66v-1.66z"/>
            </svg>
          )
        },
        { 
          name: 'Raspberry Pi', 
          level: 65, 
          color: 'bg-red-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#C51A4A">
              <path d="M11.999 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.626 0 11.999 0zm6.292 5.671c.446.32.851.69 1.208 1.103-.466-.05-.944-.012-1.415.117-.38-.49-.803-.94-1.276-1.338.161-.02.322-.01.483.118zm-12.583 0c.161-.128.322-.137.483-.118-.473.397-.896.848-1.276 1.338-.471-.129-.949-.167-1.415-.117.357-.413.762-.783 1.208-1.103zm6.292.599c2.687 0 4.864 2.178 4.864 4.864s-2.177 4.864-4.864 4.864-4.864-2.178-4.864-4.864S9.312 6.27 11.999 6.27z"/>
            </svg>
          )
        },
        { 
          name: 'Sensor Integration', 
          level: 75, 
          color: 'bg-green-500',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#22C55E">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          )
        },
        { 
          name: 'Circuit Design', 
          level: 60, 
          color: 'bg-yellow-600',
          logo: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#CA8A04">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              <circle cx="8" cy="8" r="2" fill="#CA8A04"/>
              <circle cx="16" cy="16" r="2" fill="#CA8A04"/>
              <path d="M8 8L16 16" stroke="#CA8A04" strokeWidth="2"/>
            </svg>
          )
        }
      ]
    }
  ]

  return (
    <section 
      id="skills" 
      className="relative min-h-screen transition-colors duration-500 overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            <span className={`bg-gradient-to-r ${isDark ? 'from-cyan-400 via-pink-400 to-cyan-400' : 'from-blue-600 via-purple-600 to-blue-600'} bg-clip-text text-transparent ${getAnimationClass('animate-gradient-x')}`}>
              Skills & Technologies
            </span>
          </h2>
        </div>

        {/* Animated Skills Showcase */}
        <div className={`mb-16 transform transition-all ${getAnimationClass('duration-1000 delay-200')} ${isVisible || isMobile ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="relative h-64 overflow-hidden rounded-lg">
              <div className="absolute inset-0 p-6">
                {/* Animated floating logos - Adjusted positioning for full visibility */}
                {[
                  { logo: skillCategories[0].skills[0].logo, color: '#61DAFB', name: 'React' },
                  { logo: skillCategories[0].skills[1].logo, color: '#F7DF1E', name: 'JavaScript' },
                  { logo: skillCategories[0].skills[2].logo, color: '#E34F26', name: 'HTML5' },
                  { logo: skillCategories[0].skills[3].logo, color: '#1572B6', name: 'CSS3' },
                  { logo: skillCategories[0].skills[4].logo, color: '#06B6D4', name: 'Tailwind' },
                  { logo: skillCategories[0].skills[5].logo, color: '#7952B3', name: 'Bootstrap' },
                  { logo: skillCategories[1].skills[0].logo, color: '#ED8B00', name: 'Java' },
                  { logo: skillCategories[1].skills[1].logo, color: '#3776AB', name: 'Python' },
                  { logo: skillCategories[1].skills[3].logo, color: '#6DB33F', name: 'Spring' },
                  { logo: skillCategories[1].skills[4].logo, color: '#777BB4', name: 'PHP' },
                  { logo: skillCategories[2].skills[0].logo, color: '#181717', name: 'Git' },
                  { logo: skillCategories[2].skills[1].logo, color: '#007ACC', name: 'VSCode' },
                  { logo: skillCategories[2].skills[2].logo, color: '#646CFF', name: 'Vite' },
                  { logo: skillCategories[2].skills[3].logo, color: '#CB3837', name: 'npm' },
                  { logo: skillCategories[2].skills[9].logo, color: '#0078D4', name: 'Windows' },
                  { logo: skillCategories[2].skills[10].logo, color: '#FCC624', name: 'Linux' },
                  { logo: skillCategories[3].skills[0].logo, color: '#00979D', name: 'Arduino' },
                  { logo: skillCategories[3].skills[1].logo, color: '#C51A4A', name: 'Raspberry' },
                ].map((item, index) => {
                  // Create evenly distributed positioning with better spacing
                  const positions = [
                    // Top row - well spaced
                    { left: 8, top: 12 }, { left: 28, top: 8 }, { left: 52, top: 15 }, { left: 76, top: 10 }, { left: 92, top: 18 },
                    
                    // Middle-upper row
                    { left: 15, top: 35 }, { left: 38, top: 32 }, { left: 65, top: 38 }, { left: 85, top: 35 },
                    
                    // Middle-lower row  
                    { left: 5, top: 58 }, { left: 25, top: 62 }, { left: 48, top: 55 }, { left: 72, top: 60 }, { left: 88, top: 65 },
                    
                    // Bottom row - spread out
                    { left: 12, top: 82 }, { left: 35, top: 85 }, { left: 58, top: 78 }, { left: 78, top: 80 }
                  ]
                  
                  const position = positions[index] || { 
                    left: 10 + (index % 4) * 20 + Math.random() * 8, 
                    top: 15 + Math.floor(index / 4) * 20 + Math.random() * 8 
                  }
                  
                  return (
                    <div
                      key={index}
                      className={`absolute w-12 h-12 rounded-xl flex items-center justify-center ${
                        isDark ? 'bg-gray-800/70' : 'bg-white/90'
                      } backdrop-blur-sm border ${
                        isDark ? 'border-gray-700/60' : 'border-gray-200/60'
                      } shadow-lg hover:shadow-xl transition-all duration-300`}
                      style={{
                        animation: `float-skill ${4 + (index % 6) * 0.5}s ease-in-out infinite`,
                        animationDelay: `${index * 0.3}s`,
                        left: `${position.left}%`,
                        top: `${position.top}%`,
                        transform: `rotate(${(index * 11 + 17) % 30 - 15}deg)`,
                      }}
                      title={item.name}
                    >
                      {React.cloneElement(item.logo, {
                        className: 'w-7 h-7',
                        style: { color: item.color, fill: item.color }
                      })}
                    </div>
                  )
                })}
              </div>
              
              {/* Enhanced floating particles background */}
              <div className="absolute inset-0 p-6">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1.5 h-1.5 rounded-full ${
                      isDark ? 'bg-cyan-400/20' : 'bg-blue-500/20'
                    }`}
                    style={{
                      animation: `float-particle ${5 + i * 0.4}s linear infinite`,
                      animationDelay: `${i * 0.6}s`,
                      left: `${Math.random() * 80 + 10}%`,
                      top: `${Math.random() * 80 + 10}%`,
                    }}
                  />
                ))}
              </div>
            </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transform transition-all ${getAnimationClass('duration-1000')} ${isVisible || isMobile ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <Step 
                delay={categoryIndex * 200}
                padding="p-6 lg:p-8"
                shadow="shadow-xl"
                className="h-full"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-100'} mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`group relative p-4 rounded-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        isDark 
                          ? 'bg-gray-800/40 hover:bg-gray-700/60 border border-gray-700/50 hover:border-gray-600' 
                          : 'bg-white/60 hover:bg-white/80 border border-gray-200/50 hover:border-gray-300'
                      } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                      onMouseEnter={() => handleSkillHover(skill.name)}
                      onMouseLeave={handleSkillLeave}
                      style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                    >
                      {/* Skill Content */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {/* Skill Logo */}
                          <div className={`flex items-center justify-center w-6 h-6 rounded-lg ${
                            isDark ? 'bg-gray-700/30' : 'bg-white/50'
                          } backdrop-blur-sm`}>
                            {skill.logo}
                          </div>
                          
                          {/* Skill Name */}
                          <span className={`text-sm font-medium transition-colors duration-200 ${
                            isDark ? 'text-gray-200 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                          }`}>
                            {skill.name}
                          </span>
                        </div>
                        
                        {/* Skill Level Badge */}
                        <div className={`px-2 py-1 rounded-lg text-xs font-semibold transition-all duration-200 ${
                          isDark 
                            ? 'bg-gray-700/60 text-gray-300 group-hover:bg-gray-600/80 group-hover:text-white' 
                            : 'bg-gray-100/80 text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-800'
                        }`}>
                          {skill.level}%
                        </div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${skill.color}`} />
                      
                      {/* Active Skill Glow Effect */}
                      {activeSkillCategory === skill.name && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
              </Step>
            </div>
          ))}
        </div>

        {/* Learning Focus */}
        <div className={`text-center transform transition-all ${getAnimationClass('duration-1000 delay-800')} ${isVisible || isMobile ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Step 
            delay={800}
            padding="p-6 lg:p-8"
            shadow="shadow-xl"
          >
            <h3 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['TypeScript', 'Next.js', 'GraphQL', 'Docker', 'AWS', 'Machine Learning'].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-light ${
                    isDark 
                      ? 'bg-gray-700/50 text-gray-300 border border-gray-600/30' 
                      : 'bg-gray-100/80 text-gray-700 border border-gray-200/50'
                  } backdrop-blur-sm transition-all duration-200 hover:scale-105`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className={`text-sm font-light ${isDark ? 'text-gray-500' : 'text-gray-500'} mt-4 italic`}>
              Always expanding my skillset to stay current with industry trends
            </p>
          </Step>
        </div>
      </div>
    </section>
  )
}

export default Skills
