// lib/content/solutions.ts

import type {
  Solution,
  SolutionHero,
  SolutionsContent,
} from "@/lib/types/solution";

const hero: SolutionHero = {
  eyebrow: "Solutions",
  title: "Engineering Extraordinary Environments",
  description:
    "Technology designed to disappear into architecture, creating extraordinary spaces that are intuitive, elegant, and timeless.",
  image: "/images/solutions/hero.jpg",
};

const featured: Solution = {
  id: "luxury-living",
  category: "Residential",
  title: "Luxury Living",
  description:
    "Integrated lighting, audio, security, climate and control systems designed to become part of the architecture rather than compete with it.",
  href: "/solutions/luxury-living",
  image: "/images/solutions/luxury-living.jpg",
};

const items: Solution[] = [
  {
    id: "commercial",
    category: "Commercial",
    title: "Commercial Spaces",
    description:
      "Intelligent environments that improve collaboration, presentation and operational efficiency.",
    href: "/solutions/commercial",
    image: "/images/solutions/commercial.jpg",
  },

  {
    id: "hospitality",
    category: "Hospitality",
    title: "Hospitality",
    description:
      "Guest experiences engineered through discreet technology and refined design.",
    href: "/solutions/hospitality",
    image: "/images/solutions/hospitality.jpg",
  },

  {
    id: "marine",
    category: "Marine",
    title: "Marine",
    description:
      "Reliable entertainment, connectivity and automation systems built for life at sea.",
    href: "/solutions/marine",
    image: "/images/solutions/marine.jpg",
  },

  {
    id: "multi-dwelling",
    category: "Multi-Dwelling",
    title: "Multi-Dwelling",
    description:
      "Scalable technology infrastructure for luxury apartments and residential developments.",
    href: "/solutions/multi-dwelling",
    image: "/images/solutions/multi-dwelling.jpg",
  },
];

export const solutions: SolutionsContent = {
  hero,
  featured,
  items,
};