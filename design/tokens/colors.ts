/** CSS custom properties in styles/tokens.css are the source of truth. */
export const colors = {
  background: {
    primary: "var(--vs-background)",
    secondary: "var(--vs-surface)",
    elevated: "var(--vs-surface-2)",
  },
  surface: {
    card: "var(--vs-surface)",
    glass: "rgb(255 255 255 / 0.04)",
  },
  text: {
    primary: "var(--vs-text)",
    secondary: "var(--vs-text-secondary)",
    muted: "var(--vs-text-muted)",
  },
  border: {
    subtle: "var(--vs-border)",
    strong: "var(--vs-border-strong)",
  },
  brand: {
    primary: "var(--vs-accent)",
    hover: "var(--vs-accent-hover)",
    accent: "var(--vs-accent-soft)",
  },
  success: "var(--vs-success)",
  warning: "var(--vs-warning)",
  danger: "var(--vs-danger)",
} as const;

export type Colors = typeof colors;
