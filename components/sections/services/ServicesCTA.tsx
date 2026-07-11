import { servicesCTA } from "@/lib/content/services";
import { Button } from "@/components/ui";
import {
  Container,
  Section,
} from "@/components/layout";

export default function ServicesCTA() {
  return (
    <Section spacing="hero">
      <Container size="narrow">

        <div className="text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
            {servicesCTA.eyebrow}
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            {servicesCTA.title}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            {servicesCTA.description}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Button href={servicesCTA.primaryButton.href}>
              {servicesCTA.primaryButton.label}
            </Button>

            <Button
              href={servicesCTA.secondaryButton.href}
              variant="secondary"
            >
              {servicesCTA.secondaryButton.label}
            </Button>

          </div>

        </div>

      </Container>
    </Section>
  );
}