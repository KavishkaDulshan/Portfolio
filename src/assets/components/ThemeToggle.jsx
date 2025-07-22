import React from 'react'
import { useTheme } from '../../hooks/useTheme'

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center w-10 h-10 
        ${theme === 'dark' ? 'bg-gray-800/80 border-gray-600/50' : 'bg-white/10 border-white/20'} 
        backdrop-blur-sm border rounded-full
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        hover:shadow-lg hover:scale-110 active:scale-95 overflow-hidden group
        ${theme === 'dark' ? 'hover:bg-gray-700/80 hover:border-gray-500/50' : 'hover:bg-white/20 hover:border-white/30'}
        ${className}
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {/* Sun Icon */}
      <svg 
        className={`w-5 h-5 text-yellow-400 transition-all duration-500 ease-in-out ${
          theme === 'dark' 
            ? 'opacity-0 rotate-180 scale-0 translate-y-2' 
            : 'opacity-100 rotate-0 scale-100 translate-y-0'
        }`}
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
      </svg>

      {/* Moon Icon */}
      <svg 
        className={`absolute w-5 h-5 text-blue-400 transition-all duration-500 ease-in-out ${
          theme === 'dark' 
            ? 'opacity-100 rotate-0 scale-100 translate-y-0' 
            : 'opacity-0 -rotate-180 scale-0 -translate-y-2'
        }`}
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
      </svg>

      {/* Animated Background Glow */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-100'
          : 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-100'
      } blur-sm -z-10 scale-0 group-hover:scale-150 group-hover:opacity-75`} />

      {/* Click Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 group-active:opacity-100 opacity-0 transition-all duration-200" />
    </button>
  )
}

export default ThemeToggle
