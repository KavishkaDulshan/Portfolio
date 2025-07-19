import React from 'react'
import NavBar from './assets/components/NavBar'
import Hero from './assets/components/Hero'
import Background from './assets/components/Background'

const App = () => {
  return (
    <div className="relative">
      <Background />
      <NavBar />
      <Hero />
    </div>
  )
}

export default App