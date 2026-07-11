/**
 * Motion tokens.
 */

export const motion = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },

  easing: {
    standard: "ease",
    entrance: "ease-out",
    exit: "ease-in",
  },
} as const;

export type Motion = typeof motion;