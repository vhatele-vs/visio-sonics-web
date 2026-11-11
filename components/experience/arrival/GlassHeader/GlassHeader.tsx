"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { navigation } from "@/lib/content/navigation";

export default function GlassHeader() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [menuOpen]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--vs-border)] bg-background/90 backdrop-blur-xl">
        <Container size="wide">
          <div className="flex h-20 items-center justify-between gap-6 md:h-24">
            <Link href="/" aria-label="Visio Sonics home" className="shrink-0">
              <Image src="/branding/visio-sonics-logo.svg" alt="Visio Sonics" width={240} height={80} className="h-auto w-40 mix-blend-screen sm:w-48" priority />
            </Link>
            <nav aria-label="Primary navigation" className="hidden items-center gap-6 xl:flex">
              {navigation.filter((item) => item.href !== "/contact").map((item) => (
                <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}
                  className={isActive(item.href) ? "text-sm text-accent" : "text-sm text-muted transition-colors hover:text-accent"}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden xl:block"><Button href="/contact" size="sm">Start a Conversation</Button></div>
            <button ref={triggerRef} type="button" onClick={() => setMenuOpen(true)} aria-label="Open navigation" aria-haspopup="dialog" aria-expanded={menuOpen} aria-controls="site-navigation" className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--vs-border)] text-foreground hover:border-accent xl:hidden">
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>
      <dialog ref={dialogRef} id="site-navigation" aria-labelledby="navigation-title" onClose={() => setMenuOpen(false)}
        className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-dvh w-full max-w-md border-l border-[var(--vs-border)] bg-background p-0 text-foreground backdrop:bg-black/75 backdrop:backdrop-blur-sm">
        <div className="flex min-h-full flex-col p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-[var(--vs-border)] pb-6">
            <h2 id="navigation-title" className="text-xs uppercase tracking-[0.25em] text-accent">Navigation</h2>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation" className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--vs-border)] hover:text-accent"><X size={20} aria-hidden="true" /></button>
          </div>
          <nav aria-label="Mobile navigation" className="flex flex-1 flex-col gap-6 py-10">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} aria-current={isActive(item.href) ? "page" : undefined}
                className={"font-display text-3xl transition-colors hover:text-accent " + (isActive(item.href) ? "text-accent" : "text-foreground")}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href="/contact" fullWidth onClick={() => setMenuOpen(false)}>Start a Conversation</Button>
        </div>
      </dialog>
    </>
  );
}
