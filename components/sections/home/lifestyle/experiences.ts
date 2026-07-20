export interface Experience {
  id: string;
  eyebrow: string;
  title: string;
  heading: string;
  description: string;
  image: string;
}

export const experiences: Experience[] = [
  {
    id: "morning",
    eyebrow: "Experience 01",
    title: "Good Morning",
    heading: "The home wakes before you do.",
    description:
      "Natural light enters gently. Blinds rise. Music begins. Coffee is ready. The day starts beautifully.",
    image: "/images/home/lifestyle-morning.webp",
  },

  {
    id: "welcome-home",
    eyebrow: "Experience 02",
    title: "Welcome Home",
    heading: "The house welcomes you home.",
    description:
      "As you arrive, the gate opens, the pathway illuminates, the climate adjusts and your favourite spaces come alive.",
    image: "/images/home/lifestyle-arrival.webp",
  },

  {
    id: "entertain",
    eyebrow: "Experience 03",
    title: "Entertain",
    heading: "Every room performs together.",
    description:
      "Dinner. Conversation. Celebration. Lighting adapts. Music follows the atmosphere while every space responds as one.",
    image: "/images/home/lifestyle-entertain.webp",
  },

  {
    id: "cinema",
    eyebrow: "Experience 04",
    title: "Cinema",
    heading: "The outside world disappears.",
    description:
      "One touch. Lights fade. Curtains close. Sound surrounds you. Only the story remains.",
    image: "/images/home/lifestyle-cinema.webp",
  },

  {
    id: "peace-of-mind",
    eyebrow: "Experience 05",
    title: "Peace of Mind",
    heading: "Always within reach.",
    description:
      "Whether you are home, travelling or on another continent, your property remains secure, connected and protected.",
    image: "/images/home/lifestyle-security.webp",
  },

  {
    id: "good-night",
    eyebrow: "Experience 06",
    title: "Good Night",
    heading: "Everything quietly watches over your family.",
    description:
      "Doors secure. Lighting softens. Climate settles. The house prepares for tomorrow while you rest.",
    image: "/images/home/lifestyle-night.webp",
  },
];