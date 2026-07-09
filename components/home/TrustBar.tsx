import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import { trustItems } from "@/lib/content/trust";

export default function TrustBar() {
  return (
    <Section
      id="trust"
      className="border-y border-white/10 bg-[#050505] py-16"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => (
            <article
              key={item.id}
              className="text-center"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-[var(--vs-text-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}