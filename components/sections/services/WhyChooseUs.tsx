import { whyChooseUs } from "@/lib/content/services";
import {
  Container,
  Heading,
  Section,
} from "@/components/layout";
import { Card } from "@/components/ui";

export default function WhyChooseUs() {
  return (
    <Section spacing="editorial">
      <Container>

        <Heading
          title={whyChooseUs.heading}
          description={whyChooseUs.description}
          align="left"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.items.map((item) => (
            <Card key={item.title}>
              <h3 className="mb-4 text-xl font-light">
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