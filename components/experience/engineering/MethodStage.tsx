"use client";

import { motion } from "framer-motion";

import type { EngineeringStage } from "./engineering.data";

interface MethodStageProps {
  stage: EngineeringStage;
  reverse?: boolean;
}

export default function MethodStage({
  stage,
  reverse = false,
}: MethodStageProps) {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      {/* Ambient architectural lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.06),transparent_72%)]" />

      <div className="relative mx-auto max-w-[1680px] px-8 py-40 md:px-14 lg:py-56 xl:px-24">

        <div
          className={[
            "grid items-center gap-20 xl:grid-cols-12",
            reverse ? "xl:[&>*:first-child]:order-2" : "",
          ].join(" ")}
        >
          {/* Editorial Number */}

          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
            className="xl:col-span-3"
          >
            <span className="text-[9rem] font-extralight leading-none tracking-[-0.08em] text-white/6 md:text-[11rem] xl:text-[13rem]">
              {stage.eyebrow}
            </span>
          </motion.div>

          {/* Editorial Content */}

          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="xl:col-span-9"
          >
            <span className="text-[11px] uppercase tracking-[0.55em] text-[var(--vs-accent)]">
              Stage {stage.eyebrow}
            </span>

            <div className="mt-6 h-px w-24 bg-white/10" />

            <h2 className="mt-10 max-w-4xl text-5xl font-light leading-[1.02] tracking-[-0.045em] text-white md:text-6xl xl:text-[5.5rem]">
              {stage.title}
            </h2>

            <p className="mt-12 max-w-2xl text-lg leading-10 text-white/70">
              {stage.description}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}