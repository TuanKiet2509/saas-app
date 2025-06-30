"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart, Calendar, Lock, Bell, Users, LayoutDashboard } from "lucide-react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (icon) {
      case "LayoutDashboard":
        return <LayoutDashboard className="h-6 w-6" />
      case "BarChart":
        return <BarChart className="h-6 w-6" />
      case "Users":
        return <Users className="h-6 w-6" />
      case "Calendar":
        return <Calendar className="h-6 w-6" />
      case "Bell":
        return <Bell className="h-6 w-6" />
      case "Lock":
        return <Lock className="h-6 w-6" />
      default:
        return <LayoutDashboard className="h-6 w-6" />
    }
  }

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-800/50 backdrop-blur-sm p-6 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? "0 10px 30px -10px rgba(16, 185, 129, 0.2)" : "none",
        transform: isHovered ? "translateY(-5px)" : "none",
        borderColor: isHovered ? "rgba(16, 185, 129, 0.5)" : "",
      }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-500">
        {getIcon()}
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <div className="mt-4">
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          Learn more
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 ${
          isHovered ? "w-full" : "w-0"
        }`}
      />
    </motion.div>
  )
}
