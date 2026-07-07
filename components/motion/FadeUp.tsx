"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionConfig } from "@/lib/motion";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  className = "",
}: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={motionConfig.fadeUp.hidden}
      whileInView={motionConfig.fadeUp.visible}
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