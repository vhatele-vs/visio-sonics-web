"use client";

import { motion } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding architecture, lifestyle and the experience you want to create.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Creating a complete technology strategy integrated with the environment.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Building the invisible infrastructure that makes everything possible.",
  },
  {
    number: "04",
    title: "Commission",
    description:
      "Refining every system until performance feels effortless.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Maintaining and evolving the experience long after completion.",
  },
];

export default function EngineeringMethod() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-6 pb-32 sm:px-10 lg:px-16">

      <div className="border-t border-white/10 pt-10">

        <div className="grid gap-10 md:grid-cols-5">

          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span
                className="
                  text-xs
                  tracking-[0.35em]
                  text-[var(--vs-accent)]
                "
              >
                {phase.number}
              </span>


              <h3
                className="
                  mt-4
                  text-lg
                  font-light
                  tracking-[-0.02em]
                  text-[var(--vs-text)]
                "
              >
                {phase.title}
              </h3>


              <p
                className="
                  mt-4
                  text-sm
                  leading-relaxed
                  text-[var(--vs-text-muted)]
                "
              >
                {phase.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </div>
  );
}