import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../../hooks/useTheme'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Track mouse position for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const nav = document.querySelector('nav')
      if (nav) {
        const rect = nav.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        nav.style.setProperty('--mouse-x', `${x}%`)
        nav.style.setProperty('--mouse-y', `${y}%`)
      }
    }

    const nav = document.querySelector('nav')
    if (nav) {
      nav.addEventListener('mousemove', handleMouseMove)
      return () => nav.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <nav className={`${isDark ? 'bg-black/95 border-fuchsia-500/20' : 'bg-white/95 border-gray-200/50'} backdrop-blur-md shadow-xl fixed w-full top-0 z-50 overflow-hidden group font-inter border-b safe-area-top transition-colors duration-300`}>
      {/* Subtle synthwave spotlight effect */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-radial from-fuchsia-500/15 via-cyan-400/10 to-transparent' : 'bg-gradient-radial from-blue-100/30 via-transparent to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none spotlight`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#" className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${isDark ? 'from-fuchsia-400 via-cyan-400 to-pink-400 hover:from-pink-300 hover:to-fuchsia-300' : 'from-zinc-950 via-cyan-900 to-gray-900 hover:from-cyan-700 hover:to-zinc-700'} bg-clip-text text-transparent transition-all duration-300 tracking-tight`}>
              Portfolio
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <a href="#home" className={`${isDark ? 'text-cyan-300 hover:text-fuchsia-200 bg-cyan-500/5 hover:bg-fuchsia-400/8' : 'text-gray-800 hover:text-cyan-600'} hover:bg-gradient-to-r ${isDark ? '' : 'hover:from-blue-500 hover:to-purple-500'} ${isDark ? '' : 'bg-gray-100/60 hover:bg-none'} px-4 lg:px-7 py-2.5 lg:py-3 rounded-full text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 group border ${isDark ? 'border-cyan-400/15 hover:border-fuchsia-400/25' : 'border-transparent'}`}>
                <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                Home
              </a>
              <a href="#about" className={`${isDark ? 'text-pink-300 hover:text-cyan-200 bg-pink-500/5 hover:bg-cyan-400/8' : 'text-gray-800 hover:text-emerald-600'} hover:bg-gradient-to-r ${isDark ? '' : 'hover:from-blue-500 hover:to-purple-500'} ${isDark ? '' : 'bg-gray-100/60 hover:bg-none'} px-4 lg:px-7 py-2.5 lg:py-3 rounded-full text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 group border ${isDark ? 'border-pink-400/15 hover:border-cyan-400/25' : 'border-transparent'}`}>
                <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110 group-hover:bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                About
              </a>
              <a href="#skills" className={`${isDark ? 'text-violet-300 hover:text-fuchsia-200 bg-violet-500/5 hover:bg-fuchsia-400/8' : 'text-gray-800 hover:text-amber-600'} hover:bg-gradient-to-r ${isDark ? '' : 'hover:from-blue-500 hover:to-purple-500'} ${isDark ? '' : 'bg-gray-100/60 hover:bg-none'} px-4 lg:px-7 py-2.5 lg:py-3 rounded-full text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 group border ${isDark ? 'border-violet-400/15 hover:border-fuchsia-400/25' : 'border-transparent'}`}>
                <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
                Skills
              </a>
              <a href="#projects" className={`${isDark ? 'text-fuchsia-300 hover:text-cyan-200 bg-fuchsia-500/5 hover:bg-cyan-400/8' : 'text-gray-800 hover:text-rose-600'} hover:bg-gradient-to-r ${isDark ? '' : 'hover:from-blue-500 hover:to-purple-500'} ${isDark ? '' : 'bg-gray-100/60 hover:bg-none'} px-4 lg:px-7 py-2.5 lg:py-3 rounded-full text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 group border ${isDark ? 'border-fuchsia-400/15 hover:border-cyan-400/25' : 'border-transparent'}`}>
                <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
                Projects
              </a>
              <a href="#contact" className={`${isDark ? 'text-cyan-300 hover:text-pink-200 bg-cyan-500/5 hover:bg-pink-400/8' : 'text-gray-800 hover:text-violet-600'} hover:bg-gradient-to-r ${isDark ? '' : 'hover:from-blue-500 hover:to-purple-500'} ${isDark ? '' : 'bg-gray-100/60 hover:bg-none'} px-4 lg:px-7 py-2.5 lg:py-3 rounded-full text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 group border ${isDark ? 'border-cyan-400/15 hover:border-pink-400/25' : 'border-transparent'}`}>
                <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110 group_hover:pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contact
              </a>
              
              {/* Theme Toggle */}
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full ${isDark ? 'text-cyan-300 hover:text-fuchsia-200 bg-cyan-500/5 hover:bg-fuchsia-400/8 border border-cyan-400/15 hover:border-fuchsia-400/25' : 'text-gray-700 hover:text-cyan-600 bg-gray-100/60 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-none'} focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:shadow-lg active:scale-95 touch-manipulation`}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <svg 
                  className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg 
                  className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden safe-area-bottom`}>
        <div className={`px-4 sm:px-6 pt-4 pb-6 space-y-2 ${isDark ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-md shadow-lg border-t ${isDark ? 'border-fuchsia-500/20' : 'border-gray-200/50'}`}>
          <a
            href="#home"
            className={`${isDark ? 'text-cyan-300 hover:text-fuchsia-200 bg-cyan-500/5 hover:bg-fuchsia-400/8 border border-cyan-400/15 hover:border-fuchsia-400/25' : 'text-gray-800 hover:text-cyan-300 bg-gray-100/60 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-none'} px-5 py-3.5 rounded-full text-base font-semibold tracking-wide transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-95 flex items-center gap-3 group touch-manipulation`}
            onClick={toggleMenu}
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            Home
          </a>
          <a
            href="#about"
            className={`${isDark ? 'text-pink-300 hover:text-cyan-200 bg-pink-500/5 hover:bg-cyan-400/8 border border-pink-400/15 hover:border-cyan-400/25' : 'text-gray-800 hover:text-emerald-300 bg-gray-100/60 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-none'} px-5 py-3.5 rounded-full text-base font-semibold tracking-wide transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-95 flex items-center gap-3 group touch-manipulation`}
            onClick={toggleMenu}
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            About
          </a>
          <a
            href="#skills"
            className={`${isDark ? 'text-violet-300 hover:text-fuchsia-200 bg-violet-500/5 hover:bg-fuchsia-400/8 border border-violet-400/15 hover:border-fuchsia-400/25' : 'text-gray-800 hover:text-amber-300 bg-gray-100/60 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-none'} px-5 py-3.5 rounded-full text-base font-semibold tracking-wide transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-95 flex items-center gap-3 group touch-manipulation`}
            onClick={toggleMenu}
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group_hover:rotate-180" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
            </svg>
            Skills
          </a>
          <a
            href="#projects"
            className={`${isDark ? 'text-fuchsia-300 hover:text-cyan-200 bg-fuchsia-500/5 hover:bg-cyan-400/8 border border-fuchsia-400/15 hover:border-cyan-400/25' : 'text-gray-800 hover:text-rose-300 bg-gray-100/60 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-none'} px-5 py-3.5 rounded-full text-base font-semibold tracking-wide transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-95 flex items-center gap-3 group touch-manipulation`}
            onClick={toggleMenu}
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group_hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
            </svg>
            Projects
          </a>
          <a
            href="#contact"
            className={`${isDark ? 'text-cyan-300 hover:text-pink-200 bg-cyan-500/5 hover:bg-pink-400/8 border border-cyan-400/15 hover:border-pink-400/25' : 'text-gray-800 hover:text-violet-300 bg-gray-100/60 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-none'} px-5 py-3.5 rounded-full text-base font-semibold tracking-wide transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-95 flex items-center gap-3 group touch-manipulation`}
            onClick={toggleMenu}
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group_hover:pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Contact
          </a>
          
          {/* Mobile Theme Toggle */}
          <div className="px-5 py-2">
            <div className="flex items-center justify-between">
              <span className={`${isDark ? 'text-cyan-300/80' : 'text-gray-800'} font-semibold`}>Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar