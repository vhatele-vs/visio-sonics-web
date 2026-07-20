"use client";

import { motion } from "framer-motion";

export default function HeroFooter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 1,
      }}
      className="
        flex
        items-center
        justify-center
        pb-12
        md:pb-16
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          gap-4
          text-white/40
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.45em]
          "
        >
          Explore
        </span>

        <span
          aria-hidden="true"
          className="
            h-10
            w-px
            bg-white/20
          "
        />
      </div>
    </motion.div>
  );
}