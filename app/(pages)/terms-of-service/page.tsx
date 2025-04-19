import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Omega Project Affiliate Review",
  description:
    "Terms and conditions for using our affiliate website for The Omega Project. Learn about our affiliate relationship.",
}

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <div className="prose max-w-none">
        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <p className="font-semibold">
            IMPORTANT: This website is an independent affiliate site promoting The Omega Project. We are not the
            official website of The Omega Project. These terms of service apply only to this affiliate website.
          </p>
        </div>

        <p>Last updated: April 19, 2025</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          Welcome to theomegaproject.cc. These Terms of Service ("Terms") govern your use of our website located at
          theomegaproject.cc (the "Service") operated by us as an independent affiliate of The Omega Project.
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the
          terms, then you may not access the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Affiliate Relationship</h2>
        <p>
          This website is operated by an independent affiliate of The Omega Project. We are not the creators, owners, or
          operators of The Omega Project. We promote The Omega Project as an affiliate and earn commissions on
          qualifying purchases made through our affiliate links.
        </p>
        <p>
          When you click on our affiliate links and make a purchase, you are entering into a contract with The Omega
          Project, not with us. Any purchases, subscriptions, or services you acquire are provided directly by The Omega
          Project, and we are not responsible for the delivery, quality, or support of these products or services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer of Warranties</h2>
        <p>
          The information about The Omega Project provided on this website is based on publicly available information
          and materials provided by The Omega Project. We strive to ensure the accuracy of this information, but we
          cannot guarantee its completeness, reliability, or accuracy.
        </p>
        <p>
          We do not make any warranties or representations regarding The Omega Project or the results you may achieve by
          using it. Any testimonials or success stories shared on this website are not guarantees of similar results.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Refunds and Customer Support</h2>
        <p>
          All refund requests and customer support inquiries related to The Omega Project must be directed to The Omega
          Project's official support channels. As an affiliate, we do not process refunds or provide technical support
          for The Omega Project.
        </p>
        <p>
          The Omega Project reportedly offers a 30-day money-back guarantee on all purchases. Please refer to The Omega
          Project's official terms of service for specific details about their refund policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
        <p>
          The content on this website, except for content specifically attributed to The Omega Project, is owned by us.
          The Omega Project name, logo, and product names are trademarks of The Omega Project and are used with
          permission for promotional purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation Of Liability</h2>
        <p>
          In no event shall we, our directors, employees, partners, agents, suppliers, or affiliates, be liable for any
          indirect, incidental, special, consequential or punitive damages, including without limitation, loss of
          profits, data, use, goodwill, or other intangible losses, resulting from your use of The Omega Project or any
          products or services purchased through our affiliate links.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the United States, without regard
          to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
          material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole discretion.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at admin@theomegaproject.cc.</p>
      </div>
    </div>
  )
}
