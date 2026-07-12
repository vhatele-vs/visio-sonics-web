"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fade } from "@/lib/animation/motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
}

export default function FadeIn({
  children,
  className,
}: FadeInProps) {
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