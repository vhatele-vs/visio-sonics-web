import Image from "next/image";
import Link from "next/link";

import FadeUp from "@/components/motion/FadeUp";
import type { Solution } from "@/lib/types/solution";

interface SolutionCardProps {
  solution: Solution;
  delay?: number;
}

export default function SolutionCard({
  solution,
  delay = 0,
}: SolutionCardProps) {
  const content = (
    <article className="flex h-full flex-col">

      <div className="relative aspect-[4/3] overflow-hidden">

        <Image
          src={solution.image}
          alt={solution.title}
          fill
          sizes="
            (max-width:768px) 100vw,
            (max-width:1200px) 50vw,
            33vw
          "
          className="
            object-cover
            transition-transform
            duration-1000
            ease-out
            group-hover:scale-[1.05]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/25
            to-transparent
          "
        />

      </div>


      <div className="flex flex-1 flex-col p-10">

        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.35em]
            text-[var(--vs-accent)]
          "
        >
          {solution.category}
        </p>


        <h3
          className="
            mt-5
            font-display
            text-3xl
            font-light
            leading-tight
            text-white
          "
        >
          {solution.title}
        </h3>


        <div
          aria-hidden="true"
          className="
            mt-6
            h-px
            w-14
            bg-[var(--vs-accent)]
          "
        />


        <p
          className="
            mt-6
            flex-1
            leading-8
            text-zinc-400
          "
        >
          {solution.description}
        </p>


        {solution.href && (
          <div
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-white
              transition-transform
              duration-300
              group-hover:translate-x-2
            "
          >

            <span>
              View Solution
            </span>


            <svg
              aria-hidden="true"
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
        )}

      </div>

    </article>
  );


  return (
    <FadeUp delay={delay}>

      {solution.href ? (

        <Link
          href={solution.href}
          className="
            group
            block
            h-full
            overflow-hidden
            rounded-[32px]
            bg-zinc-900
            transition-transform
            duration-500
            hover:-translate-y-1
          "
        >
          {content}
        </Link>

      ) : (

        <div
          className="
            block
            h-full
            overflow-hidden
            rounded-[32px]
            bg-zinc-900
          "
        >
          {content}
        </div>

      )}

    </FadeUp>
  );
}