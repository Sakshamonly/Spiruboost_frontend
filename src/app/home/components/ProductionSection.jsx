"use client"

import { motion } from "framer-motion"

export default function ProductionSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-cyan-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Our Production Process
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative">
          {/* Left Content - Desktop / Right Video - Mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 lg:order-1 order-2"
          >
            <div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our spirulina is cultivated in pristine, mineral-rich waters under controlled conditions with optimal
                pH, temperature, and nutrient levels. Every batch undergoes rigorous third-party testing for heavy
                metals, microbial content, and nutrient density, exceeding international standards. We employ
                eco-friendly farming methods that minimize environmental impact while maintaining carbon-neutral
                production with zero waste, ensuring premium nutrition today while preserving nature for future
                generations.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-300 text-base"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Subtle Divider Line */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-emerald-300 to-transparent" />

          {/* Right Video Section - Desktop / Left Video - Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative lg:order-2 order-1"
          >
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-400 bg-gradient-to-br from-emerald-100 to-cyan-100">
              {/* YouTube Video Placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-200 to-cyan-200">
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 hover:scale-110 transition-transform duration-300"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-bold text-center text-xs sm:text-sm lg:text-base">
                    Watch Our Production Process
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
