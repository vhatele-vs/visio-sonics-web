import Link from "next/link";
import { cn } from "@/lib/utils";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function TextLink({
  href,
  children,
  className,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-white transition-colors duration-300",
        "hover:text-white/70",
        className
      )}
    >
      {children}
    </Link>
  );
}