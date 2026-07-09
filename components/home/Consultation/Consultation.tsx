import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import ConsultationActions from "./ConsultationActions";
import { consultationContent } from "./consultation.data";

export default function Consultation() {
  return (
    <Section
      id="consultation"
      className="bg-[var(--vs-background)]"
    >
      <Container>
        <div className="mx-auto max-w-4xl rounded-[40px] border border-white/10 bg-white/[0.02] px-8 py-20 text-center lg:px-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--vs-accent)]">
            {consultationContent.eyebrow}
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight text-white lg:text-6xl">
            {consultationContent.title}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--vs-text-muted)]">
            {consultationContent.description}
          </p>

          <ConsultationActions
            primary={consultationContent.primaryCta}
            secondary={consultationContent.secondaryCta}
          />
        </div>
      </Container>
    </Section>
  );
}