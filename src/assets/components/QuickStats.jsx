import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import Step from './Step'

const QuickStats = ({ isVisible, getAnimationClass }) => {
  const { isDark } = useTheme()

  const stats = [
    {
      number: '2+',
      label: 'Years of Learning',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: '10+',
      label: 'Projects Built',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      number: '5+',
      label: 'Technologies',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: '24/7',
      label: 'Learning Mode',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className={`transform transition-all ${getAnimationClass('duration-1000 delay-600')} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}>
      <Step 
        delay={600}
        padding="p-6 lg:p-8"
        shadow="shadow-xl"
        className="h-full"
      >
        <h3 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-6`}>
          Quick Facts
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <p className={`text-sm lg:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Step>
    </div>
  )
}

export default QuickStats
