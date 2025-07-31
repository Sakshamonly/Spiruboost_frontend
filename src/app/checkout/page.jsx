"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import ContactInfo from "./components/ContactInfo"
import DeliveryAddress from "./components/DeliveryAddress"
import ShippingMethod from "./components/ShippingMethod"
import PaymentMethod from "./components/PaymentMethod"
import BillingAddress from "./components/BillingAddress"
import PlaceOrderButton from "./components/PlaceOrderButton"
import OrderSummary from "./components/OrderSummary"

export default function CheckoutPage() {
  const [contactType, setContactType] = useState("email")
  const [contactValue, setContactValue] = useState("")
  const [deliveryAddress, setDeliveryAddress] = useState({
    country: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    saveInfo: false,
  })
  const [selectedPayment, setSelectedPayment] = useState("razorpay")
  const [billingOption, setBillingOption] = useState("same")
  const [billingAddress, setBillingAddress] = useState({
    country: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  })
  const [isOrderSummaryExpanded, setIsOrderSummaryExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Spirulina Tablets",
      price: 799.0,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Spirulina Capsules ",
      price: 999.0,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
  ])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const isAddressFilledForShipping =
    deliveryAddress.country.trim() !== "" &&
    deliveryAddress.firstName.trim() !== "" &&
    deliveryAddress.lastName.trim() !== "" &&
    deliveryAddress.address1.trim() !== "" &&
    deliveryAddress.city.trim() !== "" &&
    deliveryAddress.state.trim() !== "" &&
    deliveryAddress.pincode.trim() !== ""

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Order submitted! (Check console for form data)")
    console.log({
      contactType,
      contactValue,
      deliveryAddress,
      selectedPayment,
      billingOption,
      billingAddress: billingOption === "same" ? deliveryAddress : billingAddress,
      products,
    })
  }

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
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {isMobile && (
          <div className="bg-white border-2 border-gray-200 rounded-xl mb-8 shadow-sm">
            <div
              className="flex items-center justify-between p-6 cursor-pointer"
              onClick={() => setIsOrderSummaryExpanded(!isOrderSummaryExpanded)}
            >
              <span className="font-semibold text-gray-900 text-lg">Order Summary</span>
              <div className="flex items-center space-x-3">
                <span className="font-bold text-xl text-gray-900">₹{total.toFixed(2)}</span>
                <svg
                  className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${isOrderSummaryExpanded ? "rotate-90" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {isOrderSummaryExpanded && (
              <div className="px-6 pb-6 border-t border-gray-200">
                <div className="pt-6">
                  <div className="space-y-6 mb-8">
                    {products.map((product) => (
                      <div key={product.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                        />
                        <div className="flex-grow">
                          <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => updateQuantity(product.id, -1)}
                                className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center justify-center font-bold"
                              >
                                −
                              </button>
                              <span className="font-semibold text-gray-900 min-w-[2rem] text-center">
                                {product.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(product.id, 1)}
                                className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center justify-center font-bold"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-bold text-gray-900">
                              ₹{(product.price * product.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <label htmlFor="discountCodeMobile" className="block mb-3 font-medium text-gray-900">
                      Discount Code
                    </label>
                    <div className="flex space-x-3">
                      <input
                        type="text"
                        id="discountCodeMobile"
                        className="flex-grow p-3 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                        placeholder="Enter discount code"
                      />
                      <button
                        type="button"
                        className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-colors duration-200"
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
              </div>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ContactInfo
              contactType={contactType}
              setContactType={setContactType}
              contactValue={contactValue}
              setContactValue={setContactValue}
            />
            <DeliveryAddress address={deliveryAddress} setAddress={setDeliveryAddress} />
            <ShippingMethod isAddressFilled={isAddressFilledForShipping} />
            <PaymentMethod selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />
            <BillingAddress
              billingOption={billingOption}
              setBillingOption={setBillingOption}
              billingAddress={billingAddress}
              setBillingAddress={setBillingAddress}
            />
            {!isMobile && <PlaceOrderButton selectedPayment={selectedPayment} />}
          </div>

          <div className="hidden lg:block">
            <OrderSummary products={products} setProducts={setProducts} selectedPayment={selectedPayment} />
          </div>
        </form>

        {isMobile && (
          <div className="mt-8">
            <PlaceOrderButton selectedPayment={selectedPayment} />
          </div>
        )}
      </div>
    </div>
  )
}
