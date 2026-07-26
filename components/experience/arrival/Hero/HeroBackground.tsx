"use client";

import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0">

        <Image
          src="/images/home/hero.webp"
          alt="Luxury architectural residence"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

      </div>


      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent"
      />


      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/8 to-[#050505]/70"
      />


      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]"
      />


      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          bg-[size:90px_90px]
        "
      />
    </>
  );
}