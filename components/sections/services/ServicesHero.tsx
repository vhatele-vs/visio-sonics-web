import { servicesHero } from "@/lib/content/services";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

export default function ServicesHero() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl">
          <Heading
            eyebrow={servicesHero.eyebrow}
            title={servicesHero.title}
            description={servicesHero.description}
          />
        </div>
      </Container>
    </Section>
  );
}