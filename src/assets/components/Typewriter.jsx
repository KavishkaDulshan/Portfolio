import React, { useState, useEffect } from 'react'

const Typewriter = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000, className = "" }) => {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Cursor blinking effect - stop blinking when animation is complete
    const cursorInterval = setInterval(() => {
      if (!isComplete) {
        setShowCursor(prev => !prev)
      } else {
        setShowCursor(false) // Hide cursor when complete
      }
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [isComplete])

  useEffect(() => {
    // Don't run animation if already complete
    if (isComplete) return

    const currentText = texts[textIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          // Finished typing current text
          if (textIndex < texts.length - 1) {
            // Not the last text, pause before deleting
            setTimeout(() => {
              setIsDeleting(true)
            }, pauseTime)
          } else {
            // Last text reached, complete the animation
            setIsComplete(true)
            setShowCursor(false)
          }
        }
      } else {
        // Deleting effect
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setTextIndex(textIndex + 1)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, pauseTime, isComplete])

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block w-0.5 h-[1em] bg-current ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </span>
  )
}

export default Typewriter