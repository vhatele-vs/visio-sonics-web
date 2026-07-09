import type { MethodStep as MethodStepType } from "./method.types";

interface MethodStepProps {
  step: MethodStepType;
}

export default function MethodStep({
  step,
}: MethodStepProps) {
  return (
    <article className="group relative rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-[var(--vs-accent)]">
      <span className="text-sm font-medium tracking-[0.3em] text-[var(--vs-accent)]">
        {step.step}
      </span>

      <h3 className="mt-6 text-2xl font-light text-white transition-colors duration-300 group-hover:text-[var(--vs-accent)]">
        {step.title}
      </h3>

      <p className="mt-6 leading-8 text-[var(--vs-text-muted)]">
        {step.description}
      </p>
    </article>
  );
}