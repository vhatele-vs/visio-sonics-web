import FeaturedSolution from "@/components/solutions/FeaturedSolution";
import SolutionCard from "@/components/solutions/SolutionCard";
import { solutions } from "@/lib/content/solutions";

export default function SolutionGrid() {
  return (
    <section className="mt-24">
      <div className="space-y-10">
        <FeaturedSolution solution={solutions.featured} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {solutions.items.map((solution, index) => {
            const span =
              index % 4 === 0
                ? "lg:col-span-2"
                : index % 4 === 3
                  ? "lg:col-span-2"
                  : "lg:col-span-1";

            return (
              <div key={solution.id} className={span}>
                <SolutionCard
                  solution={solution}
                  delay={index * 0.12}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}