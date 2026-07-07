import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],

  theme: {
  extend: {
    colors: {
      accent: "var(--vs-accent)",
      bg: "var(--vs-bg)",
      surface: "var(--vs-surface)",
      surface2: "var(--vs-surface-2)",
      border: "var(--vs-border)",
      text: "var(--vs-text)",
      muted: "var(--vs-text-muted)",
      dim: "var(--vs-text-dim)",
      success: "var(--vs-success)",
      warning: "var(--vs-warning)",
      error: "var(--vs-error)",
    },
  },
},

  plugins: [],
};

export default config;