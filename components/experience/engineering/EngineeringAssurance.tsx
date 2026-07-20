const assurances = [
  "Every system is considered before it is installed.",
  "Every detail is coordinated with the architecture.",
  "Every experience is engineered to feel effortless.",
];

export default function EngineeringAssurance() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-6 pb-32 sm:px-10 lg:px-16">
      <div className="border-t border-white/10 pt-10">
        <div className="grid gap-8 md:grid-cols-3">
          {assurances.map((assurance, index) => (
            <div key={assurance} className="max-w-xs">
              <span className="text-xs tracking-[0.35em] text-[var(--vs-accent)]">
                0{index + 1}
              </span>

              <p className="mt-5 text-lg font-light leading-[1.5] text-[var(--vs-text)]">
                {assurance}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}