"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { itemVariants } from "./MenuMotion";

export interface MenuNavigationItem {
  label: string;
  href: string;
  description: string;
}

interface MenuNavigationProps {
  items: MenuNavigationItem[];
  activeHref?: string;
  onNavigate?: () => void;
}

export default function MenuNavigation({
  items,
  activeHref,
  onNavigate,
}: MenuNavigationProps) {
  return (
    <nav
      aria-label="Primary"
      className="
        flex-1
        px-8
        pt-32
        pb-20
        md:px-16
        xl:px-24
      "
    >
      <div className="mx-auto w-full max-w-[1680px]">
        <div className="grid gap-14 xl:grid-cols-[280px_1fr]">
          {/* Editorial Chapter Marker */}
          <motion.div
            variants={itemVariants}
            className="hidden xl:block"
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.45em]
                text-[var(--vs-accent)]
              "
            >
              Stage 1
            </p>

            <h2
              className="
                mt-6
                text-4xl
                font-light
                tracking-[-0.04em]
                text-white
              "
            >
              Arrival
            </h2>

            <div className="mt-10 h-px w-24 bg-white/15" />

            <p
              className="
                mt-10
                max-w-[220px]
                text-sm
                leading-8
                text-white/55
              "
            >
              Navigate the Visio Sonics digital experience through
              carefully engineered architectural chapters.
            </p>
          </motion.div>

          {/* Editorial Navigation */}
          <div className="space-y-4">
            {items.map((item, index) => {
              const active = activeHref === item.href;

              return (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  custom={index}
                >
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="
                      group
                      block
                      border-b
                      border-white/8
                      py-10
                      transition-colors
                      duration-300
                      hover:border-[var(--vs-accent)]
                    "
                  >
                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-10
                      "
                    >
                      <div>
                        <h3
                          className={[
                            "font-light tracking-[-0.04em] transition-colors duration-300",
                            "text-4xl md:text-5xl xl:text-6xl",
                            active
                              ? "text-[var(--vs-accent)]"
                              : "text-white group-hover:text-[var(--vs-accent)]",
                          ].join(" ")}
                        >
                          {item.label}
                        </h3>

                        <p
                          className="
                            mt-5
                            max-w-2xl
                            text-base
                            leading-8
                            text-white/55
                            transition-colors
                            duration-300
                            group-hover:text-white/75
                          "
                        >
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        className="
                          mt-3
                          h-6
                          w-6
                          shrink-0
                          text-white/30
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          group-hover:text-[var(--vs-accent)]
                        "
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}