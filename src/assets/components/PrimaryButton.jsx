import React from 'react'
import { useTheme } from '../../hooks/useTheme'

const PrimaryButton = ({ 
  children, 
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  disabled = false,
  loading = false,
  className = '',
  icon = null,
  iconPosition = 'left', // 'left', 'right'
  fullWidth = false,
  type = 'button',
  ...props 
}) => {
  const { isDark } = useTheme()
  // Base styles with enhanced modern transitions
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden group"

  // Size variants - smaller and more compact
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5 min-h-[28px]",
    md: "px-4 py-2 text-sm gap-2 min-h-[32px]",
    lg: "px-5 py-2.5 text-base gap-2 min-h-[36px]"
  }

  // Enhanced variant styles with glassmorphism and modern hover effects
  const variantStyles = {
    primary: `
      ${isDark 
        ? 'bg-gray-800/80 border-gray-600/50 text-gray-100' 
        : 'bg-gray-900/90 border-gray-700/60 text-white'} backdrop-blur-sm border shadow-lg
      hover:${isDark ? 'bg-gray-700/90' : 'bg-gray-800/95'} hover:shadow-2xl hover:shadow-blue-500/25 
      hover:scale-110 hover:border-${isDark ? 'gray-500/60' : 'gray-600/70'}
      active:scale-95 active:shadow-md
      focus:ring-blue-500/50 focus:ring-opacity-75
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-${isDark ? 'gray-600' : 'gray-700'}/0 before:via-${isDark ? 'gray-600' : 'gray-700'}/20 before:to-${isDark ? 'gray-600' : 'gray-700'}/0
      before:translate-x-[-100%] before:transition-transform before:duration-700 before:ease-out
      hover:before:translate-x-[100%]
    `,
    secondary: `
      ${isDark 
        ? 'bg-gray-800/70 border-gray-600/40 text-gray-200' 
        : 'bg-gray-800/80 border-gray-600/50 text-gray-100'} backdrop-blur-sm border shadow-md
      hover:${isDark ? 'bg-gray-700/80' : 'bg-gray-700/90'} hover:shadow-lg hover:shadow-gray-400/20
      hover:scale-110 hover:border-${isDark ? 'gray-500/50' : 'gray-500/60'}
      active:scale-95 active:${isDark ? 'bg-gray-600/80' : 'bg-gray-600/85'}
      focus:ring-gray-400 focus:ring-opacity-50
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-${isDark ? 'gray-600' : 'gray-600'}/0 before:via-${isDark ? 'gray-600' : 'gray-600'}/30 before:to-${isDark ? 'gray-600' : 'gray-600'}/0
      before:translate-x-[-100%] before:transition-transform before:duration-600 before:ease-out
      hover:before:translate-x-[100%]
    `,
    outline: `
      ${isDark 
        ? 'bg-gray-800/30 border-gray-500/60 text-gray-200' 
        : 'bg-gray-100/90 border-gray-600/70 text-gray-800'} backdrop-blur-sm border-2 shadow-sm
      hover:${isDark ? 'bg-gray-700/50 text-gray-100' : 'bg-gray-200/95 text-gray-900'} hover:border-${isDark ? 'gray-400/70' : 'gray-500/80'} hover:shadow-lg hover:shadow-blue-500/20
      hover:scale-110
      active:scale-95 active:${isDark ? 'bg-gray-600/60' : 'bg-gray-300/90'}
      focus:ring-blue-400 focus:ring-opacity-50
      before:absolute before:inset-0 before:${isDark ? 'bg-gray-600' : 'bg-gray-300'}/20 before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
      after:absolute after:inset-0 after:bg-gradient-to-r after:from-${isDark ? 'gray-500' : 'gray-400'}/0 after:via-${isDark ? 'gray-500' : 'gray-400'}/20 after:to-${isDark ? 'gray-500' : 'gray-400'}/0
      after:translate-x-[-100%] after:transition-transform after:duration-500 after:ease-out
      hover:after:translate-x-[100%]
    `,
    ghost: `
      bg-transparent ${isDark ? 'text-gray-300' : 'text-gray-700'} backdrop-blur-sm border border-transparent
      hover:${isDark ? 'bg-gray-800/40 text-gray-100' : 'bg-gray-200/80 text-gray-900'} hover:shadow-md hover:shadow-gray-400/20 hover:border-${isDark ? 'gray-600' : 'gray-400'}/30
      hover:scale-110
      active:scale-95 active:${isDark ? 'bg-gray-700/50' : 'bg-gray-300/80'}
      focus:ring-gray-400 focus:ring-opacity-30
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-${isDark ? 'gray-600' : 'gray-400'}/0 before:via-${isDark ? 'gray-600' : 'gray-400'}/50 before:to-${isDark ? 'gray-600' : 'gray-400'}/0
      before:translate-x-[-100%] before:transition-transform before:duration-500 before:ease-out
      hover:before:translate-x-[100%]
    `
  }

  // Enhanced loading spinner with modern animations - smaller size
  const LoadingSpinner = () => (
    <div className="relative">
      <div className="w-3 h-3 border-2 border-current/30 border-t-current rounded-full animate-spin" />
      <div className="absolute inset-0 w-3 h-3 border-2 border-transparent border-t-current/60 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
    </div>
  )

  // Ripple effect component for modern touch feedback
  const RippleEffect = () => (
    <div className="absolute inset-0 overflow-hidden rounded-full">
      <div className="absolute inset-0 bg-white/20 opacity-0 scale-0 rounded-full transition-all duration-300 group-active:opacity-100 group-active:scale-100 group-active:duration-150" />
    </div>
  )

  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      className={buttonStyles}
      {...props}
    >
      {/* Ripple effect for modern touch feedback */}
      <RippleEffect />
      
      {/* Loading state with enhanced spinner */}
      {loading && (
        <div className="flex items-center gap-1.5 relative z-10">
          <LoadingSpinner />
          <span className="animate-pulse text-xs">Loading...</span>
        </div>
      )}
      
      {/* Normal content with enhanced animations */}
      {!loading && (
        <>
          {/* Left icon with enhanced hover effects - smaller icons */}
          {icon && iconPosition === 'left' && (
            <span className="flex-shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 group-active:scale-95 group-active:rotate-0 relative z-10">
              <div className="w-4 h-4 flex items-center justify-center">
                {icon}
              </div>
            </span>
          )}
          
          {/* Button text with modern typography effects */}
          <span className="font-semibold tracking-wide transition-all duration-300 ease-out group-hover:tracking-wider relative z-10">
            {children}
          </span>
          
          {/* Right icon with enhanced hover effects - smaller icons */}
          {icon && iconPosition === 'right' && (
            <span className="flex-shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3 group-active:scale-95 group-active:rotate-0 relative z-10">
              <div className="w-4 h-4 flex items-center justify-center">
                {icon}
              </div>
            </span>
          )}
        </>
      )}
      
      {/* Modern glow effect for primary variant */}
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
      )}
      
      {/* Subtle particle effect for enhanced variants - smaller particles */}
      {(variant === 'primary' || variant === 'outline') && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-white/40 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 delay-100" />
          <div className="absolute bottom-0.5 left-0.5 w-0.5 h-0.5 bg-white/30 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 delay-200" />
          <div className="absolute top-1/2 right-1 w-0.5 h-0.5 bg-white/50 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 delay-150" />
        </div>
      )}
    </button>
  )
}

export default PrimaryButton