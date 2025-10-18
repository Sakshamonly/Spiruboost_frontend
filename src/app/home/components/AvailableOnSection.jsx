"use client"

import { motion } from "framer-motion"

const platforms = [
  { 
    name: "Amazon", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    alt: "Amazon Logo"
  },
  { 
    name: "Flipkart", 
    logo: "https://1.bp.blogspot.com/-FDlTi0qubRo/XvMauYilTfI/AAAAAAAAAoE/9hpoCeTkP9EnhrPZwiM6gSB7fiQDaBQhwCK4BGAsYHg/s5000/Flipkart_logo.png",
    alt: "Flipkart Logo"
  },
  { 
    name: "JioMart", 
    logo: "https://www.jiomart.com/msassets/images/jiomart-logo-beta.svg",
    alt: "JioMart Logo"
  },
  { 
    name: "Swiggy Instamart", 
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png",
    alt: "Swiggy Instamart Logo"
  },
  { 
    name: "Blinkit", 
    logo: "https://cdn.grofers.com/assets/web/brands/logo-blinkit-white.png",
    alt: "Blinkit Logo"
  },
]

export default function AvailableOnSection() {
  return (
    <section className="w-full py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            Also Available On
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Single responsive logos section */}
        <motion.div
          className="flex justify-center items-center gap-4 sm:gap-8 lg:gap-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {platforms.map((platform, idx) => (
            <motion.div 
              key={idx} 
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={platform.logo} 
                alt={platform.alt}
                className="w-20 h-14 sm:w-24 sm:h-18 md:w-28 md:h-20 lg:w-36 lg:h-24 object-contain opacity-90"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="text-center hidden">
                <div className="text-sm font-bold text-gray-600">
                  {platform.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
