import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesOverview from "@/components/sections/services/ServicesOverview";
import ServiceCategories from "@/components/sections/services/ServiceCategories";
import IntegrationProcess from "@/components/sections/services/IntegrationProcess";
import WhyChooseUs from "@/components/sections/services/WhyChooseUs";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

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