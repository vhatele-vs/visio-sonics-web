import type { Variants } from "framer-motion";

export const overlayVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.35,
      when: "afterChildren",
    },
  },

  open: {
    opacity: 1,
    transition: {
      duration: 0.45,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

export const panelVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.98,
  },

  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
    },
  },
};

export const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: 32,
  },

  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

export const footerVariants: Variants = {
  closed: {
    opacity: 0,
    y: 24,
  },

  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.4,
    },
  },
};