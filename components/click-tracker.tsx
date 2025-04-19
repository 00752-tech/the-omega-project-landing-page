"use client"

import { useEffect } from "react"

export function ClickTracker() {
  useEffect(() => {
    // Function to track affiliate link clicks
    const trackAffiliateClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const affiliateLink = target.closest('button[onClick*="/go"]')

      if (affiliateLink) {
        // Get the source parameter from the onClick attribute
        const onClickAttr = affiliateLink.getAttribute("onClick") || ""
        const sourceMatch = onClickAttr.match(/source=([^&"']*)/)
        const source = sourceMatch ? sourceMatch[1] : "unknown"

        // Track the click in console (for debugging)
        console.log(`Affiliate link clicked: ${source}`)

        // Track in Google Analytics (if available)
        if (typeof window !== "undefined" && (window as any).gtag) {
          ;(window as any).gtag("event", "affiliate_click", {
            event_category: "affiliate",
            event_label: source,
            value: 1,
          })
        }

        // Track in Google Tag Manager (if available)
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          ;(window as any).dataLayer.push({
            event: "affiliate_click",
            affiliate_source: source,
          })
        }
      }
    }

    // Add event listener
    document.addEventListener("click", trackAffiliateClick)

    // Clean up
    return () => {
      document.removeEventListener("click", trackAffiliateClick)
    }
  }, [])

  return null
}
