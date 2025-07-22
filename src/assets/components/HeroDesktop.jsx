/* eslint-disable no-unused-vars */
import React from 'react'
import SocialWindow from './SocialWindow'
import Step from './Step'
import Typewriter from './Typewriter'
import PrimaryButton from './PrimaryButton'
import { useTheme } from '../../hooks/useTheme'

const HeroDesktop = ({
  profileImage,
  manImage,
  isVisible,
  getAnimationClass,
  socialData,
  hoveredSocial,
  handleSocialHover,
  handleSocialLeave,
  handleGetInTouch,
  handleViewProjects,
  BrainMedia,
  SocialMedia
}) => {
  const { isDark } = useTheme()
  return (
    <div className="hidden lg:block">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left lg:max-w-3xl">
          {/* Main Title */}
          <h1 className="mt-5 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight min-h-[1.2em] relative z-10 text-center px-2">
            <Typewriter 
              texts={[
                "Hello there!",
                "Glad To See You",
                "Kavishka Dulshan"
              ]}
              speed={80}
              deleteSpeed={40}
              pauseTime={1500}
              className={`bg-gradient-to-r ${isDark ? 'from-gray-200 via-blue-400 to-gray-100' : 'from-zinc-900 via-cyan-700 to-gray-900'} bg-clip-text text-transparent animate-gradient-x`}
            />
          </h1>

          {/* Profile Image - Desktop */}
          <div className={`flex justify-center lg:justify-center items-center gap-6 transform transition-all ${getAnimationClass('duration-1000 delay-300')} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <img 
              src={manImage}
              alt="Profile illustration" 
              className={`w-64 h-64 object-contain transition-all ${getAnimationClass('duration-500 hover:scale-110 hover:rotate-3')} filter drop-shadow-lg`}
              loading="eager"
              decoding="async"
              width="256"
              height="256"
            />
            <BrainMedia 
              className={`w-64 h-64 object-contain transition-all ${getAnimationClass('duration-500 hover:scale-110 hover:-rotate-3')} filter drop-shadow-lg`}
              width="256"
              height="256"
            />
          </div>

          {/* Subtitle - Desktop */}
          <div>
            <Step 
              delay={400}
              className={`transform transition-all ${getAnimationClass('duration-1000 delay-400')} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mx-2`}
              padding="p-3 sm:p-5"
              shadow="shadow-xl"
            >
              <h2 className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'} leading-relaxed px-2`}>
                Software Engineering Undergraduate |{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Knowledge Seeker &{' '}
                </span>
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  IoT Enthusiast...
                </span>
              </h2>
            </Step>
          </div>

          {/* Description - Desktop */}
          <div>
            <Step 
              delay={600}
              className={`transform transition-all ${getAnimationClass('duration-1000 delay-600')} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mx-2`}
              padding="p-3 sm:p-5"
              shadow="shadow-lg"
            >
              <p className={`text-xs xs:text-sm sm:text-base lg:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl leading-relaxed mx-auto lg:mx-0 font-bold px-2`}>
                I am a Software Engineering undergraduate at NSBM Green University with a strong passion for web application development, computer network and security, robotics and IoT. I am always eager to explore new technologies and expand my knowledge. With a curious mindset and a drive to understand how things work, I constantly seek opportunities to learn, build, and innovate in the tech world. And also I like to share my knowledge with others and be helpful for someone. 
              </p>
            </Step>
          </div>
        </div>

        {/* Right Content - Desktop Profile */}
        <div className={`flex flex-col items-center flex-shrink-0 transform transition-all ${getAnimationClass('duration-1000 delay-300')} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative z-10">
            <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-r from-zinc-900 via-cyan-700 to-gray-900 p-2">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={profileImage}
                  alt="Kavishka Dulshan - Software Engineering Student" 
                  className={`w-full h-full object-cover rounded-full transition-all ${getAnimationClass('duration-500 hover:scale-110')}`}
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  width="384"
                  height="384"
                />
              </div>
            </div>
          </div>
          
          {/* Social Links - Desktop */}
          <div className={`flex gap-4 mt-6 transform transition-all ${getAnimationClass('duration-1000 delay-1000')} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative z-20`}>
            <SocialWindow
              {...socialData.whatsapp}
              isVisible={hoveredSocial === 'whatsapp'}
              onMouseEnter={() => handleSocialHover('whatsapp')}
              onMouseLeave={handleSocialLeave}
            >
              <a 
                href={socialData.whatsapp.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-16 h-16 ${isDark ? 'bg-gray-800/60' : 'bg-gray-100/60'} hover:bg-green-500 ${isDark ? 'text-gray-200' : 'text-gray-700'} hover:text-white rounded-full flex items-center justify-center transition-all ${getAnimationClass('duration-300 hover:shadow-lg hover:scale-110')} active:scale-95 group`}
                aria-label="Contact via WhatsApp"
              >
                <svg className={`w-8 h-8 group-hover:scale-110 transition-transform ${getAnimationClass('duration-300')}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </SocialWindow>

            <SocialWindow
              {...socialData.linkedin}
              isVisible={hoveredSocial === 'linkedin'}
              onMouseEnter={() => handleSocialHover('linkedin')}
              onMouseLeave={handleSocialLeave}
            >
              <a 
                href={socialData.linkedin.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-16 h-16 ${isDark ? 'bg-gray-800/60' : 'bg-gray-100/60'} hover:bg-blue-600 ${isDark ? 'text-gray-200' : 'text-gray-700'} hover:text-white rounded-full flex items-center justify-center transition-all ${getAnimationClass('duration-300 hover:shadow-lg hover:scale-110')} active:scale-95 group`}
                aria-label="Connect on LinkedIn"
              >
                <svg className={`w-8 h-8 group-hover:scale-110 transition-transform ${getAnimationClass('duration-300')}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </SocialWindow>

            <SocialWindow
              {...socialData.github}
              isVisible={hoveredSocial === 'github'}
              onMouseEnter={() => handleSocialHover('github')}
              onMouseLeave={handleSocialLeave}
            >
              <a 
                href={socialData.github.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-16 h-16 ${isDark ? 'bg-gray-800/60' : 'bg-gray-100/60'} hover:bg-gray-800 ${isDark ? 'text-gray-200' : 'text-gray-700'} hover:text-white rounded-full flex items-center justify-center transition-all ${getAnimationClass('duration-300 hover:shadow-lg hover:scale-110')} active:scale-95 group`}
                aria-label="View GitHub Profile"
              >
                <svg className={`w-8 h-8 group-hover:scale-110 transition-transform ${getAnimationClass('duration-300')}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.30.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </SocialWindow>
          </div>

          {/* Desktop Social Media */}
          <div className={`flex justify-center mt-4 transform transition-all ${getAnimationClass('duration-1000 delay-1200')} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <SocialMedia 
              className={`w-42 h-42 xl:w-60 xl:h-60 object-contain filter drop-shadow-lg transition-all ${getAnimationClass('duration-500 hover:scale-110')}`}
            />
          </div>
        </div>
      </div>

      {/* CTA Buttons - Desktop */}
      <div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-6 px-4 mt-8">
        <div className={`flex justify-center transform transition-all ${getAnimationClass('duration-1000 delay-800')} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} w-full max-w-lg`}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-5">
            <PrimaryButton 
              variant="outline"
              size="lg"
              onClick={handleGetInTouch}
              icon={<svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>}
              iconPosition="left"
              className="tracking-wide hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent"
            >
              Get In Touch
            </PrimaryButton>
            
            <PrimaryButton 
              variant="outline"
              size="lg"
              onClick={handleViewProjects}
              icon={<svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
              </svg>}
              iconPosition="left"
              className="tracking-wide hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent"
            >
              View Projects
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroDesktop
