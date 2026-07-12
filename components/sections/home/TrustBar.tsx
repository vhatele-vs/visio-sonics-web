"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function TrustBar() {
  return (
    <Section
      id="trust"
      spacing="compact"
      className="relative border-y border-white/5 bg-[#080808]"
    >
      <Container size="wide">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="
            mx-auto
            max-w-5xl
            text-center
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.45em]
              text-[var(--vs-accent)]
            "
          >
            WHY VISIO SONICS
          </p>

          <h2
            className="
              mt-6
              text-4xl
              font-light
              leading-tight
              tracking-[-0.03em]
              text-white
              md:text-5xl
            "
          >
            Invisible technology.
            <br />
            Intentional engineering.
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-white/70
            "
          >
            Every project begins with architecture—not products.
            We engineer integrated environments where technology
            quietly supports the way people live, work and entertain.
          </p>
        </motion.div>

                <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mt-20
            grid
            gap-10
            border-t
            border-white/10
            pt-10
            md:grid-cols-3
          "
        >
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.28em]
                text-[var(--vs-accent)]
              "
            >
              Architecture First
            </p>

            <p className="mt-4 text-sm leading-8 text-white/70">
              Every solution is designed around the architectural vision,
              ensuring technology enhances rather than dominates the space.
            </p>
          </div>

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.28em]
                text-[var(--vs-accent)]
              "
            >
              Engineered Integration
            </p>

            <p className="mt-4 text-sm leading-8 text-white/70">
              Lighting, audio, networking, security and environmental
              systems are engineered as one intelligent ecosystem.
            </p>
          </div>

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.28em]
                text-[var(--vs-accent)]
              "
            >
              Future Ready
            </p>

            <p className="mt-4 text-sm leading-8 text-white/70">
              Infrastructure planned today for tomorrow&apos;s technology,
              protecting your investment for years to come.
            </p>
          </div>
        </motion.div>

              </Container>
    </Section>
  );
}