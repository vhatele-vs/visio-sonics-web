import { notFound } from "next/navigation";
import type { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import EditorialIntro from "@/components/sections/EditorialIntro";
import CTASection from "@/components/ui/CTASection";

import { caseStudies } from "@/lib/content/caseStudies";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Visio Sonics",
    };
  }

  return {
    title: `${project.title} | Visio Sonics`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        image={project.heroImage}
      />

      <EditorialIntro
        eyebrow="Project Overview"
        title={project.title}
        body={project.challenge}
      />

      <CTASection
        eyebrow="Start Your Project"
        title="Planning something exceptional?"
        description="Our team designs technology around architecture, lifestyle and performance."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
      />
    </>
  );
}