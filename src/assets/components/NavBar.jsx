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
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-100/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none spotlight"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text hover:from-purple-600 hover:via-blue-600 hover:to-purple-800 transition-all duration-500 tracking-tight">
              Portfolio
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="relative text-gray-800 px-4 py-2 rounded-lg text-xl font-bold transition-all duration-300 tracking-wide overflow-hidden group">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Home</span>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
              </a>
              <a href="#about" className="relative text-gray-800 px-4 py-2 rounded-lg text-xl font-bold transition-all duration-300 tracking-wide overflow-hidden group">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">About</span>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
              </a>
              <a href="#skills" className="relative text-gray-800 px-4 py-2 rounded-lg text-xl font-bold transition-all duration-300 tracking-wide overflow-hidden group">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Skills</span>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
              </a>
              <a href="#projects" className="relative text-gray-800 px-4 py-2 rounded-lg text-xl font-bold transition-all duration-300 tracking-wide overflow-hidden group">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Projects</span>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
              </a>
              <a href="#contact" className="relative text-gray-800 px-4 py-2 rounded-lg text-xl font-bold transition-all duration-300 tracking-wide overflow-hidden group">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-7 h-7">
                <svg 
                  className={`absolute inset-0 w-7 h-7 transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg 
                  className={`absolute inset-0 w-7 h-7 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-3 pt-3 pb-4 space-y-2 sm:px-4 bg-gradient-to-b from-white to-gray-50 shadow-xl border-t border-gray-100">
          <a
            href="#home"
            className="relative text-gray-800 block px-4 py-3 rounded-lg text-lg font-bold transition-all duration-300 tracking-wide overflow-hidden group"
            onClick={toggleMenu}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Home</span>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
          </a>
          <a
            href="#about"
            className="relative text-gray-800 block px-4 py-3 rounded-lg text-lg font-bold transition-all duration-300 tracking-wide overflow-hidden group"
            onClick={toggleMenu}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">About</span>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
          </a>
          <a
            href="#skills"
            className="relative text-gray-800 block px-4 py-3 rounded-lg text-lg font-bold transition-all duration-300 tracking-wide overflow-hidden group"
            onClick={toggleMenu}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Skills</span>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
          </a>
          <a
            href="#projects"
            className="relative text-gray-800 block px-4 py-3 rounded-lg text-lg font-bold transition-all duration-300 tracking-wide overflow-hidden group"
            onClick={toggleMenu}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Projects</span>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
          </a>
          <a
            href="#contact"
            className="relative text-gray-800 block px-4 py-3 rounded-lg text-lg font-bold transition-all duration-300 tracking-wide overflow-hidden group"
            onClick={toggleMenu}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar