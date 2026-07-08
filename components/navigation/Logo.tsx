import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Visio Sonics Home"
      className="flex items-center"
    >
      <Image
        src="/branding/visio-sonics-logo.svg"
        alt="Visio Sonics"
        width={300}
        height={101}
        priority
        className="w-[220px] h-auto lg:w-[260px]"
      />
    </Link>
  );
}