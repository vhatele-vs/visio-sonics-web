/**
 * Visio Sonics Platform v6.0
 * Editorial Typography System
 */

export const typography = {
  hero: {
    size: "clamp(3.5rem, 6vw, 6rem)",
    lineHeight: 1.05,
    weight: 600,
    tracking: "-0.03em",
  },

  display: {
    size: "clamp(2.5rem, 4vw, 4rem)",
    lineHeight: 1.1,
    weight: 600,
    tracking: "-0.025em",
  },

  section: {
    size: "clamp(2rem, 3vw, 3rem)",
    lineHeight: 1.2,
    weight: 600,
    tracking: "-0.02em",
  },

  lead: {
    size: "1.25rem",
    lineHeight: 1.7,
    weight: 400,
  },

  body: {
    size: "1rem",
    lineHeight: 1.8,
    weight: 400,
  },

  small: {
    size: "0.875rem",
    lineHeight: 1.6,
    weight: 400,
  },

  eyebrow: {
    size: "0.75rem",
    lineHeight: 1,
    weight: 600,
    tracking: "0.18em",
  },
} as const;

export type Typography = typeof typography;