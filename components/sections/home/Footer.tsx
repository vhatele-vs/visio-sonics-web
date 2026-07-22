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

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/visio-sonics/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/visiosonics/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/visiosonics/",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      aria-label="Site footer"
      className="border-t border-white/10"
    >
      <Section spacing="compact">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">
            {/* Brand */}
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

              <div className="mt-8">
                <a
                  href="mailto:hello@visiosonics.co.za"
                  className="text-sm text-[var(--vs-text-muted)] transition-colors duration-300 hover:text-[var(--vs-accent)]"
                >
                  hello@visiosonics.co.za
                </a>

                <br />

                <a
                  href="tel:+27876573217"
                  className="mt-2 inline-block text-sm text-[var(--vs-text-muted)] transition-colors duration-300 hover:text-[var(--vs-accent)]"
                >
                  +27 87 657 3217
                </a>
              </div>
            </div>

            {/* Navigation */}
            {navigation.map((group) => (
              <nav key={group.title} aria-label={group.title}>
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
              </nav>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-[var(--vs-text-muted)] md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Visio Sonics. All rights reserved.
            </p>

            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="transition-colors duration-300 hover:text-[var(--vs-accent)]"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <p className="text-right">
              Engineering Extraordinary Environments.
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
