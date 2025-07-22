"use client"

export default function OrdersSection({ orders, onOrderClick }) {
  return (
    <section className="w-full px-4 py-3 bg-white border-b border-gray-100 shadow-md md:rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-emerald-800">Your Orders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-100 rounded-lg p-4 shadow-sm bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
            onClick={() => onOrderClick(order)}
          >
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Order ID:</span>
                <span className="text-gray-900">{order.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Date:</span>
                <span className="text-gray-900">{order.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Status:</span>
                <span className="text-gray-900">{order.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Address:</span>
                <span className="text-gray-900 text-right">
                  {order.address.addressLine1}, {order.address.city}
                </span>
              </div>
              <div className="flex justify-between font-bold text-base mt-2">
                <span className="text-emerald-700">Total:</span>
                <span className="text-emerald-900">{order.total}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
