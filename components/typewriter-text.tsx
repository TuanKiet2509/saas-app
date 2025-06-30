"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  delay?: number
  className?: string
}

export default function TypewriterText({ text, delay = 40, className = "" }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, delay, text])

  return (
    <p
      className={`${className} ${isComplete ? "after:hidden" : "after:inline-block after:w-1 after:h-5 after:bg-emerald-400 after:ml-1 after:animate-pulse"}`}
    >
      {displayText}
    </p>
  )
}
