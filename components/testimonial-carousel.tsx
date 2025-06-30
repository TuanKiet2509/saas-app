"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "This platform has completely transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by at least 30%.",
    author: "Sarah Johnson",
    title: "Product Manager at TechCorp",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "I've tried dozens of productivity tools, but this one stands out. The analytics features alone have helped us identify bottlenecks we didn't even know existed.",
    author: "Michael Chen",
    title: "CTO at StartupX",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The customer support is exceptional. Whenever we've had questions, the team has been responsive and helpful. It's rare to find this level of service.",
    author: "Emily Rodriguez",
    title: "Operations Director at GrowthCo",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-emerald-500/20">
                <img
                  src={testimonials[current].avatar || "/placeholder.svg?height=80&width=80"}
                  alt={testimonials[current].author}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <blockquote className="mb-6 text-xl md:text-2xl text-white italic">
              "{testimonials[current].quote}"
            </blockquote>
            <div className="text-emerald-400 font-semibold">{testimonials[current].author}</div>
            <div className="text-gray-400 text-sm">{testimonials[current].title}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-emerald-500 w-6" : "bg-gray-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/80 p-2 text-white hover:bg-emerald-500 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/80 p-2 text-white hover:bg-emerald-500 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
