import { servicesHero } from "@/lib/content/services";
import { Button } from "@/components/ui";
import {
  Container,
  Section,
} from "@/components/layout";

export default function ServicesHero() {
  return (
    <Section spacing="hero">
      <Container>

        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
          {servicesHero.eyebrow}
        </p>

        <h1 className="max-w-4xl text-5xl font-light leading-tight md:text-7xl">
          {servicesHero.title}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
          {servicesHero.description}
        </p>

        <div className="mt-12 flex flex-wrap gap-5">
          <Button href={servicesHero.primaryButton.href}>
            {servicesHero.primaryButton.label}
          </Button>

          <Button
            href={servicesHero.secondaryButton.href}
            variant="secondary"
          >
            {servicesHero.secondaryButton.label}
          </Button>
        </div>

      </Container>
    </Section>
  );
}