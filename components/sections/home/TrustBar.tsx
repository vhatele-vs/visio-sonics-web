"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

const trustItems = [
  {
    title: "Architecture First",
    description:
      "Technology is designed to respect the architecture—not compete with it.",
  },
  {
    title: "Invisible Integration",
    description:
      "Every system works together seamlessly through thoughtful engineering.",
  },
  {
    title: "Future Ready",
    description:
      "Infrastructure planned today for tomorrow's technologies and lifestyles.",
  },
  {
    title: "Luxury Experience",
    description:
      "Engineered for discerning homeowners, architects, and developers.",
  },
];

export default function TrustBar() {
  return (
    <Section id="trust" spacing="compact">
      <Container>
        <Heading
          eyebrow="OUR PHILOSOPHY"
          title="Technology should never become the focal point."
          description="Our role is to engineer extraordinary environments where every system disappears into the architecture and every interaction feels effortless."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-[var(--vs-accent)]/50 hover:bg-white/[0.04]"
            >
              <div className="mb-6 h-px w-12 bg-[var(--vs-accent)] transition-all duration-300 group-hover:w-20" />

              <h3 className="text-lg font-semibold text-white">
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