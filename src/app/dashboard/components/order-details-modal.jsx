"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/src/components/ui/dialog"
import { Separator } from "@/src/components/ui/separator"
import { Package, Calendar, Truck, MapPin, CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react"

export default function OrderDetailsModal({ isOpen, onClose, order }) {
  if (!order) return null

  const formattedAddress = order.address
    ? `${order.address.addressLine1}${order.address.addressLine2 ? `, ${order.address.addressLine2}` : ""}${order.address.landmark ? `, ${order.address.landmark}` : ""}, ${order.address.city}, ${order.address.state} ${order.address.zip}`
    : "N/A"

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-600" />
      case 'processing':
        return <Clock className="h-5 w-5 text-orange-600" />
      default:
        return <Package className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'text-green-700 bg-green-100 border-green-200'
      case 'shipped':
        return 'text-blue-700 bg-blue-100 border-blue-200'
      case 'processing':
        return 'text-orange-700 bg-orange-100 border-orange-200'
      default:
        return 'text-gray-700 bg-gray-100 border-gray-200'
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg p-0 bg-white rounded-2xl shadow-2xl border-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-5 text-white">
          <DialogHeader>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Package className="h-7 w-7" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold">
                  Order #{order.id}
                </DialogTitle>
                <DialogDescription className="text-purple-100">
                  Complete order information and status
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status Section */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-gray-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Order Date</p>
                <p className="text-gray-900 font-semibold">{order.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusIcon(order.status)}
              <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
          </div>

          {/* Items Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-gray-800">Order Items</h3>
            </div>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-gradient-to-r from-purple-200 to-blue-200 h-0.5" />

          {/* Shipping Address Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-gray-800">Delivery Address</h3>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <p className="text-gray-800 leading-relaxed">{formattedAddress}</p>
            </div>
          </div>

          <Separator className="bg-gradient-to-r from-green-200 to-purple-200 h-0.5" />

          {/* Total Section */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-6 w-6 text-green-600" />
              <span className="text-lg font-semibold text-gray-700">Order Total</span>
            </div>
            <span className="text-2xl font-bold text-green-700">{order.total}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
