import { projectsCTA } from "@/lib/content/projects";
import CTASection from "@/components/ui/CTASection";

export default function ProjectsCTA() {
  return <CTASection eyebrow={projectsCTA.eyebrow} title={projectsCTA.title} description={projectsCTA.description} primaryLabel={projectsCTA.primaryButton.label} primaryHref={projectsCTA.primaryButton.href} secondaryLabel={projectsCTA.secondaryButton.label} secondaryHref={projectsCTA.secondaryButton.href} />;
}
