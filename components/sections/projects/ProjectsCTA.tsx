import { projectsCTA } from "@/lib/content/projects";
import { Button } from "@/components/ui";
import {
  Container,
  Section,
} from "@/components/layout";

export default function ProjectsCTA() {
  return (
    <Section spacing="hero">
      <Container size="narrow">
        <div className="text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
            {projectsCTA.eyebrow}
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            {projectsCTA.title}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            {projectsCTA.description}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Button href={projectsCTA.primaryButton.href}>
              {projectsCTA.primaryButton.label}
            </Button>

            <Button
              href={projectsCTA.secondaryButton.href}
              variant="secondary"
            >
              {projectsCTA.secondaryButton.label}
            </Button>

          </div>

        </div>
      </Container>
    </Section>
  );
}