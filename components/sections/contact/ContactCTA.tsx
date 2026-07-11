import { contactCTA } from "@/lib/content/contact";
import { Button } from "@/components/ui";
import {
  Container,
  Section,
} from "@/components/layout";

export default function ContactCTA() {
  return (
    <Section spacing="hero">
      <Container size="narrow">
        <div className="text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
            {contactCTA.eyebrow}
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            {contactCTA.title}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            {contactCTA.description}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Button href={contactCTA.primaryButton.href}>
              {contactCTA.primaryButton.label}
            </Button>

            <Button
              href={contactCTA.secondaryButton.href}
              variant="secondary"
            >
              {contactCTA.secondaryButton.label}
            </Button>

          </div>

        </div>
      </Container>
    </Section>
  );
}