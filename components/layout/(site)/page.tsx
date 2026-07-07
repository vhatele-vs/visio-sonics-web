import Hero from "@/components/sections/home/Hero";
import Philosophy from "@/components/sections/home/Philosophy";
import Experiences from "@/components/sections/home/Experiences";
import IntegrationMethod from "@/components/sections/home/IntegrationMethod";
import WhyVisioSonics from "@/components/sections/home/WhyVisioSonics";
import CTA from "@/components/sections/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Experiences />
      <IntegrationMethod />
      <WhyVisioSonics />
      <CTA />
    </>
  );
}