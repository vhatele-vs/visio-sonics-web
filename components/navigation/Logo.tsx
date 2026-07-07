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
  src="/branding/visio-sonics-logo.png"
  alt="Visio Sonics"
  width={260}
  height={70}
  priority
  className="h-auto w-[220px] lg:w-[260px]"
/>
    </Link>
  );
}