export function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is The Omega Project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Omega Project is an online income system featuring Vulcan™ technology and ShopX Launchpad for building automated ecommerce businesses. It provides tools, training, and support to help entrepreneurs build successful online businesses.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I earn with The Omega Project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "According to The Omega Project, their top beta-tester averaged $1,654.71 in daily sales. However, results vary significantly based on individual effort, experience, and market conditions. These results are not typical, and there's no guarantee you'll achieve similar results.",
        },
      },
      {
        "@type": "Question",
        name: "Does The Omega Project offer a money-back guarantee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, The Omega Project offers a 30-day money-back guarantee. If you're not satisfied with your purchase, you can request a refund within 30 days.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in The Omega Project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Omega Project includes: The Omega Masterplan (10-week blueprint), Live 'Genius' Training Sessions, ShopX Launchpad Technology, Product Vulcan Software, Traffic Titan System, Buyer Boost Conversion Tools, Expert Support Center Access, and Exclusive Bonus Materials.",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
}
