"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import PasswordRequirements from "./password-requirements"
import { validatePassword } from "@/src/lib/auth-utils"

export default function NewPasswordForm({ setView, router }) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false)

  const passwordRequirementsMet = validatePassword(password).every((req) => req.fulfilled)

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match")
    } else {
      setConfirmPasswordError("")
    }
  }, [password, confirmPassword])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!passwordRequirementsMet || confirmPasswordError || !password || !confirmPassword) {
      alert("Please fill in all required fields and correct any errors.")
      return
    }
    // Simulate password reset
    console.log("New password set:", password)
    alert("Password has been reset successfully! Please login with your new password.")
    setView("login") // Redirect to login form
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-8">
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-700 bg-clip-text text-transparent mb-2">
        Set New Password
      </h2>
      <p className="text-center text-gray-700 text-lg mb-6 font-medium">Create a strong, new password for your account.</p>
      <div>
        <Label htmlFor="new-password" className="text-black text-base mb-2 block">
          New Password
        </Label>
        <Input
          id="new-password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setShowPasswordRequirements(true)}
          onBlur={() => setShowPasswordRequirements(false)}
          maxLength={15} // Max 15 characters for password
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-base py-2"
        />
        {showPasswordRequirements && <PasswordRequirements password={password} />}
      </div>
      <div>
        <Label htmlFor="confirm-new-password" className="text-black text-base mb-2 block">
          Confirm New Password
        </Label>
        <Input
          id="confirm-new-password"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          maxLength={15} // Max 15 characters for password
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-base py-2"
        />
        {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
      </div>
      <Button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white text-lg py-3 mt-6">
        Reset Password
      </Button>
    </form>
  )
}
