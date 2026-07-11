/**
 * Visio Sonics Platform v6.0
 * Container Design Tokens
 */

export const containers = {
  widths: {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-[1600px]",
  },

  padding: {
    mobile: "px-6",
    tablet: "sm:px-8",
    desktop: "lg:px-12",
    wide: "xl:px-16",
  },
} as const;

export type ContainerTokens = typeof containers;