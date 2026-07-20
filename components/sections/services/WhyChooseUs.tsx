import { whyChooseUs } from "@/lib/content/services";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

export default function WhyChooseUs() {
  return (
    <Section>
      <Container>
        <div className="mb-16 max-w-3xl">
          <Heading
            title={whyChooseUs.heading}
            description={whyChooseUs.description}
          />
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2">
          {whyChooseUs.items.map((item, index) => (
            <article
              key={item.title}
              className="bg-[var(--vs-background)] p-8 lg:p-10"
            >
              <span className="mb-10 block text-sm font-medium tracking-[0.2em] text-[var(--vs-accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-2xl font-medium tracking-tight text-white">
                {item.title}
              </h3>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}