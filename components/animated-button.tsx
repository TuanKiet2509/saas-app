"use client"

import { useState, type ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedButtonProps {
  children: ReactNode
  primary?: boolean
  onClick?: () => void
  className?: string
}

export default function AnimatedButton({ children, primary = false, onClick, className = "" }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className={`relative overflow-hidden rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 ${
        primary
          ? "bg-gradient-to-r from-emerald-500 to-teal-700 text-white shadow-lg shadow-emerald-500/20"
          : "border border-gray-500 text-gray-300 hover:text-white hover:border-white"
      } ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {primary && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-800"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: isHovered ? 0 : "-100%", opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Ripple effect for primary button */}
      {primary && isHovered && (
        <motion.span
          className="absolute inset-0 pointer-events-none"
          initial={{ scale: 0, x: 0, y: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
            left: "var(--x)",
            top: "var(--y)",
            transformOrigin: "center",
          }}
          onMouseMove={(e) => {
            const target = e.currentTarget as HTMLElement
            const rect = target.getBoundingClientRect()
            target.style.setProperty("--x", `${e.clientX - rect.left}px`)
            target.style.setProperty("--y", `${e.clientY - rect.top}px`)
          }}
        />
      )}

      {/* 3D flip effect for secondary button */}
      {!primary && (
        <motion.div
          className="relative z-10 flex items-center justify-center"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      )}

      {/* Content for primary button */}
      {primary && <span className="relative z-10">{children}</span>}

      {/* Glow effect for primary button */}
      {primary && (
        <motion.span
          className="absolute inset-0 rounded-full pointer-events-none"
          initial={{ boxShadow: "0 0 0 0 rgba(16, 185, 129, 0)" }}
          animate={{
            boxShadow: isHovered ? "0 0 20px 3px rgba(16, 185, 129, 0.6)" : "0 0 0 0 rgba(16, 185, 129, 0)",
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  )
}
