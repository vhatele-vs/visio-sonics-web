"use client";

import { heroContent } from "./hero.data";

export default function HeroDescription() {
  return (
    <p
      className="
        max-w-full
        lg:max-w-[560px]
        text-base
        sm:text-lg
        md:text-xl
        leading-relaxed
        text-white/90
        font-light
        [text-shadow:0_2px_16px_rgba(0,0,0,0.55)]
      "
    >
      {heroContent.description}
    </p>
  );
}