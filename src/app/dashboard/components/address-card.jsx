"use client"

import { Button } from "@/src/components/ui/button"
import { RadioGroupItem } from "@/src/components/ui/radio-group"
import { Label } from "@/src/components/ui/label"
import { MapPin, Edit3, Trash2, Star } from "lucide-react"

export default function AddressCard({ address, isDefault, onSetDefault, onEdit, onDelete }) {
  return (
    <div className={`relative group p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
      isDefault 
        ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-md' 
        : 'bg-white border-gray-200 hover:border-blue-300'
    }`}>
      {/* Default Badge */}
      {isDefault && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
          <Star className="h-3 w-3 mr-1" />
          Default
        </div>
      )}

      <div className="flex items-start justify-between">
        {/* Radio Button and Address Content */}
        <div className="flex items-start space-x-3 flex-1">
          <div className="mt-1">
            <RadioGroupItem
              value={address.id}
              id={`address-${address.id}`}
              checked={isDefault}
              onClick={() => onSetDefault(address.id)}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-blue-300"
            />
          </div>
          
          <div className="flex-1">
            <Label 
              htmlFor={`address-${address.id}`} 
              className="cursor-pointer block"
            >
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="font-semibold text-gray-900">
                  {address.addressLine1}
                </span>
              </div>
              
              <div className="text-sm text-gray-600 space-y-1 ml-6">
                {address.addressLine2 && (
                  <p>{address.addressLine2}</p>
                )}
                {address.landmark && (
                  <p className="text-blue-600 font-medium">📍 {address.landmark}</p>
                )}
                <p className="font-medium text-gray-800">
                  {address.city}, {address.state} {address.zip}
                </p>
              </div>
            </Label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 ml-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit(address)}
            className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Edit3 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(address.id)}
            className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
