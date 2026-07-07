"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { navigation } from "@/lib/content/navigation";
import NavLink from "./NavLink";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-black px-8 py-10"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <span className="text-white text-sm tracking-[0.2em] uppercase">
                Menu
              </span>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="text-white"
              >
                <X size={26} />
              </button>
            </div>

            {/* Navigation */}
            <nav
              className="mt-16 flex flex-col gap-8"
              aria-label="Mobile Navigation"
            >
              {navigation.map((item) => (
                <div key={item.href} onClick={onClose}>
                  <NavLink
                    href={item.href}
                    className="text-2xl tracking-wide"
                  >
                    {item.label}
                  </NavLink>
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-auto">
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full rounded-full bg-[var(--vs-accent)] py-4 text-center text-sm uppercase tracking-[0.2em] text-black"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}