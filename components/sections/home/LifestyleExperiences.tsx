import ExperienceClosing from "./lifestyle/ExperienceClosing";
import ExperienceHero from "./lifestyle/ExperienceHero";
import ExperienceSplit from "./lifestyle/ExperienceSplit";
import { experiences } from "./lifestyle/experiences";

export default function LifestyleExperiences() {
  return (
    <>
      <ExperienceHero experience={experiences[0]} />

      <ExperienceSplit
        experience={experiences[1]}
        imageLeft={false}
      />

      <ExperienceSplit
        experience={experiences[2]}
        imageLeft
      />

      <ExperienceSplit
        experience={experiences[3]}
        imageLeft={false}
      />

      <ExperienceSplit
        experience={experiences[4]}
        imageLeft
      />

      <ExperienceHero experience={experiences[5]} />

      <ExperienceClosing />
    </>
  );
}