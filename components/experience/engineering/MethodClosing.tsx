"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MethodClosing() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">

      {/* Ambient Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.08),transparent_72%)]" />

      <div className="relative mx-auto max-w-[1680px] px-8 md:px-14 xl:px-24 py-40 lg:py-56">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <span className="text-[11px] uppercase tracking-[0.55em] text-[var(--vs-accent)]">
            DISCIPLINED ENGINEERING
          </span>

          <div className="mt-6 h-px w-24 bg-white/10" />

          <h2 className="mt-12 text-5xl md:text-6xl xl:text-[5.8rem] font-light leading-[1.02] tracking-[-0.045em] text-white">
            Extraordinary results
            <br />
            begin long before
            <br />
            installation.
          </h2>

          <p className="mt-12 max-w-2xl text-lg leading-10 text-white/70">
            Invisible technology is never accidental. It is carefully planned, patiently engineered and meticulously commissioned so architecture remains the hero and technology quietly serves the people who live within it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-24"
        >
          <Link
            href="/about"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-10 text-sm uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[var(--vs-accent)] hover:bg-[var(--vs-accent)] hover:text-black"
          >
            Why architects choose Visio Sonics
          </Link>
        </motion.div>

      </div>
    </section>
  );
}