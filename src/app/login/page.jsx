"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { FcGoogle } from "react-icons/fc"
import { CheckCircle2, XCircle, Eye, EyeOff } from "lucide-react"
import Navbar from "@/components/usable/navbar"

// Helper for password validation
const validatePassword = (password) => {
  const requirements = [
    { text: "8-15 characters", fulfilled: password.length >= 8 && password.length <= 15 },
    { text: "At least 1 uppercase", fulfilled: /[A-Z]/.test(password) },
    { text: "At least 1 lowercase", fulfilled: /[a-z]/.test(password) },
    { text: "At least 1 number", fulfilled: /[0-9]/.test(password) },
    { text: "At least 1 special character", fulfilled: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ]
  return requirements
}

// Password Requirements Component
function PasswordRequirements({ password }) {
  const requirements = validatePassword(password)

  return (
    <div className="mt-2 p-3 bg-gray-100 rounded-md text-sm">
      <h4 className="font-semibold text-gray-800 mb-2">Password Requirements:</h4>
      <ul className="space-y-1">
        {requirements.map((req, index) => (
          <li key={index} className={`flex items-center gap-2 ${req.fulfilled ? "text-green-600" : "text-red-500"}`}>
            {req.fulfilled ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
            <span>{req.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Main Auth Component
export default function AuthComponent() {
  const [view, setView] = useState("login") // 'login', 'signup', 'otp', 'forgot-password', 'new-password'
  const [otpFor, setOtpFor] = useState("signup") // Tracks what the OTP is for
  const router = useRouter()

  const renderView = () => {
    switch (view) {
      case "login":
        return <LoginForm setView={setView} router={router} />
      case "signup":
        return <SignupForm setView={setView} setOtpFor={setOtpFor} />
      case "otp":
        const onOtpSuccess = () => {
          if (otpFor === "forgot-password") {
            setView("new-password")
          } 
        }
        return <OtpVerificationForm onOtpSuccess={onOtpSuccess} />
      case "forgot-password":
        return <ForgotPasswordForm setView={setView} setOtpFor={setOtpFor} />
      case "new-password":
        return <NewPasswordForm setView={setView} router={router} />
      default:
        return <LoginForm setView={setView} router={router} />
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#f0fdf4] transition-colors duration-500 ease-in-out">
        <div className="w-full max-w-md mx-auto transition-opacity duration-500 ease-in-out">{renderView()}</div>
      </div>
    </>
  )
}

// Login Form Component
function LoginForm({ setView, router }) {
  const [identifier, setIdentifier] = useState("") // Can be email or mobile
  const [identifierType, setIdentifierType] = useState("email")
  const [password, setPassword] = useState("")
  const [identifierError, setIdentifierError] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(false)

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
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-8">
      {/* Logo removed */}
      <h2 className="text-3xl font-bold text-center text-blue-600">Login</h2>
      <p className="text-center text-gray-600 text-sm">Access your account to manage your orders and preferences.</p>
      <div>
        <Label htmlFor="identifier" className="text-black">
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
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {identifierError && <p className="text-red-500 text-sm mt-1">{identifierError}</p>}
        <button
          type="button"
          onClick={() => setIdentifierType(identifierType === "email" ? "mobile" : "email")}
          className="text-sm text-blue-600 hover:underline mt-2 block"
        >
          Use {identifierType === "email" ? "Mobile Number" : "Email"} instead
        </button>
      </div>
      <div>
        <Label htmlFor="password" className="text-black">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={passwordVisible ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength={15} // Max 15 characters for password
            className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            tabIndex={-1}
            aria-label={passwordVisible ? "Hide password" : "Show password"}
          >
            {passwordVisible ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center">
          <Checkbox id="remember-me" className="mr-2" />
          <Label htmlFor="remember-me" className="text-gray-600">
            Remember Me
          </Label>
        </div>
        <button
          type="button"
          onClick={() => setView("forgot-password")}
          className="text-sm text-gray-600 hover:underline"
        >
          Forgot Password?
        </button>
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
        Login
      </Button>
      <p className="text-center text-gray-600 text-sm">Or continue with</p>
      <div className="flex justify-center">
        <Button
          type="button"
          variant="outline"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-600 border-blue-300"
        >
          <FcGoogle className="h-5 w-5" />
          Continue with Google
        </Button>
      </div>
      <p className="text-center text-gray-600">
        New user?{" "}
        <button type="button" onClick={() => setView("signup")} className="text-blue-600 hover:underline font-medium">
          Sign up now
        </button>
      </p>
    </form>
  )
}

// Signup Form Component
function SignupForm({ setView, setOtpFor }) {
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
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

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
      {/* Logo removed */}
      <h2 className="text-3xl font-bold text-center text-blue-600">Sign Up</h2>
      <p className="text-center text-gray-600 text-sm">
        Join us to explore a world of natural products and exclusive offers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="first-name" className="text-black">
            First Name
          </Label>
          <Input
            id="first-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <Label htmlFor="last-name" className="text-black">
            Last Name
          </Label>
          <Input
            id="last-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="dob" className="text-black">
          Date of Birth
        </Label>
        <Input
          id="dob"
          type="date"
          required
          value={dob}
          onChange={handleDobChange}
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {dobError && <p className="text-red-500 text-sm mt-1">{dobError}</p>}
      </div>
      <div>
        <Label htmlFor="mobile" className="text-black">
          Mobile Number
        </Label>
        <Input
          id="mobile"
          type="tel"
          maxLength={10}
          required
          value={mobile}
          onChange={handleMobileChange}
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {mobileError && <p className="text-red-500 text-sm mt-1">{mobileError}</p>}
      </div>
      <div>
        <Label htmlFor="email-signup" className="text-black">
          Email
        </Label>
        <Input
          id="email-signup"
          type="email"
          placeholder="m@example.com"
          required
          value={email}
          onChange={handleEmailChange}
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      </div>
      <div>
        <Label htmlFor="password-signup" className="text-black">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password-signup"
            type={passwordVisible ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setShowPasswordRequirements(true)}
            onBlur={() => setShowPasswordRequirements(false)}
            maxLength={15} // Max 15 characters for password
            className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
          />
          <button
            type="button"
            onClick={() => setPasswordVisible((v) => !v)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            tabIndex={-1}
            aria-label={passwordVisible ? "Hide password" : "Show password"}
          >
            {passwordVisible ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
          </button>
        </div>
        {showPasswordRequirements && <PasswordRequirements password={password} />}
      </div>
      <div>
        <Label htmlFor="confirm-password" className="text-black">
          Confirm Password
        </Label>
        <div className="relative">
          <Input
            id="confirm-password"
            type={confirmPasswordVisible ? "text" : "password"}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            maxLength={15} // Max 15 characters for password
            className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
          />
          <button
            type="button"
            onClick={() => setConfirmPasswordVisible((v) => !v)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            tabIndex={-1}
            aria-label={confirmPasswordVisible ? "Hide password" : "Show password"}
          >
            {confirmPasswordVisible ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
          </button>
        </div>
        {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
        Sign Up
      </Button>
      <p className="text-center text-gray-600 text-sm">Or continue with</p>
      <div className="flex justify-center">
        <Button
          type="button"
          variant="outline"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-600 border-blue-300"
        >
          <FcGoogle className="h-5 w-5" />
          Continue with Google
        </Button>
      </div>
      <p className="text-center text-gray-600">
        Already have an account?{" "}
        <button type="button" onClick={() => setView("login")} className="text-blue-600 hover:underline font-medium">
          Login
        </button>
      </p>
    </form>
  )
}

// OTP Verification Component
function OtpVerificationForm({ onOtpSuccess }) {
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

    // Focus next input
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
      {/* Logo removed */}
      <h2 className="text-3xl font-bold text-center text-blue-600">OTP Verification</h2>
      <p className="text-center text-gray-600 text-sm">OTP has been sent to your mobile number</p>
      <div className="flex justify-center gap-2">
        {otp.map((digit, index) => (
          <Input
            key={index}
            type="text"
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
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Submit OTP
      </Button>
    </form>
  )
}

// Forgot Password Component
function ForgotPasswordForm({ setView, setOtpFor }) {
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
      {/* Logo removed */}
      <h2 className="text-3xl font-bold text-center text-blue-600">Reset Password</h2>
      <p className="text-center text-gray-600 text-sm">
        Enter your registered mobile number to receive a verification code.
      </p>
      <div>
        <Label htmlFor="mobile-reset" className="text-black">
          Mobile Number
        </Label>
        <Input
          id="mobile-reset"
          type="tel"
          maxLength={10}
          required
          value={mobile}
          onChange={handleMobileChange}
          className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {mobileError && <p className="text-red-500 text-sm mt-1">{mobileError}</p>}
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Submit
      </Button>
      <p className="text-center text-gray-600">
        Remembered your password?{" "}
        <button type="button" onClick={() => setView("login")} className="text-blue-600 hover:underline font-medium">
          Login
        </button>
      </p>
    </form>
  )
}

// New Password Component (after Forgot Password OTP)
function NewPasswordForm({ setView, router }) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

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
      {/* Logo removed */}
      <h2 className="text-3xl font-bold text-center text-blue-600">Set New Password</h2>
      <p className="text-center text-gray-600 text-sm">Create a strong, new password for your account.</p>
      <div>
        <Label htmlFor="new-password" className="text-black">
          New Password
        </Label>
        <div className="relative">
          <Input
            id="new-password"
            type={passwordVisible ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setShowPasswordRequirements(true)}
            onBlur={() => setShowPasswordRequirements(false)}
            maxLength={15} // Max 15 characters for password
            className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
          />
          <button
            type="button"
            onClick={() => setPasswordVisible((v) => !v)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            tabIndex={-1}
            aria-label={passwordVisible ? "Hide password" : "Show password"}
          >
            {passwordVisible ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
          </button>
        </div>
        {showPasswordRequirements && <PasswordRequirements password={password} />}
      </div>
      <div>
        <Label htmlFor="confirm-new-password" className="text-black">
          Confirm New Password
        </Label>
        <div className="relative">
          <Input
            id="confirm-new-password"
            type={confirmPasswordVisible ? "text" : "password"}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            maxLength={15} // Max 15 characters for password
            className="bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
          />
          <button
            type="button"
            onClick={() => setConfirmPasswordVisible((v) => !v)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            tabIndex={-1}
            aria-label={confirmPasswordVisible ? "Hide password" : "Show password"}
          >
            {confirmPasswordVisible ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
          </button>
        </div>
        {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Reset Password
      </Button>
    </form>
  )
}
