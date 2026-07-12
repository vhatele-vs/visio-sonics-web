"use client";

import Link from "next/link";

import Container from "@/components/layout/Container";
import useScrollPosition from "@/lib/hooks/useScrollPosition";

import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function Header() {
  const isScrolled = useScrollPosition();

  return (
    <header
      role="banner"
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-500 ease-out",
        isScrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "border-b border-transparent bg-transparent backdrop-blur-0",
      ].join(" ")}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <DesktopNav />

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--vs-accent)]/70 bg-transparent px-6 text-sm font-medium uppercase tracking-[0.20em] text-white transition-all duration-300 hover:border-[var(--vs-accent)] hover:bg-[var(--vs-accent)] hover:text-black"
            >
              Contact
            </Link>
          </div>

          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}