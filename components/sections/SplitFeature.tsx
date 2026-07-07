import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/motion/FadeUp";

export interface SplitFeatureProps {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function SplitFeature({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  reverse = false,
}: SplitFeatureProps) {
  return (
    <Section>
      <Container>
        <div
          className={`grid items-center gap-16 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <FadeUp>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width:1024px)100vw,50vw"
                className="object-cover"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
                {eyebrow}
              </p>

              <h2 className="mt-6 font-display text-4xl font-light leading-tight md:text-5xl">
                {title}
              </h2>

              <p className="mt-8 text-lg leading-9 text-[var(--vs-text-muted)]">
                {body}
              </p>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}