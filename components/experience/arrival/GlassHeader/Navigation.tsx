"use client";

import Link from "next/link";

import { navigation } from "./glass-header.data";

export default function Navigation() {
  return (
    <nav
      aria-label="Primary Navigation"
      className="hidden xl:flex items-center gap-10"
    >
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="
            relative
            text-[11px]
            uppercase
            tracking-[0.28em]
            text-white/70
            transition-all
            duration-300
            hover:text-white
            after:absolute
            after:left-0
            after:-bottom-2
            after:h-px
            after:w-0
            after:bg-[var(--vs-accent)]
            after:transition-all
            after:duration-300
            hover:after:w-full
          "
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}