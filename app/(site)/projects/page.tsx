import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import FeaturedProjects from "@/components/sections/projects/FeaturedProjects";
import Industries from "@/components/sections/projects/Industries";
import ProjectMethod from "@/components/sections/projects/ProjectMethod";
import ClientConfidence from "@/components/sections/projects/ClientConfidence";
import ProjectsCTA from "@/components/sections/projects/ProjectsCTA";

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