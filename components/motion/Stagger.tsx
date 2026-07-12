"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { stagger } from "@/lib/animation/motion";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerContainer({
  children,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      variants={stagger}
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