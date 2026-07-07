import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">

      <div className="mx-auto max-w-7xl px-8 py-24">

        <div className="grid gap-20 lg:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-light tracking-[0.25em] text-white">
              VISIO SONICS
            </h2>

            <p className="mt-8 max-w-sm leading-8 text-zinc-400">
              Engineering extraordinary environments through
              architectural integration, intelligent technology
              and timeless design.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-8 text-sm uppercase tracking-[0.35em] text-zinc-500">
              Navigation
            </h3>

            <nav className="space-y-5">

              <Link href="/" className="block text-zinc-300 hover:text-white transition-colors">
                Home
              </Link>

              <Link href="/about" className="block text-zinc-300 hover:text-white transition-colors">
                About
              </Link>

              <Link href="/experiences" className="block text-zinc-300 hover:text-white transition-colors">
                Experiences
              </Link>

              <Link href="/projects" className="block text-zinc-300 hover:text-white transition-colors">
                Selected Works
              </Link>

              <Link href="/journal" className="block text-zinc-300 hover:text-white transition-colors">
                Journal
              </Link>

              <Link href="/contact" className="block text-zinc-300 hover:text-white transition-colors">
                Contact
              </Link>

            </nav>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-8 text-sm uppercase tracking-[0.35em] text-zinc-500">
              Studio
            </h3>

            <div className="space-y-4 text-zinc-300">

              <p>Polokwane</p>

              <p>Johannesburg</p>

              <p>South Africa</p>

            </div>

          </div>

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-sm text-zinc-500 md:flex-row">

          <p>
            © 2026 Visio Sonics. All rights reserved.
          </p>

          <p>
            Engineering Extraordinary Environments.
          </p>

        </div>

      </div>

    </footer>
  );
}