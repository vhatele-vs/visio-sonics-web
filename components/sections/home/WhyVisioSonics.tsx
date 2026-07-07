const reasons = [
  {
    title: "Engineering Before Installation",
    description:
      "Every decision is defined at design level to ensure precision, scalability, and long-term performance.",
  },
  {
    title: "Invisible Technology",
    description:
      "Systems are integrated into the environment so seamlessly that they disappear into daily life.",
  },
  {
    title: "Architectural Harmony",
    description:
      "Technology is designed to respect and enhance architectural intent, not compete with it.",
  },
  {
    title: "Future-Proof Infrastructure",
    description:
      "We design systems that remain relevant, adaptable, and reliable as technology evolves.",
  },
  {
    title: "Long-Term Reliability",
    description:
      "Every installation is engineered for stability, durability, and consistent performance over time.",
  },
  {
    title: "End-to-End Responsibility",
    description:
      "From concept to lifecycle support, we remain accountable for every stage of delivery.",
  },
];

export default function WhyVisioSonics() {
  return (
    <section className="py-28 border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-white/50 text-xs uppercase tracking-[0.3em] mb-4">
            Why Visio Sonics
          </p>

          <h2 className="text-4xl md:text-5xl font-light">
            Engineering Without Compromise
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="border border-white/10 p-8 hover:border-white/30 transition"
            >
              <h3 className="text-xl font-light mb-4">
                {item.title}
              </h3>

              <p className="text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}