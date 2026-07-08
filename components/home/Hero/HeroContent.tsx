import { heroContent } from "@/lib/content/hero";

import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex min-h-screen items-center">
      <div className="max-w-4xl py-32">

        {/* Eyebrow */}
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[var(--vs-accent)]">
          {heroContent.eyebrow}
        </p>

        {/* Headline */}
        <h1 className="text-5xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          <span className="block">
            {heroContent.headline.lineOne}
          </span>

          <span className="block text-white/70">
            {heroContent.headline.lineTwo}
          </span>
        </h1>

        {/* Description */}
        <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--vs-text-muted)] md:text-xl">
          {heroContent.description}
        </p>

        {/* Buttons */}
        <HeroButtons />

      </div>
    </div>
  );
}