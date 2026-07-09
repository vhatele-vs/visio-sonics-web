import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import MethodStep from "./MethodStep";
import { methodSteps } from "./method.data";

export default function Method() {
  return (
    <Section
      id="method"
      className="bg-[var(--vs-background)]"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--vs-accent)]">
            Our Method
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight text-white lg:text-5xl">
            A proven process for
            <br />
            exceptional technology.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[var(--vs-text-muted)]">
            Every Visio Sonics project follows a disciplined engineering
            methodology that transforms ideas into intelligent environments.
            From the first conversation to long-term support, every stage is
            designed to deliver confidence, clarity, and lasting performance.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {methodSteps.map((step) => (
            <MethodStep
              key={step.id}
              step={step}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}