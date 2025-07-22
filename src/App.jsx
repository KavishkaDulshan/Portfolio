import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import NavBar from './assets/components/NavBar'
import Hero from './assets/components/Hero'
import Background from './assets/components/Background'

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative">
        <Background />
        <NavBar />
        <Hero />
      </div>
    </ThemeProvider>
  )
}

export default App