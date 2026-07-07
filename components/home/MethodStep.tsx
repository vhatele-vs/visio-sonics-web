interface MethodStepProps {
  number: string;
  title: string;
  description: string;
}

export default function MethodStep({
  number,
  title,
  description,
}: MethodStepProps) {
  return (
    <article className="border-t border-white/10 py-16">

      <div className="grid gap-8 lg:grid-cols-[180px_1fr]">

        <div>
          <span className="text-6xl font-extralight tracking-tight text-[var(--vs-accent)]">
            {number}
          </span>
        </div>

        <div>

          <h3 className="text-3xl font-light text-white">
            {title}
          </h3>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {description}
          </p>

        </div>

      </div>

    </article>
  );
}