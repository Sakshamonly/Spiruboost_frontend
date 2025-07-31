"use client"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-center items-center py-6 border-b border-gray-200 mb-8 bg-white">
      <Link href="/" className="no-underline">
        <img src="/placeholder.svg?height=40&width=120" alt="Company Logo" className="h-10 w-auto" />
      </Link>
    </header>
  )
}

export default Header
