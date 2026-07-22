import type { Metadata } from "next";

import SolutionHero from "@/components/solutions/SolutionHero";
import SolutionGrid from "@/components/solutions/SolutionGrid";
import WhyApproach from "@/components/solutions/WhyApproach";
import ConsultationCTA from "@/components/solutions/ConsultationCTA";

export const metadata: Metadata = {
  title: "Intelligent Technology Solutions",

  description:
    "Explore intelligent technology solutions engineered by Visio Sonics for luxury residences, commercial environments, entertainment spaces, and extraordinary architecture.",

  alternates: {
    canonical: "/solutions",
  },

  openGraph: {
    title: "Intelligent Technology Solutions | Visio Sonics",

    description:
      "Explore intelligent technology solutions engineered by Visio Sonics for luxury residences, commercial environments, entertainment spaces, and extraordinary architecture.",

    url: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionHero />

      <main className="bg-black">
        <SolutionGrid />

        <WhyApproach />

        <ConsultationCTA />
      </main>
    </>
  );
}