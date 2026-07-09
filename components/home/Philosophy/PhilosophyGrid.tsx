import PhilosophyCard from "./PhilosophyCard";
import { philosophyItems } from "./philosophy.data";

export default function PhilosophyGrid() {
  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {philosophyItems.map((item) => (
        <PhilosophyCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}