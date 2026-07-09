import { ShieldCheck } from "lucide-react";

interface TrustItemProps {
  title: string;
  description: string;
}

export default function TrustItem({
  title,
  description,
}: TrustItemProps) {
  return (
    <article
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
        p-8
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[var(--vs-primary)]
        hover:bg-white/[0.04]
      "
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--vs-primary)]/10 text-[var(--vs-primary)]">
        <ShieldCheck
          aria-hidden="true"
          className="h-7 w-7"
        />
      </div>

      <h3 className="mb-4 text-xl font-semibold tracking-tight text-[var(--vs-text)]">
        {title}
      </h3>

      <p className="leading-7 text-[var(--vs-text-muted)]">
        {description}
      </p>
    </article>
  );
}