"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { imageReveal } from "@/lib/animation/motion";

interface RevealImageProps {
  children: ReactNode;
  className?: string;
}

export default function RevealImage({
  children,
  className,
}: RevealImageProps) {
  return (
    <motion.div
      className={className}
      variants={imageReveal}
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