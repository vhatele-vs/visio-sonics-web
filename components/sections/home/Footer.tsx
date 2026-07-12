"use client";

import Link from "next/link";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const navigation = [
  {
    title: "Platform",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10">
      <Section spacing="compact">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">
            <div className="max-w-md">
              <span className="text-sm font-semibold uppercase tracking-[0.30em] text-[var(--vs-accent)]">
                Visio Sonics
              </span>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white">
                Where Vision Meets Sound.
              </h2>

              <p className="mt-6 text-sm leading-7 text-[var(--vs-text-muted)]">
                Engineering extraordinary environments through intelligent
                integration, invisible technology, and architecture-first
                design.
              </p>
            </div>

            {navigation.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.20em] text-white">
                  {group.title}
                </h3>

                <ul className="mt-6 space-y-4">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--vs-text-muted)] transition-colors duration-300 hover:text-[var(--vs-accent)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-[var(--vs-text-muted)] md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Visio Sonics. All rights reserved.
            </p>

            <p>Engineering Extraordinary Environments.</p>
          </div>
        </Container>
      </Section>
    </footer>
  );
}