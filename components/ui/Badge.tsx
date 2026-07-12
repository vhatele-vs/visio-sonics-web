"use client";

import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted";
}

const variants = {
  default:
    "border-white/10 bg-white/5 text-white",

  accent:
    "border-[var(--vs-accent)]/30 bg-[var(--vs-accent)]/10 text-[var(--vs-accent)]",

  muted:
    "border-white/10 bg-white/[0.03] text-[var(--vs-text-muted)]",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-4 py-1.5",
        "text-xs font-medium uppercase tracking-[0.20em]",
        "transition-colors duration-300",
        variants[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}