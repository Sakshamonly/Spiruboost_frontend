"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import UserDetailsSection from "./components/user-details-section"
import OrdersSection from "./components/orders-section"
import SavedAddressesSection from "./components/saved-addresses-section"
import OrderDetailsModal from "./components/order-details-modal"
import Navbar from "@/components/usable/navbar" // Navbar import kiya

export default function UserDashboard() {
  const router = useRouter()

  // Mock Data
  const initialAddresses = [
    {
      id: "addr1",
      addressLine1: "123 Main St",
      addressLine2: "Apt 101",
      landmark: "Near Park",
      city: "Anytown",
      state: "CA",
      zip: "90210",
    },
    {
      id: "addr2",
      addressLine1: "456 Oak Ave",
      addressLine2: "Unit 20",
      landmark: "",
      city: "Somewhere",
      state: "TX",
      zip: "75001",
    },
    {
      id: "addr3",
      addressLine1: "789 Pine Ln",
      addressLine2: "",
      landmark: "Behind Mall",
      city: "Nowhere",
      state: "FL",
      zip: "33101",
    },
  ]

  const initialUserData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    mobile: "+1 (555) 123-4567",
    dob: "15-05-1990", // DD-MM-YYYY format
    defaultAddressId: "addr1",
  }

  const mockOrders = [
    {
      id: "ORD001",
      date: "10-01-2023", // DD-MM-YYYY format
      items: ["Herbal Tea Blend (2)", "Ayurvedic Oil (1)"],
      status: "Delivered",
      total: "$125.00",
      address: {
        addressLine1: "123 Main St",
        addressLine2: "Apt 101",
        landmark: "Near Park",
        city: "Anytown",
        state: "CA",
        zip: "90210",
      },
    },
    {
      id: "ORD002",
      date: "20-02-2023", // DD-MM-YYYY format
      items: ["Immunity Booster Capsules (1)"],
      status: "Shipped",
      total: "$50.00",
      address: {
        addressLine1: "456 Oak Ave",
        addressLine2: "Unit 20",
        landmark: "",
        city: "Somewhere",
        state: "TX",
        zip: "75001",
      },
    },
    {
      id: "ORD003",
      date: "05-03-2023", // DD-MM-YYYY format
      items: ["Natural Face Mask (3)", "Hair Growth Serum (1)"],
      status: "Processing",
      total: "$85.00",
      address: {
        addressLine1: "789 Pine Ln",
        addressLine2: "",
        landmark: "Behind Mall",
        city: "Nowhere",
        state: "FL",
        zip: "33101",
      },
    },
  ]

  const [userData, setUserData] = useState(initialUserData)
  const [allAddresses, setAllAddresses] = useState(initialAddresses)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  const handleUpdateUserDetails = (updatedFields) => {
    setUserData((prevData) => ({
      ...prevData,
      name: updatedFields.name,
      dob: updatedFields.dateofbirth,
      // Default address is managed by SavedAddressesSection, not directly editable here
    }))
  }

  const handleAddressChange = (newDefaultId) => {
    setUserData((prevData) => ({
      ...prevData,
      defaultAddressId: newDefaultId,
    }))
  }

  const handleAddAddress = (newAddress) => {
    setAllAddresses((prevAddresses) => [...prevAddresses, newAddress])
  }

  const handleUpdateAddress = (updatedAddress) => {
    setAllAddresses((prevAddresses) =>
      prevAddresses.map((addr) => (addr.id === updatedAddress.id ? updatedAddress : addr)),
    )
  }

  const handleDeleteAddress = (addressId) => {
    setAllAddresses((prevAddresses) => prevAddresses.filter((addr) => addr.id !== addressId))
    // If the deleted address was the default, reset default to first available or null
    if (userData.defaultAddressId === addressId) {
      setUserData((prevData) => ({
        ...prevData,
        defaultAddressId: allAddresses.length > 1 ? allAddresses[0].id : null,
      }))
    }
  }

  const handleOrderClick = (order) => {
    setSelectedOrder(order)
    setIsOrderModalOpen(true)
  }

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false)
    setSelectedOrder(null)
  }

  const handleLogout = () => {
    // Yahan apna logout logic daalo (localStorage/sessionStorage clear karna ho toh)
    router.replace("/") // Homepage par redirect karega
  }

  const userDetails = useMemo(() => {
    const currentDefaultAddress = allAddresses.find((addr) => addr.id === userData.defaultAddressId)
    const defaultAddressText = currentDefaultAddress
      ? `${currentDefaultAddress.addressLine1}${currentDefaultAddress.addressLine2 ? `, ${currentDefaultAddress.addressLine2}` : ""}${currentDefaultAddress.landmark ? `, ${currentDefaultAddress.landmark}` : ""}, ${currentDefaultAddress.city}, ${currentDefaultAddress.state} ${currentDefaultAddress.zip}`
      : "N/A"

    return [
      { label: "Name", value: userData.name },
      { label: "Email", value: userData.email },
      { label: "Mobile", value: userData.mobile },
      { label: "Date of Birth", value: userData.dob },
      { label: "Default Address", value: defaultAddressText },
    ]
  }, [userData, allAddresses])

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-100 text-gray-800">
      <Navbar /> {/* Navbar yahan add kiya */}
      <main className="container mx-auto max-w-5xl py-4 px-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UserDetailsSection
            details={userDetails}
            onUpdateUserDetails={handleUpdateUserDetails}
            onLogout={handleLogout}
          />
          <SavedAddressesSection
            addresses={allAddresses}
            currentDefaultAddressId={userData.defaultAddressId}
            onAddressChange={handleAddressChange}
            onAddAddress={handleAddAddress}
            onUpdateAddress={handleUpdateAddress}
            onDeleteAddress={handleDeleteAddress}
          />
        </div>
        <OrdersSection orders={mockOrders} onOrderClick={handleOrderClick} />
      </main>
      <OrderDetailsModal isOpen={isOrderModalOpen} onClose={handleCloseOrderModal} order={selectedOrder} />
    </div>
  )
}
