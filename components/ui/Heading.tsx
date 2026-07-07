interface HeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function Heading({
  eyebrow,
  title,
  description,
  align = "left",
}: HeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-4xl text-center"
          : "max-w-4xl"
      }
    >
      {eyebrow && (
        <p className="mb-6 uppercase tracking-[0.35em] text-[13px] text-[var(--vs-accent)]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-5xl font-extralight leading-tight text-white md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}