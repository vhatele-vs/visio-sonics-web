import type { ProjectCaseStudy } from "@/lib/types/project";

export const caseStudies: ProjectCaseStudy[] = [
  {
    slug: "luxury-residence",

    title: "Luxury Residence",

    location: "Johannesburg",

    category: "Residential",

    year: "2025",

    heroImage: "/images/projects/luxury-residence.webp",

    gallery: [
      "/images/projects/luxury-residence.webp",
    ],

    summary:
      "A contemporary smart residence where lighting, climate, entertainment and security were engineered as a unified ecosystem.",

    challenge:
      "Integrate advanced technology while preserving the architectural purity of the home.",

    solution:
      "Hidden speakers, intelligent lighting, enterprise networking and centralized control created an invisible technology experience.",

    outcome:
      "The homeowners enjoy effortless automation while every technology component remains visually discreet.",

    technologies: [
      "Control4",
      "Lutron",
      "Enterprise Wi-Fi",
      "Whole-home Audio",
    ],
  },
];