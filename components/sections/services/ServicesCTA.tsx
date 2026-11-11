import { servicesCTA } from "@/lib/content/services";
import CTASection from "@/components/ui/CTASection";

export default function ServicesCTA() {
  return <CTASection eyebrow={servicesCTA.eyebrow} title={servicesCTA.title} description={servicesCTA.description} primaryLabel={servicesCTA.primaryButton.label} primaryHref={servicesCTA.primaryButton.href} />;
}
