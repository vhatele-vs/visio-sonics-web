import type { Metadata } from "next";

import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import FeaturedProjects from "@/components/sections/projects/FeaturedProjects";
import Industries from "@/components/sections/projects/Industries";
import ProjectMethod from "@/components/sections/projects/ProjectMethod";
import ClientConfidence from "@/components/sections/projects/ClientConfidence";
import ProjectsCTA from "@/components/sections/projects/ProjectsCTA";

export const metadata: Metadata = {
  title: "Engineering Projects",

  description:
    "Explore selected Visio Sonics projects where architecture, technology, and human experience are engineered into seamless environments.",

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Engineering Projects | Visio Sonics",

    description:
      "Explore selected Visio Sonics projects where architecture, technology, and human experience are engineered into seamless environments.",

    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <FeaturedProjects />
      <Industries />
      <ProjectMethod />
      <ClientConfidence />
      <ProjectsCTA />
    </>
  );
}