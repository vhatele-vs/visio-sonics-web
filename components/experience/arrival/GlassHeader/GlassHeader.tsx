"use client";

import { useEffect, useState } from "react";

import Brand from "./Brand";
import HeaderWordmark from "../Hero/HeaderWordmark";
import MenuButton from "./MenuButton";
import NavigationPanel from "./NavigationPanel";

export default function GlassHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 80);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  function handleMenuToggle() {
    setIsMenuOpen((previous) => !previous);
  }


  function handleMenuClose() {
    setIsMenuOpen(false);
  }


  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50",
          "transition-all duration-500 ease-out",

          isMenuOpen
            ? [
                "border-b border-white/10",
                "bg-black/90",
                "backdrop-blur-2xl",
              ].join(" ")

            : isScrolled
            ? [
                "border-b border-white/10",
                "bg-black/55",
                "backdrop-blur-2xl",
              ].join(" ")

            : "bg-transparent",

        ].join(" ")}
      >

        <div
          className="
            mx-auto
            flex
            h-24
            max-w-[1680px]
            items-center
            justify-between
            px-8
            md:px-14
            xl:px-24
          "
        >

          {/* Left Brand */}

          <Brand />


          {/* Center Wordmark */}

          <HeaderWordmark />


          {/* Navigation Trigger */}

          <MenuButton
            isOpen={isMenuOpen}
            onToggle={handleMenuToggle}
          />

        </div>

      </header>


      {/* Full Screen Navigation */}

      <NavigationPanel
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
      />
    </>
  );
}