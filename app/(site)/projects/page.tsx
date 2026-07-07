import type { Metadata } from "next";

import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Projects | Visio Sonics",
  description:
    "Explore a collection of luxury residential and commercial technology projects by Visio Sonics.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />

      <FeaturedProjects />

      <CTASection
        eyebrow="Let's Build Together"
        title="Ready to discuss your project?"
        description="Whether you're designing a luxury residence or a commercial environment, our team can help engineer an intelligent solution."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
      />
    </>
  );
}