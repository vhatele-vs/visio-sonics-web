"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-300 hover:border-[var(--vs-accent)]"
      >
        <span className="sr-only">
          {isOpen ? "Close menu" : "Open menu"}
        </span>

        <span className="flex w-5 flex-col gap-1.5">
          <span
            className={[
              "block h-px w-full bg-current transition-transform duration-300",
              isOpen ? "translate-y-[4px] rotate-45" : "",
            ].join(" ")}
          />

          <span
            className={[
              "block h-px w-full bg-current transition-opacity duration-300",
              isOpen ? "opacity-0" : "",
            ].join(" ")}
          />

          <span
            className={[
              "block h-px w-full bg-current transition-transform duration-300",
              isOpen ? "-translate-y-[4px] -rotate-45" : "",
            ].join(" ")}
          />
        </span>
      </button>

      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={[
          "fixed inset-0 z-50 bg-[#050505] transition-all duration-500",
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="flex min-h-full flex-col px-8 pb-12 pt-32">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-6">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    tabIndex={isOpen ? 0 : -1}
                    className="block text-4xl font-light tracking-[-0.03em] text-white transition-colors duration-300 hover:text-[var(--vs-accent)]"
                  >
                    <span className="mr-4 text-sm tracking-[0.25em] text-[var(--vs-accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto border-t border-white/10 pt-8">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--vs-accent)] px-8 text-sm uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:scale-[1.02]"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}