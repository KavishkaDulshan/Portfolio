import React from 'react'

const Step = ({ 
  children, 
  className = "", 
  delay = 0, 
  height = "auto",
  padding = "p-4",
  shadow = "shadow-xl",
  blur = "backdrop-blur-sm",
  border = "border border-white/20",
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
      {/* Step Platform - Creates the elevated white background */}
      <div className={`
        relative bg-white/95 ${blur} ${shadow} ${border} ${rounded} ${padding}
        transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/50 before:to-white/20 
        before:${rounded} before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100
        after:absolute after:inset-0 after:bg-gradient-to-t after:from-gray-100/20 after:to-transparent 
        after:${rounded} after:pointer-events-none
      `}>
        {/* Inner content container - Centered */}
        <div className="relative z-10 text-center">
          {children}
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 -z-10 bg-white/40 blur-xl opacity-50 rounded-full scale-110" />
      </div>
      
      {/* Bottom shadow for depth */}
      <div className="absolute inset-x-2 bottom-0 h-4 bg-black/5 blur-lg rounded-full transform translate-y-2 -z-20" />
    </div>
  )
}

export default Step