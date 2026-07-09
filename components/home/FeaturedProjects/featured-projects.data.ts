import type { FeaturedProject } from "./featured-projects.types";

export const featuredProjects: FeaturedProject[] = [
  {
    id: "luxury-residence",
    title: "Luxury Residence",
    category: "Residential",
    location: "Johannesburg, South Africa",
    description:
      "A fully integrated smart residence combining whole-home audio, lighting control, security, networking, and intelligent automation into a seamless luxury living experience.",
    image: "/images/projects/luxury-residence.webp",
    href: "/projects/luxury-residence",
  },
  {
    id: "private-cinema",
    title: "Private Cinema",
    category: "Entertainment",
    location: "Pretoria, South Africa",
    description:
      "A reference-quality private cinema engineered for immersive Dolby Atmos performance, precision acoustics, and exceptional visual fidelity.",
    image: "/images/projects/private-cinema.webp",
    href: "/projects/private-cinema",
  },
  {
    id: "executive-boardroom",
    title: "Executive Boardroom",
    category: "Commercial",
    location: "Sandton, South Africa",
    description:
      "A premium collaboration environment integrating conferencing, presentation technology, digital signage, and intelligent room control for executive decision-making.",
    image: "/images/projects/executive-boardroom.webp",
    href: "/projects/executive-boardroom",
  },
];