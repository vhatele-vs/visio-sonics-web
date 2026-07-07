import { heroContent } from "@/lib/content/hero";

export default function HeroMetrics() {
  return (
    <div className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-8">
      {heroContent.metrics.map((metric) => (
        <div key={metric.label}>
          <p className="text-3xl font-light text-white">
            {metric.value}
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-400">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}