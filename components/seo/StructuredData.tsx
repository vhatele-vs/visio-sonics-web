const siteUrl = "https://visiosonics.co.za";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  "@id": `${siteUrl}/#organization`,

  name: "Visio Sonics",

  url: siteUrl,

  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/brand/visio-sonics-logo.svg`,
  },

  image: `${siteUrl}/images/og/visio-sonics-og.webp`,

  description:
    "Visio Sonics engineers intelligent environments where architecture, technology, and human experience become one seamless system.",

  slogan: "Where Vision Meets Sound.",

  telephone: "+27876573217",

  email: "hello@visiosonics.co.za",

  priceRange: "$$$",

  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },

  serviceType: [
    "Luxury Technology Integration",
    "Home Automation",
    "Audio Visual Integration",
    "Home Cinema",
    "Multi-Room Audio",
    "Intelligent Lighting",
    "Networking",
    "Security Integration",
    "Building Automation",
  ],

  sameAs: [
    "https://www.linkedin.com/company/visio-sonics/",
    "https://www.instagram.com/visiosonics/",
    "https://www.facebook.com/visiosonics/",
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
