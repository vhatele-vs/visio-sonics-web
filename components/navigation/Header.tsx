"use client";

import Link from "next/link";

import Container from "@/components/layout/Container";
import useScrollPosition from "@/lib/hooks/useScrollPosition";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const isScrolled = useScrollPosition();

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-black/75 backdrop-blur-2xl shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-full border border-[var(--vs-accent)] px-5 py-2 text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[var(--vs-accent)]"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}