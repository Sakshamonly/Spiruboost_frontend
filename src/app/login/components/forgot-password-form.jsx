"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui//label"

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
      <div className="flex justify-center mb-6">
        <Image src="/placeholder.svg?height=80&width=80" alt="Spiruboost Logo" width={80} height={80} />
      </div>
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">Reset Password</h2>
      <p className="text-center text-gray-600 text-base mb-6">
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
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base py-2"
        />
        {mobileError && <p className="text-red-500 text-sm mt-1">{mobileError}</p>}
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 mt-6">
        Submit
      </Button>
      <p className="text-center text-gray-600 text-base mt-6">
        Remembered your password?{" "}
        <button type="button" onClick={() => setView("login")} className="text-blue-600 hover:underline font-medium">
          Login
        </button>
      </p>
    </form>
  )
}
