"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("steps")
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Sign Up",
      description: "Create your account in seconds. No credit card required for the free trial.",
      icon: "🚀",
    },
    {
      title: "Customize",
      description: "Set up your workspace and invite your team members to collaborate.",
      icon: "⚙️",
    },
    {
      title: "Succeed",
      description: "Start using the platform to streamline your workflow and boost productivity.",
      icon: "🏆",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center rounded-full border border-gray-700 p-1 bg-gray-900/50">
          <button
            onClick={() => setActiveTab("steps")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "steps" ? "bg-emerald-500 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Step by Step
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "video" ? "bg-emerald-500 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Watch Video
          </button>
        </div>
      </div>

      {activeTab === "steps" ? (
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-6 rounded-xl border ${
                activeStep === index ? "border-emerald-500 bg-emerald-500/10" : "border-gray-800 bg-gray-800/50"
              } backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-emerald-500/50`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 border border-gray-700 text-2xl">
                {step.icon}
              </div>
              <div className="ml-2 mt-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
            <Button size="lg" className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          <img
            src="/placeholder.svg?height=720&width=1280"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  )
}
