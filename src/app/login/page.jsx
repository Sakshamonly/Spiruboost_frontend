"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import LoginForm from "@/app/login/components/login-form"
import SignupForm from "@/app/login/components/signup-form"
import OtpVerificationForm from "@/app/login/components/otp-verification-form"
import ForgotPasswordForm from "@/app/login/components/forgot-password-form"
import NewPasswordForm from "@/app/login/components/new-password-form"
import Navbar from "@/components/usable/navbar" // <-- Navbar import

export default function AuthPage() {
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
          } else {
            router.push("/dashboard")
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
