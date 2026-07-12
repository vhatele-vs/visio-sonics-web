"use client";

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

import {
  FadeUp,
  RevealImage,
} from "@/components/motion";

export default function Hero() {
  return (
    <Section
      spacing="hero"
      className="flex min-h-screen items-center"
    >
      <Container size="wide">

        <div className="grid items-center gap-20 lg:grid-cols-12">

          <div className="lg:col-span-5">

            <FadeUp>

              <div className="max-w-2xl">

                <Eyebrow>
                  {heroContent.eyebrow}
                </Eyebrow>

                <h1 className="mt-8 text-5xl font-light leading-[0.92] tracking-tight md:text-7xl xl:text-8xl">

                  <span className="block">
                    {heroContent.title}
                  </span>

                  <span className="mt-2 block">
                    {heroContent.subtitle}
                  </span>

                </h1>

                <p className="mt-10 max-w-xl text-xl leading-9 text-white/70">
                  {heroContent.description}
                </p>

                <div className="mt-14 flex items-center gap-8">

                  <Button href={heroContent.primaryButton.href}>
                    {heroContent.primaryButton.label}
                  </Button>

                  <TextLink href={heroContent.secondaryButton.href}>
                    {heroContent.secondaryButton.label}
                  </TextLink>

                </div>

              </div>

            </FadeUp>

          </div>

          <div className="lg:col-span-7">

            <RevealImage>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px]">

                <Image
                  src={heroContent.image}
                  alt={heroContent.imageAlt}
                  fill
                  priority
                  className="object-cover"
                />

              </div>

            </RevealImage>

          </div>

        </div>

      </Container>
    </Section>
  );
}