"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

export default function CallToAction() {
  return (
    <Section id="cta">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] px-8 py-16 md:px-16 md:py-24"
        >
          <Heading
            eyebrow="BEGIN THE CONVERSATION"
            title="Every extraordinary home begins with a thoughtful plan."
            description="Whether you're building a new residence, renovating an existing property, or developing a luxury estate, we engineer intelligent environments where technology disappears into architecture."
            align="center"
          />

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--vs-accent)] px-8 text-sm font-medium text-black transition-all duration-300 hover:bg-[var(--vs-accent-hover)]"
            >
              Schedule a Consultation
            </Link>

            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-8 text-sm font-medium text-white transition-colors duration-300 hover:border-[var(--vs-accent)] hover:text-[var(--vs-accent)]"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}