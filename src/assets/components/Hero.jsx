import React, { useEffect, useState, useCallback, useMemo } from 'react'
import SocialWindow from './SocialWindow'
import Step from './Step'
import Typewriter from './Typewriter'
import PrimaryButton from './PrimaryButton'
import HeroMobile from './HeroMobile'
import HeroDesktop from './HeroDesktop'
import ScrollIndicator from './ScrollIndicator'

// Import assets
import profileImage from '../images/profileImage.jpeg'
import manImage from '../images/man.png'
import brainImage from '../images/brain.png'
import socialImage from '../images/social.png'
import brainVideo from '../videos/brain.webm'
import socialVideo from '../videos/social.webm'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSocial, setHoveredSocial] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [supportsTransparentVideo, setSupportsTransparentVideo] = useState(true)

  // Detect mobile devices and preferences
  useEffect(() => {
    let prefersReducedMotionMediaQuery = null;

    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                            window.innerWidth <= 768 ||
                            ('ontouchstart' in window) ||
                            (navigator.maxTouchPoints > 0)
      setIsMobile(isMobileDevice)
      return isMobileDevice
    }

    const checkTransparentVideoSupport = (isMobileDevice) => {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      const isMobileBrowser = isMobileDevice || isIOS
      setSupportsTransparentVideo(!isMobileBrowser)
    }

    const checkReducedMotion = () => {
      if (window.matchMedia) {
        prefersReducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setIsReducedMotion(prefersReducedMotionMediaQuery.matches)
        
        const handleReducedMotionChange = (e) => {
          setIsReducedMotion(e.matches)
        }
        
        prefersReducedMotionMediaQuery.addEventListener('change', handleReducedMotionChange)
        
        return () => {
          if (prefersReducedMotionMediaQuery) {
            prefersReducedMotionMediaQuery.removeEventListener('change', handleReducedMotionChange)
          }
        }
      }
      return null
    }

    const isMobileDevice = checkMobile()
    checkTransparentVideoSupport(isMobileDevice)
    const cleanupReducedMotion = checkReducedMotion()
    
    const handleResize = () => {
      const newIsMobile = checkMobile()
      checkTransparentVideoSupport(newIsMobile)
      
      if (newIsMobile) {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
    
    handleResize()
    const timer = setTimeout(() => setIsVisible(true), 100)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
      clearTimeout(timer)
      
      if (cleanupReducedMotion) {
        cleanupReducedMotion()
      }
    }
  }, [])

  // Memoized social media data
  const socialData = useMemo(() => ({
    whatsapp: {
      platform: 'whatsapp',
      username: 'kavishka',
      followers: '100+',
      description: 'Let\'s chat! Available for project discussions and collaborations. Quick responses guaranteed.',
      phoneNumber: import.meta.env.VITE_WHATSAPP_PHONE_NUMBER,
      url: `https://wa.me/${import.meta.env.VITE_WHATSAPP_PHONE_NUMBER}?text=Hello%20Kavishka!`
    },
    linkedin: {
      platform: 'linkedin',
      username: 'kavishka-dulshan',
      followers: '100+',
      description: 'Software Engineering student sharing insights about web development, IoT, and emerging technologies.',
      url: 'https://linkedin.com/in/kavishka-dulshan'
    },
    github: {
      platform: 'github',
      username: 'KavishkaDulshan',
      followers: '25+',
      description: 'Open source enthusiast. Check out my latest projects in React, Node.js, and IoT development.',
      url: 'https://github.com/KavishkaDulshan'
    }
  }), [])

  const handleSocialHover = useCallback((platform) => {
    if (!isMobile) {
      setHoveredSocial(platform)
    }
  }, [isMobile])

  const handleSocialLeave = useCallback(() => {
    if (!isMobile) {
      setHoveredSocial(null)
    }
  }, [isMobile])

  const handleGetInTouch = useCallback(() => {
    if ('vibrate' in navigator && isMobile) {
      navigator.vibrate(50)
    }
    
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isMobile])

  const handleViewProjects = useCallback(() => {
    if ('vibrate' in navigator && isMobile) {
      navigator.vibrate(50)
    }
    
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isMobile])

  const getAnimationClass = useCallback((baseClass) => {
    if (isReducedMotion) return ''
    return baseClass
  }, [isReducedMotion])

  // Component for rendering brain media
  const BrainMedia = useCallback(({ className, ...props }) => {
    return supportsTransparentVideo ? (
      <video 
        src={brainVideo}
        autoPlay 
        loop 
        muted 
        playsInline
        preload={isMobile ? "none" : "auto"}
        className={className}
        onError={() => setSupportsTransparentVideo(false)}
        {...props}
      />
    ) : (
      <img 
        src={brainImage}
        alt="Brain illustration"
        className={className}
        loading="lazy"
        decoding="async"
        {...props}
      />
    )
  }, [supportsTransparentVideo, isMobile])

  // Component for rendering social media
  const SocialMedia = useCallback(({ className, ...props }) => {
    return supportsTransparentVideo ? (
      <video 
        src={socialVideo}
        autoPlay 
        loop 
        muted 
        playsInline
        preload={isMobile ? "none" : "auto"}
        className={className}
        onError={() => setSupportsTransparentVideo(false)}
        {...props}
      />
    ) : (
      <img 
        src={socialImage}
        alt="Social media illustration"
        className={className}
        loading="lazy"
        decoding="async"
        {...props}
      />
    )
  }, [supportsTransparentVideo, isMobile])

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden pt-16 sm:pt-20 font-inter"
      style={{ minHeight: isMobile ? 'calc(var(--vh, 1vh) * 100)' : '100vh' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <div className="min-h-screen flex flex-col justify-center gap-6 sm:gap-8 lg:gap-12">
          
          {/* Mobile Component */}
          <HeroMobile
            profileImage={profileImage}
            manImage={manImage}
            isVisible={isVisible}
            getAnimationClass={getAnimationClass}
            socialData={socialData}
            hoveredSocial={hoveredSocial}
            handleSocialHover={handleSocialHover}
            handleSocialLeave={handleSocialLeave}
            handleGetInTouch={handleGetInTouch}
            handleViewProjects={handleViewProjects}
            BrainMedia={BrainMedia}
          />

          {/* Desktop Component */}
          <HeroDesktop
            profileImage={profileImage}
            manImage={manImage}
            isVisible={isVisible}
            getAnimationClass={getAnimationClass}
            socialData={socialData}
            hoveredSocial={hoveredSocial}
            handleSocialHover={handleSocialHover}
            handleSocialLeave={handleSocialLeave}
            handleGetInTouch={handleGetInTouch}
            handleViewProjects={handleViewProjects}
            BrainMedia={BrainMedia}
            SocialMedia={SocialMedia}
          />
        </div>

        {/* Scroll Indicator - Right Side */}
        <ScrollIndicator
          isVisible={isVisible}
          getAnimationClass={getAnimationClass}
          isReducedMotion={isReducedMotion}
        />
      </div>
    </section>
  )
}

export default Hero