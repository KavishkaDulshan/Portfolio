import React from 'react'

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
  // Base styles with enhanced modern transitions
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden group"

  // Size variants - smaller and more compact
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5 min-h-[28px]",
    md: "px-4 py-2 text-sm gap-2 min-h-[32px]",
    lg: "px-5 py-2.5 text-base gap-2 min-h-[36px]"
  }

  // Enhanced variant styles with modern hover effects
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-emerald-600 to-cyan-500 text-white shadow-lg
      hover:from-cyan-500 hover:to-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/25 
      hover:scale-105 hover:-translate-y-0.5
      active:scale-95 active:translate-y-0 active:shadow-md
      focus:ring-emerald-500/50 focus:ring-opacity-75
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
      before:translate-x-[-100%] before:transition-transform before:duration-700 before:ease-out
      hover:before:translate-x-[100%]
    `,
    secondary: `
      bg-gray-100 text-gray-800 shadow-md border border-gray-200
      hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:shadow-lg hover:shadow-gray-400/20
      hover:scale-105 hover:-translate-y-0.5 hover:border-gray-300
      active:scale-95 active:translate-y-0 active:bg-gray-300
      focus:ring-gray-400 focus:ring-opacity-50
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-300/0 before:via-gray-300/30 before:to-gray-300/0
      before:translate-x-[-100%] before:transition-transform before:duration-600 before:ease-out
      hover:before:translate-x-[100%]
    `,
    outline: `
      bg-transparent text-gray-700 border-2 border-gray-300 shadow-sm backdrop-blur-sm
      hover:bg-gray-700 hover:text-white hover:border-gray-700 hover:shadow-lg hover:shadow-gray-700/20
      hover:scale-105 hover:-translate-y-0.5
      active:scale-95 active:translate-y-0 active:bg-gray-800
      focus:ring-gray-400 focus:ring-opacity-50
      before:absolute before:inset-0 before:bg-gray-700 before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
      after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/0 after:via-white/20 after:to-white/0
      after:translate-x-[-100%] after:transition-transform after:duration-500 after:ease-out
      hover:after:translate-x-[100%]
    `,
    ghost: `
      bg-transparent text-gray-600 backdrop-blur-sm
      hover:bg-gray-100 hover:text-gray-800 hover:shadow-md hover:shadow-gray-400/20
      hover:scale-105 hover:-translate-y-0.5
      active:scale-95 active:translate-y-0 active:bg-gray-200
      focus:ring-gray-400 focus:ring-opacity-30
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-200/0 before:via-gray-200/50 before:to-gray-200/0
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
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30 -z-10 scale-110" />
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