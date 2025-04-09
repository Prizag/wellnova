"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")

    // This is a mock authentication - in a real app, you would call your auth API
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock validation
      if (email === "admin@hospital.com" && password === "password") {
        router.push("/dashboard/admin")
      } else if (email === "doctor@hospital.com" && password === "password") {
        router.push("/dashboard/doctor")
      } else if (email === "patient@hospital.com" && password === "password") {
        router.push("/dashboard/patient")
      } else {
        setError("Invalid email or password")
      }
    } catch (err) {
      setError("An error occurred during login")
    } finally {
      setIsLoading(false)
    }
  }

  async function handleGoogleLogin() {
    setIsLoading(true)
    setError("")

    try {
      // Simulate Google auth
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // In a real app, you would redirect to Google OAuth
      router.push("/dashboard/patient") // Default role for demo
    } catch (err) {
      setError("An error occurred with Google login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4 py-2">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="name@example.com" required disabled={isLoading} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-xs text-sky-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <Input id="password" name="password" type="password" required disabled={isLoading} />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <Button variant="outline" type="button" className="w-full" onClick={handleGoogleLogin} disabled={isLoading}>
        <svg
          className="mr-2 h-4 w-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Google
      </Button>

      <div className="text-center text-sm text-muted-foreground">
        Demo credentials:
        <ul className="mt-1 space-y-1">
          <li>Admin: admin@hospital.com / password</li>
          <li>Doctor: doctor@hospital.com / password</li>
          <li>Patient: patient@hospital.com / password</li>
        </ul>
      </div>
    </div>
  )
}
