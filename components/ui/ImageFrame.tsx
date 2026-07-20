"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface ImageFrameProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  aspect?: "square" | "wide" | "cinematic";
}

const aspectStyles = {
  square: "aspect-square",
  wide: "aspect-[16/10]",
  cinematic: "aspect-[16/9]",
};

export default function ImageFrame({
  src,
  alt,
  className,
  priority = false,
  aspect = "cinematic",
}: ImageFrameProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl",
        "border border-white/10 bg-white/[0.02]",
        aspectStyles[aspect],
        className
      )}
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
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
      />
    </div>
  );
}