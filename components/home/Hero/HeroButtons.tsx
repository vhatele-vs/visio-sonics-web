import { heroContent } from "@/lib/content/hero";
import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
      <Button href={heroContent.primaryButton.href}>
        {heroContent.primaryButton.label}
      </Button>

      <Button
        href={heroContent.secondaryButton.href}
        variant="outline"
      >
        {heroContent.secondaryButton.label}
      </Button>
    </div>
  );
}