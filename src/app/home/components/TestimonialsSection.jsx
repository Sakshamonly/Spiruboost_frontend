"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    profession: "Fitness Coach",
    review: "Spiruboost has transformed my energy levels. My clients love it too!",
    image: "/woman-profile-avatar.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    profession: "Nutritionist",
    review: "The quality is exceptional. Lab-tested and pure. Highly recommended!",
    image: "/man-profile-avatar.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjali Patel",
    profession: "Health Blogger",
    review: "Best spirulina I've tried. Noticeable difference in just 2 weeks!",
    image: "/woman-profile-avatar-2.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikram Singh",
    profession: "Athlete",
    review: "Perfect for post-workout recovery. Excellent value for money.",
    image: "/man-profile-avatar-2.jpg",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)

  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [autoScroll])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoScroll(false)
    setTimeout(() => setAutoScroll(true), 5000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoScroll(false)
    setTimeout(() => setAutoScroll(true), 5000)
  }

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50">
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
            Loved by Our Community
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl p-8 sm:p-10 bg-white rounded-xl border-2 border-emerald-100 shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-lg sm:text-xl mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].review}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-300"
                />
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-emerald-600 text-base font-medium">{testimonials[currentIndex].profession}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="flex justify-center gap-6 mt-10 sm:mt-14">
            <button
              onClick={prevSlide}
              className="p-3 sm:p-4 text-black transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-3 sm:p-4 text-black transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
