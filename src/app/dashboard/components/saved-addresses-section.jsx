"use client"

import { useState } from "react"
import AddressCard from "./address-card"
import AddressFormModal from "./address-form-modal"
import { Button } from "@/src/components/ui/button"
import { RadioGroup } from "@/src/components/ui/radio-group"
import { Plus } from "lucide-react"

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
    <section className="w-full px-4 py-3 bg-white border-b border-emerald-100 shadow-md md:rounded-lg relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-emerald-800">Saved Addresses</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleOpenModal()}
          className="text-emerald-600 hover:text-emerald-900"
        >
          <Plus className="h-5 w-5" />
          <span className="sr-only">Add New Address</span>
        </Button>
      </div>
      <RadioGroup value={currentDefaultAddressId} onValueChange={onAddressChange} className="space-y-3">
        {defaultAddress && (
          <AddressCard
            address={defaultAddress}
            isDefault={true}
            onSetDefault={onAddressChange}
            onEdit={handleOpenModal}
            onDelete={onDeleteAddress}
          />
        )}
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
      </RadioGroup>

      <AddressFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveAddress}
        address={editingAddress}
      />
    </section>
  )
}
