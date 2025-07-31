import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-gradient-to-b from-gray-950 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 lg:gap-20">
        {/* Brand/Logo and Description Section (Left) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-3xl font-extrabold text-white mb-2">Spiruboost</h3>
          <p className="text-sm italic text-gray-300 mb-4">Naturally Better, Every Day.</p>
          <p className="text-sm leading-relaxed max-w-xs text-gray-200">
            Spiruboost is dedicated to bringing you the purest Ayurvedic products, crafted with ancient wisdom for
            modern wellness. Embrace a balanced life with our natural solutions.
          </p>
        </div>

        {/* Quick Links Section (Center) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-xl font-semibold text-white mb-5">Quick Links</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-200 hover:text-white transition-colors duration-200 hover:underline decoration-gray-600 hover:decoration-red-500 underline-offset-4"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-200 hover:text-white transition-colors duration-200 hover:underline decoration-gray-600 hover:decoration-red-500 underline-offset-4"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-200 hover:text-white transition-colors duration-200 hover:underline decoration-gray-600 hover:decoration-red-500 underline-offset-4"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  href="/ingredients"
                  className="text-gray-200 hover:text-white transition-colors duration-200 hover:underline decoration-gray-600 hover:decoration-red-500 underline-offset-4"
                >
                  Ingredients
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/recipes"
                  className="text-gray-200 hover:text-white transition-colors duration-200 hover:underline decoration-gray-600 hover:decoration-red-500 underline-offset-4"
                >
                  Recipes & Wellness
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-200 hover:text-white transition-colors duration-200 hover:underline decoration-gray-600 hover:decoration-red-500 underline-offset-4"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-200 hover:text-white transition-colors duration-200 hover:underline decoration-gray-600 hover:decoration-red-500 underline-offset-4"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-white transition-colors duration-200 hover:underline decoration-gray-600 hover:decoration-red-500 underline-offset-4"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact/Info Section (Right) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-xl font-semibold text-white mb-5">Get in Touch</h4>
          <div className="space-y-3 text-sm text-gray-200">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <a
                href="mailto:info@spiruboost.com"
                className="hover:underline hover:text-white transition-colors duration-200"
              >
                info@spiruboost.com
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <a href="tel:+1234567890" className="hover:underline hover:text-white transition-colors duration-200">
                +1 (234) 567-890
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              123 Wellness Way, Nature City, NC 98765
            </p>
          </div>
          <div className="flex gap-5 mt-8">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Privacy Policy and Terms */}
      <div className="mt-16 pt-8 border-t border-gray-700">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 mb-4 text-sm">
          <Link
            href="/privacy-policy"
            className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline decoration-transparent hover:decoration-white underline-offset-4"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-500 hidden sm:block">|</span>
          <Link
            href="/terms-conditions"
            className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline decoration-transparent hover:decoration-white underline-offset-4"
          >
            Terms & Conditions
          </Link>
        </div>
        <p className="text-center text-sm text-gray-400">&copy; {currentYear} Spiruboost. All rights reserved.</p>
      </div>
    </footer>
  )
}
