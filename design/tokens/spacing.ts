/**
 * Visio Sonics Platform v6.0
 * Design System
 *
 * Editorial spacing scale.
 *
 * All spacing decisions across the platform
 * should originate from this file.
 */

export const spacing = {
  /**
   * Base spacing scale
   */
  xs: "0.25rem",   // 4px
  sm: "0.5rem",    // 8px
  md: "1rem",      // 16px
  lg: "1.5rem",    // 24px
  xl: "2rem",      // 32px
  "2xl": "3rem",   // 48px
  "3xl": "4rem",   // 64px
  "4xl": "5rem",   // 80px
  "5xl": "6rem",   // 96px
  "6xl": "8rem",   // 128px

  /**
   * Component spacing
   */
  component: {
    compact: "1rem",
    comfortable: "1.5rem",
    spacious: "2rem",
  },

  /**
   * Section spacing
   */
  section: {
    compact: "py-16 lg:py-20",
  default: "py-24 lg:py-32",
    
  },

  /**
   * Editorial rhythm
   */
  editorial: {
    hero: "py-32 lg:py-40",
  editorial: "py-24 lg:py-32",
  showcase: "py-20 lg:py-28",
  finale: "py-28 lg:py-36",
  },
} as const;

export type Spacing = typeof spacing;