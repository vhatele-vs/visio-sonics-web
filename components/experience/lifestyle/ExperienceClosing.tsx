"use client";

import { motion } from "framer-motion";

interface ExperienceClosingProps {
  title: string;
  description: string;
}

export default function ExperienceClosing({
  title,
  description,
}: ExperienceClosingProps) {
  return (
    <section className="relative overflow-hidden bg-[#050505]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.05),transparent_75%)]" />

      <div className="relative mx-auto max-w-[1680px] px-8 py-40 md:px-14 lg:py-56 xl:px-24">

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl"
        >

          <div
            aria-hidden="true"
            className="h-px w-24 bg-white/10"
          />


          <h2
            className="
              mt-12
              max-w-5xl
              text-[clamp(2.8rem,5vw,5.8rem)]
              font-light
              leading-[1.02]
              tracking-[-0.045em]
              text-white
            "
          >
            {title}
          </h2>


          <p
            className="
              mt-12
              max-w-3xl
              text-lg
              leading-10
              text-white/70
            "
          >
            {description}
          </p>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, scaleX: 0.85 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 origin-left"
        >
          <div
            aria-hidden="true"
            className="
              h-px
              w-full
              bg-gradient-to-r
              from-[var(--vs-accent)]/70
              via-white/10
              to-transparent
            "
          />
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.35,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-between
            gap-6
          "
        >

          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            Intelligent Living • Invisible Technology
          </p>

          <p className="text-sm uppercase tracking-[0.3em] text-[var(--vs-accent)]">
            Engineering
          </p>

        </motion.div>

      </div>
    </section>
  );
}