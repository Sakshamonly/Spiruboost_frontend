"use client"
import { useState, useEffect } from "react"

const OrderSummary = ({ products, setProducts, selectedPayment }) => {
  const [isSticky, setIsSticky] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const orderSummary = document.getElementById("order-summary")
      const footer = document.querySelector("footer") || document.body

      if (orderSummary) {
        const rect = orderSummary.getBoundingClientRect()
        const footerRect = footer.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Check if the order summary has reached the bottom of the viewport
        // or if we're near the footer
        if (rect.bottom >= windowHeight - 20 || footerRect.top <= windowHeight) {
          setIsSticky(false)
        } else {
          setIsSticky(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const updateQuantity = (id, delta) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: Math.max(1, product.quantity + delta) } : product,
      ),
    )
  }

  const calculateSubtotal = () => {
    return products.reduce((sum, product) => sum + product.price * product.quantity, 0)
  }

  const subtotal = calculateSubtotal()
  const gst = subtotal * 0.18
  const shipping = 0
  const codCharges = selectedPayment === "cod" ? 25 : 0

  const total = subtotal + gst + shipping + codCharges

  return (
    <div
      id="order-summary"
      className={`bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-all duration-300 ${
        isSticky ? "sticky top-8" : "relative"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Order Summary</h2>

      <div className="space-y-6 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-gray-50 rounded-lg"
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-lg border border-gray-200"
            />
            <div className="flex-grow w-full">
              <h3 className="font-semibold text-gray-900 mb-1 break-words">{product.name}</h3>
              {/* Amount below name on mobile, right on desktop */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(product.id, -1)}
                    className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center justify-center font-bold"
                  >
                    −
                  </button>
                  <span className="font-semibold text-gray-900 min-w-[2rem] text-center">{product.quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
                {/* Amount below name on mobile */}
                <span className="font-bold text-gray-900 sm:ml-4 sm:mt-0 mt-2 block sm:inline">
                  ₹{(product.price * product.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <label htmlFor="discountCode" className="block mb-3 font-medium text-gray-900">
          Discount Code
        </label>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            id="discountCode"
            className="flex-grow p-2 text-sm border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
            placeholder="Enter discount code"
          />
          <button
            type="button"
            className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-colors duration-200"
            style={{ minWidth: "64px" }}
          >
            Apply
          </button>
        </div>
      </div>

      <div className="space-y-4 pt-6 border-t-2 border-gray-200">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>GST (18%):</span>
          <span>₹{gst.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping:</span>
          <span className="text-green-600 font-semibold">FREE</span>
        </div>
        {selectedPayment === "cod" && (
          <div className="flex justify-between text-gray-600">
            <span>COD Handling Charges:</span>
            <span className="text-amber-600 font-medium">₹{codCharges.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between items-center pt-4 border-t-2 border-gray-300">
          <span className="text-xl font-bold text-gray-900">Total:</span>
          <span className="text-2xl font-bold text-gray-900">₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
