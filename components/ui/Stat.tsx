"use client";

import type { HTMLAttributes } from "react";

interface StatProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  description?: string;
}

export default function Stat({
  value,
  label,
  description,
  className = "",
  ...props
}: StatProps) {
  return (
    <div
      className={[
        "border-l border-white/10 pl-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <p className="text-4xl font-light tracking-tight text-white">
        {value}
      </p>

      <p className="mt-3 text-sm font-medium uppercase tracking-[0.20em] text-[var(--vs-accent)]">
        {label}
      </p>

      {description && (
        <p className="mt-4 text-sm leading-7 text-[var(--vs-text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}