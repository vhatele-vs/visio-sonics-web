import Image from "next/image";
import Link from "next/link";

import FadeUp from "@/components/motion/FadeUp";
import type { FeaturedSolution as FeaturedSolutionType } from "@/lib/types/solution";

interface FeaturedSolutionProps {
  solution: FeaturedSolutionType;
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
        {/* existing content remains unchanged */}
      </Link>
    </FadeUp>
  );
}