import EngineeringBackground from "./EngineeringBackground";
import EngineeringMethod from "./EngineeringMethod";
import EngineeringNarrative from "./EngineeringNarrative";
import EngineeringStatement from "./EngineeringStatement";

export default function EngineeringRoom() {
  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-[var(--vs-background)]
      "
    >
      <EngineeringBackground />

      <div className="relative z-10">
        <EngineeringStatement />
        <EngineeringNarrative />
        <EngineeringMethod />
      </div>
    </section>
  );
}