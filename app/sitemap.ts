import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://visiosonics.co.za",
      lastModified: new Date(),
    },
    {
      url: "https://visiosonics.co.za/about",
      lastModified: new Date(),
    },
    {
      url: "https://visiosonics.co.za/services",
      lastModified: new Date(),
    },
    {
      url: "https://visiosonics.co.za/process",
      lastModified: new Date(),
    },
    {
      url: "https://visiosonics.co.za/projects",
      lastModified: new Date(),
    },
    {
      url: "https://visiosonics.co.za/insights",
      lastModified: new Date(),
    },
    {
      url: "https://visiosonics.co.za/contact",
      lastModified: new Date(),
    },
  ];
}