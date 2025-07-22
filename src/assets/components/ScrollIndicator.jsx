import React, { useState, useEffect } from 'react'

const ScrollIndicator = ({ 
  isVisible, 
  getAnimationClass, 
  isReducedMotion,
  className = ""
}) => {
  const [showIndicator, setShowIndicator] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show indicator after scrolling down 100px
      setShowIndicator(currentScrollY > 100)
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const handleClick = () => {
    if (scrollDirection === 'up') {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Scroll to next section or bottom
      const nextSection = document.querySelector('#about') || document.querySelector('main')
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ${showIndicator && isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} ${className}`}>
      <button 
        onClick={handleClick}
        className={`flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all ${getAnimationClass('duration-300')} group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:shadow-lg hover:scale-110 active:scale-95`}
        aria-label={scrollDirection === 'up' ? 'Scroll to top' : 'Scroll down'}
      >        
        {/* Arrow Icon */}
        <div className="relative">
          <svg 
            className={`w-5 h-5 transition-all duration-300 ${scrollDirection === 'up' ? 'transform rotate-180' : ''} ${isReducedMotion ? '' : 'group-hover:animate-bounce'} group-hover:text-blue-600`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
          
          {/* Animated dot indicator */}
          <div className={`absolute ${scrollDirection === 'up' ? '-top-1' : '-bottom-1'} left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full transition-all duration-300 ${isReducedMotion ? '' : 'animate-ping'} opacity-75`} />
        </div>
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
      </button>
    </div>
  )
}

export default ScrollIndicator
