"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function GoPage() {
  const searchParams = useSearchParams()
  const source = searchParams.get("source") || "unknown"

  useEffect(() => {
    // Base affiliate link
    const baseUrl = "https://828b6-d1j7dx0x5esds-4rh44p.hop.clickbank.net"

    // Add UTM parameters for tracking
    const redirectUrl = `${baseUrl}?utm_source=omega_project&utm_medium=website&utm_campaign=${source}`

    // Redirect after a short delay
    const timer = setTimeout(() => {
      window.location.href = redirectUrl
    }, 500)

    return () => clearTimeout(timer)
  }, [source])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-600 text-white p-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Redirecting you to The Omega Project...</h1>
        <p className="mb-8">Please wait a moment while we redirect you to the secure payment page.</p>
        <div className="w-16 h-16 border-t-4 border-white rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  )
}
