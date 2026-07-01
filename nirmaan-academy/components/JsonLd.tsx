const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nirmaanacademy.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Nirmaan Academy",
  url: siteUrl,
  logo: `${siteUrl}/nirmaan-logo.png`,
  description:
    "Nirmaan Academy offers expert DDCET coaching, degree engineering, and diploma engineering classes in Ahmedabad.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  telephone: "+91-9979888886",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "247",
    reviewCount: "247",
  },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "DDCET Coaching Program",
  description:
    "Expert DDCET coaching for diploma to degree engineering entrance exam. Comprehensive study material, experienced faculty, and proven track record of top rankers.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Nirmaan Academy",
    url: siteUrl,
  },
  educationalCredentialAwarded: "Engineering Admission",
  offers: {
    "@type": "Offer",
    category: "Paid",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nirmaan Academy",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function JsonLd() {
  const jsonLdArray = [organizationJsonLd, courseJsonLd, websiteJsonLd];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdArray)
          .replace(/</g, "\\u003c"),
      }}
    />
  );
}
