import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">© 2025 theomegaproject.cc. All rights reserved.</p>

          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-gray-700">
              Terms of Service
            </Link>
            <Link href="/support" className="text-sm text-gray-500 hover:text-gray-700">
              Support
            </Link>
            <Link href="/video-review" className="text-sm text-gray-500 hover:text-gray-700">
              Video Review
            </Link>
          </div>

          <div className="mt-6 max-w-4xl mx-auto">
            <p className="text-sm text-gray-500 text-center font-semibold mb-2">
              IMPORTANT: This website is not the official site of The Omega Project. We are an independent affiliate.
            </p>

            <p className="text-xs text-gray-500 text-center">
              <strong>Affiliate Disclosure:</strong> This website is an independent affiliate site that promotes The
              Omega Project. As an affiliate, we earn commissions on qualifying purchases made through our affiliate
              links at no additional cost to you. The Omega Project is owned and operated by its respective company, and
              we are not directly affiliated with the product creators.
            </p>

            <p className="mt-2 text-xs text-gray-500 text-center">
              <strong>Results Disclaimer:</strong> The results stated on this website are based on testimonials shared
              by The Omega Project or its users. These results are not typical, and your results may vary significantly.
              We do not guarantee that you will achieve similar results. Success depends on many factors including your
              background, experience, and work ethic.
            </p>

            <p className="mt-2 text-xs text-gray-500 text-center">
              <strong>FTC Compliance:</strong> In accordance with FTC guidelines, we disclose that this website contains
              affiliate links that earn us a commission when a purchase is made. Our reviews and recommendations are
              based on information provided by The Omega Project and publicly available sources. We strive to provide
              honest opinions but are compensated for referrals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
