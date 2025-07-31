const PlaceOrderButton = ({ selectedPayment }) => {
  const buttonText = selectedPayment === "razorpay" ? "Pay Now" : "Complete Order"

  return (
    <div className="mt-8">
      <button
        type="submit"
        className="w-full py-4 px-8 bg-blue-600 hover:bg-black text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-lg hover:shadow-xl"
      >
        {buttonText}
      </button>
      <p className="text-center text-gray-500 text-sm mt-4">
        By placing your order, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  )
}

export default PlaceOrderButton
