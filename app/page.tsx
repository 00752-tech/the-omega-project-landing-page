import { HeroSection } from "@/components/hero-section"
import { CoreStepsSection } from "@/components/core-steps-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { SEOStructuredData } from "@/components/seo-structured-data"
import { FAQSchema } from "@/components/faq-schema"
import { EnhancedSchema } from "@/components/enhanced-schema"
import { VideoReviewSection } from "@/components/video-review-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SEOStructuredData />
      <FAQSchema />
      <EnhancedSchema />
      <HeroSection />
      <VideoReviewSection />
      <CoreStepsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
