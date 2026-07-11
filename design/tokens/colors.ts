/**
 * Visio Sonics Platform v6.0
 * Brand Color Tokens
 */

export const colors = {
  background: {
    primary: "#050505",
    secondary: "#111111",
    elevated: "#1A1A1A",
  },

  surface: {
    card: "#161616",
    glass: "rgba(255,255,255,0.04)",
  },

  text: {
    primary: "#FFFFFF",
    secondary: "#C7C7C7",
    muted: "#8A8A8A",
  },

  border: {
    subtle: "rgba(255,255,255,0.08)",
    strong: "rgba(255,255,255,0.16)",
  },

  brand: {
    primary: "#F97316",
    hover: "#FB923C",
    accent: "#FDBA74",
  },

  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",
} as const;

export type Colors = typeof colors;