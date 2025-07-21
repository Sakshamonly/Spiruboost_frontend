"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { FcGoogle } from "react-icons/fc"

export default function LoginForm({ setView, router }) {
  const [identifier, setIdentifier] = useState("") // Can be email or mobile
  const [identifierType, setIdentifierType] = useState("email")
  const [password, setPassword] = useState("")
  const [identifierError, setIdentifierError] = useState("")

  const validateIdentifier = (value, type) => {
    if (!value) return "This field is required."
    if (type === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        return "Invalid email address."
      }
    } else if (type === "mobile") {
      if (!/^\d{10}$/.test(value)) {
        return "Mobile number must be 10 digits."
      }
    }
    return ""
  }

  const handleIdentifierChange = (e) => {
    const value = e.target.value
    if (identifierType === "mobile" && value.length > 10) return // Prevent typing more than 10 digits
    setIdentifier(value)
    setIdentifierError(validateIdentifier(value, identifierType))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const idError = validateIdentifier(identifier, identifierType)
    if (idError || !password) {
      setIdentifierError(idError)
      alert("Please fill in all required fields and correct any errors.")
      return
    }
    // Simulate login logic
    console.log("Login attempt:", { identifier, identifierType, password })
    router.push("/dashboard") // Redirect to dashboard
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-8">
      <div className="flex justify-center mb-6">
        <Image src="/placeholder.svg?height=80&width=80" alt="Spiruboost Logo" width={80} height={80} />
      </div>
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">Login</h2>
      <p className="text-center text-gray-600 text-base mb-6">
        Access your account to manage your orders and preferences.
      </p>
      <div>
        <Label htmlFor="identifier" className="text-black text-base mb-2 block">
          {identifierType === "email" ? "Email" : "Mobile Number"}
        </Label>
        <Input
          id="identifier"
          type={identifierType === "email" ? "email" : "tel"}
          placeholder={identifierType === "email" ? "m@example.com" : "e.g., 1234567890"}
          required
          value={identifier}
          onChange={handleIdentifierChange}
          maxLength={identifierType === "mobile" ? 10 : undefined}
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base py-2"
        />
        {identifierError && <p className="text-red-500 text-sm mt-1">{identifierError}</p>}
        <button
          type="button"
          onClick={() => setIdentifierType(identifierType === "email" ? "mobile" : "email")}
          className="text-sm text-blue-600 hover:underline mt-3 block"
        >
          Use {identifierType === "email" ? "Mobile Number" : "Email"} instead
        </button>
      </div>
      <div>
        <Label htmlFor="password" className="text-black text-base mb-2 block">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          maxLength={15} // Max 15 characters for password
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base py-2"
        />
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2 mt-4">
        <div className="flex items-center">
          <Checkbox id="remember-me" className="mr-2" />
          <Label htmlFor="remember-me" className="text-gray-600 text-base">
            Remember Me
          </Label>
        </div>
        <button
          type="button"
          onClick={() => setView("forgot-password")}
          className="text-base text-gray-600 hover:underline"
        >
          Forgot Password?
        </button>
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 text-lg py-3 mt-6"
      >
        Login
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
        New user?{" "}
        <button type="button" onClick={() => setView("signup")} className="text-blue-600 hover:underline font-medium">
          Sign up now
        </button>
      </p>
    </form>
  )
}
