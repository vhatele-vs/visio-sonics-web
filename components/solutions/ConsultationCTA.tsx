import CTASection from "@/components/ui/CTASection";

export default function ConsultationCTA() {
  return (
    <CTASection
      eyebrow="Consultation"
      title="Let’s design your environment"
      description="Speak with our team to begin shaping a tailored architectural experience."
      primaryLabel="Book Consultation"
      primaryHref="/contact"
      secondaryLabel="View Projects"
      secondaryHref="/projects"
    />
  );
}