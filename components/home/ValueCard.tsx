interface ValueCardProps {
  title: string;
  description: string;
}

export default function ValueCard({
  title,
  description,
}: ValueCardProps) {
  return (
    <article className="group border-t border-white/10 pt-10 transition-all duration-500 hover:border-[var(--vs-accent)]">

      <h3 className="text-2xl font-light tracking-tight text-white">
        {title}
      </h3>

      <p className="mt-6 leading-8 text-zinc-400">
        {description}
      </p>

    </article>
  );
}