import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";

const principles = [
  {
    number: "01",
    title: "Architecture First",
    description:
      "Every solution begins with the architecture, ensuring technology complements rather than competes with the space.",
  },
  {
    number: "02",
    title: "Engineered Precision",
    description:
      "Every detail is carefully designed, documented, programmed and commissioned to deliver exceptional long-term performance.",
  },
  {
    number: "03",
    title: "Timeless Integration",
    description:
      "Our systems evolve with changing lifestyles and technology, protecting your investment well into the future.",
  },
];

export default function WhyApproach() {
  return (
    <section className="border-t border-white/10 bg-zinc-950 py-32">
      <Container>
        <div className="grid gap-20 lg:grid-cols-12">

          {/* Left Column */}

          <div className="lg:col-span-5">

            <FadeUp>

              <p className="text-xs uppercase tracking-[0.35em] text-amber-400">
                Architecture Before Technology
              </p>

            </FadeUp>

            <FadeUp delay={0.1}>

              <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
                Every solution begins with architecture.
              </h2>

            </FadeUp>

            <FadeUp delay={0.2}>

              <div className="mt-8 h-px w-24 bg-[var(--vs-accent)]" />

            </FadeUp>

            <FadeUp delay={0.3}>

              <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
                We never begin with products.
                We begin by understanding the architecture,
                the people and the lifestyle the space is
                intended to support.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
                The result is technology that feels invisible,
                intuitive and enduring—enhancing every
                experience without ever becoming the focus.
              </p>

            </FadeUp>

          </div>

          {/* Right Column */}

          <div className="space-y-12 lg:col-span-7">

            {principles.map((principle, index) => (
              <FadeUp
                key={principle.number}
                delay={0.15 * (index + 1)}
              >
                <div className="border-t border-white/10 pt-10">

                  <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                    {principle.number}
                  </p>

                  <h3 className="mt-4 font-display text-3xl text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-6 max-w-lg leading-8 text-zinc-400">
                    {principle.description}
                  </p>

                </div>
              </FadeUp>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}