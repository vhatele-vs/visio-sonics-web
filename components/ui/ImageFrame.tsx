"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";

interface ImageFrameProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function ImageFrame({
  src,
  alt,
  className = "",
  priority = false,
}: ImageFrameProps) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl",
        "border border-white/10 bg-white/[0.02]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
      />
    </div>
  );
}