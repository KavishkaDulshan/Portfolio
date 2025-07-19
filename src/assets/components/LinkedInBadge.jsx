import React, { useEffect, useRef } from 'react';

const LinkedInBadge = ({ 
  username, 
  size = "medium", 
  theme = "light", 
  type = "VERTICAL",
  className = "" 
}) => {
  const badgeRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    // Clean up any existing LinkedIn badge script
    if (scriptRef.current) {
      document.body.removeChild(scriptRef.current);
    }

    // Create and load LinkedIn badge script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    
    script.onload = () => {
      // LinkedIn badge script loaded successfully
      console.log('LinkedIn badge script loaded');
    };

    script.onerror = () => {
      console.error('Failed to load LinkedIn badge script');
    };

    document.body.appendChild(script);
    scriptRef.current = script;

    // Cleanup function
    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        try {
          document.body.removeChild(scriptRef.current);
        } catch (e) {
          console.warn('Error removing LinkedIn script:', e);
        }
      }
    };
  }, [username]);

  return (
    <div className={`linkedin-badge-container ${className}`} ref={badgeRef}>
      <div 
        className="badge-base LI-profile-badge" 
        data-locale="en_US" 
        data-size={size}
        data-theme={theme}
        data-type={type}
        data-vanity={username}
        data-version="v1"
      >
        {/* Fallback content while badge loads */}
        <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <p className="text-sm text-blue-600">Loading LinkedIn Profile...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInBadge;