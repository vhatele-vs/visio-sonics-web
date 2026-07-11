import { contactMethods } from "@/lib/content/contact";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

import { Card } from "@/components/ui";

export default function ContactMethods() {
  return (
    <Section spacing="editorial">
      <Container>

        <Heading
          title={contactMethods.heading}
          description={contactMethods.description}
          align="left"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactMethods.items.map((method) => (
            <Card key={method.title}>
              <h3 className="mb-4 text-xl font-light">
                {method.title}
              </h3>

              <p className="mb-4 text-lg text-white">
                {method.value}
              </p>

              <p className="leading-relaxed text-white/70">
                {method.description}
              </p>
            </Card>
          ))}
        </div>

      </Container>
    </Section>
  );
}