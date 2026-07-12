"use client";

import { motion } from "framer-motion";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  animated?: boolean;
}

export default function Card({
  children,
  hover = true,
  animated = true,
  className = "",
  ...props
}: CardProps) {
  const styles = [
    "rounded-3xl",
    "border border-white/10",
    "bg-white/[0.02]",
    "p-8",
    "transition-all duration-300",
    hover
      ? "hover:border-[var(--vs-accent)] hover:bg-white/[0.04]"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className={styles}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  );
}