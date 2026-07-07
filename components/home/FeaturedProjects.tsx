import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import ProjectCard from "./ProjectCard";

import { featuredProjects } from "@/lib/content/projects";

export default function FeaturedProjects() {
  return (
    <Section>

      <Container>

        <Heading
          eyebrow="Featured Projects"
          title="Selected environments where architecture and technology become one."
          description="Every project is engineered around the people who live and work within it, ensuring technology enhances the architecture without ever dominating it."
        />

        <div className="mt-20 space-y-12">

          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.15}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}