"use client";

import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link
      href="/"
      aria-label="Visio Sonics Home"
      className="
        relative
        z-10
        inline-flex
        items-center
        transition-opacity
        duration-300
        hover:opacity-85
      "
    >
      <Image
        src="/branding/visio-sonics-logo.svg"
        alt="Visio Sonics"
        width={300}
        height={101}
        priority
        className="
          h-auto
          w-[180px]
          select-none
          md:w-[210px]
          xl:w-[240px]
        "
      />
    </Link>
  );
}