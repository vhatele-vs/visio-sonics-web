"use client";

import HeroBackground from "./HeroBackground";
import HeroIdentity from "./HeroIdentity";
import HeroHeadline from "./HeroHeadline";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";
import HeroFooter from "./HeroFooter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      <HeroBackground />

      <div className="relative z-10 flex min-h-screen flex-col">

        <div className="h-24 lg:h-28" />

        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-[1680px] px-8 md:px-14 xl:px-24">

            <HeroIdentity />

            <div className="mt-20">
              <HeroHeadline />
            </div>

            <div className="mt-16">
              <HeroDescription />
            </div>

            <div className="mt-16">
              <HeroActions />
            </div>

          </div>
        </div>

        <HeroFooter />

      </div>
    </section>
  );
}