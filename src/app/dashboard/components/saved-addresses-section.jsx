"use client"

import { useState } from "react"
import AddressCard from "./address-card"
import AddressFormModal from "./address-form-modal"
import { Button } from "@/src/components/ui/button"
import { RadioGroup } from "@/src/components/ui/radio-group"
import { Plus, MapPin, Home } from "lucide-react"

export default function SavedAddressesSection({
  addresses,
  currentDefaultAddressId,
  onAddressChange,
  onAddAddress,
  onUpdateAddress,
  onDeleteAddress,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingAddress, setEditingAddress] = useState(null)

  const handleOpenModal = (address = null) => {
    setEditingAddress(address)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingAddress(null)
  }

  const handleSaveAddress = (newAddressData) => {
    if (editingAddress) {
      onUpdateAddress({ ...editingAddress, ...newAddressData })
    } else {
      onAddAddress(newAddressData)
    }
  }

  const defaultAddress = addresses.find((addr) => addr.id === currentDefaultAddressId)
  const otherAddresses = addresses.filter((addr) => addr.id !== currentDefaultAddressId)

  return (
    <section className="w-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Home className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">Delivery Addresses</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleOpenModal()}
            className="text-white hover:bg-white/20 border border-white/30"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {addresses.length === 0 ? (
          <div className="text-center py-8">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">No addresses saved yet</p>
            <Button
              onClick={() => handleOpenModal()}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Address
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <RadioGroup value={currentDefaultAddressId} onValueChange={onAddressChange} className="space-y-4">
              {defaultAddress && (
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                    <Home className="h-4 w-4 mr-2 text-green-600" />
                    Default Address
                  </h3>
                  <AddressCard
                    address={defaultAddress}
                    isDefault={true}
                    onSetDefault={onAddressChange}
                    onEdit={handleOpenModal}
                    onDelete={onDeleteAddress}
                  />
                </div>
              )}
              
              {otherAddresses.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    Other Addresses
                  </h3>
                  <div className="space-y-3">
                    {otherAddresses.map((address) => (
                      <AddressCard
                        key={address.id}
                        address={address}
                        isDefault={false}
                        onSetDefault={onAddressChange}
                        onEdit={handleOpenModal}
                        onDelete={onDeleteAddress}
                      />
                    ))}
                  </div>
                </div>
              )}
            </RadioGroup>
          </div>
        )}
      </div>

      <AddressFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveAddress}
        address={editingAddress}
      />
    </section>
  )
}
