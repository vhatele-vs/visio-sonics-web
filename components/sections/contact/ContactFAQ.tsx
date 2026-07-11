import { contactFAQ } from "@/lib/content/contact";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

import { Card } from "@/components/ui";

export default function ContactFAQ() {
  return (
    <Section spacing="editorial">
      <Container>

        <Heading
          title={contactFAQ.heading}
          description={contactFAQ.description}
          align="left"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {contactFAQ.items.map((item) => (
            <Card key={item.question}>
              <h3 className="mb-4 text-xl font-light">
                {item.question}
              </h3>

              <p className="leading-relaxed text-white/70">
                {item.answer}
              </p>
            </Card>
          ))}
        </div>

      </Container>
    </Section>
  );
}