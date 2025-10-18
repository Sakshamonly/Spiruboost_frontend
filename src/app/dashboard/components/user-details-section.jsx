"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { LogOut, Edit, Save, X, User, Mail, Phone, Calendar, MapPin } from "lucide-react"

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

  const getIcon = (label) => {
    switch (label) {
      case "Name":
        return <User className="h-5 w-5 text-purple-600" />
      case "Email":
        return <Mail className="h-5 w-5 text-blue-600" />
      case "Mobile":
        return <Phone className="h-5 w-5 text-green-600" />
      case "Date of Birth":
        return <Calendar className="h-5 w-5 text-pink-600" />
      case "Default Address":
        return <MapPin className="h-5 w-5 text-orange-600" />
      default:
        return <User className="h-5 w-5 text-gray-600" />
    }
  }

  return (
    <section className="w-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">Profile Details</h2>
          </div>
          {!isEditing ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(true)}
              className="text-white hover:bg-white/20 border border-white/30"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          ) : (
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSave}
                className="text-white hover:bg-white/20 border border-white/30"
              >
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleCancel} 
                className="text-white hover:bg-white/20 border border-white/30"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200"
          >
            <div className="flex-shrink-0">
              {getIcon(detail.label)}
            </div>
            <div className="flex-1 min-w-0">
              <Label className="text-sm font-medium text-gray-600 block mb-1">
                {detail.label}
              </Label>
              {isEditing &&
              detail.label !== "Email" &&
              detail.label !== "Mobile" &&
              detail.label !== "Default Address" ? (
                <Input
                  id={detail.label.toLowerCase().replace(/\s/g, "")}
                  value={editableDetails[detail.label.toLowerCase().replace(/\s/g, "")] || ""}
                  onChange={(e) => handleInputChange(detail.label, e.target.value)}
                  className="text-sm text-gray-900 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  placeholder={`Enter your ${detail.label.toLowerCase()}`}
                />
              ) : (
                <div className="text-sm text-gray-900 font-medium">
                  {detail.value}
                  {(detail.label === "Email" || detail.label === "Mobile" || detail.label === "Default Address") &&
                  isEditing && (
                    <span className="text-xs text-gray-500 block mt-1">
                      This field cannot be edited here
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <Button 
          variant="ghost" 
          onClick={onLogout} 
          className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 font-medium"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </section>
  )
}
