const experiences = [
  {
    title: "Live Beautifully",
    description:
      "Spaces that respond naturally to daily rhythms, lighting, and comfort without intervention.",
  },
  {
    title: "Entertain Effortlessly",
    description:
      "Immersive sound and cinema environments designed for seamless enjoyment and control.",
  },
  {
    title: "Feel Secure",
    description:
      "Intelligent protection systems that operate quietly in the background with absolute reliability.",
  },
  {
    title: "Stay Connected",
    description:
      "Robust networking infrastructure engineered for uninterrupted performance across all devices.",
  },
];

export default function Experiences() {
  return (
    <section className="py-28 border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-white/50 text-xs uppercase tracking-[0.3em] mb-4">
            Experiences
          </p>

          <h2 className="text-4xl md:text-5xl font-light">
            What We Create
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((item) => (
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