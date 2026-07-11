/**
 * Corner radius tokens.
 */

export const radius = {
  none: "0",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  pill: "9999px",
} as const;

export type Radius = typeof radius;