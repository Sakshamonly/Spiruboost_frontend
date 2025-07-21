"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PasswordRequirements from "./password-requirements"
import { validatePassword } from "@/lib/auth-utils"

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
      <div className="flex justify-center mb-6">
        <Image src="/placeholder.svg?height=80&width=80" alt="Spiruboost Logo" width={80} height={80} />
      </div>
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">Set New Password</h2>
      <p className="text-center text-gray-600 text-base mb-6">Create a strong, new password for your account.</p>
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
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base py-2"
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
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base py-2"
        />
        {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 mt-6">
        Reset Password
      </Button>
    </form>
  )
}
