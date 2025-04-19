import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support | Omega Project Affiliate Review",
  description:
    "Get support information for The Omega Project. Learn how to contact official support channels as an affiliate site visitor.",
}

export default function Support() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Support</h1>

      <div className="prose max-w-none">
        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <p className="font-semibold">
            IMPORTANT: This website is an independent affiliate site promoting The Omega Project. We are not the
            official website of The Omega Project. For official product support, please contact The Omega Project
            directly.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Affiliate Support Information</h2>
        <p>
          As an affiliate website for The Omega Project, we provide information about the product based on publicly
          available details and materials provided by The Omega Project. While we strive to provide accurate
          information, we are not directly involved in the development, delivery, or support of The Omega Project.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Frequently Asked Questions About Our Affiliate Site</h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-xl font-medium">Are you the official website for The Omega Project?</h3>
            <p className="mt-2">
              No, we are not the official website for The Omega Project. We are an independent affiliate site that
              promotes The Omega Project and earns commissions on qualifying purchases made through our affiliate links.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Do you provide customer support for The Omega Project?</h3>
            <p className="mt-2">
              No, we do not provide official customer support for The Omega Project. If you have purchased the product
              and need assistance, please contact The Omega Project's official support team directly at their official
              website.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">How do I request a refund for The Omega Project?</h3>
            <p className="mt-2">
              Refund requests must be submitted directly to The Omega Project through their official channels. According
              to their policy, they offer a 30-day money-back guarantee. Please contact their support team directly to
              process your refund request.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Why should I purchase through your affiliate link?</h3>
            <p className="mt-2">
              Purchasing through our affiliate link doesn't cost you anything extra, but it helps support our website
              and allows us to continue providing information about products like The Omega Project. You'll receive the
              same product and support from The Omega Project regardless of whether you use our affiliate link.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Information About The Omega Project (Based on Public Information)
        </h2>
        <p>Based on publicly available information, The Omega Project appears to include the following features:</p>

        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>The Omega Masterplan - 10-week blueprint</li>
          <li>Live 'Genius' Training Sessions</li>
          <li>ShopX Launchpad Technology</li>
          <li>Product Vulcan Software</li>
          <li>Traffic Titan System</li>
          <li>Buyer Boost Conversion Tools</li>
          <li>30-Day Money-Back Guarantee</li>
          <li>Expert Support Center Access</li>
          <li>Exclusive Bonus Materials</li>
        </ul>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-medium text-blue-800">Contact The Omega Project Official Support</h3>
          <p className="mt-2">
            For official product support, please contact The Omega Project directly through their official website. As
            an affiliate, we do not have access to your account information or the ability to provide technical support
            for the product.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Our Affiliate Site</h2>
        <p>If you have questions about our affiliate website or need to contact us directly:</p>

        <div className="mt-4 space-y-2">
          <p>
            <strong>Email:</strong> admin@theomegaproject.cc
          </p>
          <p>
            <strong>Response Time:</strong> We aim to respond to all inquiries within 48 business hours
          </p>
        </div>
      </div>
    </div>
  )
}
