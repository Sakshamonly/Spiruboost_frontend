"use client"

import { Button } from "@/src/components/ui/button"
import { Star, Heart, ShoppingCart, Minus, Plus } from "lucide-react"
import { useState } from "react"

export default function ProductInfo({ productId, onAddToCart, onAddToWishlist, onBuyNow }) {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleAddToCart = () => {
    onAddToCart(productId, quantity)
  }

  const handleAddToWishlist = () => {
    onAddToWishlist(productId)
  }

  const handleBuyNow = () => {
    onBuyNow(productId, quantity)
  }

  return (
    <div className="w-full md:w-1/2 space-y-6">
      {/* Product Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Spiruboost Capsule</h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[1, 2, 3, 4].map((star) => (
            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <Star className="w-5 h-5 text-gray-300" />
        </div>
        <span className="text-base text-gray-600 ml-2">4.8 (124 reviews)</span>
      </div>

      {/* Product Description */}
      <p className="text-gray-700 text-lg leading-relaxed">
        Spirulina Capsules are packed with high-quality plant protein, iron, antioxidants, and essential vitamins.
        Sourced from pure Spirulina platensis, these capsules are carefully processed to preserve maximum nutrition.
      </p>

      {/* Key Benefits */}
      <div className="bg-blue-50 p-6 rounded-lg space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
        <ul className="space-y-3">
          {[
            "Boosts Immunity & Stamina",
            "Rich in Protein (60-70%) & B12",
            "Detoxifies body naturally",
            "100% Vegan & Free from additives",
            "Supports skin glow & hair health",
          ].map((benefit, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
              <span className="text-base text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price and Stock */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="text-3xl font-bold text-gray-900">₹799</div>
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium w-fit">In Stock</div>
      </div>

      {/* Quantity Selection */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <span className="text-gray-700 font-medium">Quantity:</span>
        <div className="flex items-center border border-gray-300 rounded-lg w-fit">
          <button
            onClick={decreaseQuantity}
            className="p-2 hover:bg-gray-100 transition-colors"
            disabled={quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">{quantity}</span>
          <button onClick={increaseQuantity} className="p-2 hover:bg-gray-100 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        {/* Mobile: Cart and Wishlist icons on same line */}
        <div className="flex gap-3 md:hidden">
          <Button
            onClick={handleAddToCart}
            variant="outline"
            className="flex items-center justify-center h-12 px-4 text-base border-gray-300 hover:bg-black hover:text-white hover:border-black bg-transparent transition-all duration-200 flex-1"
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button
            onClick={handleAddToWishlist}
            variant="outline"
            className="h-12 w-12 border-gray-300 hover:bg-black hover:text-white hover:border-black bg-transparent transition-all duration-200 flex items-center justify-center"
          >
            <Heart className="w-5 h-5" />
          </Button>
        </div>

        {/* Desktop: All buttons in one row */}
        <div className="hidden md:flex gap-4">
          <Button
            onClick={handleAddToCart}
            variant="outline"
            className="flex items-center justify-center gap-2 h-12 px-6 text-base border-gray-300 hover:bg-black hover:text-white hover:border-black bg-transparent transition-all duration-200 flex-1"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </Button>
          <Button
            onClick={handleAddToWishlist}
            variant="outline"
            className="h-12 w-12 border-gray-300 hover:bg-black hover:text-white hover:border-black bg-transparent transition-all duration-200 flex items-center justify-center"
          >
            <Heart className="w-5 h-5" />
          </Button>
          <Button 
            onClick={handleBuyNow}
            className="h-12 text-base bg-blue-500 hover:bg-red-500 transition-colors duration-200 flex-1"
          >
            Buy Now
          </Button>
        </div>

        {/* Buy Now button - Full width on mobile */}
        <Button 
          onClick={handleBuyNow}
          className="h-12 text-base bg-blue-500 hover:bg-red-500 transition-colors duration-200 md:hidden"
        >
          Buy Now
        </Button>
      </div>

      {/* Payment Options */}
      <p className="text-sm text-gray-600">
        <strong>Payment Options:</strong> Credit/Debit Cards, UPI and COD
      </p>
    </div>
  )
}
