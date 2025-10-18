"use client"

import { ArrowLeft } from "lucide-react"
import ProductImageGallery from "./product-image-gallery"
import ProductInfo from "./product-info"

export default function ProductDetail({ productId, onAddToCart, onAddToWishlist, onBuyNow }) {
  const handleBackClick = () => {
    window.history.back()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
      {/* Back to Products Link */}
      <div className="mb-4 md:mb-8">
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-orange-500 hover:text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <ProductImageGallery productId={productId} />
        <ProductInfo 
          productId={productId}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
          onBuyNow={onBuyNow}
        />
      </div>

      <div className="mt-8 md:mt-12 mb-6 md:mb-8">
        <hr className="border-blue-200 border-2" />
      </div>
    </div>
  )
}
