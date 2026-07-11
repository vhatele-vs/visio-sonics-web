import { contactHero } from "@/lib/content/contact";
import { Button } from "@/components/ui";
import {
  Container,
  Section,
} from "@/components/layout";

export default function ContactHero() {
  return (
    <Section spacing="hero">
      <Container>

        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
          {contactHero.eyebrow}
        </p>

        <h1 className="max-w-4xl text-5xl font-light leading-tight md:text-7xl">
          {contactHero.title}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
          {contactHero.description}
        </p>

        <div className="mt-12 flex flex-wrap gap-5">

          <Button href={contactHero.primaryButton.href}>
            {contactHero.primaryButton.label}
          </Button>

          <Button
            href={contactHero.secondaryButton.href}
            variant="secondary"
          >
            {contactHero.secondaryButton.label}
          </Button>

        </div>

      </Container>
    </Section>
  );
}