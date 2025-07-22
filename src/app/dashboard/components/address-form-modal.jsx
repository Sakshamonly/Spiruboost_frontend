"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
      <DialogContent className="w-[90vw] max-w-sm md:max-w-[425px] p-6 bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-emerald-800">
            {address ? "Edit Address" : "Add New Address"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="addressLine1" className="text-right">
              Address Line 1
            </Label>
            <Input
              id="addressLine1"
              placeholder="House No., Building Name"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="addressLine2" className="text-right">
              Address Line 2
            </Label>
            <Input
              id="addressLine2"
              placeholder="Street Name, Area"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="landmark" className="text-right">
              Landmark
            </Label>
            <Input
              id="landmark"
              placeholder="Near XYZ Park (Optional)"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="city" className="text-right">
              City
            </Label>
            <Input
              id="city"
              placeholder="Anytown"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="state" className="text-right">
              State
            </Label>
            <Input
              id="state"
              placeholder="CA"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="zip" className="text-right">
              Zip Code
            </Label>
            <Input
              id="zip"
              placeholder="90210"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <DialogFooter className="flex justify-center mt-4">
            <Button type="submit" className="bg-blue-600 text-white hover:bg-black">
              {address ? "Save Changes" : "Add Address"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
