"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function Hero() {
  return (
    <Section
      id="hero"
      spacing="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/home/hero.webp"
          alt="Luxury architectural residence by Visio Sonics"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Cinematic Overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-black/55"
      />

      {/* Bottom Gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-b from-black/10 via-black/20 to-[#050505]"
      />

      {/* Editorial Grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]
        bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
        bg-[size:72px_72px]"
      />

      {/* Ambient Glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[900px] w-[900px]
        -translate-x-1/2 rounded-full
        bg-[radial-gradient(circle,rgba(217,119,6,.18),transparent_70%)]
        blur-3xl"
      />

      <Container size="wide">
        <div className="flex min-h-[calc(100vh-88px)] items-center">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="max-w-4xl"
          >
            <p
              className="
                mb-8
                text-xs
                uppercase
                tracking-[0.55em]
                text-[var(--vs-accent)]
              "
            >
              Integrate • Engineer • Elevate
            </p>

            <h1
              className="
                max-w-5xl
                text-5xl
                font-light
                leading-[0.92]
                tracking-[-0.04em]
                text-white
                md:text-7xl
                xl:text-[6.2rem]
              "
            >
              Technology disappears.
              <br />
              Extraordinary living remains.
            </h1>

            <p
              className="
                mt-10
                max-w-2xl
                text-lg
                leading-9
                text-white/80
              "
            >
              <span className="text-white">
                Where Vision Meets Sound.
              </span>

              <br />
              <br />

              Visio Sonics engineers intelligent environments where
              architecture, technology and human experience become one
              seamless system—from concept through commissioning.
            </p>

                        <div className="mt-14 flex flex-col gap-5 sm:flex-row">

              <Link
                href="/contact"
                className="
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--vs-accent)]
                  px-9
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[var(--vs-accent-hover)]
                  hover:shadow-[0_0_40px_rgba(217,119,6,.35)]
                "
              >
                Start Your Project
              </Link>

              <Link
                href="/projects"
                className="
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  px-9
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[var(--vs-accent)]
                  hover:bg-white/10
                "
              >
                Explore Our Work
              </Link>

            </div>

          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .8,
            delay: .35,
          }}
          className="
            mt-8
            grid
            gap-8
            border-t
            border-white/10
            pt-10
            md:grid-cols-3
          "
        >
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.28em]
                text-[var(--vs-accent)]
              "
            >
              Architecture
            </p>

            <p className="mt-4 text-sm leading-8 text-white/70">
              Invisible technology engineered around
              architectural intent from concept to completion.
            </p>
          </div>

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.28em]
                text-[var(--vs-accent)]
              "
            >
              Integration
            </p>

            <p className="mt-4 text-sm leading-8 text-white/70">
              Audio, video, lighting, networking,
              security, climate and energy unified
              into one intelligent ecosystem.
            </p>
          </div>

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.28em]
                text-[var(--vs-accent)]
              "
            >
              Experience
            </p>

            <p className="mt-4 text-sm leading-8 text-white/70">
              Crafted for discerning homeowners,
              architects and developers who expect
              technology to disappear.
            </p>
          </div>
        </motion.div>
      </Container>

          </Section>
  );
}