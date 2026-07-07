import Image from "next/image";
import Link from "next/link";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";

export interface ProjectShowcaseProps {
  title: string;
  location: string;
  description: string;
  image: string;
  href: string;
}

export default function ProjectShowcase({
  title,
  location,
  description,
  image,
  href,
}: ProjectShowcaseProps) {
  return (
    <Section>
      <Container>
        <FadeUp>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width:1024px)100vw,50vw"
              />
            </div>

            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
                Featured Project
              </p>

              <h2 className="mt-5 font-display text-4xl font-light">
                {title}
              </h2>

              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/60">
                {location}
              </p>

              <p className="mt-8 leading-8 text-[var(--vs-text-muted)]">
                {description}
              </p>

              <Link
                href={href}
                className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] transition hover:text-[var(--vs-accent)]"
              >
                View Case Study →
              </Link>
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}