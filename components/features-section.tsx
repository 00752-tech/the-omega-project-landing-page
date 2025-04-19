import { Check } from "lucide-react"

export function FeaturesSection() {
  const features = [
    "The Omega Masterplan - 10-week blueprint",
    "Live 'Genius' Training Sessions",
    "ShopX Launchpad Technology",
    "Product Vulcan Software",
    "Traffic Titan System",
    "Buyer Boost Conversion Tools",
    "30-Day Money-Back Guarantee",
    "Expert Support Center Access",
    "Exclusive Bonus Materials",
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Everything You Need to Succeed with The Omega Project
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          The Omega Project provides you with all the tools, training, and support needed to build a successful online
          business.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
