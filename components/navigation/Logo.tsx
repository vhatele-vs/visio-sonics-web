import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Visio Sonics Home"
      className="inline-flex items-center"
    >
      <img
        src="/branding/visio-sonics-logo.svg"
        alt="Visio Sonics"
        className="block h-auto w-[220px] bg-red-500 lg:w-[260px]"
      />
    </Link>
  );
}