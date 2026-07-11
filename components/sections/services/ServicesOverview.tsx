import { servicesOverview } from "@/lib/content/services";
import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

export default function ServicesOverview() {
  return (
    <Section spacing="editorial">
      <Container size="narrow">

        <Heading
          title={servicesOverview.heading}
          align="left"
        />

        <div className="mt-10 space-y-8 text-lg leading-relaxed text-white/70">
          {servicesOverview.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

      </Container>
    </Section>
  );
}