import type { MetadataRoute } from "next";

const siteUrl = "https://visiosonics.co.za";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
