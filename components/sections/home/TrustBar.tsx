"use client";

import { trustBar } from "@/lib/content/home";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

import {
  FadeUp,
  Stagger,
} from "@/components/motion";

export default function TrustBar() {
  return (
    <Section spacing="editorial">
      <Container>

        <FadeUp>
          <Heading
            eyebrow={trustBar.eyebrow}
            title={trustBar.heading}
            description={trustBar.description}
            align="center"
          />
        </FadeUp>

        <Stagger>
          <div className="mt-24 grid gap-16 border-t border-white/10 pt-16 md:grid-cols-2 xl:grid-cols-4">

            {trustBar.items.map((item) => (
              <FadeUp key={item.title}>

                <article>

                  <p className="text-xs uppercase tracking-[0.30em] text-white/40">
                    {item.label}
                  </p>

                  <h3 className="mt-5 text-2xl font-light leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-6 leading-8 text-white/65">
                    {item.description}
                  </p>

                </article>

              </FadeUp>
            ))}

          </div>
        </Stagger>

      </Container>
    </Section>
  );
}