export interface FeaturedProject {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  href: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  location: string;
  category: string;
  year: string;
  client?: string;

  heroImage: string;
  gallery: string[];

  summary: string;

  challenge: string;
  solution: string;
  outcome: string;

  technologies: string[];
}