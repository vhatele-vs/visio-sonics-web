import Image from "next/image";

import { philosophy } from "@/lib/content/home";

import {
  Container,
  Section,
} from "@/components/layout";

import {
  Eyebrow,
} from "@/components/ui";

export default function Philosophy() {
  return (
    <Section spacing="editorial">

      <Container size="wide">

        <div className="overflow-hidden rounded-[40px]">
          <div className="relative aspect-[16/9]">
            <Image
              src={philosophy.image}
              alt={philosophy.imageAlt}
              fill
              priority={false}
              className="object-cover"
            />
          </div>
        </div>

      </Container>

      <Container size="narrow">

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

      </Container>

    </Section>
  );
}