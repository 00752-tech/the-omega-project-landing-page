"use client"

import { useSearchParams } from "next/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  // This would normally fetch real search results
  // For now, we'll just show some static results related to The Omega Project
  const searchResults = [
    {
      title: "The Omega Project Review: Is It Worth Your Investment?",
      url: "/",
      description:
        "An honest review of The Omega Project, including its features, benefits, and how it can help you build an online business.",
    },
    {
      title: "The 4 Core Steps to Success with The Omega Project",
      url: "/#step1",
      description:
        "Learn about the 4 core steps to success with The Omega Project, including launching a shop, finding products, getting traffic, and converting visitors.",
    },
    {
      title: "Support for The Omega Project",
      url: "/support",
      description: "Get support information for The Omega Project and learn how to contact official support channels.",
    },
    {
      title: "Privacy Policy for The Omega Project Affiliate Site",
      url: "/privacy-policy",
      description:
        "Our privacy policy explains how we collect and use your information as an affiliate site for The Omega Project.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="max-w-6xl mx-auto py-4 px-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-grow py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">
            Search Results for: <span className="text-blue-600">{query}</span>
          </h1>

          {searchResults.length > 0 ? (
            <div className="space-y-6">
              {searchResults.map((result, index) => (
                <div key={index} className="border-b pb-4">
                  <h2 className="text-xl font-semibold mb-2">
                    <Link href={result.url} className="text-blue-600 hover:underline">
                      {result.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600">{result.description}</p>
                  <p className="text-sm text-green-700 mt-1">{result.url}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No results found for "{query}". Please try another search term.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
