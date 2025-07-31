const ShippingMethod = ({ isAddressFilled }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Shipping Method</h2>
      {isAddressFilled ? (
        <div className="p-6 border-2 border-green-200 bg-green-50 rounded-lg flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold text-gray-900">Standard Shipping</span>
          </div>
          <span className="text-green-600 font-bold text-lg">FREE</span>
        </div>
      ) : (
        <div className="p-6 border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg text-center">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-gray-500 font-medium">Enter address to get shipping charges</p>
        </div>
      )}
    </div>
  )
}

export default ShippingMethod
