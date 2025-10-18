"use client"

import { Package, Clock, CheckCircle, Truck, MapPin, Calendar, DollarSign } from "lucide-react"

export default function OrdersSection({ orders, onOrderClick }) {
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

  const getCardGradient = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'from-green-50 to-emerald-50 border-green-200'
      case 'shipped':
        return 'from-blue-50 to-sky-50 border-blue-200'
      case 'processing':
        return 'from-orange-50 to-yellow-50 border-orange-200'
      default:
        return 'from-gray-50 to-slate-50 border-gray-200'
    }
  }

  return (
    <section className="w-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Package className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Your Orders</h2>
            <p className="text-purple-100 text-sm">{orders.length} orders found</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-2">No orders yet</p>
            <p className="text-gray-400">Start shopping to see your orders here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className={`group relative cursor-pointer rounded-xl border-2 bg-gradient-to-br ${getCardGradient(order.status)} p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1`}
                onClick={() => onOrderClick(order)}
              >
                {/* Order Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(order.status)}
                    <span className="font-bold text-gray-900">#{order.id}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}>
                    {order.status}
                  </div>
                </div>

                {/* Order Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{order.date}</span>
                  </div>
                  
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-2">
                      {order.address.addressLine1}, {order.address.city}
                    </span>
                  </div>
                </div>

                {/* Items */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Items:</p>
                  <div className="space-y-1">
                    {order.items.slice(0, 2).map((item, index) => (
                      <p key={index} className="text-sm text-gray-600 bg-white/50 px-2 py-1 rounded">
                        {item}
                      </p>
                    ))}
                    {order.items.length > 2 && (
                      <p className="text-sm text-gray-500 italic">
                        +{order.items.length - 2} more items
                      </p>
                    )}
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between pt-4 border-t border-white/50">
                  <span className="text-sm font-medium text-gray-600">Total</span>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-lg font-bold text-gray-900">{order.total.replace('$', '')}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
