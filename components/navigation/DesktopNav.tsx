import { navigation } from "@/lib/content/navigation";

import NavLink from "./NavLink";

const desktopNavigation = navigation.filter(
  ({ label }) => label !== "Contact"
);

export default function DesktopNav() {
  return (
    <nav
      aria-label="Primary"
      className="hidden lg:flex items-center gap-10"
    >
      {desktopNavigation.map(({ href, label }) => (
        <NavLink key={href} href={href}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}