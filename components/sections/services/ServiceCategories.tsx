import { serviceCategories } from "@/lib/content/services";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

export default function ServiceCategories() {
  return (
    <Section>
      <Container>
        <div className="mb-12 max-w-3xl">
          <Heading
            title={serviceCategories.heading}
            description={serviceCategories.description}
          />
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.items.map((service) => (
            <article
              key={service.title}
              className="bg-[var(--vs-background)] p-8 transition-colors duration-300 hover:bg-[var(--vs-surface)]"
            >
              <div className="flex min-h-56 flex-col justify-between">
                <div>
                  <p className="mb-8 text-sm font-medium tracking-[0.2em] text-[var(--vs-accent)]">
                    {service.icon}
                  </p>

                  <h3 className="text-xl font-medium tracking-tight text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-8 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}