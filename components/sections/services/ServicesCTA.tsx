import { servicesCTA } from "@/lib/content/services";

import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function ServicesCTA() {
  return (
    <Section>
      <Container>
        <div className="border-t border-white/10 pt-16 lg:pt-24">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[var(--vs-accent)]">
              {servicesCTA.eyebrow}
            </p>

            <h2 className="text-4xl font-medium tracking-tight text-white md:text-6xl">
              {servicesCTA.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              {servicesCTA.description}
            </p>

            <div className="mt-10">
              <Button href={servicesCTA.primaryButton.href}>
                {servicesCTA.primaryButton.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}