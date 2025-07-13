"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export default function WishlistSidebar({ isOpen, onClose }) {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Spirulina Smoothie Mix", price: 1299, image: "/placeholder.svg?height=64&width=64" },
    { id: 2, name: "Spirulina Energy Bars", price: 2499, image: "/placeholder.svg?height=64&width=64" },
    { id: 3, name: "Spirulina Capsules", price: 2999, image: "/placeholder.svg?height=64&width=64" },
  ])

  const handleRemoveItem = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "visible" : "invisible"}`}>
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0"}`}
        onClick={onClose}
      ></div>
      <div
        className={`absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6 flex-shrink-0">
            <h2 className="text-xl font-semibold text-gray-900">Wishlist</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <X className="h-6 w-6 stroke-1" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4">
            {wishlistItems.length === 0 ? (
              <p className="text-gray-500 text-center mt-8">Your wishlist is empty.</p>
            ) : (
              wishlistItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-2 border-b border-gray-200 last:border-b-0">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">INR {(item.price / 100).toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-1 text-red-500 hover:text-red-700 transition-colors"
                    aria-label={`Remove ${item.name} from wishlist`}
                  >
                    <X className="h-5 w-5 stroke-1" />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 flex-shrink-0">
            <Link
              href="/wishlist"
              className="w-full block text-center bg-green-600 text-white py-3 rounded-lg hover:bg-black transition-colors duration-200"
              onClick={onClose}
            >
              View All Wishlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
