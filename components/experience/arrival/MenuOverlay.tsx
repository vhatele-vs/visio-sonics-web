"use client";

import type { ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  overlayVariants,
  panelVariants,
} from "./MenuMotion";

interface MenuOverlayProps {
  open: boolean;
  children: ReactNode;
}

export default function MenuOverlay({
  open,
  children,
}: MenuOverlayProps) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="experience-menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={overlayVariants}
          className="
            fixed
            inset-0
            z-[100]
            overflow-hidden
            bg-[#050505]/95
            backdrop-blur-3xl
          "
        >
          {/* Cinematic Ambient Glow */}
          <div
            aria-hidden
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.10),transparent_68%)]
            "
          />

          {/* Editorial Grid */}
          <div
            aria-hidden
            className="
              absolute
              inset-0
              opacity-[0.05]
              bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)]
              bg-[size:96px_96px]
            "
          />

          {/* Architectural Panel */}
          <motion.div
            variants={panelVariants}
            className="
              relative
              flex
              min-h-screen
              flex-col
            "
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}