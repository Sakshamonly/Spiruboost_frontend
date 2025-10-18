"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ProductCard from "./ProductCard"
import CartSidebar from "@/src/components/usable/cart"

const sampleProducts = [
  {
    id: 1,
    name: " Spiruboost Capsules",
    price: 499,
    image: "premium-wireless-headphones",
  },
  {
    id: 2,
    name: "Spiruboost Tablets",
    price: 799,
    image: "smart-fitness-watch",
  },
  {
    id: 3,
    name: "Spiruboost Powder",
    price: 99,
    image: "portable-bluetooth-speaker",
  },
]

export default function ProductsPage() {
  const router = useRouter()
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Cart functionality
  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`)
    // Open cart sidebar when item is added
    setIsCartOpen(true)
    // TODO: Implement actual add to cart functionality
  }

  // Navigate to checkout page
  const handleBuyNow = (productId) => {
    console.log(`Buying product ${productId} now`)
    router.push('/checkout')
  }

  const handleProductClick = (productId) => {
    console.log(`Navigating to product ${productId} details`)
    router.push(`/${productId}`)
  }

  const handleCloseCart = () => {
    setIsCartOpen(false)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-orange-50/40">
        {/* Page Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl">
          {/* Page Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Our Products
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Discover our carefully curated collection of premium tech products designed to enhance your lifestyle
            </p>
          </div>

          {/* Products Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                onProductClick={handleProductClick}
              />
            ))}
          </div>

          {/* More Products Coming Soon Section */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-400 font-light italic text-lg sm:text-xl tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
              More Products Coming Soon
            </p>
          </div>
        </div>
      </div>
      
      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={handleCloseCart} />
    </>
  )
}
