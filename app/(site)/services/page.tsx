import type { Metadata } from "next";

import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesOverview from "@/components/sections/services/ServicesOverview";
import ServiceCategories from "@/components/sections/services/ServiceCategories";
import IntegrationProcess from "@/components/sections/services/IntegrationProcess";
import WhyChooseUs from "@/components/sections/services/WhyChooseUs";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Luxury Technology Integration Services",

  description:
    "Explore Visio Sonics integration services across home automation, audio visual, home cinema, networking, security, lighting, and intelligent environments.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Luxury Technology Integration Services | Visio Sonics",

    description:
      "Explore Visio Sonics integration services across home automation, audio visual, home cinema, networking, security, lighting, and intelligent environments.",

    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServiceCategories />
      <IntegrationProcess />
      <WhyChooseUs />
      <ServicesCTA />
    </>
  );
}