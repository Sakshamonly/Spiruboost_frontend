"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/src/components/ui/dialog"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { MapPin, Home, Building2, Landmark, MapIcon, Hash, Save, X } from "lucide-react"

export default function AddressFormModal({ isOpen, onClose, onSave, address }) {
  const [addressLine1, setAddressLine1] = useState("")
  const [addressLine2, setAddressLine2] = useState("")
  const [landmark, setLandmark] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")

  useEffect(() => {
    if (address) {
      setAddressLine1(address.addressLine1 || "")
      setAddressLine2(address.addressLine2 || "")
      setLandmark(address.landmark || "")
      setCity(address.city || "")
      setState(address.state || "")
      setZip(address.zip || "")
    } else {
      setAddressLine1("")
      setAddressLine2("")
      setLandmark("")
      setCity("")
      setState("")
      setZip("")
    }
  }, [address, isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({
      id: address ? address.id : `addr${Date.now()}`, // Generate new ID if adding
      addressLine1,
      addressLine2,
      landmark,
      city,
      state,
      zip,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-lg p-0 bg-white rounded-2xl shadow-2xl border-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 text-white">
          <DialogHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold">
                  {address ? "Edit Address" : "Add New Address"}
                </DialogTitle>
                <p className="text-blue-100 text-sm">
                  {address ? "Update your delivery address" : "Add a new delivery location"}
                </p>
              </div>
            </div>
          </DialogHeader>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Address Line 1 */}
          <div className="space-y-2">
            <Label htmlFor="addressLine1" className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <Home className="h-4 w-4 text-blue-600" />
              <span>House/Building Number *</span>
            </Label>
            <Input
              id="addressLine1"
              placeholder="e.g., 123, Green Apartments, Block A"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              className="w-full border-2 border-gray-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl p-3"
              required
            />
          </div>

          {/* Address Line 2 */}
          <div className="space-y-2">
            <Label htmlFor="addressLine2" className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <Building2 className="h-4 w-4 text-green-600" />
              <span>Street/Area *</span>
            </Label>
            <Input
              id="addressLine2"
              placeholder="e.g., MG Road, Sector 14"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              className="w-full border-2 border-gray-200 focus:border-green-400 focus:ring-green-400 rounded-xl p-3"
              required
            />
          </div>

          {/* Landmark */}
          <div className="space-y-2">
            <Label htmlFor="landmark" className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <Landmark className="h-4 w-4 text-orange-600" />
              <span>Landmark (Optional)</span>
            </Label>
            <Input
              id="landmark"
              placeholder="e.g., Near Metro Station, Behind Mall"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="w-full border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-400 rounded-xl p-3"
            />
          </div>

          {/* City and State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <MapIcon className="h-4 w-4 text-purple-600" />
                <span>City *</span>
              </Label>
              <Input
                id="city"
                placeholder="e.g., New Delhi"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border-2 border-gray-200 focus:border-purple-400 focus:ring-purple-400 rounded-xl p-3"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state" className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <MapIcon className="h-4 w-4 text-pink-600" />
                <span>State *</span>
              </Label>
              <Input
                id="state"
                placeholder="e.g., Delhi"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full border-2 border-gray-200 focus:border-pink-400 focus:ring-pink-400 rounded-xl p-3"
                required
              />
            </div>
          </div>

          {/* ZIP Code */}
          <div className="space-y-2">
            <Label htmlFor="zip" className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
              <Hash className="h-4 w-4 text-indigo-600" />
              <span>PIN Code *</span>
            </Label>
            <Input
              id="zip"
              placeholder="e.g., 110001"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="w-full border-2 border-gray-200 focus:border-indigo-400 focus:ring-indigo-400 rounded-xl p-3"
              required
            />
          </div>

          {/* Footer Buttons */}
          <DialogFooter className="flex justify-end space-x-3 pt-6 border-t border-gray-100">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 rounded-xl shadow-lg"
            >
              <Save className="h-4 w-4 mr-2" />
              {address ? "Save Changes" : "Add Address"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
