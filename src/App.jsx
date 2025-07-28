import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import NavBar from './assets/components/NavBar'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Skills from './assets/components/Skills'
import Background from './assets/components/Background'
import ScrollIndicator from './assets/components/ScrollIndicator'

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative">
        <Background />
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <ScrollIndicator 
          isVisible={true}
          getAnimationClass={(classes) => classes}
          isReducedMotion={false}
        />
      </div>
    </ThemeProvider>
  )
}

export default App