"use client"

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Mexico",
  "South Africa",
  "Argentina",
  "Italy",
  "Spain",
  "Netherlands",
  "Sweden",
  "Switzerland",
  "New Zealand",
  "Singapore",
  "Pakistan",
  "Bangladesh",
  "Nigeria",
  "Egypt",
  "Indonesia",
  "Philippines",
  "Vietnam",
  "Thailand",
  "Malaysia",
  "South Korea",
  "Russia",
  "Turkey",
  "Saudi Arabia",
  "UAE",
  "Colombia",
  "Peru",
  "Chile",
  "Venezuela",
  "Ukraine",
  "Poland",
  "Belgium",
  "Austria",
  "Portugal",
  "Greece",
  "Ireland",
  "Norway",
  "Denmark",
  "Finland",
  "Czech Republic",
  "Hungary",
  "Romania",
  "Bulgaria",
  "Croatia",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Lithuania",
  "Latvia",
  "Estonia",
  "Iceland",
  "Luxembourg",
  "Malta",
  "Cyprus",
  "Albania",
  "Bosnia and Herzegovina",
  "North Macedonia",
  "Montenegro",
  "Kosovo",
  "Moldova",
  "Belarus",
  "Georgia",
  "Armenia",
  "Azerbaijan",
  "Kazakhstan",
  "Uzbekistan",
  "Kyrgyzstan",
  "Tajikistan",
  "Turkmenistan",
  "Afghanistan",
  "Iran",
  "Iraq",
  "Syria",
  "Lebanon",
  "Jordan",
  "Israel",
  "Palestine",
  "Yemen",
  "Oman",
  "Qatar",
  "Bahrain",
  "Kuwait",
  "Sri Lanka",
  "Nepal",
  "Bhutan",
  "Myanmar",
  "Laos",
  "Cambodia",
  "East Timor",
  "Papua New Guinea",
  "Fiji",
  "Solomon Islands",
  "Vanuatu",
  "Samoa",
  "Tonga",
  "Kiribati",
  "Tuvalu",
  "Nauru",
  "Marshall Islands",
  "Micronesia",
  "Palau",
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cameroon",
  "Central African Republic",
  "Chad",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Cote d'Ivoire",
  "Djibouti",
  "Equatorial Guinea",
  "Eritrea",
  "Eswatini",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Rwanda",
  "Sao Tome and Principe",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Sudan",
  "Sudan",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe",
]

const DeliveryAddress = ({ address, setAddress, showSaveOption = true }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setAddress((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Delivery Address</h2>

      <div className="space-y-6">
        <div>
          <label htmlFor="country" className="block mb-3 font-medium text-gray-900">
            Country
          </label>
          <input
            list="countries"
            id="country"
            name="country"
            className="w-full p-4 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
            value={address.country}
            onChange={handleChange}
            placeholder="Type to search or select a country"
            required
          />
          <datalist id="countries">
            {countries.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block mb-3 font-medium text-gray-900">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-4 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
              value={address.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-3 font-medium text-gray-900">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full p-4 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
              value={address.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="address1" className="block mb-3 font-medium text-gray-900">
            Address Line 1
          </label>
          <input
            type="text"
            id="address1"
            name="address1"
            className="w-full p-4 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
            value={address.address1}
            onChange={handleChange}
            placeholder="House No., Building Name"
            required
          />
        </div>

        <div>
          <label htmlFor="address2" className="block mb-3 font-medium text-gray-900">
            Address Line 2
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            className="w-full p-4 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
            value={address.address2}
            onChange={handleChange}
            placeholder="Street Name, Area"
          />
        </div>

        <div>
          <label htmlFor="landmark" className="block mb-3 font-medium text-gray-600">
            Landmark (Optional)
          </label>
          <input
            type="text"
            id="landmark"
            name="landmark"
            className="w-full p-4 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
            value={address.landmark}
            onChange={handleChange}
            placeholder="e.g., Near City Hospital"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="city" className="block mb-3 font-medium text-gray-900">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full p-4 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
              value={address.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="state" className="block mb-3 font-medium text-gray-900">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full p-4 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
              value={address.state}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="pincode" className="block mb-3 font-medium text-gray-900">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full p-4 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
              value={address.pincode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {showSaveOption && (
          <div className="flex items-center pt-4">
            <input
              type="checkbox"
              id="saveInfo"
              name="saveInfo"
              checked={address.saveInfo}
              onChange={handleChange}
              className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="saveInfo" className="ml-3 text-gray-600">
              Save this information for next time
            </label>
          </div>
        )}
      </div>
    </div>
  )
}

export default DeliveryAddress
