import Image from "next/image";
import Link from "next/link";

import type { ExperienceItem } from "./experiences.types";

interface ExperienceCardProps {
  item: ExperienceItem;
}

export default function ExperienceCard({
  item,
}: ExperienceCardProps) {
  return (
    <Link
      href={item.href}
      className="group block overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-[var(--vs-accent)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-light text-white transition-colors duration-300 group-hover:text-[var(--vs-accent)]">
          {item.title}
        </h3>

        <p className="mt-5 leading-8 text-[var(--vs-text-muted)]">
          {item.description}
        </p>

        <span className="mt-8 inline-flex items-center text-sm uppercase tracking-[0.25em] text-[var(--vs-accent)]">
          Discover More →
        </span>
      </div>
    </Link>
  );
}