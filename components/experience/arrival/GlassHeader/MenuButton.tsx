"use client";

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MenuButton({
  isOpen,
  onToggle,
}: MenuButtonProps) {
  return (
    <button
      type="button"
      aria-label={
        isOpen
          ? "Close navigation"
          : "Open navigation"
      }
      aria-expanded={isOpen}
      aria-controls="navigation-panel"
      onClick={onToggle}
      className="
        relative
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        transition-colors
        duration-300
        hover:bg-white/5
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--vs-accent)]
      "
    >
      <span className="relative block h-5 w-7">

        <span
          className={[
            "absolute left-0 top-1/2 h-px w-7 -translate-y-2 bg-white transition-all duration-300",
            isOpen
              ? "translate-y-0 rotate-45"
              : "",
          ].join(" ")}
        />


        <span
          className={[
            "absolute left-0 top-1/2 h-px w-7 translate-y-2 bg-white transition-all duration-300",
            isOpen
              ? "translate-y-0 -rotate-45"
              : "",
          ].join(" ")}
        />

      </span>
    </button>
  );
}
