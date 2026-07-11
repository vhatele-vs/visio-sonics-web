import Image from "next/image";

import { heroContent } from "@/lib/content/home";

import {
  Container,
  Section,
} from "@/components/layout";

import {
  Button,
  Eyebrow,
  TextLink,
} from "@/components/ui";

export default function Hero() {
  return (
    <Section
      spacing="hero"
      className="flex min-h-screen items-center"
    >
      <Container size="wide">
        <div className="grid items-center gap-20 lg:grid-cols-12">

          {/* Editorial Content */}

          <div className="lg:col-span-5">
            <div className="max-w-2xl">

              <Eyebrow>
                {heroContent.eyebrow}
              </Eyebrow>

              <h1 className="mt-8 text-5xl font-extralight leading-[0.88] tracking-[-0.04em] md:text-7xl xl:text-8xl">
                <span className="block">
                  {heroContent.title}
                </span>

                <span className="mt-3 block">
                  {heroContent.subtitle}
                </span>
              </h1>

              <p className="mt-10 max-w-xl text-lg leading-9 text-white/70 md:text-xl">
                {heroContent.description}
              </p>

              <div className="mt-14 flex flex-wrap items-center gap-8">
                <Button href={heroContent.primaryButton.href}>
                  {heroContent.primaryButton.label}
                </Button>

                <TextLink href={heroContent.secondaryButton.href}>
                  {heroContent.secondaryButton.label}
                </TextLink>
              </div>

            </div>
          </div>

          {/* Editorial Image */}

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px]">

              <Image
                src={heroContent.image}
                alt={heroContent.imageAlt}
                fill
                priority
                sizes="(min-width:1024px) 58vw, 100vw"
                className="object-cover"
              />

            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}