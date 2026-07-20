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
        max-w-[760px]
        font-extralight
        tracking-[-0.025em]
        leading-[1.06]
        text-white
        text-4xl
        md:text-5xl
        lg:text-[4.5rem]
        xl:text-[5rem]
        2xl:text-[5.4rem]
      "
    >
      {heroContent.headline.map((line) => (
        <span
          key={line}
          className="block"
        >
          {line}
        </span>
      ))}
    </motion.h1>
  );
}