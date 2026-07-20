export interface Principle {
  id: number;
  title: string;
  statement: string;
}

export const principles: Principle[] = [
  {
    id: 1,
    title: "Architecture Before Technology",
    statement:
      "Every decision begins with the architecture. Technology is carefully integrated to enhance the design, never compete with it.",
  },
  {
    id: 2,
    title: "Invisible Integration",
    statement:
      "The finest technology is the technology you never notice. Systems disappear into the background while every experience remains effortless.",
  },
  {
    id: 3,
    title: "Engineering Without Compromise",
    statement:
      "Every system is engineered with precision, creating a foundation of reliability, performance and future adaptability.",
  },
  {
    id: 4,
    title: "Partnership for Life",
    statement:
      "Our relationship continues well beyond project completion. We remain trusted advisors, ensuring every environment evolves with its owners.",
  },
];