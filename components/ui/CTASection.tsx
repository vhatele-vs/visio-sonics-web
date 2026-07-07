// components/ui/CTASection.tsx

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
    <section className="w-full bg-black text-white py-24 px-6">
      <div className="mx-auto max-w-5xl text-center">
        {eyebrow && (
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
            {eyebrow}
          </p>
        )}

        <h2 className="text-3xl md:text-5xl font-light">
          {title}
        </h2>

        {description && (
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            {description}
          </p>
        )}

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="bg-white text-black px-6 py-3 text-sm tracking-wide hover:opacity-80 transition"
          >
            {primaryLabel}
          </Link>

          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="border border-white/30 px-6 py-3 text-sm tracking-wide hover:border-white transition"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}