import Hero from "@/components/sections/home/Hero";
import TrustBar from "@/components/sections/home/TrustBar";
import Philosophy from "@/components/sections/home/Philosophy";
import Experiences from "@/components/sections/home/Experiences";
import IntegrationMethod from "@/components/sections/home/IntegrationMethod";
import WhyVisioSonics from "@/components/sections/home/WhyVisioSonics";
import CTA from "@/components/sections/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Philosophy />
      <Experiences />
      <IntegrationMethod />
      <WhyVisioSonics />
      <CTA />
    </>
  );
}