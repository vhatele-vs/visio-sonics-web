"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fade } from "@/lib/animation/motion";

interface FadeProps {
  children: ReactNode;
  className?: string;
}

export default function Fade({
  children,
  className,
}: FadeProps) {
  return (
    <motion.div
      className={className}
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}