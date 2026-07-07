import Image from "next/image";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";

export interface ImageNarrativeProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
}

export default function ImageNarrative({
  image,
  imageAlt,
  eyebrow,
  title,
  body,
  align = "left",
}: ImageNarrativeProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <Section>
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-[var(--radius-lg)]">
            <div className="relative aspect-[16/9]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8 md:p-16">
                <div className={`max-w-3xl ${alignment}`}>
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
                    {eyebrow}
                  </p>

                  <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white md:text-6xl">
                    {title}
                  </h2>

                  <p className="mt-8 text-lg leading-9 text-white/80">
                    {body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}