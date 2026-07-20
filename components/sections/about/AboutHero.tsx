import { aboutHero } from "@/lib/content/about";

import PageHero from "@/components/ui/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      eyebrow={aboutHero.eyebrow}
      title={aboutHero.title}
      description={aboutHero.description}
    />
  );
}