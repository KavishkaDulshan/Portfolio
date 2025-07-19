import React, { useState, useEffect } from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <nav className="bg-white/95 backdrop-blur-md shadow-xl fixed w-full top-0 z-50 overflow-hidden group font-inter border-b border-gray-200/50">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-100/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none spotlight"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="flex justify-between items-center h-18">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-bold bg-gradient-to-r from-zinc-950 via-cyan-900 to-gray-900 bg-clip-text text-transparent hover:from-cyan-700 hover:to-zinc-700 transition-all duration-300 tracking-tight">
              Portfolio
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              <a href="#home" className="text-gray-800 hover:text-cyan-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none px-7 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 group">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                Home
              </a>
              <a href="#about" className="text-gray-800 hover:text-emerald-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none px-7 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 group">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                About
              </a>
              <a href="#skills" className="text-gray-800 hover:text-amber-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none px-7 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 group">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
                Skills
              </a>
              <a href="#projects" className="text-gray-800 hover:text-rose-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none px-7 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 group">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
                Projects
              </a>
              <a href="#contact" className="text-gray-800 hover:text-violet-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none px-7 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 group">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full text-gray-700 hover:text-cyan-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <svg 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} 
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
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-6 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200/50">
          <a
            href="#home"
            className="text-gray-800 hover:text-cyan-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none block px-6 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-3 group"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-emerald-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none block px-6 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-3 group"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            About
          </a>
          <a
            href="#skills"
            className="text-gray-800 hover:text-amber-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none block px-6 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-3 group"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
            </svg>
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-800 hover:text-rose-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none block px-6 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-3 group"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
            </svg>
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-violet-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none block px-6 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-3 group"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar