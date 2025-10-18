"use client"

import { motion } from "framer-motion"

const promises = [
  {
    title: "100% Organic",
    description:
      "Certified organic spirulina sourced from pristine, unpolluted waters. No synthetic additives, pesticides, or harmful chemicals. Pure nature in every serving.",
  },
  {
    title: "Lab Tested",
    description:
      "Rigorous third-party testing for purity, potency, and safety. Every batch verified for heavy metals, microbial content, and nutrient density.",
  },
  {
    title: "Sustainably Grown",
    description:
      "Eco-friendly farming practices that protect our planet. Carbon-neutral production with zero waste. Supporting sustainable agriculture for future generations.",
  },
  {
    title: "Rich in Nutrients",
    description:
      "60% protein, complete amino acid profile, B12, iron, and antioxidants. One of nature's most nutrient-dense superfoods available today.",
  },
]

export default function PromisesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
            Why Choose Spiruboost?
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl"
        >
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-8 sm:p-10 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">{promise.title}</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">{promise.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
