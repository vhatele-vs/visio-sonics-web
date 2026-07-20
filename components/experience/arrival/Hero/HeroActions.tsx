"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { heroContent } from "./hero.data";

export default function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.35,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={heroContent.primaryAction.href}
        className="
          group
          inline-flex
          h-16
          items-center
          justify-center
          rounded-full
          border
          border-white/15
          bg-white/8
          px-12
          backdrop-blur-md
          transition-all
          duration-500
          hover:border-white/30
          hover:bg-white/12
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--vs-accent)]
        "
      >
        <span
          className="
            text-[0.82rem]
            font-medium
            uppercase
            tracking-[0.32em]
            text-white
            transition-all
            duration-500
            group-hover:tracking-[0.38em]
          "
        >
          {heroContent.primaryAction.label}
        </span>

        <span
          aria-hidden="true"
          className="
            ml-4
            text-white/80
            transition-transform
            duration-500
            group-hover:translate-x-2
          "
        >
          →
        </span>
      </Link>
    </motion.div>
  );
}