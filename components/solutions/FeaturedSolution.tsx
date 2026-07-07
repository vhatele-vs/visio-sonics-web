import Image from "next/image";
import Link from "next/link";

import FadeUp from "@/components/motion/FadeUp";
import type { Solution } from "@/lib/types/solution";

interface FeaturedSolutionProps {
  solution: Solution;
}

export default function FeaturedSolution({
  solution,
}: FeaturedSolutionProps) {
  return (
    <FadeUp>
      <Link
        href={solution.href}
        className="group block overflow-hidden rounded-[36px] bg-zinc-900"
      >
        <article className="relative aspect-[21/9] overflow-hidden">
          <Image
            src={solution.image}
            alt={solution.title}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

          <div className="absolute inset-0 flex items-end">
            <div className="max-w-3xl p-8 md:p-14 lg:p-16">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
                {solution.category}
              </p>

              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-white md:text-6xl">
                {solution.title}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                {solution.description}
              </p>

              <div className="mt-10 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-white transition-transform duration-300 group-hover:translate-x-2">
                <span>Explore Solution</span>

                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </FadeUp>
  );
}