import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    image: "/images/experience-living.png",
    title: "Intelligent Living",
    description:
      "Lighting, climate, shading and automation working together to create a home that responds naturally to the people who live in it.",
  },
  {
    image: "/images/experience-cinema.png",
    title: "Cinematic Entertainment",
    description:
      "Private cinemas and media environments engineered to deliver extraordinary sound and picture without compromising architectural beauty.",
  },
  {
    image: "/images/experience-workspace.png",
    title: "Connected Workspaces",
    description:
      "Meeting rooms, collaboration spaces and intelligent commercial environments designed for productivity, simplicity and reliability.",
  },
  {
    image: "/images/experience-wellness.png",
    title: "Wellness & Security",
    description:
      "Invisible technology that protects, comforts and enhances everyday life through integrated security, lighting and environmental control.",
  },
];

export default function Experiences() {
  return (
    <Section className="bg-[#0B0B0B]">

      <Container>

        <Heading
          eyebrow="CURATED EXPERIENCES"
          title="Technology designed around the moments that matter."
        />

        <div className="mt-20 grid gap-16 md:grid-cols-2">

          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.title}
              image={experience.image}
              title={experience.title}
              description={experience.description}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}