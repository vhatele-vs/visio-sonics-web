"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionConfig } from "@/lib/motion";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScaleIn({
  children,
  delay = 0,
  className = "",
}: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={motionConfig.scaleIn.hidden}
      whileInView={motionConfig.scaleIn.visible}
      viewport={motionConfig.viewport}
      transition={{
        duration: motionConfig.duration,
        delay,
        ease: motionConfig.ease,
      }}
    >
      {children}
    </motion.div>
  );
}