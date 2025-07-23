import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import PrimaryButton from './PrimaryButton'
import Step from './Step'

const CallToAction = ({ 
  isVisible, 
  getAnimationClass, 
  handleDownloadCV, 
  handleContactMe 
}) => {
  const { isDark } = useTheme()

  return (
    <div className={`text-center transform transition-all ${getAnimationClass('duration-1000 delay-1200')} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <Step 
        delay={1200}
        padding="p-6 lg:p-8"
        shadow="shadow-xl"
      >
        <h3 className={`text-xl lg:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-6`}>
          Let's Build Something Amazing Together
        </h3>
        <p className={`text-base lg:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
          I'm always excited to work on new projects and collaborate with like-minded individuals. 
          Whether you have an idea or just want to connect, I'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PrimaryButton 
            variant="outline"
            size="lg"
            onClick={handleDownloadCV}
            icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
              <path d="M14 2v6h6"/>
              <path d="M12 18v-6m-3 3l3 3 3-3"/>
            </svg>}
            iconPosition="left"
            className="tracking-wide hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent"
          >
            Download CV
          </PrimaryButton>
          
          <PrimaryButton 
            variant="primary"
            size="lg"
            onClick={handleContactMe}
            icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>}
            iconPosition="left"
            className="tracking-wide hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 hover:text-white"
          >
            Get In Touch
          </PrimaryButton>
        </div>
      </Step>
    </div>
  )
}

export default CallToAction
