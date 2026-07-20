import { servicesOverview } from "@/lib/content/services";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

export default function ServicesOverview() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Heading
              title={servicesOverview.heading}
              description={servicesOverview.description}
            />
          </div>

          <div className="space-y-6">
            {servicesOverview.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-relaxed text-white/60"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}