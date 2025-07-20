import React from 'react'

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Circuit board lines - Low opacity */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        {/* Horizontal lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#00ff88" strokeWidth="2" />
        <line x1="0" y1="35%" x2="85%" y2="35%" stroke="#00ff88" strokeWidth="1.5" />
        <line x1="15%" y1="50%" x2="100%" y2="50%" stroke="#00ff88" strokeWidth="2" />
        <line x1="0" y1="65%" x2="70%" y2="65%" stroke="#00ff88" strokeWidth="1.5" />
        <line x1="30%" y1="80%" x2="100%" y2="80%" stroke="#00ff88" strokeWidth="2" />
        
        {/* Vertical lines */}
        <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#00ff88" strokeWidth="1.5" />
        <line x1="30%" y1="0" x2="30%" y2="65%" stroke="#00ff88" strokeWidth="2" />
        <line x1="45%" y1="20%" x2="45%" y2="100%" stroke="#00ff88" strokeWidth="1.5" />
        <line x1="70%" y1="0" x2="70%" y2="80%" stroke="#00ff88" strokeWidth="2" />
        <line x1="85%" y1="35%" x2="85%" y2="100%" stroke="#00ff88" strokeWidth="1.5" />
        
        {/* Connection nodes */}
        <circle cx="15%" cy="20%" r="4" fill="#00ff88" />
        <circle cx="30%" cy="35%" r="3" fill="#00ff88" />
        <circle cx="45%" cy="50%" r="4" fill="#00ff88" />
        <circle cx="70%" cy="65%" r="3" fill="#00ff88" />
        <circle cx="85%" cy="35%" r="4" fill="#00ff88" />
        <circle cx="30%" cy="65%" r="3" fill="#00ff88" />
        <circle cx="45%" cy="20%" r="3" fill="#00ff88" />
        <circle cx="70%" cy="80%" r="4" fill="#00ff88" />
        <circle cx="85%" cy="80%" r="3" fill="#00ff88" />
      </svg>

      {/* Traveling Dots Layer */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 1 }} viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <filter id="dotGlow">
            <feGaussianBlur stdDeviation="0.2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Traveling Dots */}
        <circle r="0.2" fill="#22d3ee" filter="url(#dotGlow)" opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,20; 100,20; 0,20"
            dur="15s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="0.2" fill="#22d3ee" filter="url(#dotGlow)" opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="15,0; 15,100; 15,0"
            dur="18s"
            repeatCount="indefinite"
            begin="3s"
          />
        </circle>

        <circle r="0.2" fill="#22d3ee" filter="url(#dotGlow)" opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="15,50; 100,50; 15,50"
            dur="20s"
            repeatCount="indefinite"
            begin="6s"
          />
        </circle>

        <circle r="0.2" fill="#22d3ee" filter="url(#dotGlow)" opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="70,0; 70,80; 70,0"
            dur="16s"
            repeatCount="indefinite"
            begin="9s"
          />
        </circle>

        <circle r="0.2" fill="#22d3ee" filter="url(#dotGlow)" opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,35; 85,35; 0,35"
            dur="22s"
            repeatCount="indefinite"
            begin="12s"
          />
        </circle>
      </svg>

      {/* Floating colored circles */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(240, 60%, 65%) 0%, transparent 70%)',
          top: '5%',
          left: '10%',
          animation: 'float1 20s ease-in-out infinite, colorShift 15s ease-in-out infinite',
        }}
      />
      
      <div 
        className="absolute w-80 h-80 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(280, 60%, 70%) 0%, transparent 70%)',
          top: '70%',
          right: '5%',
          animation: 'float2 25s ease-in-out infinite, colorShift 18s ease-in-out infinite',
        }}
      />
      
      <div 
        className="absolute w-72 h-72 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(320, 60%, 75%) 0%, transparent 70%)',
          bottom: '30%',
          left: '70%',
          animation: 'float3 30s ease-in-out infinite, colorShift 22s ease-in-out infinite',
        }}
      />

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(40px, -30px) scale(1.2); }
          50% { transform: translate(-25px, 45px) scale(0.8); }
          75% { transform: translate(30px, 20px) scale(1.1); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, -20px) scale(1.3); }
          66% { transform: translate(35px, 40px) scale(0.9); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(25px, -35px) scale(0.7); }
          60% { transform: translate(-40px, 25px) scale(1.2); }
          80% { transform: translate(15px, -15px) scale(1.0); }
        }

        @keyframes colorShift {
          0% { filter: hue-rotate(0deg); }
          25% { filter: hue-rotate(90deg); }
          50% { filter: hue-rotate(180deg); }
          75% { filter: hue-rotate(270deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Background