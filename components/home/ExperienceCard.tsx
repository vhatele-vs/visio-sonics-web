import Image from "next/image";

interface ExperienceCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ExperienceCard({
  image,
  title,
  description,
}: ExperienceCardProps) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-[28px] bg-zinc-900">

        <Image
          src={image}
          alt={title}
          width={900}
          height={700}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

      </div>

      <div className="mt-8">

        <h3 className="text-2xl font-light tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-zinc-400">
          {description}
        </p>

      </div>
    </article>
  );
}