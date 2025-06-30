"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const clients = [
  { name: "Microsoft", logo: "./logos/microsoft.svg" },
  { name: "Google", logo: "./logos/google.svg" },
  { name: "Amazon", logo: "./logos/amazon.svg" },
  { name: "Apple", logo: "./logos/apple.svg" },
  { name: "Netflix", logo: "./logos/netflix.svg" },
  { name: "Meta", logo: "./logos/meta.svg" },
  { name: "Salesforce", logo: "./logos/salesforce.svg" },
  { name: "Adobe", logo: "./logos/adobe.svg" },
]

export default function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [20, 0, 0, 20])

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className="w-full py-6 overflow-hidden bg-gray-900/30 backdrop-blur-sm border-t border-b border-gray-800/50"
    >
      <div className="flex items-center justify-center mb-2">
        <span className="text-sm font-medium text-gray-400">Trusted by industry leaders</span>
      </div>
      <div className="flex space-x-12 animate-scroll">
        {clients.map((client, index) => (
          <div key={index} className="flex-shrink-0 h-8 grayscale hover:grayscale-0 transition-all duration-300">
            <img src={client.logo || "/placeholder.svg"} alt={client.name} className="h-full" />
          </div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {clients.map((client, index) => (
          <div
            key={`dup-${index}`}
            className="flex-shrink-0 h-8 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img src={client.logo || "/placeholder.svg"} alt={client.name} className="h-full" />
          </div>
        ))}
      </div>
    </motion.div>
  )
}
