import type { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import EditorialIntro from "@/components/sections/EditorialIntro";
import SplitFeature from "@/components/sections/SplitFeature";
import ImageNarrative from "@/components/sections/ImageNarrative";
import FeatureList from "@/components/sections/FeatureList";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import CTASection from "@/components/ui/CTASection";

import { luxuryLivingFeatures } from "@/lib/content/luxury-living";
import { luxuryLivingProject } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Luxury Living | Visio Sonics",
  description:
    "Luxury smart home integration engineered around architecture, comfort and effortless living.",
};

export default function LuxuryLivingPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Luxury Living"
        description="Technology that disappears into architecture, creating homes that feel effortless, elegant and intelligently connected."
        image="/images/solutions/luxury-living-hero.png"
      />

      <EditorialIntro
        eyebrow="Invisible Technology"
        title="Every detail engineered around the way you live."
        body="Luxury is not defined by the amount of technology in a home. It is defined by how little you notice it."
      />

      <SplitFeature
        eyebrow="Designed Around Daily Living"
        title="Technology that complements architecture."
        body="Every system is engineered to disappear into the home, allowing architecture and interior design to remain the focus."
        image="/images/solutions/living-room.jpg"
        imageAlt="Luxury living room"
      />

      <ImageNarrative
        image="/images/solutions/evening-home.jpg"
        imageAlt="Luxury home at dusk"
        eyebrow="Evening Atmosphere"
        title="Spaces that respond naturally."
        body="Lighting, climate and music adapt automatically, creating an effortless living experience."
      />

      <FeatureList
        eyebrow="Integrated Experiences"
        title="Every system working together."
        items={luxuryLivingFeatures}
      />

      <ProjectShowcase {...luxuryLivingProject} />

      <CTASection
        eyebrow="Begin Your Journey"
        title="Ready to Create an Extraordinary Home?"
        description="Let's design a home where technology disappears into architecture and every interaction feels effortless."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore Projects"
        secondaryHref="/projects"
      />
    </>
  );
}