import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Omega Project Affiliate Review",
  description:
    "Our privacy policy explains how we collect and use your information as an affiliate site for The Omega Project.",
}

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose max-w-none">
        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <p className="font-semibold">
            IMPORTANT: This website is an independent affiliate site promoting The Omega Project. We are not the
            official website of The Omega Project. This privacy policy applies only to this affiliate website.
          </p>
        </div>

        <p>Last updated: April 19, 2025</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          Welcome to theomegaproject.cc ("we," "our," or "us"). We are an independent affiliate website that promotes
          The Omega Project. We respect your privacy and are committed to protecting your personal data. This privacy
          policy will inform you about how we look after your personal data when you visit our website and tell you
          about your privacy rights and how the law protects you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. The Data We Collect About You</h2>
        <p>
          Personal data, or personal information, means any information about an individual from which that person can
          be identified. We may collect, use, store and transfer different kinds of personal data about you which we
          have grouped together as follows:
        </p>
        <ul className="list-disc pl-6 mt-4 mb-4">
          <li>Identity Data includes first name, last name, username or similar identifier.</li>
          <li>Contact Data includes email address and telephone numbers.</li>
          <li>
            Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone
            setting and location, browser plug-in types and versions, operating system and platform, and other
            technology on the devices you use to access this website.
          </li>
          <li>Usage Data includes information about how you use our website, products, and services.</li>
          <li>
            Marketing and Communications Data includes your preferences in receiving marketing from us and our third
            parties and your communication preferences.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Personal Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
          in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mt-4 mb-4">
          <li>To provide you with information about The Omega Project as an affiliate marketer.</li>
          <li>To track affiliate referrals when you click on our affiliate links.</li>
          <li>
            Where it is necessary for our legitimate interests (or those of a third party) and your interests and
            fundamental rights do not override those interests.
          </li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Affiliate Disclosure</h2>
        <p>
          This website contains affiliate links to The Omega Project. This means that if you click on one of our
          affiliate links and subsequently make a purchase, we will receive a commission from The Omega Project. This
          commission comes at no additional cost to you.
        </p>
        <p>
          We use cookies and similar tracking technologies to track the activity on our website and to identify when you
          click on our affiliate links. This helps ensure we receive proper credit for referring you to The Omega
          Project.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
          used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal
          data to those employees, agents, contractors, and other third parties who have a business need to know.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection laws in relation to your personal data,
          including the right to request access, correction, erasure, restriction, transfer, to object to processing, to
          portability of data and (where the lawful ground of processing is consent) to withdraw consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Links</h2>
        <p>
          This website may include links to The Omega Project and other third-party websites, plug-ins, and
          applications. Clicking on those links or enabling those connections may allow third parties to collect or
          share data about you. We do not control these third-party websites and are not responsible for their privacy
          statements. When you leave our website, we encourage you to read the privacy policy of every website you
          visit, including The Omega Project's official privacy policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us at
          admin@theomegaproject.cc.
        </p>
      </div>
    </div>
  )
}
