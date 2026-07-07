"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionConfig } from "@/lib/motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={motionConfig.fadeIn.hidden}
      whileInView={motionConfig.fadeIn.visible}
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