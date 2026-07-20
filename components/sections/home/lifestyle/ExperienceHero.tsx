"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import type { Experience } from "./experiences";

interface ExperienceHeroProps {
  experience: Experience;
}

export default function ExperienceHero({
  experience,
}: ExperienceHeroProps) {
  return (
    <Section
      spacing="showcase"
      className="relative overflow-hidden bg-[#050505]"
    >
      <div className="relative overflow-hidden rounded-[40px]">
        <div className="relative aspect-[21/9]">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]"
          />
        </div>

        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-x-0 bottom-0 p-8 md:p-16 lg:max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.45em] text-[var(--vs-accent)]">
              {experience.eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.03em] text-white md:text-6xl">
              {experience.heading}
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/80">
              {experience.description}
            </p>
          </motion.div>
        </Container>
      </div>
    </Section>
  );
}