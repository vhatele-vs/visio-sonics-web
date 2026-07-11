import { principles } from "@/lib/content/about";
import {
  Container,
  Heading,
  Section,
} from "@/components/layout";
import { Card } from "@/components/ui";

export default function AboutPrinciples() {
  return (
    <Section spacing="showcase">
      <Container>
        <Heading
          title={principles.heading}
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {principles.items.map((item) => (
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