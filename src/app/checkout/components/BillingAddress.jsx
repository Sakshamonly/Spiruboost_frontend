"use client"
import DeliveryAddress from "./DeliveryAddress"

const BillingAddress = ({ billingOption, setBillingOption, billingAddress, setBillingAddress }) => {
  const handleBillingOptionChange = (e) => {
    setBillingOption(e.target.value)
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Billing Address</h2>
      <div className="space-y-4 mb-6">
        <label
          className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-blue-300 ${
            billingOption === "same" ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white hover:bg-gray-50"
          }`}
        >
          <input
            type="radio"
            name="billingOption"
            value="same"
            checked={billingOption === "same"}
            onChange={handleBillingOptionChange}
            className="w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2"
          />
          <span className="ml-3 text-gray-900 font-medium">Use same as shipping address</span>
        </label>
        <label
          className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-blue-300 ${
            billingOption === "different" ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white hover:bg-gray-50"
          }`}
        >
          <input
            type="radio"
            name="billingOption"
            value="different"
            checked={billingOption === "different"}
            onChange={handleBillingOptionChange}
            className="w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2"
          />
          <span className="ml-3 text-gray-900 font-medium">Use a different address</span>
        </label>
      </div>
      {billingOption === "different" && (
        <div className="pt-6 border-t border-gray-200">
          <DeliveryAddress address={billingAddress} setAddress={setBillingAddress} showSaveOption={false} />
        </div>
      )}
    </div>
  )
}

export default BillingAddress
