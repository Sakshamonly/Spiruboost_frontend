"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogOut, Edit, Save, X } from "lucide-react"

export default function UserDetailsSection({ details, onUpdateUserDetails, onLogout }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editableDetails, setEditableDetails] = useState(
    details.reduce((acc, detail) => {
      acc[detail.label.toLowerCase().replace(/\s/g, "")] = detail.value
      return acc
    }, {}),
  )

  const handleInputChange = (label, value) => {
    setEditableDetails((prev) => ({
      ...prev,
      [label.toLowerCase().replace(/\s/g, "")]: value,
    }))
  }

  const handleSave = () => {
    onUpdateUserDetails(editableDetails)
    setIsEditing(false)
  }

  const handleCancel = () => {
    // Reset editable details to original values
    setEditableDetails(
      details.reduce((acc, detail) => {
        acc[detail.label.toLowerCase().replace(/\s/g, "")] = detail.value
        return acc
      }, {}),
    )
    setIsEditing(false)
  }

  return (
    <section className="w-full px-4 py-3 bg-white border-b border-emerald-100 shadow-md md:rounded-lg flex flex-col min-h-[250px] relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-emerald-800">User Details</h2>
        {!isEditing ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsEditing(true)}
            className="text-emerald-600 hover:text-emerald-900"
          >
            <Edit className="h-5 w-5" />
            <span className="sr-only">Edit Details</span>
          </Button>
        ) : (
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSave}
              className="text-emerald-600 hover:text-emerald-900"
            >
              <Save className="h-5 w-5" />
              <span className="sr-only">Save Changes</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={handleCancel} className="text-red-600 hover:text-red-900">
              <X className="h-5 w-5" />
              <span className="sr-only">Cancel</span>
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-2 flex-grow">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-2 border-b border-emerald-50 last:border-b-0 last:pb-0"
          >
            <Label
              htmlFor={detail.label.toLowerCase().replace(/\s/g, "")}
              className="text-sm font-medium text-gray-600 sm:w-1/3"
            >
              {detail.label}
            </Label>
            {isEditing &&
            detail.label !== "Email" &&
            detail.label !== "Mobile" &&
            detail.label !== "Default Address" ? ( // Added condition for Default Address
              <Input
                id={detail.label.toLowerCase().replace(/\s/g, "")}
                value={editableDetails[detail.label.toLowerCase().replace(/\s/g, "")] || ""}
                onChange={(e) => handleInputChange(detail.label, e.target.value)}
                className="w-full sm:w-2/3 text-sm text-gray-900 sm:text-right border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            ) : (
              <span
                className={`w-full sm:w-2/3 text-sm text-gray-900 sm:text-right ${
                  (detail.label === "Email" || detail.label === "Mobile" || detail.label === "Default Address") &&
                  isEditing // Added condition for Default Address
                    ? "text-gray-500 cursor-not-allowed"
                    : ""
                }`}
              >
                {detail.value}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Logout button at the bottom of the card, with dynamic spacing */}
      <div className="mt-auto pt-4 border-t border-emerald-100">
        <Button variant="ghost" onClick={onLogout} className="text-gray-600 hover:text-red-600">
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </section>
  )
}
