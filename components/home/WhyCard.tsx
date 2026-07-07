import FadeUp from "@/components/motion/FadeUp";

interface WhyCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export default function WhyCard({
  number,
  title,
  description,
  delay = 0,
}: WhyCardProps) {
  return (
    <FadeUp delay={delay}>
      <div className="border-t border-white/10 pt-10">

        <p className="text-sm tracking-[0.35em] text-amber-400">
          {number}
        </p>

        <h3 className="mt-4 font-display text-3xl text-white">
          {title}
        </h3>

        <p className="mt-6 max-w-md leading-8 text-zinc-400">
          {description}
        </p>

      </div>
    </FadeUp>
  );
}