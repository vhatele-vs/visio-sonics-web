"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden bg-[#050505]"
    >
      {/* Background Image */}

      <Image
        src="/images/home/hero.webp"
        alt="Luxury architectural residence featuring invisible technology integration"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic Overlays */}

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-[#050505]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_65%,rgba(0,0,0,0.55)_100%)]" />

      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.10)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Hero Content */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1680px] flex-col px-8 md:px-14 xl:px-24">

        {/* Spacer for Glass Header */}

        <div className="h-40 lg:h-48" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-[11px] uppercase tracking-[0.55em] text-[var(--vs-accent)]">
            VISIO SONICS
          </p>

          <div className="mt-6 h-px w-24 bg-white/10" />

          <p className="mt-8 max-w-xl text-sm uppercase tracking-[0.28em] text-white/55">
            Luxury Technology Integration House
          </p>
        </motion.div>

        <div className="h-24 lg:h-32" />

        {/* Editorial Headline */}

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.12,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-6xl font-light leading-[0.92] tracking-[-0.055em] text-white text-5xl md:text-7xl xl:text-[7.4rem]"
        >
          Technology disappears.
          <br />
          Extraordinary living remains.
        </motion.h1>

        <div className="h-20 lg:h-24" />

        {/* Editorial Description */}

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.24,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl text-lg leading-10 text-white/72"
        >
          We engineer intelligent environments where architecture,
          lighting, entertainment, security and automation become one
          invisible ecosystem designed exclusively around the way you live.
        </motion.p>

        <div className="h-20 lg:h-24" />

        {/* Actions */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-5 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--vs-accent)] px-10 text-sm uppercase tracking-[0.2em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-amber-400"
          >
            Begin Your Project
          </Link>

          <Link
            href="/projects"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-10 text-sm uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[var(--vs-accent)] hover:bg-white/10"
          >
            Explore Our Work
          </Link>
        </motion.div>

        <div className="flex-1" />

        {/* Editorial Footer */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-14 border-t border-white/10 py-16 md:grid-cols-3"
        >
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
              Architecture
            </h2>

            <p className="mt-6 max-w-sm text-base leading-8 text-white/60">
              Technology designed to disappear into exceptional
              architecture.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
              Integration
            </h2>

            <p className="mt-6 max-w-sm text-base leading-8 text-white/60">
              Every system working together as one intelligent living
              environment.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
              Experience
            </h2>

            <p className="mt-6 max-w-sm text-base leading-8 text-white/60">
              Comfort, simplicity and confidence engineered into every
              moment of everyday life.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}