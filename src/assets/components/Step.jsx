import React from 'react'

const Step = ({ 
  children, 
  className = "", 
  delay = 0, 
  height = "auto",
  padding = "p-4",
  shadow = "shadow-xl",
  rounded = "rounded-3xl"
}) => {
  return (
    <div 
      className={`
        relative transform transition-all duration-1000 ease-out
        ${delay ? `delay-${delay}` : ''}
        ${className}
      `}
      style={{ 
        transitionDelay: `${delay}ms`,
        height: height 
      }}
    >
      {/* Step Platform - Creates the glassmorphism background */}
      <div className={`
        relative bg-white/10 backdrop-blur-sm ${shadow} border border-white/20 ${rounded} ${padding}
        transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:bg-white/20 hover:border-white/30
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
        before:${rounded} before:translate-x-[-100%] before:transition-transform before:duration-700 before:ease-out
        hover:before:translate-x-[100%]
        after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/10 after:to-transparent 
        after:${rounded} after:pointer-events-none after:opacity-0 after:transition-opacity after:duration-300
        hover:after:opacity-100
      `}>
        {/* Inner content container - Centered */}
        <div className="relative z-10 text-center">
          {children}
        </div>
      </div>
      
      {/* Bottom shadow for depth */}
      <div className="absolute inset-x-2 bottom-0 h-4 bg-black/5 blur-lg rounded-full transform translate-y-2 -z-20" />
    </div>
  )
}

export default Step