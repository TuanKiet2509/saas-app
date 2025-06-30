"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const screenshots = [
  {
    src: "/images/hero-illustration.png",
    alt: "Dashboard View",
    caption: "Intuitive Dashboard with Real-time Analytics",
  },
  {
    src: "/images/hero-illustration.png",
    alt: "Calendar View",
    caption: "Smart Calendar with AI-powered Scheduling",
  },
  {
    src: "/images/hero-illustration.png",
    alt: "Reports View",
    caption: "Comprehensive Reports and Insights",
  },
]

export default function ProductPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1))
  }

  // Auto-play functionality
  useState(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  })

  return (
    <div
      className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-emerald-900/20 transition-all duration-300 hover:shadow-emerald-500/30 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video"
        >
          <Image
            src={screenshots[currentIndex].src || "/placeholder.svg"}
            width={1280}
            height={720}
            alt={screenshots[currentIndex].alt}
            className="w-full h-auto rounded-xl border border-gray-800"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

          <div className="absolute bottom-6 left-0 right-0 text-center text-white">
            <p className="text-lg font-medium">{screenshots[currentIndex].caption}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls - only visible on hover */}
      <div
        className={`absolute inset-0 flex items-center justify-between px-4 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <button
          onClick={prevSlide}
          className="bg-black/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-emerald-500 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-emerald-500 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Play/Pause button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={`absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-emerald-500 transition-colors ${isHovered ? "opacity-100" : "opacity-0"}`}
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-emerald-500 w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
