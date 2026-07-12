"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { scaleIn } from "@/lib/animation/motion";

interface ScaleInProps {
  children: ReactNode;
  className?: string;
}

export default function ScaleIn({
  children,
  className,
}: ScaleInProps) {
  return (
    <motion.div
      className={className}
      variants={scaleIn}
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