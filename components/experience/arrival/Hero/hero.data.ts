export interface HeroContent {
  eyebrow: string;
  headline: string[];
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
}

export const heroContent: HeroContent = {
  eyebrow: "VISIO SONICS",

  headline: [
    "Engineering Extraordinary",
    "Environments",
    
  ],

  description:
    "Architecture-first intelligent environments designed with precision and engineered for effortless living.",

  primaryAction: {
    label: "Start Your Project",
    href: "/contact",
  },
};