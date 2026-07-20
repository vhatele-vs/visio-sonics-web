"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BeginConversation() {
  return (
    <section
      id="begin-conversation"
      className="relative overflow-hidden border-t border-white/5 bg-[#050505]"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1680px] px-8 md:px-14 xl:px-24 py-40 lg:py-56">

        {/* Chapter Marker */}

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[11px] uppercase tracking-[0.55em] text-[var(--vs-accent)]">
            Chapter 06
          </span>

          <div className="mt-6 h-px w-24 bg-white/10" />
        </motion.div>

        <div className="h-32 lg:h-40" />

        {/* Editorial Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9 }}
          className="max-w-6xl font-light leading-[1.02] tracking-[-0.045em] text-white text-5xl md:text-6xl xl:text-[6rem]"
        >
          Every extraordinary home
          <br />
          begins with a conversation.
        </motion.h2>

        <div className="h-20 lg:h-24" />

        {/* Narrative */}

        <motion.p
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="max-w-2xl text-lg leading-10 text-white/72"
        >
          Whether you are designing a private residence, a luxury apartment,
          boutique hospitality, or a future-ready workplace, we collaborate
          from the earliest architectural stages to engineer technology that
          becomes an invisible part of the experience.
        </motion.p>

        <div className="h-24 lg:h-32" />

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="flex flex-col gap-6 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--vs-accent)] px-10 text-sm font-medium uppercase tracking-[0.22em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-amber-400"
          >
            Begin Your Project
          </Link>

          <Link
            href="/projects"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-10 text-sm font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
          >
            View Selected Work
          </Link>
        </motion.div>

      </div>
    </section>
  );
}