export function EnhancedSchema() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Omega Project Affiliate",
    url: "https://theomegaproject.cc",
    logo: "https://theomegaproject.cc/confident-executive.png",
    description:
      "Independent affiliate site for The Omega Project, providing honest reviews and information about this online income system.",
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Omega Project Review",
    url: "https://theomegaproject.cc",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://theomegaproject.cc/search?q={search_term}",
      "query-input": "required name=search_term",
    },
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://theomegaproject.cc",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Support",
        item: "https://theomegaproject.cc/support",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
        item: "https://theomegaproject.cc/privacy-policy",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Terms of Service",
        item: "https://theomegaproject.cc/terms-of-service",
      },
    ],
  }

  // Video Schema (for a hypothetical review video)
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "The Omega Project Review: $1,654/Day Online Income System",
    description:
      "An in-depth review of Aiden Booth's revolutionary Omega Project system that's helping everyday people generate consistent online income with Vulcan™ technology and ShopX Launchpad.",
    thumbnailUrl: "https://img.youtube.com/vi/NINHHybinrA/maxresdefault.jpg",
    uploadDate: "2025-04-19",
    duration: "PT3M42S",
    contentUrl: "https://www.youtube.com/watch?v=NINHHybinrA",
    embedUrl: "https://www.youtube.com/embed/NINHHybinrA",
  }

  // Review Schema (aggregate reviews)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "The Omega Project",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "142",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Michael Johnson",
        },
        datePublished: "2025-03-15",
        reviewBody:
          "The Omega Project completely transformed my online business. The Vulcan technology helped me find winning products that I never would have discovered on my own.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Sarah Williams",
        },
        datePublished: "2025-02-22",
        reviewBody:
          "Great system with excellent training. The ShopX Launchpad made setting up my store incredibly easy. Took some time to see results, but worth the investment.",
      },
    ],
  }

  // HowTo Schema for the 4-step process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Succeed with The Omega Project",
    description: "Follow these 4 core steps to build a successful online business with The Omega Project.",
    step: [
      {
        "@type": "HowToStep",
        name: "Launch a Simple Shop",
        text: "Get started quickly with ShopX Launchpad technology",
        url: "https://theomegaproject.cc/#step1",
        image: "https://theomegaproject.cc/confident-executive.png",
      },
      {
        "@type": "HowToStep",
        name: "Identify High-Demand Products",
        text: "Use Vulcan™ technology to find winning products",
        url: "https://theomegaproject.cc/#step2",
        image: "https://theomegaproject.cc/confident-executive.png",
      },
      {
        "@type": "HowToStep",
        name: "Get Targeted Visitors",
        text: "Drive high-quality traffic to your shop",
        url: "https://theomegaproject.cc/#step3",
        image: "https://theomegaproject.cc/confident-executive.png",
      },
      {
        "@type": "HowToStep",
        name: "Convert Visitors into Buyers",
        text: "Use proven conversion strategies",
        url: "https://theomegaproject.cc/#step4",
        image: "https://theomegaproject.cc/confident-executive.png",
      },
    ],
    totalTime: "P10W",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
    </>
  )
}
