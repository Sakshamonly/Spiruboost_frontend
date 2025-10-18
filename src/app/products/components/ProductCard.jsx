"use client"

export default function ProductCard({ product, onAddToCart, onBuyNow, onProductClick }) {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative">
        <div
          className="bg-gray-100 h-64 flex items-center justify-center cursor-pointer"
          onClick={() => onProductClick(product.id)}
        >
          <span className="text-gray-400 text-sm"></span>
        </div>
      </div>

      <div className="p-4 bg-white/80 backdrop-blur-sm">
        {/* Product Name */}
        <h3
          className="text-base font-bold text-gray-800 mb-2 cursor-pointer hover:text-blue-600 transition-colors duration-200 line-clamp-2 uppercase tracking-wide"
          onClick={() => onProductClick(product.id)}
        >
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-400 line-through text-base font-medium">
            ₹{Math.round(product.price * 1.11).toLocaleString("en-IN")}
          </span>
          <span className="text-green-600 font-bold text-xl">₹{product.price.toLocaleString("en-IN")}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">{"★".repeat(5)}</div>
          <span className="text-gray-500 text-sm font-medium">128 Reviews</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onAddToCart(product.id)}
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
            onClick={() => onBuyNow(product.id)}
            className="flex-[2] bg-gradient-to-r from-green-500 to-green-600 hover:from-black hover:to-gray-900 text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-green-400 hover:border-gray-700 text-sm"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  )
}
