"use client";

import { whyVisioSonics } from "@/lib/content/home";

import {
  Container,
  Section,
} from "@/components/layout";

import {
  Eyebrow,
} from "@/components/ui";

import {
  FadeUp,
  Stagger,
} from "@/components/motion";

export default function WhyVisioSonics() {
  return (
    <Section spacing="editorial">

      <Container>

        <FadeUp>

          <div className="max-w-3xl">

            <Eyebrow>
              {whyVisioSonics.eyebrow}
            </Eyebrow>

            <h2 className="mt-8 text-5xl font-light leading-[0.95] tracking-tight md:text-6xl xl:text-7xl">
              {whyVisioSonics.heading}
            </h2>

            <p className="mt-10 max-w-2xl text-xl leading-9 text-white/68">
              {whyVisioSonics.description}
            </p>

          </div>

        </FadeUp>

        <Stagger>

          <div className="mt-28 border-t border-white/10">

            {whyVisioSonics.items.map((item, index) => (

              <FadeUp key={item.title}>

                <article className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-12">

                  <div className="lg:col-span-2">

                    <p className="text-sm tracking-[0.30em] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                  </div>

                  <div className="lg:col-span-4">

                    <h3 className="text-3xl font-light leading-tight">
                      {item.title}
                    </h3>

                  </div>

                  <div className="lg:col-span-6">

                    <p className="max-w-2xl text-lg leading-9 text-white/68">
                      {item.description}
                    </p>

                  </div>

                </article>

              </FadeUp>

            ))}

          </div>

        </Stagger>

      </Container>

    </Section>
  );
}