import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  href: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  location,
  description,
  image,
  href,
}: ProjectCardProps) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-[32px] bg-zinc-900">
        <Image
          src={image}
          alt={title}
          width={1800}
          height={1200}
          className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
          {location}
        </p>

        <h3 className="mt-3 text-3xl font-light tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-6 max-w-2xl text-zinc-400">
          {description}
        </p>

        <Link
          href={href}
          className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white transition hover:text-[var(--vs-accent)]"
        >
          Discover Project
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}