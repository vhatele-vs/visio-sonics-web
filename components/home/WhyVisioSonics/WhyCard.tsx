import type { WhyItem } from "./why-visiosonics.types";

interface WhyCardProps {
  item: WhyItem;
}

export default function WhyCard({
  item,
}: WhyCardProps) {
  return (
    <article className="group rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-[var(--vs-accent)]">
      <h3 className="text-2xl font-light text-white transition-colors duration-300 group-hover:text-[var(--vs-accent)]">
        {item.title}
      </h3>

      <p className="mt-6 leading-8 text-[var(--vs-text-muted)]">
        {item.description}
      </p>
    </article>
  );
}