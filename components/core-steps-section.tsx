import { Store, TrendingUp, Users, DollarSign } from "lucide-react"

export function CoreStepsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          The 4 Core Steps to Success with The Omega Project
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div id="step1" className="border rounded-lg p-6 flex flex-col items-start">
            <div className="bg-blue-100 p-3 rounded-lg mb-4">
              <Store className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Launch a Simple Shop</h3>
            <p className="text-gray-600">Get started quickly with our ShopX Launchpad technology</p>
          </div>

          {/* Step 2 */}
          <div id="step2" className="border rounded-lg p-6 flex flex-col items-start">
            <div className="bg-blue-100 p-3 rounded-lg mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Identify High-Demand Products</h3>
            <p className="text-gray-600">Use Vulcan™ technology to find winning products</p>
          </div>

          {/* Step 3 */}
          <div id="step3" className="border rounded-lg p-6 flex flex-col items-start">
            <div className="bg-blue-100 p-3 rounded-lg mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Get Targeted Visitors</h3>
            <p className="text-gray-600">Drive high-quality traffic to your shop</p>
          </div>

          {/* Step 4 */}
          <div id="step4" className="border rounded-lg p-6 flex flex-col items-start">
            <div className="bg-blue-100 p-3 rounded-lg mb-4">
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">4. Convert Visitors into Buyers</h3>
            <p className="text-gray-600">Use our proven conversion strategies</p>
          </div>
        </div>
      </div>
    </section>
  )
}
