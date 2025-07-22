"use client"

export default function LogoutButton({ onClick }) {
  return (
    <section className="w-full px-4 py-3 bg-white shadow-sm md:rounded-lg">
      <div className="flex justify-center">
        <button
          onClick={onClick}
          className="w-full max-w-xs py-2 px-4 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>
    </section>
  )
}
