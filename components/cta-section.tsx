"use client"

import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-blue-600 py-16 px-4 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey with The Omega Project?</h2>
        <p className="text-xl mb-8">
          Join thousands of successful entrepreneurs who have already transformed their lives with The Omega Project.
        </p>
        <button
          onClick={() => (window.location.href = "/go?source=blue_cta_get_started")}
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-600 bg-white hover:bg-gray-100"
        >
          Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
        </button>
        <p className="mt-4 text-sm opacity-90">
          *This is an affiliate link. We may earn a commission at no additional cost to you.
        </p>
      </div>
    </section>
  )
}
