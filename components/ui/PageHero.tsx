// components/ui/PageHero.tsx

import Image from "next/image";

export type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-24">
        {eyebrow && (
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/70">
            {eyebrow}
          </p>
        )}

        <h1 className="text-4xl font-light leading-tight md:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-base text-white/70 md:text-lg">
            {description}
          </p>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}