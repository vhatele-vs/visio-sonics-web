import type { Metadata } from "next";

import ContactHero from "@/components/sections/contact/ContactHero";
import ConsultationProcess from "@/components/sections/contact/ConsultationProcess";
import ContactMethods from "@/components/sections/contact/ContactMethods";
import ProjectEnquiry from "@/components/sections/contact/ProjectEnquiry";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Start Your Project",

  description:
    "Tell Visio Sonics about your project and begin a conversation about engineering an intelligent environment designed around your vision.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Start Your Project | Visio Sonics",

    description:
      "Tell Visio Sonics about your project and begin a conversation about engineering an intelligent environment designed around your vision.",

    url: "/contact",
  },
};

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