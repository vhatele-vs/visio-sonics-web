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

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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
            ? ["border-b border-white/10", "bg-black/90", "backdrop-blur-2xl"].join(" ")
            : isScrolled
            ? ["border-b border-white/10", "bg-black/55", "backdrop-blur-2xl"].join(" ")
            : "bg-transparent",
        ].join(" ")}
      >
        <div
          className="
            relative
            mx-auto
            flex
            h-20
            items-center
            justify-between
            max-w-[1680px]
            px-5
            sm:px-8
            md:h-24
            md:px-14
            xl:px-24
          "
        >
          {/* Brand */}
          <Brand />

          {/* Center Wordmark — absolutely centered so it doesn't drift */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <HeaderWordmark />
          </div>

          {/* Menu Trigger */}
          <MenuButton isOpen={isMenuOpen} onToggle={handleMenuToggle} />
        </div>
      </header>

      <NavigationPanel isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  );
}