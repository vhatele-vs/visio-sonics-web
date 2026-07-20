import { contactCTA } from "@/lib/content/contact";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

import {
  Button,
  Eyebrow,
} from "@/components/ui";

export default function ContactCTA() {
  return (
    <Section spacing="hero">
      <Container size="narrow">

        <div className="text-center">

          <Eyebrow>
            {contactCTA.eyebrow}
          </Eyebrow>

          <Heading
            title={contactCTA.title}
            description={contactCTA.description}
            align="center"
            as="h2"
            className="mt-6"
          />

          <div className="mt-12 flex justify-center">

            <Button
              href={contactCTA.primaryButton.href}
              size="lg"
            >
              {contactCTA.primaryButton.label}
            </Button>

          </div>

        </div>

      </Container>
    </Section>
  );
}