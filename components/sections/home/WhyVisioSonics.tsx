"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

const differentiators = [
  {
    title: "Architecture-Led Design",
    description:
      "Every technology decision begins with the architecture, never with products.",
  },
  {
    title: "Single Integrated Platform",
    description:
      "Lighting, audio, video, networking, security and environmental control engineered as one ecosystem.",
  },
  {
    title: "Future-Ready Infrastructure",
    description:
      "Infrastructure planned for expansion, reducing disruption as technology evolves.",
  },
  {
    title: "Precision Commissioning",
    description:
      "Every system is calibrated, documented and validated before handover.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "Ongoing optimisation, maintenance and support beyond project completion.",
  },
  {
    title: "Luxury Without Complexity",
    description:
      "Sophisticated technology delivered through intuitive, effortless experiences.",
  },
];

export default function WhyVisioSonics() {
  return (
    <Section id="why-visio-sonics">
      <Container>
        <Heading
          eyebrow="WHY VISIO SONICS"
          title="Technology should feel effortless."
          description="Our responsibility extends beyond installation. We engineer environments that remain elegant, reliable and adaptable for years to come."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-[var(--vs-accent)] hover:bg-white/[0.04]"
            >
              <div className="mb-6 h-1 w-12 rounded-full bg-[var(--vs-accent)]" />

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--vs-text-muted)]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}