"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function OtpVerificationForm({ onOtpSuccess }) {
  const [otp, setOtp] = useState(Array(6).fill(""))
  const inputRefs = useRef([])

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (element, index) => {
    if (isNaN(Number(element.value))) return

    const newOtp = [...otp]
    newOtp[index] = element.value
    setOtp(newOtp)

    // Focus next input if a digit was entered and it's not the last box
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasteData = e.clipboardData.getData("text").slice(0, 6)
    const newOtp = pasteData.split("").filter((char) => !isNaN(Number(char)))
    setOtp(
      Array(6)
        .fill("")
        .map((_, i) => newOtp[i] || ""),
    )
    // Focus the last filled input or the last input if all are filled
    const lastFilledIndex = Math.min(newOtp.length - 1, 5)
    if (inputRefs.current[lastFilledIndex]) {
      inputRefs.current[lastFilledIndex]?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const fullOtp = otp.join("")
    if (fullOtp.length !== 6) {
      alert("Please enter a 6-digit OTP.")
      return
    }
    // Simulate OTP verification
    console.log("OTP submitted:", fullOtp)
    onOtpSuccess() // Call the success callback provided by AuthComponent
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-8">
      <div className="flex justify-center mb-6">
        <Image src="/placeholder.svg?height=80&width=80" alt="Spiruboost Logo" width={80} height={80} />
      </div>
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">OTP Verification</h2>
      <p className="text-center text-gray-600 text-base mb-6">OTP has been sent to your mobile number</p>
      <div className="flex justify-center gap-2">
        {otp.map((digit, index) => (
          <Input
            key={index}
            type="tel" // Use "tel" for numeric keyboard on mobile
            inputMode="numeric" // Hint for numeric input on desktop
            pattern="[0-9]*" // Pattern for numeric input
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={(el) => (inputRefs.current[index] = el)}
            className="w-10 h-10 sm:w-12 sm:h-12 text-center text-xl sm:text-2xl font-bold bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        ))}
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 mt-6">
        Submit OTP
      </Button>
    </form>
  )
}
