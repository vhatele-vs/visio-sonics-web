"use client";

import { motion } from "framer-motion";

interface WhyClosingProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export default function WhyClosing({
  eyebrow = "Built on Trust",
  title = "Great technology is never the destination.",
  description = "It is the quiet confidence that every system, every space and every experience has been thoughtfully engineered to enrich the way people live. That is the promise behind every Visio Sonics project.",
}: WhyClosingProps) {
  return (
    <div className="relative overflow-hidden bg-background">

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--vs-accent)_6%,transparent),transparent_72%)]
        "
      />


      <div
        className="site-container
          relative
          py-44
          lg:py-60
          "
      >

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >

          <span
            className="
              text-[11px]
              uppercase
              tracking-[0.55em]
              text-[var(--vs-accent)]
            "
          >
            {eyebrow}
          </span>


          <div
            aria-hidden="true"
            className="mt-6 h-px w-24 bg-white/10"
          />


          <h3
            className="
              mt-12
              max-w-5xl
              text-5xl
              font-light
              leading-[1.02]
              tracking-[-0.045em]
              text-white
              md:text-6xl
              xl:text-[5.8rem]
            "
          >
            {title}
          </h3>


          <p
            className="
              mt-12
              max-w-3xl
              text-lg
              leading-10
              text-muted
            "
          >
            {description}
          </p>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, scaleX: 0.85 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.8 }}
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
          transition={{ delay: 0.4, duration: 0.8 }}
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-between
            gap-6
          "
        >

          <p className="text-sm uppercase tracking-[0.35em] text-muted">
            Architecture • Engineering • Invisible Technology
          </p>

          <p className="text-sm uppercase tracking-[0.3em] text-[var(--vs-accent)]">
            Begin the Conversation
          </p>

        </motion.div>

      </div>

    </div>
  );
}
