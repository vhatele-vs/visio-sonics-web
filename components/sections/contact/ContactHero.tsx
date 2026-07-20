import { contactHero } from "@/lib/content/contact";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

import {
  Eyebrow,
} from "@/components/ui";

export default function ContactHero() {
  return (
    <Section spacing="hero">
      <Container size="narrow">

        <Eyebrow>
          {contactHero.eyebrow}
        </Eyebrow>

        <Heading
          title={contactHero.title}
          description={contactHero.description}
          variant="hero"
          className="mt-8"
          align="left"
        />

      </Container>
    </Section>
  );
}