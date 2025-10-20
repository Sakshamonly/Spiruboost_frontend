"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const heroImages = [
  "/spirulina-powder-product-premium.jpg",
  "/spirulina-powder-green.jpg",
  "/spirulina-tablets-supplement.jpg",
  "/spirulina-blend-superfood.jpg",
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative w-full h-screen min-h-96 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {heroImages.map((image, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Spirulina Product ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={goToPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}

      {/* Dot Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              idx === currentImageIndex ? "bg-white w-8 sm:w-10" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto"
      >
        <motion.h1
          key={currentImageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Pure Spirulina Power for Your{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            Wellness Journey
          </span>
        </motion.h1>

        <motion.p
          key={`desc-${currentImageIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed"
        >
          Packed with 60% protein, essential amino acids, and powerful antioxidants. Transform your health with every
          scoop.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base">
            Shop Now
          </button>
          <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base">
            Know More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
