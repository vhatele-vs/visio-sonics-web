import { clientConfidence } from "@/lib/content/projects";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

import { Card } from "@/components/ui";

export default function ClientConfidence() {
  return (
    <Section spacing="editorial">
      <Container>
        <Heading
          title={clientConfidence.heading}
          description={clientConfidence.description}
          align="left"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {clientConfidence.items.map((item) => (
            <Card key={item.title}>
              <h3 className="mb-4 text-2xl font-light">
                {item.title}
              </h3>

              <p className="leading-relaxed text-white/70">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}