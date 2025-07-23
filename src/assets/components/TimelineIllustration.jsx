import React from 'react'
import { useTheme } from '../../hooks/useTheme'

const TimelineIllustration = ({ achievementIndex, activeAchievement }) => {
  const { isDark } = useTheme()

  const renderIllustration = (index) => {
    switch (index) {
      case 0: // Graduation Cap 3D
        return (
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
              {/* Graduation Cap Base */}
              <ellipse cx="100" cy="120" rx="60" ry="12" fill={isDark ? '#1e3a8a' : '#3b82f6'} className="animate-shadow-pulse" opacity="0.3"/>
              <path d="M40 100 L100 80 L160 100 L160 120 L100 140 L40 120 Z" 
                    fill={isDark ? '#1d4ed8' : '#2563eb'} 
                    className="animate-three-d-cap-tilt"/>
              {/* Cap Top */}
              <ellipse cx="100" cy="100" rx="60" ry="15" fill={isDark ? '#2563eb' : '#1d4ed8'}/>
              {/* Tassel */}
              <circle cx="130" cy="95" r="3" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-tassel-swing"/>
              <path d="M130 98 Q135 105 130 112 Q125 105 130 98" 
                    fill={isDark ? '#fbbf24' : '#f59e0b'} 
                    className="animate-tassel-swing"/>
              {/* Floating Books */}
              <rect x="65" y="60" width="12" height="16" rx="2" fill={isDark ? '#dc2626' : '#ef4444'} className="animate-book-float-1"/>
              <rect x="125" y="65" width="12" height="16" rx="2" fill={isDark ? '#16a34a' : '#22c55e'} className="animate-book-float-2"/>
              {/* Sparkles */}
              <circle cx="70" cy="50" r="2" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-sparkle-1"/>
              <circle cx="140" cy="45" r="2" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-sparkle-2"/>
              <circle cx="90" cy="40" r="1.5" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-sparkle-3"/>
            </svg>
          </div>
        )
      
      case 1: // University Building 3D
        return (
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
              {/* Building Shadow */}
              <ellipse cx="100" cy="170" rx="70" ry="15" fill={isDark ? '#065f46' : '#10b981'} className="animate-shadow-pulse" opacity="0.3"/>
              {/* Main Building */}
              <rect x="60" y="80" width="80" height="90" fill={isDark ? '#059669' : '#10b981'} className="animate-building-glow"/>
              {/* Roof */}
              <path d="M50 80 L100 50 L150 80 Z" fill={isDark ? '#047857' : '#059669'}/>
              {/* Windows */}
              <rect x="70" y="95" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-1"/>
              <rect x="85" y="95" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-2"/>
              <rect x="100" y="95" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-3"/>
              <rect x="115" y="95" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-1"/>
              <rect x="70" y="115" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-2"/>
              <rect x="85" y="115" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-3"/>
              <rect x="100" y="115" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-1"/>
              <rect x="115" y="115" width="8" height="12" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-window-glow-2"/>
              {/* Door */}
              <rect x="90" y="140" width="20" height="30" fill={isDark ? '#92400e' : '#d97706'}/>
              {/* Flag */}
              <line x1="45" y1="30" x2="45" y2="75" stroke={isDark ? '#6b7280' : '#4b5563'} strokeWidth="2"/>
              <path d="M45 30 L70 35 L70 50 L45 45 Z" fill={isDark ? '#dc2626' : '#ef4444'} className="animate-flag-wave"/>
              {/* Floating Elements */}
              <circle cx="40" cy="60" r="3" fill={isDark ? '#06b6d4' : '#0891b2'} className="animate-float-element-1"/>
              <circle cx="160" cy="70" r="2.5" fill={isDark ? '#8b5cf6' : '#7c3aed'} className="animate-float-element-2"/>
            </svg>
          </div>
        )
      
      case 2: // Coding Monitor 3D
        return (
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
              {/* Monitor Shadow */}
              <ellipse cx="100" cy="170" rx="65" ry="12" fill={isDark ? '#581c87' : '#7c3aed'} className="animate-shadow-pulse" opacity="0.3"/>
              {/* Monitor Base */}
              <rect x="90" y="150" width="20" height="15" fill={isDark ? '#4b5563' : '#6b7280'}/>
              <ellipse cx="100" cy="165" rx="25" ry="5" fill={isDark ? '#374151' : '#4b5563'}/>
              {/* Monitor Screen */}
              <rect x="50" y="60" width="100" height="90" rx="8" fill={isDark ? '#1f2937' : '#374151'} className="animate-screen-glow"/>
              <rect x="55" y="65" width="90" height="80" rx="4" fill={isDark ? '#111827' : '#1f2937'}/>
              {/* Code Lines */}
              <rect x="65" y="75" width="30" height="3" fill={isDark ? '#10b981' : '#059669'} className="animate-code-type-1"/>
              <rect x="65" y="85" width="45" height="3" fill={isDark ? '#3b82f6' : '#2563eb'} className="animate-code-type-2"/>
              <rect x="75" y="95" width="35" height="3" fill={isDark ? '#f59e0b' : '#d97706'} className="animate-code-type-3"/>
              <rect x="65" y="105" width="50" height="3" fill={isDark ? '#ef4444' : '#dc2626'} className="animate-code-type-1"/>
              <rect x="75" y="115" width="25" height="3" fill={isDark ? '#8b5cf6' : '#7c3aed'} className="animate-code-type-2"/>
              <rect x="65" y="125" width="40" height="3" fill={isDark ? '#06b6d4' : '#0891b2'} className="animate-code-type-3"/>
              {/* Cursor */}
              <rect x="105" y="125" width="2" height="3" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-cursor-blink"/>
              {/* Floating Code Symbols */}
              <text x="160" y="50" fill={isDark ? '#10b981' : '#059669'} fontSize="16" className="animate-symbol-float-1">{'<}'}</text>
              <text x="35" y="55" fill={isDark ? '#3b82f6' : '#2563eb'} fontSize="14" className="animate-symbol-float-2">{'{ }'}</text>
              <text x="170" y="120" fill={isDark ? '#f59e0b' : '#d97706'} fontSize="12" className="animate-symbol-float-3">{'( )'}</text>
            </svg>
          </div>
        )
      
      case 3: // Light Bulb Idea 3D
        return (
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
              {/* Bulb Shadow */}
              <ellipse cx="100" cy="170" rx="45" ry="10" fill={isDark ? '#92400e' : '#f59e0b'} className="animate-shadow-pulse" opacity="0.3"/>
              {/* Bulb Base */}
              <rect x="85" y="130" width="30" height="20" rx="5" fill={isDark ? '#6b7280' : '#9ca3af'}/>
              <rect x="90" y="145" width="20" height="8" fill={isDark ? '#4b5563' : '#6b7280'}/>
              {/* Bulb */}
              <circle cx="100" cy="100" r="35" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-bulb-glow"/>
              <circle cx="100" cy="100" r="30" fill={isDark ? '#fed7aa' : '#fef3c7'} className="animate-inner-glow"/>
              {/* Filament */}
              <path d="M85 90 Q100 85 115 90 Q100 95 85 90" stroke={isDark ? '#92400e' : '#b45309'} strokeWidth="2" fill="none" className="animate-filament-glow"/>
              <path d="M85 110 Q100 105 115 110 Q100 115 85 110" stroke={isDark ? '#92400e' : '#b45309'} strokeWidth="2" fill="none" className="animate-filament-glow"/>
              {/* Light Rays */}
              <line x1="45" y1="100" x2="35" y2="100" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="3" className="animate-ray-1"/>
              <line x1="155" y1="100" x2="165" y2="100" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="3" className="animate-ray-2"/>
              <line x1="100" y1="45" x2="100" y2="35" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="3" className="animate-ray-3"/>
              <line x1="65" y1="65" x2="58" y2="58" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-ray-4"/>
              <line x1="135" y1="65" x2="142" y2="58" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-ray-5"/>
              <line x1="65" y1="135" x2="58" y2="142" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-ray-6"/>
              <line x1="135" y1="135" x2="142" y2="142" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-ray-7"/>
              {/* Floating Ideas */}
              <circle cx="60" cy="40" r="4" fill={isDark ? '#fef3c7' : '#fffbeb'} className="animate-idea-float-1"/>
              <circle cx="150" cy="45" r="3" fill={isDark ? '#fef3c7' : '#fffbeb'} className="animate-idea-float-2"/>
              <circle cx="45" cy="140" r="3.5" fill={isDark ? '#fef3c7' : '#fffbeb'} className="animate-idea-float-3"/>
            </svg>
          </div>
        )
      
      case 4: // Project Folder 3D
        return (
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
              {/* Folder Shadow */}
              <ellipse cx="100" cy="165" rx="60" ry="12" fill={isDark ? '#be185d' : '#ec4899'} className="animate-shadow-pulse" opacity="0.3"/>
              {/* Main Folder */}
              <path d="M40 80 L40 150 L160 150 L160 90 L120 90 L110 80 Z" 
                    fill={isDark ? '#ec4899' : '#f472b6'} 
                    className="animate-folder-glow"/>
              {/* Folder Tab */}
              <path d="M40 80 L110 80 L120 90 L40 90 Z" fill={isDark ? '#be185d' : '#ec4899'}/>
              {/* File Icons */}
              <rect x="55" y="105" width="20" height="25" rx="2" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-file-bob-1"/>
              <rect x="85" y="110" width="20" height="25" rx="2" fill={isDark ? '#3b82f6' : '#60a5fa'} className="animate-file-bob-2"/>
              <rect x="115" y="108" width="20" height="25" rx="2" fill={isDark ? '#10b981' : '#34d399'} className="animate-file-bob-3"/>
              {/* Progress Bars on Files */}
              <rect x="58" y="120" width="14" height="2" fill={isDark ? '#065f46' : '#059669'} className="animate-progress-fill-1"/>
              <rect x="88" y="125" width="14" height="2" fill={isDark ? '#1e40af' : '#2563eb'} className="animate-progress-fill-2"/>
              <rect x="118" y="123" width="14" height="2" fill={isDark ? '#be185d' : '#ec4899'} className="animate-progress-fill-3"/>
              {/* Floating Code Elements */}
              <circle cx="170" cy="60" r="8" fill={isDark ? '#374151' : '#6b7280'} className="animate-code-orbit"/>
              <rect x="166" y="56" width="8" height="1" fill={isDark ? '#10b981' : '#059669'}/>
              <rect x="166" y="59" width="6" height="1" fill={isDark ? '#3b82f6' : '#2563eb'}/>
              <rect x="166" y="62" width="5" height="1" fill={isDark ? '#f59e0b' : '#d97706'}/>
              {/* Notification Badge */}
              <circle cx="145" cy="75" r="6" fill={isDark ? '#dc2626' : '#ef4444'} className="animate-notification-pulse"/>
              <text x="145" y="78" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">3</text>
            </svg>
          </div>
        )
      
      case 5: // IoT Circuit 3D
        return (
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
              {/* Circuit Shadow */}
              <ellipse cx="100" cy="170" rx="70" ry="15" fill={isDark ? '#0c4a6e' : '#0284c7'} className="animate-shadow-pulse" opacity="0.3"/>
              {/* Circuit Board */}
              <rect x="50" y="70" width="100" height="80" rx="8" fill={isDark ? '#065f46' : '#059669'} className="animate-circuit-glow"/>
              {/* Central Processor */}
              <rect x="85" y="95" width="30" height="30" fill={isDark ? '#1f2937' : '#374151'} className="animate-processor-pulse"/>
              <rect x="90" y="100" width="20" height="20" fill={isDark ? '#4b5563' : '#6b7280'}/>
              {/* Circuit Traces */}
              <path d="M100 70 L100 95" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-trace-flow-1"/>
              <path d="M100 125 L100 150" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-trace-flow-2"/>
              <path d="M50 110 L85 110" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-trace-flow-3"/>
              <path d="M115 110 L150 110" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="2" className="animate-trace-flow-4"/>
              {/* Sensors */}
              <circle cx="70" cy="85" r="6" fill={isDark ? '#3b82f6' : '#60a5fa'} className="animate-sensor-pulse-1"/>
              <circle cx="130" cy="85" r="6" fill={isDark ? '#ec4899' : '#f472b6'} className="animate-sensor-pulse-2"/>
              <circle cx="70" cy="135" r="6" fill={isDark ? '#f59e0b' : '#fbbf24'} className="animate-sensor-pulse-3"/>
              <circle cx="130" cy="135" r="6" fill={isDark ? '#10b981' : '#34d399'} className="animate-sensor-pulse-4"/>
              {/* LED Indicators */}
              <circle cx="95" cy="75" r="2" fill={isDark ? '#dc2626' : '#ef4444'} className="animate-led-blink-1"/>
              <circle cx="105" cy="75" r="2" fill={isDark ? '#10b981' : '#22c55e'} className="animate-led-blink-2"/>
              {/* WiFi Signal */}
              <path d="M160 50 Q170 60 160 70" stroke={isDark ? '#06b6d4' : '#0891b2'} strokeWidth="2" fill="none" className="animate-wifi-signal-1"/>
              <path d="M165 55 Q170 60 165 65" stroke={isDark ? '#06b6d4' : '#0891b2'} strokeWidth="2" fill="none" className="animate-wifi-signal-2"/>
              <circle cx="170" cy="60" r="1.5" fill={isDark ? '#06b6d4' : '#0891b2'} className="animate-wifi-dot"/>
              {/* Data Flow */}
              <circle cx="40" cy="50" r="3" fill={isDark ? '#8b5cf6' : '#a78bfa'} className="animate-data-particle-1"/>
              <circle cx="45" cy="160" r="2.5" fill={isDark ? '#8b5cf6' : '#a78bfa'} className="animate-data-particle-2"/>
              <circle cx="155" cy="40" r="2" fill={isDark ? '#8b5cf6' : '#a78bfa'} className="animate-data-particle-3"/>
            </svg>
          </div>
        )
      
      case 6: // Lightning Tech 3D
        return (
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full animate-three-d-float" viewBox="0 0 200 200" fill="none">
              {/* Lightning Shadow */}
              <ellipse cx="100" cy="170" rx="50" ry="12" fill={isDark ? '#ea580c' : '#f97316'} className="animate-shadow-pulse" opacity="0.3"/>
              {/* Main Lightning Bolt */}
              <path d="M85 40 L70 90 L90 90 L80 160 L130 80 L110 80 L115 40 Z" 
                    fill={isDark ? '#f97316' : '#fb923c'} 
                    className="animate-lightning-flash"/>
              {/* Inner Lightning */}
              <path d="M90 50 L80 85 L95 85 L85 140 L115 90 L105 90 L110 50 Z" 
                    fill={isDark ? '#fed7aa' : '#ffedd5'} 
                    className="animate-inner-lightning-glow"/>
              {/* Electric Arcs */}
              <path d="M50 70 Q60 65 70 70 Q80 75 90 70" 
                    stroke={isDark ? '#fbbf24' : '#f59e0b'} 
                    strokeWidth="2" 
                    fill="none" 
                    className="animate-electric-arc-1"/>
              <path d="M110 110 Q120 105 130 110 Q140 115 150 110" 
                    stroke={isDark ? '#fbbf24' : '#f59e0b'} 
                    strokeWidth="2" 
                    fill="none" 
                    className="animate-electric-arc-2"/>
              {/* Energy Spheres */}
              <circle cx="60" cy="120" r="8" fill={isDark ? '#06b6d4' : '#0891b2'} className="animate-energy-sphere-1"/>
              <circle cx="140" cy="60" r="6" fill={isDark ? '#8b5cf6' : '#a78bfa'} className="animate-energy-sphere-2"/>
              <circle cx="45" cy="45" r="5" fill={isDark ? '#ec4899' : '#f472b6'} className="animate-energy-sphere-3"/>
              <circle cx="155" cy="140" r="7" fill={isDark ? '#10b981' : '#22c55e'} className="animate-energy-sphere-4"/>
              {/* Tech Grid Background */}
              <defs>
                <pattern id="techGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="none" stroke={isDark ? '#374151' : '#6b7280'} strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect x="30" y="30" width="140" height="140" fill="url(#techGrid)" className="animate-grid-pulse"/>
              {/* Particle Effects */}
              <circle cx="35" cy="100" r="1.5" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-particle-1"/>
              <circle cx="170" cy="80" r="1" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-particle-2"/>
              <circle cx="25" cy="150" r="1.2" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-particle-3"/>
              <circle cx="175" cy="120" r="0.8" fill={isDark ? '#fbbf24' : '#f59e0b'} className="animate-particle-4"/>
            </svg>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className={`w-5/12 ${achievementIndex % 2 === 0 ? 'pl-12' : 'pr-12'} flex items-center justify-center`}>
      <div className={`transition-all duration-700 transform ${
        activeAchievement === achievementIndex 
          ? 'scale-110 opacity-100' 
          : 'scale-95 opacity-60'
      }`}>
        {renderIllustration(achievementIndex)}
      </div>
    </div>
  )
}

export default TimelineIllustration
