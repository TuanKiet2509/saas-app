"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface IntegrationLogoProps {
  name: string
}

export default function IntegrationLogo({ name }: IntegrationLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div
        className="flex h-20 w-20 items-center justify-center rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-4 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          filter: isHovered ? "grayscale(0)" : "grayscale(100%)",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          boxShadow: isHovered ? "0 10px 25px -5px rgba(16, 185, 129, 0.1)" : "none",
          borderColor: isHovered ? "rgba(16, 185, 129, 0.5)" : "",
        }}
      >
        <img
          src={`/logos/${name}.svg`}
          alt={`${name} logo`}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="mt-2 text-sm text-gray-400">{name}</span>
    </motion.div>
  )
}
