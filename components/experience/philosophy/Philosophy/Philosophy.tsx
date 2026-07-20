import PhilosophyNarrative from "./PhilosophyNarrative";
import PhilosophySignature from "./PhilosophySignature";
import PhilosophyStatement from "./PhilosophyStatement";

export default function Philosophy() {
  return (
    <div className="relative min-h-screen">
      <PhilosophyStatement />
      <PhilosophyNarrative />
      <PhilosophySignature />
    </div>
  );
}