"use client";

import { motion } from "framer-motion";

interface ExperienceHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function ExperienceHero({
  eyebrow,
  title,
  description,
}: ExperienceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--vs-accent)_6%,transparent),transparent_72%)]" />

      <div className="site-container relative py-[var(--vs-editorial-space)] ">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="text-[11px] uppercase tracking-[0.55em] text-[var(--vs-accent)]">
            {eyebrow}
          </span>

          <div
            aria-hidden="true"
            className="mt-6 h-px w-24 bg-white/10"
          />
        </motion.div>


        <div className="h-28 lg:h-40" />


        <motion.h2
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-6xl
            text-[clamp(2.8rem,5vw,5.8rem)]
            font-light
            leading-[1.02]
            tracking-[-0.045em]
            text-white
          "
        >
          {title}
        </motion.h2>


        <div className="h-16 lg:h-20" />


        <motion.p
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            delay: 0.15,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-2xl
            text-lg
            leading-10
            text-muted
          "
        >
          {description}
        </motion.p>

      </div>
    </section>
  );
}