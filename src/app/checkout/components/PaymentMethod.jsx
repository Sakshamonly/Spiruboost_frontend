"use client"

const PaymentMethod = ({ selectedPayment, setSelectedPayment }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Payment Method</h2>
      <p className="text-gray-600 mb-6 flex items-center">
        <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        All transactions are secure and encrypted
      </p>
      <div className="space-y-4">
        <label
          className={`flex items-start p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-blue-300 ${
            selectedPayment === "razorpay" ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white hover:bg-gray-50"
          }`}
        >
          <input
            type="radio"
            name="paymentMethod"
            value="razorpay"
            checked={selectedPayment === "razorpay"}
            onChange={() => setSelectedPayment("razorpay")}
            className="w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 mt-1"
          />
          <div className="ml-4">
            <span className="font-semibold text-gray-900 block mb-2">Razorpay</span>
            <p className="text-gray-600 text-sm">UPI, Cards, Wallets, Netbanking</p>
          </div>
        </label>
        <label
          className={`flex items-start p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-blue-300 ${
            selectedPayment === "cod" ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white hover:bg-gray-50"
          }`}
        >
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={selectedPayment === "cod"}
            onChange={() => setSelectedPayment("cod")}
            className="w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 mt-1"
          />
          <div className="ml-4 w-full">
            <div className="flex items-center mb-2">
              <span className="font-semibold text-gray-900">Cash on Delivery (COD)</span>
              {selectedPayment === "cod" && <span className="text-red-500 ml-1 text-lg font-bold">*</span>}
            </div>
            <p className="text-gray-600 text-sm mb-2">Pay when you receive your order</p>
            {selectedPayment === "cod" && (
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 text-sm font-medium flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  ₹25 handling charges (non-refundable)
                </p>
              </div>
            )}
          </div>
        </label>
      </div>
    </div>
  )
}

export default PaymentMethod
