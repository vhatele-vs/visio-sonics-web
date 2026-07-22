const siteUrl = "https://visiosonics.co.za";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": `${siteUrl}/#organization`,

  name: "Visio Sonics",

  url: siteUrl,

  logo: `${siteUrl}/images/brand/visio-sonics-logo.svg`,

  description:
    "Visio Sonics engineers intelligent environments where architecture, technology, and human experience become one seamless system.",

  slogan: "Where Vision Meets Sound.",

  areaServed: [
    {
      "@type": "Country",
      name: "South Africa",
    },
    {
      "@type": "Continent",
      name: "Africa",
    },
  ],

  knowsAbout: [
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