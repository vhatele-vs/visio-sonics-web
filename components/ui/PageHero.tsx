import Image from "next/image";
import type { ReactNode } from "react";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: PageHeroProps) {
  return (
    <Section
      spacing="hero"
      className="relative overflow-hidden bg-black text-white"
    >
      {image && (
        <>
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-black/55" />
        </>
      )}

      <Container
        size="wide"
        className="relative z-10 flex min-h-[70vh] items-center"
      >
        <div className="max-w-4xl">

          <Heading
            eyebrow={eyebrow}
            title={title}
            description={description}
            as="h1"
            variant="hero"
          />

          {children && (
            <div className="mt-12">
              {children}
            </div>
          )}

        </div>
      </Container>
    </Section>
  );
}