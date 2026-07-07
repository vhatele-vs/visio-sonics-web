import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import WhyCard from "./WhyCard";

import { whyItems } from "@/lib/content/why";

export default function WhyVisioSonics() {
  return (
    <Section className="bg-black">

      <Container>

        <Heading
          eyebrow="Why Visio Sonics"
          title="Engineered differently."
          description="Our work is guided by four principles that ensure every environment feels timeless, effortless and deeply personal."
        />

        <div className="mt-20 grid gap-16 md:grid-cols-2">

          {whyItems.map((item, index) => (
            <WhyCard
              key={item.number}
              {...item}
              delay={index * 0.15}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}