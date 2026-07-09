import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import ExperienceCard from "./ExperienceCard";
import { experienceItems } from "./experiences.data";

export default function Experiences() {
  return (
    <Section
      id="experiences"
      className="bg-[var(--vs-background)]"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--vs-accent)]">
            Signature Experiences
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight text-white lg:text-5xl">
            Technology engineered
            <br />
            around the way you live.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[var(--vs-text-muted)]">
            Every Visio Sonics environment is designed to blend seamlessly into
            its architecture, delivering intelligent performance through
            carefully engineered audio, video, lighting, networking, and
            automation solutions.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {experienceItems.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}