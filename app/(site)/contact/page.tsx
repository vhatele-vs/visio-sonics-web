import ContactHero from "@/components/sections/contact/ContactHero";
import ConsultationProcess from "@/components/sections/contact/ConsultationProcess";
import ContactMethods from "@/components/sections/contact/ContactMethods";
import ProjectEnquiry from "@/components/sections/contact/ProjectEnquiry";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <ConsultationProcess />

      <ContactMethods />

      <ProjectEnquiry />

      <ContactFAQ />
    </>
  );
}