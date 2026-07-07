const steps = [
  {
    title: "Discovery & Design",
    description:
      "We begin by understanding the architecture, lifestyle, and technical requirements of the environment.",
  },
  {
    title: "Engineering",
    description:
      "Detailed system design is developed across lighting, networking, automation, security, and entertainment.",
  },
  {
    title: "Technology Selection",
    description:
      "We select and align technologies that meet performance, reliability, and integration standards.",
  },
  {
    title: "Programming & Commissioning",
    description:
      "Systems are configured and tested for seamless, one-touch operation.",
  },
  {
    title: "Precision Installation",
    description:
      "Installation is executed with strict adherence to architectural integrity and engineering detail.",
  },
  {
    title: "Lifecycle Support",
    description:
      "Long-term system care ensures continued performance, reliability, and adaptability.",
  },
];

export default function IntegrationMethod() {
  return (
    <section className="py-28 border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-20">
          <p className="text-white/50 text-xs uppercase tracking-[0.3em] mb-4">
            The Process
          </p>

          <h2 className="text-4xl md:text-5xl font-light">
            The Integration Method
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-12 border-l border-white/10 pl-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              
              {/* Dot */}
              <div className="absolute -left-[41px] top-2 w-3 h-3 bg-white rounded-full" />

              {/* Content */}
              <h3 className="text-xl font-light mb-2">
                {String(index + 1).padStart(2, "0")}. {step.title}
              </h3>

              <p className="text-white/70 leading-relaxed max-w-2xl">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}