import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import WhyCard from "./WhyCard";
import { whyItems } from "./why-visiosonics.data";

export default function WhyVisioSonics() {
  return (
    <Section
      id="why-visio-sonics"
      className="bg-[var(--vs-background)]"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--vs-accent)]">
            Why Visio Sonics
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight text-white lg:text-5xl">
            More than technology.
            <br />
            A trusted engineering partner.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[var(--vs-text-muted)]">
            We believe exceptional technology is measured not only by the
            equipment installed, but by the confidence, reliability, and
            experience it delivers for years to come. Every decision we make is
            guided by engineering excellence, thoughtful design, and long-term
            partnership.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyItems.map((item) => (
            <WhyCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}