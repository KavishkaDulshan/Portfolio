import React from 'react'

const Step = ({ 
  children, 
  className = "", 
  height = "auto",
  padding = "p-4",
  shadow = "shadow-xl",
  rounded = "rounded-3xl"
}) => {
  return (
    <div 
      className={`
        relative group
        ${className}
      `}
      style={{ 
        height: height
      }}
    >
      {/* Step Platform - Creates the glassmorphism background */}
      <div className={`
        relative bg-blue-50/2 backdrop-blur-sm ${shadow} border border-blue-200/5 ${rounded} ${padding} overflow-hidden
        transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-blue-50/4 hover:border-blue-200/8
      `}>
        {/* Shimmer effect - contained within the step */}
        <div className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/10 to-transparent
          ${rounded} translate-x-[-100%] transition-transform duration-700 ease-out opacity-0
          group-hover:translate-x-[100%] group-hover:opacity-60
        `} />
        
        {/* Glow overlay - contained within the step */}
        <div className={`
          absolute inset-0 bg-gradient-to-br from-blue-50/5 to-transparent 
          ${rounded} pointer-events-none opacity-0 transition-opacity duration-300
          group-hover:opacity-60
        `} />
        
        {/* Inner content container - Centered */}
        <div className="relative z-10 text-center">
          {children}
        </div>
      </div>
      
      {/* Bottom shadow for depth */}
      <div 
        className="absolute inset-x-2 bottom-0 h-4 bg-black/2 blur-lg rounded-full transform translate-y-2 -z-20"
      />
    </div>
  )
}

export default Step