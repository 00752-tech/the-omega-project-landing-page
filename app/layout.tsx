import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ClickTracker } from "@/components/click-tracker"
import { AffiliateBanner } from "@/components/affiliate-banner"
import { GoogleAnalytics } from "@/components/google-analytics"
import { Suspense } from "react"
import { SEOStructuredData } from "@/components/seo-structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Omega Project Review: $1,654/Day Online Income System? [2025]",
  description:
    "Honest review of The Omega Project. See how this system helped beta testers earn $1,654/day with Vulcan™ technology. Is it worth your investment?",
  keywords:
    "Omega Project review, online income system, Vulcan technology, ShopX Launchpad, make money online, ecommerce automation",
  verification: {
    google: "Ufjsnr2d1f26tHU7TyfcYJp80pgR3RBjqUUCDiPEYn4",
    bing: "0D933C8A8D6D92AC7CECDB6E21259A4F",
    other: {
      me: ["admin@theomegaproject.cc"],
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* These are fallback verification tags for older crawlers */}
        <meta name="google-site-verification" content="Ufjsnr2d1f26tHU7TyfcYJp80pgR3RBjqUUCDiPEYn4" />
        <meta name="msvalidate.01" content="0D933C8A8D6D92AC7CECDB6E21259A4F" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <GoogleAnalytics />
          <SEOStructuredData />
          <AffiliateBanner />
          {children}
          <ClickTracker />
        </Suspense>
      </body>
    </html>
  )
}
