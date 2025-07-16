import React from 'react'

const NavBar = () => {
  return (
    <div>
       <nav>
        <button type='button' name='aboutme' value='aboutme'>About Me</button>
        <button type='button'>Projects</button>
        <button type='button'>Skills</button>
        <button type='button'>Resume</button>
        <button type='button'>Blog</button>
        <button type='button'>Contact</button>
       </nav>
    </div>
  )
}

export default NavBar