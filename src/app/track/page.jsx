"use client"

import React, { useState } from "react"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Separator } from "@/src/components/ui/separator"
import { ShoppingCart, Package, Truck, MapPin, CheckCircle } from "lucide-react"
import { cn } from "@/src/lib/utils"
import Navbar from "@/src/components/usable/navbar"
import Footer from "@/src/components/usable/footer"

export default function OrderTrackingPage() {
  const [orderIdInput, setOrderIdInput] = useState("")
  const [showOrderDetails, setShowOrderDetails] = useState(false)
  const [currentOrderId, setCurrentOrderId] = useState("")

  // Mock order data
  const mockOrder = {
    id: "#SPB123456",
    productName: "Spiruboost Immunity Pack",
    orderDate: "14 July 2025",
    expectedDelivery: "18 July 2025",
  }

  // Mock tracking steps with current status highlighted
  const trackingSteps = [
    {
      status: "Ordered",
      date: "14 July, 10:30 AM",
      icon: ShoppingCart,
      isCurrent: false,
    },
    {
      status: "Packed",
      date: "15 July, 1:00 PM",
      icon: Package,
      isCurrent: false,
    },
    {
      status: "In Transit",
      date: "16 July, 9:00 AM",
      icon: Truck,
      isCurrent: true, // This is the current status for the mock
    },
    {
      status: "Out for Delivery",
      date: "17 July, 7:30 AM",
      icon: MapPin,
      isCurrent: false,
    },
    {
      status: "Delivered",
      date: "18 July, 4:45 PM",
      icon: CheckCircle,
      isCurrent: false,
    },
  ]

  const handleTrackOrder = () => {
    if (orderIdInput.trim() !== "") {
      // In a real application, you would fetch data based on orderIdInput
      // For this mock, we just show the static details
      setCurrentOrderId(orderIdInput.trim())
      setShowOrderDetails(true)
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Track Your Order</h1>
          <p className="text-lg text-gray-600">Enter your Order ID to view status</p>
        </div>

        {/* Order ID Input Section */}
        <Card className="w-full max-w-md p-6 shadow-lg rounded-lg mb-10">
          <CardContent className="flex flex-col sm:flex-row items-center gap-4 p-0">
            <Input
              type="text"
              placeholder="Enter your Order ID"
              value={orderIdInput}
              onChange={(e) => setOrderIdInput(e.target.value)}
              className="flex-1 h-12 text-base"
            />
            <Button
              onClick={handleTrackOrder}
              disabled={orderIdInput.trim() === ""}
              className="h-12 px-6 text-base bg-gray-900 hover:bg-gray-700 text-white"
            >
              Track Order
            </Button>
          </CardContent>
        </Card>

        {/* Order Details Section & Tracking Timeline */}
        {showOrderDetails && (
          <div className="w-full max-w-3xl flex flex-col items-center">
            {/* Current Status Highlight */}
            <div className="w-full bg-gray-900 text-white text-center py-4 px-6 rounded-lg shadow-md mb-8">
              <p className="text-xl font-semibold">
                <MapPin className="inline-block mr-2 h-6 w-6" />
                {"Your order is currently: "}
                <span className="font-extrabold italic">
                  {trackingSteps.find((step) => step.isCurrent)?.status || "Unknown"}
                </span>
              </p>
            </div>

            {/* Order Details Card */}
            <Card className="w-full p-6 shadow-lg rounded-lg mb-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-semibold text-gray-800">Order Details</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 p-0">
                <div>
                  <p className="font-medium">Order ID:</p>
                  <p className="text-lg font-bold text-gray-900">{mockOrder.id}</p>
                </div>
                <div>
                  <p className="font-medium">Product Name:</p>
                  <p className="text-lg">{mockOrder.productName}</p>
                </div>
                <div>
                  <p className="font-medium">Order Date:</p>
                  <p className="text-lg">{mockOrder.orderDate}</p>
                </div>
                <div>
                  <p className="font-medium">Expected Delivery:</p>
                  <p className="text-lg">{mockOrder.expectedDelivery}</p>
                </div>
              </CardContent>
            </Card>

            <Separator className="w-full max-w-md my-8 bg-gray-300" />

            {/* Visual Tracking Timeline */}
            <div className="w-full p-6 shadow-lg rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Order Progress</h2>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
                {/* Connector lines for desktop */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
                {trackingSteps.map((step, index) => {
                  const IconComponent = step.icon
                  const isLastStep = index === trackingSteps.length - 1

                  return (
                    <React.Fragment key={step.status}>
                      <div className="flex flex-col items-center text-center relative z-10 md:w-1/5 w-full mb-6 md:mb-0">
                        <div
                          className={cn(
                            "flex items-center justify-center w-12 h-12 rounded-full border-2",
                            step.isCurrent
                              ? "bg-gray-900 border-gray-900 text-white shadow-lg"
                              : "bg-white border-gray-300 text-gray-500",
                          )}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <p
                          className={cn(
                            "mt-3 text-sm font-medium",
                            step.isCurrent ? "text-gray-900 font-bold" : "text-gray-700",
                          )}
                        >
                          {step.status}
                        </p>
                        <p className="text-xs text-gray-500">{step.date}</p>
                      </div>
                      {/* Vertical connector for mobile */}
                      {!isLastStep && <div className="md:hidden w-0.5 h-12 bg-gray-200 self-center -my-3"></div>}
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
