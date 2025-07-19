import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden pt-20 font-inter">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-cyan-400/15 to-emerald-400/15 rounded-full blur-2xl transition-all duration-700 ease-out"
          style={{
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
          }}
        />
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute top-32 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce" />
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="min-h-screen flex flex-col justify-center gap-8 lg:gap-12">
          {/* Top Section - Name and Desktop Profile Image */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left lg:max-w-3xl">
              {/* Greeting */}
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <p className="text-lg text-gray-600 font-medium tracking-wide">
                  👋 Hello, I'm
                </p>
              </div>

              {/* Main Title - Removed small image from here */}
              <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">
                    Kavishka Dulshan
                  </span>
                </h1>
              </div>

              {/* Profile Image - Between title and subtitle */}
              <div className={`flex justify-center lg:justify-start items-center gap-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <img 
                  src="/man.png" 
                  alt="Profile" 
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain transition-all duration-500 hover:scale-110 hover:rotate-3 filter drop-shadow-lg"
                />
                <video 
                  src="/brain.webm" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain transition-all duration-500 hover:scale-110 hover:-rotate-3 filter drop-shadow-lg"
                />
              </div>

              {/* Subtitle */}
              <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-700 leading-relaxed">
                  Software Engineering Undergraduate |{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Knowledge Seeker &{' '}
                  </span>
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    IoT Enthusiast...
                  </span>
                </h2>
              </div>

              {/* Description */}
              <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                  I create beautiful, responsive web applications with modern technologies. 
                  Passionate about crafting exceptional user experiences and bringing ideas to life through code.
                </p>
              </div>
            </div>

            {/* Right Content - Large Profile Image - Desktop only - Now positioned at top right */}
            <div className={`hidden lg:flex flex-shrink-0 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/profileImage.jpeg" 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-full transition-all duration-500 hover:scale-110"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Profile Image - Mobile/Small screens only - Moved after main title */}
          <div className={`lg:hidden flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/profileImage.jpeg" 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full transition-all duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Bottom Section - CTA Buttons and Social Links */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full text-base lg:text-lg tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group">
                <svg className="w-5 lg:w-6 h-5 lg:h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Get In Touch
              </button>
              
              <button className="px-6 lg:px-8 py-3 lg:py-4 bg-gray-100/60 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-800 hover:text-white font-semibold rounded-full text-base lg:text-lg tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group backdrop-blur-sm">
                <svg className="w-5 lg:w-6 h-5 lg:h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className={`flex gap-4 justify-center lg:justify-start transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-100/60 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95 group">
                <svg className="w-5 lg:w-6 h-5 lg:h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-100/60 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95 group">
                <svg className="w-5 lg:w-6 h-5 lg:h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-100/60 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95 group">
                <svg className="w-5 lg:w-6 h-5 lg:h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="#about" className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
            <span className="text-sm font-medium mb-2 tracking-wide">Scroll Down</span>
            <svg className="w-6 h-6 animate-bounce group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero