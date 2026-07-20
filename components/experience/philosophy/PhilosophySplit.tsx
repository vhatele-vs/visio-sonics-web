"use client";

import { motion } from "framer-motion";

export default function PhilosophySplit() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <div className="mx-auto max-w-[1680px] px-8 py-32 md:px-14 lg:py-44 xl:px-24">

        <div className="grid gap-20 xl:grid-cols-12">

          {/* Left Editorial Column */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
            className="xl:col-span-5"
          >
            <span className="text-[11px] uppercase tracking-[0.45em] text-[var(--vs-accent)]">
              Our Philosophy
            </span>

            <h3 className="mt-8 text-4xl md:text-5xl font-light leading-tight tracking-[-0.04em] text-white">
              Invisible technology.
              <br />
              Visible architecture.
            </h3>

            <p className="mt-10 text-lg leading-10 text-white/70">
              Every project begins with the architecture—not the equipment.
              We study how a space will be lived in before specifying a
              single device. Technology is carefully integrated so that it
              enhances daily life while remaining almost invisible.
            </p>
          </motion.div>

          {/* Right Editorial Column */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="xl:col-span-7 xl:pl-20"
          >
            <div className="space-y-14 border-l border-white/10 pl-10">

              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
                  01
                </span>

                <h4 className="mt-4 text-2xl font-light text-white">
                  Design Before Devices
                </h4>

                <p className="mt-4 leading-8 text-white/70">
                  We begin with lifestyle, architecture and spatial flow.
                  Equipment selection follows the vision—not the other way
                  around.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
                  02
                </span>

                <h4 className="mt-4 text-2xl font-light text-white">
                  Engineering Before Installation
                </h4>

                <p className="mt-4 leading-8 text-white/70">
                  Every cable pathway, rack layout, network topology and
                  subsystem is designed before construction begins,
                  reducing complexity and ensuring long-term reliability.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
                  03
                </span>

                <h4 className="mt-4 text-2xl font-light text-white">
                  Experience Above Everything
                </h4>

                <p className="mt-4 leading-8 text-white/70">
                  The homeowner should remember the experience,
                  never the technology behind it. That is the measure
                  of successful integration.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}