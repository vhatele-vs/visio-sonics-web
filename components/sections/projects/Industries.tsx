import { industries } from "@/lib/content/projects";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

import { Card } from "@/components/ui";

export default function Industries() {
  return (
    <Section spacing="editorial">
      <Container>
        <Heading
          title={industries.heading}
          description={industries.description}
          align="left"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.items.map((industry) => (
            <Card key={industry.title}>
              <h3 className="mb-4 text-2xl font-light">
                {industry.title}
              </h3>

              <p className="leading-relaxed text-white/70">
                {industry.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}