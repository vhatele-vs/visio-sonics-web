import type { Metadata } from "next";

import SolutionHero from "@/components/solutions/SolutionHero";
import SolutionGrid from "@/components/solutions/SolutionGrid";
import WhyApproach from "@/components/solutions/WhyApproach";
import ConsultationCTA from "@/components/solutions/ConsultationCTA";

export const metadata: Metadata = {
  title: "Solutions | Visio Sonics",
  description:
    "Luxury residential and commercial technology solutions engineered to integrate seamlessly with exceptional architecture.",
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