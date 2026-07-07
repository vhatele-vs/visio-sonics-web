import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

import FadeUp from "@/components/motion/FadeUp";

export default function Consultation() {
  return (
    <Section className="relative overflow-hidden py-0">

      <div className="relative h-[900px]">

        <Image
          src="/images/consultation.png"
          alt="Luxury architectural residence"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <Container className="relative z-10 flex h-full items-center">

          <div className="max-w-2xl">

            <FadeUp>

              <Heading
                eyebrow="Begin Your Journey"
                title="Engineering Extraordinary Environments."
                description="Every remarkable environment begins with a conversation. Whether you're building a new residence, transforming an existing property or creating an exceptional workplace, we'll help engineer a space that feels effortless, timeless and uniquely yours."
              />

            </FadeUp>

            <FadeUp delay={0.25}>

              <div className="mt-12">

                <Button href="/contact">
                  Begin Your Project
                </Button>

              </div>

            </FadeUp>

            <FadeUp delay={0.4}>

              <p className="mt-16 text-sm uppercase tracking-[0.35em] text-zinc-400">
                Cape Town • Johannesburg • South Africa
              </p>

            </FadeUp>

          </div>

        </Container>

      </div>

    </Section>
  );
}