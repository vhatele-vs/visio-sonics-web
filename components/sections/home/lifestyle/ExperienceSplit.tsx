"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import type { Experience } from "./experiences";

interface ExperienceSplitProps {
  experience: Experience;
  imageLeft?: boolean;
}

export default function ExperienceSplit({
  experience,
  imageLeft = false,
}: ExperienceSplitProps) {
  return (
    <Section spacing="editorial" className="bg-[#050505]">
      <Container size="wide">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: imageLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className={imageLeft ? "order-1" : "order-2"}
          >
            <div className="relative overflow-hidden rounded-[32px]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  sizes="(min-width:1024px) 50vw,100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}

          <motion.div
            initial={{ opacity: 0, x: imageLeft ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className={imageLeft ? "order-2" : "order-1"}
          >
            <p className="text-xs uppercase tracking-[0.45em] text-[var(--vs-accent)]">
              {experience.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.03em] text-white md:text-5xl">
              {experience.heading}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-white/75">
              {experience.description}
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}