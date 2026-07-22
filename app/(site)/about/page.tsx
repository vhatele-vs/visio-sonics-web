import type { Metadata } from "next";

import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutPrinciples from "@/components/sections/about/AboutPrinciples";
import AboutMission from "@/components/sections/about/AboutMission";
import AboutPhilosophy from "@/components/sections/about/AboutPhilosophy";

export const metadata: Metadata = {
  title: "About Visio Sonics",

  description:
    "Discover the philosophy, engineering methodology, and vision behind Visio Sonics, a luxury technology integration house engineering extraordinary environments.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Visio Sonics | Engineering Extraordinary Environments",

    description:
      "Discover the philosophy, engineering methodology, and vision behind Visio Sonics, a luxury technology integration house engineering extraordinary environments.",

    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutPrinciples />
      <AboutMission />
      <AboutPhilosophy />
    </>
  );
}