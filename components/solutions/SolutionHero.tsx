// components/solutions/SolutionHero.tsx

import PageHero from "@/components/ui/PageHero";
import { solutions } from "@/lib/content/solutions";

export default function SolutionHero() {
  return (
    <PageHero
      eyebrow={solutions.hero.eyebrow}
      title={solutions.hero.title}
      description={solutions.hero.description}
      image={solutions.hero.image}
    />
  );
}