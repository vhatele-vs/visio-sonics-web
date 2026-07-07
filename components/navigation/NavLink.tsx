"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function NavLink({
  href,
  children,
  className = "",
}: NavLinkProps) {
  const pathname = usePathname();

  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "text-sm uppercase tracking-[0.2em] transition-colors duration-300",
        active
          ? "text-[var(--vs-accent)]"
          : "text-white hover:text-[var(--vs-accent)]",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}