import { serviceCategories } from "@/lib/content/services";
import {
  Container,
  Heading,
  Section,
} from "@/components/layout";
import { Card } from "@/components/ui";

export default function ServiceCategories() {
  return (
    <Section spacing="editorial">
      <Container>

        <Heading
          title={serviceCategories.heading}
          description={serviceCategories.description}
          align="left"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.items.map((service) => (
            <Card key={service.title}>
              <h3 className="mb-4 text-xl font-light">
                {service.title}
              </h3>

              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

      </Container>
    </Section>
  );
}