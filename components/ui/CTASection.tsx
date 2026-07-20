import Link from "next/link";

export type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  eyebrow = "Get Started",
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="w-full bg-black px-6 py-32 text-white md:py-40">
      <div className="mx-auto max-w-5xl text-center">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.45em] text-[var(--vs-accent)]">
            {eyebrow}
          </p>
        )}

        <h2 className="mt-6 text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
          {title}
        </h2>

        {description && (
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
            {description}
          </p>
        )}

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="
              inline-flex
              h-14
              items-center
              justify-center
              rounded-full
              bg-[var(--vs-accent)]
              px-8
              text-sm
              font-medium
              uppercase
              tracking-[0.2em]
              text-black
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-[var(--vs-accent-hover)]
            "
          >
            {primaryLabel}
          </Link>

          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="
                inline-flex
                h-14
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.03]
                px-8
                text-sm
                font-medium
                uppercase
                tracking-[0.2em]
                text-white
                transition-all
                duration-300
                hover:border-[var(--vs-accent)]
                hover:bg-white/[0.06]
              "
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}