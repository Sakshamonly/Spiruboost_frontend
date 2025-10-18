"use client"

import { useState } from "react"
import { ZoomIn, ZoomOut, X } from "lucide-react"

export default function ProductImageGallery({ productId }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)

  const productImages = [
    "/spirulina-supplement-bottle-main-view.png",
    "/spirulina-supplement-bottle-side-view.png",
    "/spirulina-supplement-bottle-back-label.png",
    "/spirulina-supplement-bottle-ingredients.png",
    "/spirulina-supplement-bottle-nutrition-facts.png",
  ]

  const handleZoomIn = (e) => {
    e.stopPropagation()
    setZoomLevel((prev) => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = (e) => {
    e.stopPropagation()
    setZoomLevel((prev) => Math.max(prev - 0.5, 0.5))
  }

  const handleCloseFullscreen = () => {
    setIsFullscreen(false)
    setZoomLevel(1)
  }

  return (
    <div className="w-full md:w-1/2 space-y-4">
      {/* Main Image */}
      <div
        className="bg-gray-200 rounded-2xl cursor-pointer hover:bg-gray-300 transition-colors overflow-hidden h-[350px] md:h-[500px]"
        onClick={() => setIsFullscreen(true)}
      >
        <img
          src={productImages[selectedImage] || "/placeholder.svg"}
          alt="Spiruboost Capsule - Main product view"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-2">
        {productImages.map((image, index) => (
          <div
            key={index}
            className={`flex-1 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors border-2 overflow-hidden h-20 md:h-24 ${
              selectedImage === index ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-auto" onClick={handleCloseFullscreen}>
          <div className="min-h-full flex items-center justify-center p-4">
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={productImages[selectedImage] || "/placeholder.svg"}
                alt="Spiruboost Capsule - Fullscreen view"
                className="max-w-none transition-transform duration-200 max-h-[90vh] w-auto"
                style={{
                  transform: `scale(${zoomLevel})`,
                  cursor: zoomLevel > 1 ? "grab" : "default",
                }}
              />

              {/* Zoom Controls */}
              <div className="absolute top-4 left-4 flex gap-2">
                <button
                  className="text-white bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition-colors"
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  className="text-white bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition-colors"
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.5}
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <div className="text-white bg-black bg-opacity-70 rounded-full px-3 py-2 text-sm">
                  {Math.round(zoomLevel * 100)}%
                </div>
              </div>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition-colors"
                onClick={handleCloseFullscreen}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
