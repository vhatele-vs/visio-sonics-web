"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

const phases = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the architecture, lifestyle, and long-term vision before specifying technology.",
  },
  {
    step: "02",
    title: "Engineer",
    description:
      "Produce detailed infrastructure, rack layouts, wiring schedules, and integration documentation.",
  },
  {
    step: "03",
    title: "Integrate",
    description:
      "Install, program, calibrate, and commission every subsystem as one intelligent platform.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "Provide continuous optimisation, maintenance, and future expansion throughout the life of the property.",
  },
];

export default function IntegrationMethod() {
  return (
    <Section id="method">
      <Container>
        <Heading
          eyebrow="OUR METHOD"
          title="Engineering before installation."
          description="Exceptional intelligent homes are never assembled on-site. They are engineered long before construction is complete."
          align="center"
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {phases.map((phase, index) => (
            <motion.article
              key={phase.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-[var(--vs-accent)]"
            >
              <span className="text-5xl font-light text-[var(--vs-accent)]/30">
                {phase.step}
              </span>

              <h3 className="mt-8 text-xl font-semibold text-white">
                {phase.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[var(--vs-text-muted)]">
                {phase.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}