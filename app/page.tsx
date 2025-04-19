import { HeroSection } from "@/components/hero-section"
import { CoreStepsSection } from "@/components/core-steps-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { SEOStructuredData } from "@/components/seo-structured-data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SEOStructuredData />
      <HeroSection />
      <CoreStepsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
