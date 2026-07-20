"use client";

import { motion } from "framer-motion";

import { heroContent } from "./hero.data";

export default function HeroIdentity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="inline-flex items-center gap-3 sm:gap-4">

        <span
          aria-hidden="true"
          className="h-px w-12 sm:w-16 bg-[var(--vs-accent)]"
        />

        <span
          className="
            text-[11px]
            uppercase
            tracking-[0.45em]
            sm:tracking-[0.55em]
            text-[var(--vs-accent)]
          "
        >
          {heroContent.eyebrow}
        </span>

        <span
          aria-hidden="true"
          className="h-px w-10 sm:w-12 bg-[var(--vs-accent)]"
        />

      </div>
    </motion.div>
  );
}