"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden pt-28 md:pt-36 lg:pt-44"
    >
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(217,119,6,0.12),transparent_42%),linear-gradient(to_bottom,#050505,#050505)]"
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30"
      />

      <Container>
        <div className="mx-auto flex min-h-[72vh] max-w-5xl flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <Heading
              eyebrow="ENGINEERING EXTRAORDINARY ENVIRONMENTS"
              title="Technology disappears. Extraordinary living remains."
              description="Visio Sonics engineers intelligent environments where architecture, technology, and human experience become one seamless system—from concept through commissioning."
              align="center"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--vs-accent)] px-8 text-sm font-medium text-black transition-all duration-300 hover:bg-[var(--vs-accent-hover)] hover:shadow-[0_0_32px_rgba(217,119,6,0.25)]"
            >
              Start Your Project
            </Link>

            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[var(--vs-accent)] hover:bg-white/10"
            >
              Explore Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--vs-text-muted)]">
                Architecture
              </p>
              <p className="mt-2 text-sm leading-7 text-white/90">
                Invisible technology designed around architectural intent.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--vs-text-muted)]">
                Integration
              </p>
              <p className="mt-2 text-sm leading-7 text-white/90">
                Audio, video, lighting, networking, security, climate, and
                energy unified into one ecosystem.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--vs-text-muted)]">
                Experience
              </p>
              <p className="mt-2 text-sm leading-7 text-white/90">
                Crafted for discerning homeowners, architects, and developers
                who expect technology to disappear.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}