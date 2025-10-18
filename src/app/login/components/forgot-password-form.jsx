"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui//label"

export default function ForgotPasswordForm({ setView, setOtpFor }) {
  const [mobile, setMobile] = useState("")
  const [mobileError, setMobileError] = useState("")

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "") // Only allow digits
    if (value.length > 10) return // Prevent typing more than 10 digits
    setMobile(value)
    if (value.length > 0 && value.length < 10) {
      setMobileError("Mobile number must be 10 digits.")
    } else {
      setMobileError("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mobile.length !== 10 || mobileError) {
      setMobileError(mobile.length === 0 ? "This field is required." : "Mobile number must be 10 digits.")
      alert("Please enter a valid 10-digit mobile number.")
      return
    }
    // Simulate sending OTP
    console.log("Sending OTP to mobile:", mobile)
    setOtpFor("forgot-password") // Set OTP context for forgot password flow
    setView("otp") // Show OTP verification
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-8">
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-2">
        Reset Password
      </h2>
      <p className="text-center text-gray-700 text-lg mb-6 font-medium">
        Enter your registered mobile number to receive a verification code.
      </p>
      <div>
        <Label htmlFor="mobile-reset" className="text-black text-base mb-2 block">
          Mobile Number
        </Label>
        <Input
          id="mobile-reset"
          type="tel"
          maxLength={10}
          required
          value={mobile}
          onChange={handleMobileChange}
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-base py-2"
        />
        {mobileError && <p className="text-red-500 text-sm mt-1">{mobileError}</p>}
      </div>
      <Button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg py-3 mt-6">
        Submit
      </Button>
      <p className="text-center text-gray-600 text-base mt-6">
        Remembered your password?{" "}
        <button type="button" onClick={() => setView("login")} className="text-orange-600 hover:underline font-medium">
          Login
        </button>
      </p>
    </form>
  )
}
