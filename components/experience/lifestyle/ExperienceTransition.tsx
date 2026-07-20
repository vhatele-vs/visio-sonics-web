"use client";

import { motion } from "framer-motion";

interface ExperienceTransitionProps {
  title: string;
  statement: string;
}

export default function ExperienceTransition({
  title,
  statement,
}: ExperienceTransitionProps) {
  return (
    <section className="relative overflow-hidden bg-[#050505]">

      <div className="mx-auto max-w-[1200px] px-8 py-32 md:px-14 lg:py-40 xl:px-24">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >

          <div
            aria-hidden="true"
            className="
              mx-auto
              mb-12
              h-px
              w-24
              bg-white/10
            "
          />


          <h2
            className="
              text-[clamp(2.5rem,4vw,4.5rem)]
              font-light
              leading-[1.05]
              tracking-[-0.04em]
              text-white
            "
          >
            {title}
          </h2>


          <p
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-lg
              leading-10
              text-white/70
            "
          >
            {statement}
          </p>


          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-16
              h-px
              w-40
              bg-gradient-to-r
              from-transparent
              via-[var(--vs-accent)]
              to-transparent
            "
          />

        </motion.div>

      </div>

    </section>
  );
}