"use client";

import Image from "next/image";

import { philosophy } from "@/lib/content/home";

import {
  Container,
  Section,
} from "@/components/layout";

import {
  Eyebrow,
} from "@/components/ui";

import {
  FadeUp,
  RevealImage,
} from "@/components/motion";

export default function Philosophy() {
  return (
    <Section spacing="editorial">

      <Container size="wide">

        <RevealImage>

          <div className="overflow-hidden rounded-[40px]">

            <div className="relative aspect-[16/9]">

              <Image
                src={philosophy.image}
                alt={philosophy.imageAlt}
                fill
                className="object-cover"
              />

            </div>

          </div>

        </RevealImage>

      </Container>

      <Container size="narrow">

        <FadeUp>

          <div className="mx-auto mt-28 max-w-3xl">

            <Eyebrow>
              {philosophy.eyebrow}
            </Eyebrow>

            <h2 className="mt-8 text-5xl font-light leading-[0.95] tracking-tight md:text-6xl xl:text-7xl">
              {philosophy.heading}
            </h2>

            <div className="mt-14 space-y-10">

              {philosophy.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-xl leading-9 text-white/68"
                >
                  {paragraph}
                </p>
              ))}

            </div>

          </div>

        </FadeUp>

      </Container>

    </Section>
  );
}