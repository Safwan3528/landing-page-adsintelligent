'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface IntroAnimationProps {
  onAnimationComplete: () => void
}

export default function IntroAnimation({ onAnimationComplete }: IntroAnimationProps) {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    if (animationComplete) {
      const timer = setTimeout(() => {
        if (onAnimationComplete && typeof onAnimationComplete === 'function') {
          onAnimationComplete()
        }
      }, 500) // Wait for 500ms after animation completes before calling onAnimationComplete
      return () => clearTimeout(timer)
    }
  }, [animationComplete, onAnimationComplete])

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: animationComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        onAnimationComplete={() => setAnimationComplete(true)}
      >
        <Image
          src="/images/logo.png?height=150&width=150"
          alt="Company Logo"
          width={170}
          height={170}
          className="mb-4"
        />
        <motion.h1
          className="text-4xl font-bold text-gray-800 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Ads Intelligent
        </motion.h1>
      </motion.div>
    </motion.div>
  )
}