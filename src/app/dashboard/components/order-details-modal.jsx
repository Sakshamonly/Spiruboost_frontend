"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/src/components/ui/dialog"
import { Separator } from "@/src/components/ui/separator"

export default function OrderDetailsModal({ isOpen, onClose, order }) {
  if (!order) return null

  const formattedAddress = order.address
    ? `${order.address.addressLine1}${order.address.addressLine2 ? `, ${order.address.addressLine2}` : ""}${order.address.landmark ? `, ${order.address.landmark}` : ""}, ${order.address.city}, ${order.address.state} ${order.address.zip}`
    : "N/A"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-6 bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-emerald-800">Order Details: {order.id}</DialogTitle>
          <DialogDescription className="text-gray-600">Detailed information about your order.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-sm">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Order Date:</span>
            <span className="text-gray-900">{order.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Status:</span>
            <span className="text-gray-900">{order.status}</span>
          </div>
          <Separator className="bg-emerald-100" />
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Items:</h3>
            <ul className="list-disc list-inside space-y-1">
              {order.items.map((item, index) => (
                <li key={index} className="text-gray-900">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Separator className="bg-emerald-100" />
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Shipping Address:</h3>
            <p className="text-gray-900">{formattedAddress}</p>
          </div>
          <Separator className="bg-emerald-100" />
          <div className="flex justify-between font-bold text-lg text-emerald-900">
            <span className="text-gray-700">Total:</span>
            <span className="text-emerald-900">{order.total}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
