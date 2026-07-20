"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-[#050505]"
    >
      {/* Spatial breathing room */}
      <div className="mx-auto max-w-[1680px] px-8 md:px-14 xl:px-24 py-40 lg:py-56">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="max-w-[240px]"
        >
          <span className="text-[11px] uppercase tracking-[0.55em] text-[var(--vs-accent)]">
            Chapter 02
          </span>

          <div className="mt-6 h-px w-24 bg-white/10" />
        </motion.div>

        <div className="h-32 lg:h-44" />

        <div className="grid gap-24 xl:grid-cols-12">

          {/* Editorial Statement */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9 }}
            className="xl:col-span-7"
          >
            <h2 className="max-w-5xl font-light leading-[1.04] tracking-[-0.045em] text-white text-5xl md:text-6xl xl:text-[5.8rem]">
              Technology should never compete with architecture.
            </h2>
          </motion.div>

          {/* Philosophy */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="xl:col-span-5 xl:pt-8"
          >
            <p className="max-w-xl text-lg leading-10 text-white/72">
              At Visio Sonics, we believe exceptional technology is experienced,
              not displayed. Every lighting scene, every soundscape, every
              security layer and every intelligent system is engineered to
              disappear into the architecture, allowing the home itself to
              become the centre of attention.
            </p>

            <div className="mt-16 h-px w-32 bg-white/10" />

            <p className="mt-16 max-w-lg text-sm uppercase tracking-[0.35em] text-white/45 leading-8">
              Invisible Technology • Architectural Precision • Human Experience
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}