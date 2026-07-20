import { integrationProcess } from "@/lib/content/services";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

export default function IntegrationProcess() {
  return (
    <Section id="process">
      <Container>
        <div className="mb-16 max-w-3xl">
          <Heading
            title={integrationProcess.heading}
            description={integrationProcess.description}
          />
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {integrationProcess.steps.map((step) => (
            <article
              key={step.number}
              className="grid gap-6 py-8 md:grid-cols-[120px_280px_1fr] md:items-start"
            >
              <span className="text-sm font-medium tracking-[0.2em] text-[var(--vs-accent)]">
                {step.number}
              </span>

              <h3 className="text-xl font-medium tracking-tight text-white">
                {step.title}
              </h3>

              <p className="max-w-2xl text-base leading-relaxed text-white/60">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}