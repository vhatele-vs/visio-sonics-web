export interface EngineeringStage {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
}

export const engineeringStages: EngineeringStage[] = [
  {
    id: 1,
    eyebrow: "01",
    title: "Discover",
    description:
      "Every project begins with understanding the architecture, the lifestyle, and the aspirations of the people who will inhabit the space.",
  },
  {
    id: 2,
    eyebrow: "02",
    title: "Engineer",
    description:
      "Our engineers design a complete technology ecosystem that integrates audio, lighting, security, networking, climate and automation into a single coordinated platform.",
  },
  {
    id: 3,
    eyebrow: "03",
    title: "Integrate",
    description:
      "Working alongside architects, builders and consultants, we coordinate every installation so that technology disappears into the architecture.",
  },
  {
    id: 4,
    eyebrow: "04",
    title: "Calibrate",
    description:
      "Every environment is commissioned, tuned and tested until every system performs exactly as intended and every experience feels effortless.",
  },
  {
    id: 5,
    eyebrow: "05",
    title: "Support",
    description:
      "Long after handover, Visio Sonics continues to monitor, optimise and evolve each environment as lifestyles and technologies change.",
  },
];