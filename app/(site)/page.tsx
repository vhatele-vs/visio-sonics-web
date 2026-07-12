import Hero from "@/components/sections/home/Hero";
import TrustBar from "@/components/sections/home/TrustBar";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import IntegrationMethod from "@/components/sections/home/IntegrationMethod";
import WhyVisioSonics from "@/components/sections/home/WhyVisioSonics";
import CallToAction from "@/components/sections/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProjects />
      <IntegrationMethod />
      <WhyVisioSonics />
      <CallToAction />
    </>
  );
}