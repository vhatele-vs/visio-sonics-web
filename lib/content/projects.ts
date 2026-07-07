import type { FeaturedProject } from "@/lib/types/project";
import type { ProjectShowcaseProps } from "@/components/sections/ProjectShowcase";



export const featuredProjects: FeaturedProject[] = [
  {
    id: "luxury-residence",
    title: "Luxury Residence",
    location: "Johannesburg",
    description:
      "An integrated smart home where lighting, audio, climate and security work together seamlessly.",
    image: "/images/projects/luxury-residence.png",
    href: "/projects/luxury-residence",
  },
  {
    id: "private-cinema",
    title: "Private Cinema",
    location: "Pretoria",
    description:
      "A dedicated cinema engineered for immersive sound, reference-quality projection and effortless control.",
    image: "/images/projects/private-cinema.png",
    href: "/projects/private-cinema",
  },
  {
    id: "executive-boardroom",
    title: "Executive Boardroom",
    location: "Cape Town",
    description:
      "A collaborative workspace combining presentation technology, conferencing and intuitive room control.",
    image: "/images/projects/executive-boardroom.png",
    href: "/projects/executive-boardroom",
  },
];

export const luxuryLivingProject: ProjectShowcaseProps = {
  title: "Contemporary Smart Residence",
  location: "Johannesburg, South Africa",
  description:
    "A fully integrated luxury residence where lighting, climate, entertainment, security and networking were engineered to work as a single intelligent ecosystem while remaining visually invisible.",
  image: "/images/projects/contemporary-residence.png",
  href: "/projects/contemporary-smart-residence",
};