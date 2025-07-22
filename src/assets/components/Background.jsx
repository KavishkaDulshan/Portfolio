import React from 'react'
import { useTheme } from '../../hooks/useTheme'

const Background = () => {
  const { isDark } = useTheme()

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden transition-all duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Subtle Synthwave Grid Background */}
      {isDark && (
        <div className="absolute inset-0" style={{ opacity: 0.08 }}>
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 0, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        </div>
      )}
      
      {/* Circuit board lines - Subtle neon on black */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: isDark ? 0.25 : 0.1 }}>
        {/* Horizontal lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke={isDark ? "#ff00ff" : "#00ff88"} strokeWidth={isDark ? "1.5" : "2"} />
        <line x1="0" y1="35%" x2="85%" y2="35%" stroke={isDark ? "#00ffff" : "#00ff88"} strokeWidth={isDark ? "1" : "1.5"} />
        <line x1="15%" y1="50%" x2="100%" y2="50%" stroke={isDark ? "#ff0080" : "#00ff88"} strokeWidth={isDark ? "1.5" : "2"} />
        <line x1="0" y1="65%" x2="70%" y2="65%" stroke={isDark ? "#8a2be2" : "#00ff88"} strokeWidth={isDark ? "1" : "1.5"} />
        <line x1="30%" y1="80%" x2="100%" y2="80%" stroke={isDark ? "#00bfff" : "#00ff88"} strokeWidth={isDark ? "1.5" : "2"} />
        
        {/* Vertical lines */}
        <line x1="15%" y1="0" x2="15%" y2="100%" stroke={isDark ? "#ff1493" : "#00ff88"} strokeWidth={isDark ? "1" : "1.5"} />
        <line x1="30%" y1="0" x2="30%" y2="65%" stroke={isDark ? "#00ffff" : "#00ff88"} strokeWidth={isDark ? "1.5" : "2"} />
        <line x1="45%" y1="20%" x2="45%" y2="100%" stroke={isDark ? "#ff00ff" : "#00ff88"} strokeWidth={isDark ? "1" : "1.5"} />
        <line x1="70%" y1="0" x2="70%" y2="80%" stroke={isDark ? "#0080ff" : "#00ff88"} strokeWidth={isDark ? "1.5" : "2"} />
        <line x1="85%" y1="35%" x2="85%" y2="100%" stroke={isDark ? "#ff0080" : "#00ff88"} strokeWidth={isDark ? "1" : "1.5"} />
        
        {/* Connection nodes with minimal glow */}
        <circle cx="15%" cy="20%" r={isDark ? "3" : "4"} fill={isDark ? "#ff00ff" : "#00ff88"} filter={isDark ? "url(#subtleNodeGlow)" : ""} />
        <circle cx="30%" cy="35%" r={isDark ? "2.5" : "3"} fill={isDark ? "#00ffff" : "#00ff88"} filter={isDark ? "url(#subtleNodeGlow)" : ""} />
        <circle cx="45%" cy="50%" r={isDark ? "3" : "4"} fill={isDark ? "#ff0080" : "#00ff88"} filter={isDark ? "url(#subtleNodeGlow)" : ""} />
        <circle cx="70%" cy="65%" r={isDark ? "2.5" : "3"} fill={isDark ? "#8a2be2" : "#00ff88"} filter={isDark ? "url(#subtleNodeGlow)" : ""} />
        <circle cx="85%" cy="35%" r={isDark ? "3" : "4"} fill={isDark ? "#00bfff" : "#00ff88"} filter={isDark ? "url(#subtleNodeGlow)" : ""} />
        <circle cx="30%" cy="65%" r={isDark ? "2.5" : "3"} fill={isDark ? "#ff1493" : "#00ff88"} filter={isDark ? "url(#subtleNodeGlow)" : ""} />
        <circle cx="45%" cy="20%" r={isDark ? "2.5" : "3"} fill={isDark ? "#00ffff" : "#00ff88"} filter={isDark ? "url(#subtleNodeGlow)" : ""} />
        <circle cx="70%" cy="80%" r={isDark ? "3" : "4"} fill={isDark ? "#ff00ff" : "#00ff88"} filter={isDark ? "url(#subtleNodeGlow)" : ""} />
        <circle cx="85%" cy="80%" r={isDark ? "2.5" : "3"} fill={isDark ? "#0080ff" : "#00ff88"} filter={isDark ? "url(#subtleNodeGlow)" : ""} />
        
        {/* SVG Filters for subtle effects */}
        {isDark && (
          <defs>
            <filter id="subtleNodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        )}
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

        {/* Traveling Dots - More subtle */}
        <circle r="0.15" fill={isDark ? "#ff00ff" : "#22d3ee"} filter="url(#dotGlow)" opacity={isDark ? "0.4" : "0.5"}>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,20; 100,20; 0,20"
            dur="15s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="0.12" fill={isDark ? "#00ffff" : "#22d3ee"} filter="url(#dotGlow)" opacity={isDark ? "0.35" : "0.5"}>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="15,0; 15,100; 15,0"
            dur="18s"
            repeatCount="indefinite"
            begin="3s"
          />
        </circle>

        <circle r="0.15" fill={isDark ? "#ff0080" : "#22d3ee"} filter="url(#dotGlow)" opacity={isDark ? "0.3" : "0.5"}>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="15,50; 100,50; 15,50"
            dur="20s"
            repeatCount="indefinite"
            begin="6s"
          />
        </circle>

        <circle r="0.12" fill={isDark ? "#8a2be2" : "#22d3ee"} filter="url(#dotGlow)" opacity={isDark ? "0.4" : "0.5"}>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="70,0; 70,80; 70,0"
            dur="16s"
            repeatCount="indefinite"
            begin="9s"
          />
        </circle>

        <circle r="0.12" fill={isDark ? "#00bfff" : "#22d3ee"} filter="url(#dotGlow)" opacity={isDark ? "0.35" : "0.5"}>
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

        @keyframes colorShiftUltraSynthwave {
          0% { 
            filter: hue-rotate(0deg) saturate(2.0) brightness(1.5) contrast(1.3); 
          }
          20% { 
            filter: hue-rotate(60deg) saturate(2.5) brightness(1.8) contrast(1.5); 
          }
          40% { 
            filter: hue-rotate(120deg) saturate(2.2) brightness(1.6) contrast(1.4); 
          }
          60% { 
            filter: hue-rotate(180deg) saturate(2.8) brightness(1.9) contrast(1.6); 
          }
          80% { 
            filter: hue-rotate(240deg) saturate(2.4) brightness(1.7) contrast(1.5); 
          }
          100% { 
            filter: hue-rotate(360deg) saturate(2.0) brightness(1.5) contrast(1.3); 
          }
        }

        @keyframes colorShiftSynthwave {
          0% { 
            filter: hue-rotate(0deg) saturate(1.5) brightness(1.2); 
          }
          20% { 
            filter: hue-rotate(60deg) saturate(1.8) brightness(1.4); 
          }
          40% { 
            filter: hue-rotate(120deg) saturate(1.6) brightness(1.3); 
          }
          60% { 
            filter: hue-rotate(180deg) saturate(2.0) brightness(1.5); 
          }
          80% { 
            filter: hue-rotate(240deg) saturate(1.7) brightness(1.3); 
          }
          100% { 
            filter: hue-rotate(360deg) saturate(1.5) brightness(1.2); 
          }
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
