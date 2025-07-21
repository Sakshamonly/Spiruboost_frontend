"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc"
import PasswordRequirements from "./password-requirements"
import { validatePassword } from "@/lib/auth-utils"

export default function SignupForm({ setView, setOtpFor }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dob, setDob] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [mobileError, setMobileError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [dobError, setDobError] = useState("")
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false)

  const passwordRequirementsMet = validatePassword(password).every((req) => req.fulfilled)

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match")
    } else {
      setConfirmPasswordError("")
    }
  }, [password, confirmPassword])

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

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (value && !/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Invalid email address.")
    } else {
      setEmailError("")
    }
  }

  const handleDobChange = (e) => {
    const value = e.target.value
    setDob(value)
    const selectedDate = new Date(value)
    const maxDate = new Date("2025-07-31") // July 2025
    if (selectedDate > maxDate) {
      setDobError("Date of Birth cannot be after July 2025.")
    } else {
      setDobError("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const dobValid = !dobError && dob !== ""
    const mobileValid = mobile.length === 10 && !mobileError
    const emailValid = email !== "" && !emailError
    const passwordValid = passwordRequirementsMet && password !== ""
    const confirmPasswordValid = !confirmPasswordError && confirmPassword !== ""

    if (
      !firstName ||
      !lastName ||
      !dobValid ||
      !mobileValid ||
      !emailValid ||
      !passwordValid ||
      !confirmPasswordValid
    ) {
      alert("Please fill in all required fields and correct any errors.")
      return
    }

    // Simulate signup logic
    console.log("Signup attempt:", { firstName, lastName, dob, mobile, email, password })
    setOtpFor("signup") // Set OTP context for signup
    setView("otp") // Show OTP verification
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-8">
      <div className="flex justify-center mb-6">
        <Image src="/placeholder.svg?height=80&width=80" alt="Spiruboost Logo" width={80} height={80} />
      </div>
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">Sign Up</h2>
      <p className="text-center text-gray-600 text-base mb-6">
        Join us to explore a world of natural products and exclusive offers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="first-name" className="text-black text-base mb-2 block">
            First Name
          </Label>
          <Input
            id="first-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base py-2"
          />
        </div>
        <div>
          <Label htmlFor="last-name" className="text-black text-base mb-2 block">
            Last Name
          </Label>
          <Input
            id="last-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base py-2"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="dob" className="text-black text-base mb-2 block">
          Date of Birth
        </Label>
        <Input
          id="dob"
          type="date"
          required
          value={dob}
          onChange={handleDobChange}
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base py-2"
        />
        {dobError && <p className="text-red-500 text-sm mt-1">{dobError}</p>}
      </div>
      <div>
        <Label htmlFor="mobile" className="text-black text-base mb-2 block">
          Mobile Number
        </Label>
        <Input
          id="mobile"
          type="tel"
          maxLength={10}
          required
          value={mobile}
          onChange={handleMobileChange}
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base py-2"
        />
        {mobileError && <p className="text-red-500 text-sm mt-1">{mobileError}</p>}
      </div>
      <div>
        <Label htmlFor="email-signup" className="text-black text-base mb-2 block">
          Email
        </Label>
        <Input
          id="email-signup"
          type="email"
          placeholder="m@example.com"
          required
          value={email}
          onChange={handleEmailChange}
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base py-2"
        />
        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      </div>
      <div>
        <Label htmlFor="password-signup" className="text-black text-base mb-2 block">
          Password
        </Label>
        <Input
          id="password-signup"
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
        <Label htmlFor="confirm-password" className="text-black text-base mb-2 block">
          Confirm Password
        </Label>
        <Input
          id="confirm-password"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          maxLength={15} // Max 15 characters for password
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base py-2"
        />
        {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 text-lg py-3 mt-6"
      >
        Sign Up
      </Button>
      <p className="text-center text-gray-600 text-base mt-4">Or continue with</p>
      <div className="flex justify-center mt-4">
        <Button
          type="button"
          variant="outline"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-600 border-blue-300 text-base py-3"
        >
          <FcGoogle className="h-5 w-5" />
          Continue with Google
        </Button>
      </div>
      <p className="text-center text-gray-600 text-base mt-6">
        Already have an account?{" "}
        <button type="button" onClick={() => setView("login")} className="text-blue-600 hover:underline font-medium">
          Login
        </button>
      </p>
    </form>
  )
}
