"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Pure Himalayan Shilajit Resin",
    originalPrice: "₹1,599",
    salePrice: "₹999",
    discount: "38% OFF",
    image: "/spirulina-powder-product-premium.jpg",
    reviews: 199,
    rating: 5,
    slug: "himalayan-shilajit-resin",
  },
  {
    id: 2,
    name: "Natural Spirulina Powder",
    originalPrice: "₹1,875",
    salePrice: "₹319",
    discount: "20% OFF",
    image: "/spirulina-powder-green.jpg",
    reviews: 5,
    rating: 4.5,
    slug: "natural-spirulina-powder",
  },
  {
    id: 3,
    name: "Spirulina Capsules | The Origin",
    originalPrice: "₹561",
    salePrice: "₹475",
    discount: "15% OFF",
    image: "/spirulina-tablets-supplement.jpg",
    reviews: 128,
    rating: 5,
    slug: "spirulina-capsules-origin",
  },
]

export default function ProductsPreviewSection({ onCartOpen }) {
  const router = useRouter()
  const [hoveredId, setHoveredId] = useState(null)

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

  const handleProductClick = (slug) => {
    router.push(`/products/${slug}`)
  }

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={
              i < Math.floor(rating) ? "text-yellow-400 text-base sm:text-lg" : "text-gray-300 text-base sm:text-lg"
            }
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Featured Products
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-gradient-to-br from-green-50 via-white to-green-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative">
                <div
                  className="bg-gray-100 h-64 flex items-center justify-center cursor-pointer"
                  onClick={() => router.push(`/${product.id}`)}
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 bg-white/80 backdrop-blur-sm">
                {/* Product Name */}
                <h3
                  className="text-base font-bold text-gray-800 mb-2 cursor-pointer hover:text-blue-600 transition-colors duration-200 line-clamp-2 uppercase tracking-wide"
                  onClick={() => router.push(`/${product.id}`)}
                >
                  {product.name}
                </h3>

                {/* Pricing */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-400 line-through text-base font-medium">{product.originalPrice}</span>
                  <span className="text-green-600 font-bold text-xl">{product.salePrice}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <span className="text-gray-500 text-sm font-medium">({product.reviews}) Reviews</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      // Add product to cart (you can add cart context logic here)
                      console.log('Add to cart:', product.id)
                      // Open cart sidebar if function is provided
                      if (onCartOpen) {
                        onCartOpen()
                      }
                    }}
                    className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-bold py-2.5 px-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-700"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => router.push('/checkout')}
                    className="flex-[2] bg-gradient-to-r from-green-500 to-green-600 hover:from-black hover:to-gray-900 text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-green-400 hover:border-gray-700 text-sm"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition-all duration-300 text-base sm:text-lg"
          >
            View All Products
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
