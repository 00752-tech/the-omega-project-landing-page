"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Affiliate Promotion
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm uppercase font-medium text-gray-600 mb-4">
              ONLY PLATFORM WITH VULCAN™ TECHNOLOGY
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The #1 Online Income Secret for 2025 <span className="text-blue-600">Finally Revealed</span>
            </h1>
            <p className="text-lg mb-8">
              Unlock the surprising truth behind astonishing online success stories. Our top beta-tester averaged
              $1,654.71 in daily sales using our revolutionary system. Even if you're skeptical about another
              "revolutionary" system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => (window.location.href = "/go?source=hero_how_others")}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                How others use it
              </button>
              <button
                onClick={() => (window.location.href = "/go?source=hero_try_risk_free")}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Try risk free <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/confident-executive.png"
              alt="Business professional"
              width={500}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
