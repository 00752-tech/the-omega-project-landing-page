export function SEOStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "The Omega Project",
    description:
      "An online income system featuring Vulcan™ technology and ShopX Launchpad for building automated ecommerce businesses.",
    image: "https://theomegaproject.cc/confident-executive.png",
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.7",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Affiliate Review Team",
      },
      reviewBody:
        "The Omega Project provides a comprehensive system for building an online business with their proprietary Vulcan™ technology and ShopX Launchpad. Beta testers have reported earning an average of $1,654.71 in daily sales.",
    },
    offers: {
      "@type": "Offer",
      url: "https://theomegaproject.cc/go",
      priceCurrency: "USD",
      price: "997.00",
      availability: "https://schema.org/InStock",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "USD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: "0",
            maxValue: "0",
            unitCode: "HUR",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: "0",
            maxValue: "0",
            unitCode: "HUR",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
