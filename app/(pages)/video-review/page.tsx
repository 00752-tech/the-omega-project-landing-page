import { VideoReviewSection } from "@/components/video-review-section"
import type { Metadata } from "next"

// Update the metadata to optimize title length while maintaining keywords
export const metadata: Metadata = {
  title: "Omega Project Video Review | $1,654/Day System [2025]",
  description:
    "Watch our in-depth video review of The Omega Project. Learn how this system helps generate $1,654/day with Vulcan™ technology.",
  keywords:
    "Omega Project video review, Aiden Booth, online income system, Vulcan technology, ShopX Launchpad, make money online 2025",
}

export default function VideoReviewPage() {
  return (
    <div>
      <h1 className="sr-only">The Omega Project Video Review: $1,654/Day Online Income System</h1>
      <VideoReviewSection />
    </div>
  )
}
