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
    <section className="relative overflow-hidden bg-[#050505]">

      {/* Ambient Light */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.06),transparent_72%)]" />

      <div className="relative mx-auto max-w-[1680px] px-8 md:px-14 xl:px-24 py-44 lg:py-60">

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >

          <span className="text-[11px] uppercase tracking-[0.55em] text-[var(--vs-accent)]">
            {eyebrow}
          </span>

          <div className="mt-6 h-px w-24 bg-white/10" />

          <h2 className="mt-12 max-w-5xl text-5xl md:text-6xl xl:text-[5.8rem] font-light leading-[1.02] tracking-[-0.045em] text-white">
            {title}
          </h2>

          <p className="mt-12 max-w-3xl text-lg leading-10 text-white/70">
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
          <div className="h-px w-full bg-gradient-to-r from-[var(--vs-accent)]/70 via-white/10 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex items-center justify-between flex-wrap gap-6"
        >

          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            Architecture • Engineering • Invisible Technology
          </p>

          <p className="text-sm uppercase tracking-[0.3em] text-[var(--vs-accent)]">
           Begin the Conversation
          </p>

        </motion.div>

      </div>

    </section>
  );
}