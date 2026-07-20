"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function ExperienceClosing() {
  return (
    <Section
      spacing="showcase"
      className="border-t border-white/10 bg-[#050505]"
    >
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-[var(--vs-accent)]">
            Intelligent Living
          </p>

          <h2
            className="
              mt-6
              text-4xl
              font-light
              leading-tight
              tracking-[-0.03em]
              text-white
              md:text-6xl
            "
          >
            Luxury is not having
            <br />
            more technology.
          </h2>

          <p
            className="
              mt-10
              text-xl
              leading-9
              text-white/75
            "
          >
            Luxury is never having to think about it.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}