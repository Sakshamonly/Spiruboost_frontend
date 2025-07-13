"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Heart, Package, User, X } from "lucide-react"
import CartSidebar from "./cart"
import WishlistSidebar from "./wishlist"
import SearchOverlay from "./search"

// Custom Hamburger Icon Component
const HamburgerIcon = ({ isOpen }) => (
  <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
    <div
      className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5 w-6" : "w-6"}`}
    ></div>
    <div className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`}></div>
    <div
      className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5 w-6" : "w-6"}`}
    ></div>
  </div>
)

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleCart = () => setIsCartOpen(!isCartOpen)
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const navLinks = [
    { label: "Boost", href: "/why-spirulina" },
    { label: "Products", href: "/product" },
    { label: "Fusion", href: "/recipes" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ]

  const mobileMenuItems = [
    { label: "Wishlist", href: "#", onClick: toggleWishlist },
    { label: "Account", href: "/login" },
    { label: "Tracking", href: "/track" },
  ]

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-40 w-full bg-green-50 backdrop-blur-md bg-opacity-95 shadow-lg border-b border-green-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between h-20 px-2">
            {/* Left - Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold text-green-800 hover:text-green-600 transition-colors duration-300"
              >
                Spiruboost
              </Link>
            </div>

            {/* Center - Navigation Links */}
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-green-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right - Icons */}
            <div className="flex items-center space-x-6">
              <button
                onClick={toggleSearch}
                className="p-2 text-green-700 hover:text-green-900 hover:bg-green-50 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Search className="h-6 w-6 stroke-1" />
              </button>

              <button
                onClick={toggleCart}
                className="p-2 text-green-700 hover:text-green-900 hover:bg-green-50 rounded-full transition-all duration-300 hover:scale-110 relative"
              >
                <ShoppingCart className="h-6 w-6 stroke-1" />
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </button>

              <button
                onClick={toggleWishlist}
                className="p-2 text-green-700 hover:text-green-900 hover:bg-green-50 rounded-full transition-all duration-300 hover:scale-110 relative"
              >
                <Heart className="h-6 w-6 stroke-1" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>

              <Link
                href="/track"
                className="p-2 text-green-700 hover:text-green-900 hover:bg-green-50 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Package className="h-6 w-6 stroke-1" />
              </Link>

              <Link
                href="/login"
                className="p-2 text-green-700 hover:text-green-900 hover:bg-green-50 rounded-full transition-all duration-300 hover:scale-110"
              >
                <User className="h-6 w-6 stroke-1" />
              </Link>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between h-20 px-4">
            {/* Left - Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-3 text-green-700 hover:text-green-900 hover:bg-green-50 rounded-full transition-all duration-300"
            >
              <HamburgerIcon isOpen={isMenuOpen} />
            </button>

            {/* Center - Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link
                href="/"
                className="text-xl font-bold text-green-800 hover:text-green-600 transition-colors duration-300"
              >
                Spiruboost
              </Link>
            </div>

            {/* Right - Search and Cart */}
            <div className="flex items-center space-x-2 ml-auto">
              {" "}
              {/* ml-auto pushes it to the right */}
              <button
                onClick={toggleSearch}
                className="p-3 text-green-700 hover:text-green-900 hover:bg-green-50 rounded-full transition-all duration-300"
              >
                <Search className="h-6 w-6 stroke-1" />
              </button>
              <button
                onClick={toggleCart}
                className="p-3 text-green-700 hover:text-green-900 hover:bg-green-50 rounded-full transition-all duration-300 relative"
              >
                <ShoppingCart className="h-6 w-6 stroke-1" />
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-50 ${isMenuOpen ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? "opacity-50" : "opacity-0"}`}
          onClick={toggleMenu}
        ></div>

        {/* Mobile Menu Sidebar */}
        <div
          className={`absolute left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 overflow-hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="h-full flex flex-col">
            {/* Fixed Header */}
            <div className="flex-shrink-0 p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">Menu</h2>
                <button
                  onClick={toggleMenu}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6 stroke-1" />
                </button>
              </div>
              {/* Removed the black underline here */}
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Menu Items with Text Only */}
              <div className="space-y-4 mb-8">
                {mobileMenuItems.map((item) => (
                  <div key={item.label}>
                    {item.onClick ? (
                      <button
                        onClick={() => {
                          item.onClick()
                          toggleMenu()
                        }}
                        className="flex items-center space-x-4 w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 rounded-lg transition-all duration-200 relative group text-sm font-medium"
                      >
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="flex items-center space-x-4 px-3 py-2 text-gray-700 hover:text-red-600 rounded-lg transition-all duration-300 relative group text-sm font-medium"
                      >
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="block p-3 text-lg font-medium text-gray-700 hover:text-red-600 rounded-lg transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                    {index < navLinks.length - 1 && <div className="w-full h-px bg-gray-200 my-2"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart, Wishlist, and Search Overlays */}
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
      <WishlistSidebar isOpen={isWishlistOpen} onClose={toggleWishlist} />
      <SearchOverlay isOpen={isSearchOpen} onClose={toggleSearch} />
    </>
  )
}
