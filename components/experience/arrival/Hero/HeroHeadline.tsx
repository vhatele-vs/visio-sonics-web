"use client";

import { motion } from "framer-motion";
import { heroContent } from "./hero.data";

export default function HeroHeadline() {
  return (
    <motion.h1
      aria-label={heroContent.headline.join(" ")}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        max-w-4xl
        font-display
        font-normal
        tracking-tight
        leading-[1.1]
        text-white
        text-[clamp(2.5rem,6vw,5.5rem)]
      "
    >
      {heroContent.headline.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </motion.h1>
  );
}
