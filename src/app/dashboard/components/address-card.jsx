"use client"

import { Button } from "@/src/components/ui/button"
import { RadioGroupItem } from "@/src/components/ui/radio-group"
import { Label } from "@/src/components/ui/label"

export default function AddressCard({ address, isDefault, onSetDefault, onEdit, onDelete }) {
  return (
    <div className="border border-gray-100 rounded-lg p-4 shadow-sm bg-gray-50 flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value={address.id}
            id={`address-${address.id}`}
            checked={isDefault}
            onClick={() => onSetDefault(address.id)}
            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-300"
          />
          <Label htmlFor={`address-${address.id}`} className="text-sm font-medium text-emerald-800 cursor-pointer">
            {isDefault && <span className="font-semibold text-emerald-700">[Default] </span>}
            {address.addressLine1}
          </Label>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(address)}
            className="border-emerald-300 text-emerald-700 hover:bg-emerald-100"
          >
            Edit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(address.id)}
            className="bg-red-500 hover:bg-red-600"
          >
            Delete
          </Button>
        </div>
      </div>
      <div className="text-sm text-gray-700 pl-6">
        <p>{address.addressLine2}</p>
        {address.landmark && <p>{address.landmark}</p>}
        <p>
          {address.city}, {address.state} {address.zip}
        </p>
      </div>
    </div>
  )
}
