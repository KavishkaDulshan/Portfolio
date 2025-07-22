import React, { useState, useEffect } from 'react';
import { useGitHubData } from '../../hooks/useGitHubData.js';
import { useTheme } from '../../hooks/useTheme';

const SocialWindow = ({ children, platform, username, followers, description, isVisible, onMouseEnter, onMouseLeave, phoneNumber}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { isDark } = useTheme();
  
  // Fetch GitHub data only for GitHub platform
  const { data: githubData, loading, error } = useGitHubData(
    platform === 'github' ? username : null,
    platform === 'github' && isVisible
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleMouseEnter = () => {
    if (isLargeScreen) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    if (isLargeScreen) {
      onMouseLeave();
    }
  };

  // Get display data based on platform
  const getDisplayData = () => {
    if (platform === 'github' && githubData) {
      return {
        username: githubData.username,
        followers: githubData.publicRepos,
        description: githubData.bio || description,
        stats: {
          primary: githubData.publicRepos,
          secondary: githubData.followers,
          primaryLabel: 'Repos',
          secondaryLabel: 'Followers'
        },
        actionUrl: githubData.htmlUrl,
        isLive: !githubData.error
      };
    }
    
    if (platform === 'linkedin') {
      return {
        username,
        followers,
        description,
        stats: {
          primary: followers,
          secondary: 'Active',
          primaryLabel: 'Connections',
          secondaryLabel: 'Status'
        },
        actionUrl: `https://linkedin.com/in/${username}`,
        isLive: false
      };
    }

    if (platform === 'whatsapp') {
      return {
        username,
        followers,
        description,
        stats: {
          primary: followers,
          secondary: 'Available',
          primaryLabel: 'Contacts',
          secondaryLabel: 'Status'
        },
        actionUrl: `https://wa.me/${phoneNumber || import.meta.env.VITE_DEFAULT_PHONE_NUMBER}?text=Hello%20Kavishka!%20I'd%20like%20to%20discuss%20a%20project%20with%20you.`,
        isLive: false
      };
    }
    
    return {
      username,
      followers,
      description,
      stats: {
        primary: followers,
        secondary: 'Active',
        primaryLabel: platform === 'github' ? 'Repos' : 
                     platform === 'linkedin' ? 'Connections' : 'Contacts',
        secondaryLabel: 'Status'
      },
      actionUrl: '#',
      isLive: false
    };
  };

  const displayData = getDisplayData();

  const handleActionClick = () => {
    if (displayData.actionUrl && displayData.actionUrl !== '#') {
      window.open(displayData.actionUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Social Info Window - Only show on large screens */}
      {isLargeScreen && (
        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80 ${isDark ? 'bg-black/80 border-fuchsia-500/30' : 'bg-white/80 border-gray-200/40'} backdrop-blur-md rounded-xl shadow-2xl border p-3 transition-all duration-300 z-50 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
        }`}>
          {/* Arrow pointing up */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1">
            <div className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] ${isDark ? 'border-b-black/80' : 'border-b-white/80'}`}></div>
          </div>
          
          <div className="flex flex-col gap-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center relative ${
                  platform === 'whatsapp' ? 'bg-green-500' :
                  platform === 'linkedin' ? 'bg-blue-600' :
                  platform === 'github' ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-500 to-purple-600'
                }`}>
                  {/* Live data indicator */}
                  {platform === 'github' && displayData.isLive && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                  )}
                  
                  {platform === 'whatsapp' && (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  )}
                  {platform === 'linkedin' && (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {platform === 'github' && (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.30.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className={`text-base font-semibold ${isDark ? 'text-fuchsia-300' : 'text-gray-800'} capitalize`}>{platform}</h3>
                    {loading && platform === 'github' && (
                      <div className={`w-3 h-3 border-2 ${isDark ? 'border-gray-600 border-t-blue-400' : 'border-gray-300 border-t-blue-600'} rounded-full animate-spin`}></div>
                    )}
                  </div>
                  <p className={`text-xs ${isDark ? 'text-cyan-300' : 'text-gray-600'}`}>@{displayData.username}</p>
                </div>
              </div>
              
              {/* Stats moved to header for compactness */}
              <div className="flex items-center gap-4 text-center">
                <div>
                  <p className={`text-sm font-bold ${
                    platform === 'whatsapp' ? 'text-green-600' :
                    platform === 'linkedin' ? 'text-blue-600' :
                    platform === 'github' ? (isDark ? 'text-pink-300' : 'text-gray-700') : 'text-blue-600'
                  }`}>
                    {loading && platform === 'github' ? '...' : displayData.stats.primary}
                  </p>
                  <p className={`text-xs ${isDark ? 'text-violet-300' : 'text-gray-500'}`}>{displayData.stats.primaryLabel}</p>
                </div>
                <div className={`w-px h-6 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                <div>
                  <p className={`text-sm font-bold ${
                    platform === 'whatsapp' ? 'text-green-600' :
                    platform === 'linkedin' ? 'text-blue-600' :
                    platform === 'github' ? (isDark ? 'text-gray-300' : 'text-gray-700') : 'text-purple-600'
                  }`}>
                    {loading && platform === 'github' ? '...' : displayData.stats.secondary}
                  </p>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{displayData.stats.secondaryLabel}</p>
                </div>
              </div>
            </div>
            
            {/* Description - made more compact */}
            <p className={`text-xs ${isDark ? 'text-cyan-200' : 'text-gray-700'} leading-relaxed`}>
              {loading && platform === 'github' ? 'Loading GitHub data...' : displayData.description}
            </p>

            {/* Error message */}
            {error && platform === 'github' && (
              <p className={`text-xs text-red-500 ${isDark ? 'bg-red-900/30' : 'bg-red-50'} p-2 rounded`}>
                {error}
              </p>
            )}

            {/* Live data indicator */}
            {platform === 'github' && displayData.isLive && (
              <div className="flex items-center gap-1 text-xs text-green-600">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Live GitHub data
              </div>
            )}
            
            {/* Action Button - smaller */}
            <button 
              onClick={handleActionClick}
              disabled={loading}
              className={`w-full py-1.5 px-4 text-white rounded-lg font-medium text-xs hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                platform === 'whatsapp' ? 'bg-green-500 hover:bg-green-600' :
                platform === 'linkedin' ? 'bg-blue-600 hover:bg-blue-700' :
                platform === 'github' ? 'bg-gray-800 hover:bg-gray-900' : 'bg-gradient-to-r from-blue-500 to-purple-600'
              }`}
            >
              {loading && platform === 'github' ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </div>
              ) : (
                platform === 'whatsapp' ? 'Send Message' :
                platform === 'linkedin' ? 'View Profile' : 'View Repository'
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SocialWindow;