"use client"

import { useState } from "react"
import Navbar from "@/src/components/usable/navbar"
import Footer from "@/src/components/usable/footer"
import HeroSection from "./components/HeroSection"
import PromisesSection from "./components/PromisesSection"
import ProductsPreviewSection from "./components/ProductsPreviewSection"
import TestimonialsSection from "./components/TestimonialsSection"
import ProductionSection from "./components/ProductionSection"
import AvailableOnSection from "./components/AvailableOnSection"
import CartSidebar from "@/src/components/usable/cart"

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <PromisesSection />
        <ProductsPreviewSection onCartOpen={openCart} />
        <TestimonialsSection />
        <ProductionSection />
        <AvailableOnSection />
      </main>
      <Footer />
      
      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </div>
  )
}
