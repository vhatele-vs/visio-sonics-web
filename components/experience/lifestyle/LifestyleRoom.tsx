"use client";

import ExperienceHero from "./ExperienceHero";
import ExperienceSplit from "./ExperienceSplit";
import ExperienceTransition from "./ExperienceTransition";
import ExperienceClosing from "./ExperienceClosing";

export default function LifestyleRoom() {
  return (
    <section
  id="living-architecture"
  aria-label="Lifestyle experiences"
  className="
    relative
    isolate
    overflow-hidden
    bg-[#050505]
  "
>
      
      <ExperienceHero
        eyebrow="Lifestyle"
        title="Technology becomes part of everyday living."
        description="From the first light of morning until the last light fades, every moment is quietly orchestrated around the people who live there."
      />

      <ExperienceSplit
        eyebrow="Experience 01"
        title="The home wakes before you do."
        description="Natural light rises gently, climate adjusts to your preferences, and the day begins in quiet comfort without a single button being pressed."
        image="/images/lifestyle/morning.webp"
        imageAlt="Luxury bedroom at sunrise"
      />

      <ExperienceSplit
        eyebrow="Experience 02"
        title="The house welcomes you home."
        description="As you arrive, lighting, music and climate respond instantly, creating an effortless transition from the outside world to your private sanctuary."
        image="/images/lifestyle/arrival.webp"
        imageAlt="Luxury entrance"
        reverse
      />

      <ExperienceSplit
        eyebrow="Experience 03"
        title="Every room performs together."
        description="Dinner. Conversation. Celebration. Every space adapts naturally while lighting, music and comfort remain perfectly synchronized."
        image="/images/lifestyle/entertainment.webp"
        imageAlt="Luxury living room"
      />

      <ExperienceSplit
        eyebrow="Experience 04"
        title="The outside world disappears."
        description="One touch transforms the room. Lights fade. Curtains close. Sound surrounds you. Only the story remains."
        image="/images/lifestyle/cinema.webp"
        imageAlt="Private cinema"
        reverse
      />

      <ExperienceSplit
        eyebrow="Experience 05"
        title="Always within reach."
        description="Whether you're at home, travelling or overseas, your residence remains secure, connected and ready whenever you are."
        image="/images/lifestyle/remote.webp"
        imageAlt="Remote home monitoring"
      />

      <ExperienceSplit
        eyebrow="Experience 06"
        title="Everything quietly watches over your family."
        description="Invisible protection works continuously in the background, allowing you to enjoy complete peace of mind without ever noticing the technology."
        image="/images/lifestyle/security.webp"
        imageAlt="Luxury residence at night"
        reverse
      />

      <ExperienceTransition
        title="Invisible engineering makes every experience possible."
        statement="Beautiful moments are never accidental. Behind every effortless interaction lies meticulous engineering."
      />

      <ExperienceClosing
        title="Experience is engineered long before it is lived."
        description="Every extraordinary home begins with thoughtful planning, invisible integration and uncompromising attention to detail."
      />
    </section>
  );
}