"use client";

import { motion } from "framer-motion";

const process = [
  "Discover",
  "Design",
  "Engineere",
  "Commission",
  "Support",
];

export default function ProcessDiagram() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">

      <div className="mx-auto max-w-[1680px] px-8 md:px-14 xl:px-24 py-32 lg:py-44">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

            {process.map((step, index) => (
              <div
                key={step}
                className="flex items-center"
              >
                <div>

                  <p className="text-[11px] uppercase tracking-[0.4em] text-[var(--vs-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-4 text-2xl font-light text-white">
                    {step}
                  </h3>

                </div>

                {index < process.length - 1 && (
                  <div className="mx-8 hidden h-px w-20 bg-white/15 lg:block" />
                )}

              </div>
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}