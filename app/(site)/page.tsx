import Page from "@/components/layout/Page";

import Hero from "@/components/home/Hero/Hero";
import TrustBar from "@/components/home/TrustBar";
import Philosophy from "@/components/home/Philosophy";
import Experiences from "@/components/home/Experiences";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Method from "@/components/home/Method";
import WhyVisioSonics from "@/components/home/WhyVisioSonics";
import Consultation from "@/components/home/Consultation";

export default function HomePage() {
  return (
    <Page>
      <Hero />
      <TrustBar />
      <Philosophy />
      <Experiences />
      <FeaturedProjects />
      <Method />
      <WhyVisioSonics />
      <Consultation />
    </Page>
  );
}