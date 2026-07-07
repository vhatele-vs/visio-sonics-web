import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

export default function Projects() {
  return (
    <Section className="bg-[var(--vs-surface)]">
      <Container>

        <Heading
          eyebrow="Featured Project"
          title="A home where technology becomes invisible."
          description="Every detail was engineered to disappear into the architecture, allowing the experience—not the equipment—to define the home."
        />

        <div className="mt-16 rounded-[18px] border border-white/10 bg-[#181818] p-16">

          <div className="aspect-[16/9] rounded-xl border border-white/10 bg-[#0d0d0d]" />

          <div className="mt-10 max-w-3xl">

            <h3 className="mb-6 text-3xl font-light">
              Luxury Residence
            </h3>

            <p className="mb-10">
              Integrated lighting, cinema, whole-home audio, climate,
              surveillance and intelligent automation designed as one cohesive
              living experience.
            </p>

            <Button href="/projects">
              View Project
            </Button>

          </div>

        </div>

      </Container>
    </Section>
  );
}