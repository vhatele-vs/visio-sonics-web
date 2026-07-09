import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import PhilosophyGrid from "./PhilosophyGrid";

export default function Philosophy() {
  return (
    <Section
      id="philosophy"
      className="bg-[var(--vs-background)]"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--vs-accent)]">
            Our Philosophy
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight text-white lg:text-5xl">
            Technology should elevate architecture,
            <br />
            never compete with it.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[var(--vs-text-muted)]">
            At Visio Sonics, every project begins with understanding the
            people, the space, and the purpose. We engineer technology that
            integrates naturally into luxury environments, delivering
            experiences that are elegant, intuitive, and built to endure.
          </p>
        </div>

        <PhilosophyGrid />
      </Container>
    </Section>
  );
}