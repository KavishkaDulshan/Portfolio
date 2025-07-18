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
            <a href="#" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300 tracking-tight">
              Portfolio
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              <a href="#home" className="text-gray-800 hover:text-yellow-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none px-7 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                Home
              </a>
              <a href="#about" className="text-gray-800 hover:text-yellow-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none px-7 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                About
              </a>
              <a href="#skills" className="text-gray-800 hover:text-yellow-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none px-7 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                Skills
              </a>
              <a href="#projects" className="text-gray-800 hover:text-yellow-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none px-7 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                Projects
              </a>
              <a href="#contact" className="text-gray-800 hover:text-yellow-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none px-7 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full text-gray-700 hover:text-yellow-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 hover:shadow-lg active:scale-95"
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
            className="text-gray-800 hover:text-yellow-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none block px-6 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-yellow-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none block px-6 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-800 hover:text-yellow-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none block px-6 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-800 hover:text-yellow-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none block px-6 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-yellow-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gray-100/60 hover:bg-none block px-6 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar