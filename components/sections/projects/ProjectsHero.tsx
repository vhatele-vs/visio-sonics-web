import { projectsHero } from "@/lib/content/projects";
import {
  Container,
  Section,
} from "@/components/layout";

export default function ProjectsHero() {
  return (
    <Section spacing="hero">
      <Container>
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
          {projectsHero.eyebrow}
        </p>

        <h1 className="max-w-4xl text-5xl font-light leading-tight md:text-7xl">
          {projectsHero.title}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
          {projectsHero.description}
        </p>

        <div className="mt-12 h-[52px]" />
      </Container>
    </Section>
  );
}