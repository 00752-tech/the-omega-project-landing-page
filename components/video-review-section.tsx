"use client"

import { ArrowRight } from "lucide-react"

export function VideoReviewSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Omega Project Review: <span className="text-blue-600">$1,654/Day Online Income System</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Watch this in-depth review of Aiden Booth's revolutionary Omega Project system that's helping everyday
            people generate consistent online income with Vulcan™ technology and ShopX Launchpad
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="aspect-video w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NINHHybinrA?si=e93OTMk6QObJgW0r"
              title="The Omega Project Review: $1,654/Day Online Income System"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="text-center mb-12">
          <button
            onClick={() => (window.location.href = "/go?source=video_review_cta")}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Get Started with The Omega Project <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <p className="mt-3 text-sm text-gray-500">
            *This is an affiliate link. We may earn a commission at no additional cost to you.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">
            Full Transcript: The Omega Project Review & 2025 Launch Details
          </h2>

          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Introduction to The Omega Project: A Revolutionary Online Income System
            </h3>
            <p className="mb-6">
              Hi everyone! Today I'm here to share an incredible opportunity for those seeking financial freedom and
              looking to simplify their journey. Let me introduce you to <strong>The Omega Project</strong>, created by
              the brilliant Aiden Booth, one of the top names in digital entrepreneurship.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Who is Aiden Booth? Expert in Simplified Online Income Systems
            </h3>
            <p className="mb-6">
              Aiden Booth is a globally recognized mentor and expert in building simplified systems for online income
              generation. He's renowned for turning complex strategies into practical, accessible methods that have
              empowered thousands worldwide to achieve financial independence.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              The Omega Project Launch: January 2025 Opportunity
            </h3>
            <p className="mb-6">
              Here's the exciting part: the next launch of The Omega Project is set for January 2025. If you want to be
              part of something revolutionary, now is the time to get ready!
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              What Makes The Omega Project Special: Japanese-Inspired Technology
            </h3>
            <p className="mb-6">
              Inspired by Japanese techniques and powered by cutting-edge three-click technology, this system is
              designed to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Deliver quick and predictable results</li>
              <li>Simplify the process of entering the online marketplace</li>
              <li>Be accessible even for complete beginners</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Unique Product Selection Strategy: Six-Figure Income Potential
            </h3>
            <p className="mb-6">
              The Omega Project focuses on selling products you'd never imagine could generate profit. Aiden and his
              team have used this exact method to generate six figures from individual items, and now you can too!
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Why The Omega Project Is Worth Your Time: Simplicity, Speed, Innovation
            </h3>
            <p className="mb-6">
              <strong>Simplicity:</strong> Perfect for anyone with zero online experience
              <br />
              <strong>Speed:</strong> Start seeing results quickly
              <br />
              <strong>Innovation:</strong> A unique method that's fun, exciting, and breaks away from the norm
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              How to Join The Omega Project: Secure Your Spot for January 2025
            </h3>
            <p className="mb-6">
              The January 2025 launch is a once-in-a-lifetime chance for those who want to excel in the digital space.{" "}
              <a
                href="/go?source=transcript_link"
                className="text-blue-600 hover:underline font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = "/go?source=transcript_link"
                }}
              >
                Click here to learn more
              </a>{" "}
              and secure your spot in this groundbreaking project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
