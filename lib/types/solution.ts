// lib/types/solution.ts

export interface Solution {
  id: string;
  category: string;
  title: string;
  description: string;
  href?: string;
  image: string;
} 

export interface FeaturedSolution extends Solution {
  href: string;
}

export interface SolutionHero {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export interface SolutionsContent {
  hero: SolutionHero;
  featured: FeaturedSolution;
  items: Solution[];
}