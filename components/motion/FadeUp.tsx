"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp } from "@/lib/animation/motion";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeUp({
  children,
  className,
  delay = 0,
}: FadeUpProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}