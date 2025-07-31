"use client"

const ContactInfo = ({ contactType, setContactType, contactValue, setContactValue }) => {
  const handleContactTypeChange = (e) => {
    setContactType(e.target.value)
    setContactValue("")
  }

  const handleContactValueChange = (e) => {
    const value = e.target.value
    if (contactType === "mobile") {
      setContactValue(value.replace(/\D/g, "").slice(0, 10))
    } else {
      setContactValue(value)
    }
  }

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const isInputValid = () => {
    if (contactType === "mobile") {
      return contactValue.length === 10
    } else {
      return isValidEmail(contactValue)
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h2>
      <div className="space-y-4 mb-6">
        <label
          className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-blue-300 ${
            contactType === "mobile" ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white hover:bg-gray-50"
          }`}
        >
          <input
            type="radio"
            name="contactType"
            value="mobile"
            checked={contactType === "mobile"}
            onChange={handleContactTypeChange}
            className="w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2"
          />
          <span className="ml-3 text-gray-900 font-medium">Mobile</span>
        </label>
        <label
          className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-blue-300 ${
            contactType === "email" ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white hover:bg-gray-50"
          }`}
        >
          <input
            type="radio"
            name="contactType"
            value="email"
            checked={contactType === "email"}
            onChange={handleContactTypeChange}
            className="w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2"
          />
          <span className="ml-3 text-gray-900 font-medium">Email</span>
        </label>
      </div>
      <div className="mb-6">
        <label htmlFor="contactInput" className="block mb-3 font-medium text-gray-900">
          {contactType === "mobile" ? "Mobile Number" : "Email Address"}
        </label>
        <input
          type={contactType === "mobile" ? "tel" : "email"}
          id="contactInput"
          className="w-full p-4 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
          placeholder={contactType === "mobile" ? "e.g., 9876543210" : "e.g., example@email.com"}
          value={contactValue}
          onChange={handleContactValueChange}
          required
        />
        {!isInputValid() && contactValue.length > 0 && (
          <p className="text-red-500 text-sm mt-2 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {contactType === "mobile"
              ? "Please enter a 10-digit mobile number."
              : "Please enter a valid email address."}
          </p>
        )}
      </div>
      <p className="text-sm text-gray-600">
        Already have an account?{" "}
        <button
          type="button"
          className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors"
        >
          Log in
        </button>
      </p>
    </div>
  )
}

export default ContactInfo
