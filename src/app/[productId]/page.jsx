"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Navbar from "@/src/components/usable/navbar"
import Footer from "@/src/components/usable/footer"
import CartSidebar from "@/src/components/usable/cart"
import WishlistSidebar from "@/src/components/usable/wishlist"
import ProductDetail from "./components/product-detail"
import ProductDescription from "./components/product-description"
import HowToUse from "./components/how-to-use"
import FAQSection from "./components/faq-section"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.productId
  
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)

  // Cart and Wishlist handlers
  const handleAddToCart = (productId, quantity = 1) => {
    console.log(`Added product ${productId} to cart with quantity ${quantity}`)
    setIsCartOpen(true)
    // TODO: Implement actual add to cart functionality
  }

  const handleAddToWishlist = (productId) => {
    console.log(`Added product ${productId} to wishlist`)
    setIsWishlistOpen(true)
    // TODO: Implement actual add to wishlist functionality
  }

  const handleBuyNow = (productId, quantity = 1) => {
    console.log(`Buying product ${productId} now with quantity ${quantity}`)
    router.push('/checkout')
  }

  const handleCloseCart = () => {
    setIsCartOpen(false)
  }

  const handleCloseWishlist = () => {
    setIsWishlistOpen(false)
  }

  useEffect(() => {
    // Add smooth scrolling behavior to the entire page
    document.documentElement.style.scrollBehavior = "smooth"

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
          entry.target.classList.remove("opacity-0", "translate-y-8")
        } else {
          // Reset animation when element leaves viewport
          entry.target.classList.remove("animate-fade-in")
          entry.target.classList.add("opacity-0", "translate-y-8")
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll(".scroll-animate")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <style jsx global>{`
          .scroll-animate {
            opacity: 0;
            transform: translateY(32px);
            transition: all 0.6s ease-out;
          }
          .animate-fade-in {
            opacity: 1;
            transform: translateY(0);
          }
          /* Enhanced mobile responsiveness and blur fix */
          @media (max-width: 768px) {
            .scroll-animate {
              transform: translateY(16px);
              transition: all 0.5s ease-out;
            }
            
            /* Fix mobile blur issues */
            * {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            
            img {
              image-rendering: -webkit-optimize-contrast;
              image-rendering: crisp-edges;
            }
          }
        `}</style>

        <div className="scroll-animate">
          <ProductDetail 
            productId={productId} 
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onBuyNow={handleBuyNow}
          />
        </div>
        <div className="scroll-animate">
          <ProductDescription productId={productId} />
        </div>
        <div className="scroll-animate">
          <HowToUse productId={productId} />
        </div>
        <div className="scroll-animate">
          <FAQSection productId={productId} />
        </div>
      </div>
      <Footer />
      
      {/* Cart and Wishlist Sidebars */}
      <CartSidebar isOpen={isCartOpen} onClose={handleCloseCart} />
      <WishlistSidebar isOpen={isWishlistOpen} onClose={handleCloseWishlist} />
    </>
  )
}
