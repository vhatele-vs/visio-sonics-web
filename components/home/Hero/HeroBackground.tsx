export default function HeroBackground() {
  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Light Global Tint */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Reading Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/55
          via-black/20
          to-transparent
        "
      />

      {/* Top Navigation Fade */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-36
          bg-gradient-to-b
          from-black/70
          to-transparent
        "
      />

      {/* Bottom Transition */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-44
          bg-gradient-to-t
          from-[#050505]
          via-black/25
          to-transparent
        "
      />
    </>
  );
}