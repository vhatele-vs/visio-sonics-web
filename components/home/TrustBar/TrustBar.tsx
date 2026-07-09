import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

import TrustItem from "./TrustItem";

import { trustItems } from "@/lib/content/trust";

export default function TrustBar() {
  return (
    <Section
      id="trust"
      className="border-y border-white/5 bg-[var(--vs-surface)]/30"
    >
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => (
            <TrustItem
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}