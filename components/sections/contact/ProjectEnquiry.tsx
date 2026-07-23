import { projectEnquiry } from "@/lib/content/contact";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

import { Button } from "@/components/ui";

const inputStyles =
  "w-full rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-[var(--vs-accent)] focus:bg-white/[0.04] focus:ring-1 focus:ring-[var(--vs-accent)]/20";

const labelStyles =
  "mb-2 block text-sm tracking-wide text-white/70";

export default function ProjectEnquiry() {
  return (
    <Section id="project-enquiry" spacing="editorial">
      <Container size="narrow">
        <Heading
          title={projectEnquiry.heading}
          description={projectEnquiry.description}
          align="left"
        />

        <form className="mt-20 space-y-10">
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelStyles}>
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className={inputStyles}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelStyles}>
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={inputStyles}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelStyles}>
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={inputStyles}
              />
            </div>

            <div>
              <label htmlFor="project-type" className={labelStyles}>
                Project Type
              </label>

              <select
                id="project-type"
                name="project-type"
                defaultValue=""
                className={inputStyles}
              >
                <option value="" disabled>
                  Select project type
                </option>
                <option value="luxury-residence">
                  Luxury Residence
                </option>
                <option value="commercial">
                  Commercial
                </option>
                <option value="boardroom">
                  Boardroom
                </option>
                <option value="hospitality">
                  Hospitality
                </option>
                <option value="private-cinema">
                  Private Cinema
                </option>
                <option value="other">
                  Other
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className={labelStyles}>
                Project Location
              </label>

              <input
                id="location"
                name="location"
                type="text"
                className={inputStyles}
              />
            </div>

            <div>
              <label htmlFor="timeline" className={labelStyles}>
                Project Timeline
              </label>

              <input
                id="timeline"
                name="timeline"
                type="text"
                placeholder="e.g. Q1 2027"
                className={inputStyles}
              />
            </div>
          </div>

          <div className="pt-4">
            <label htmlFor="message" className={labelStyles}>
              Share Your Vision
            </label>

            <textarea
              id="message"
              name="message"
              rows={8}
              required
              placeholder="Tell us about your project, goals, timeline, and any requirements you would like us to understand."
              className={`${inputStyles} min-h-[220px] resize-y`}
            />
          </div>

          <div className="mt-12 border-t border-white/10 pt-10 pb-24">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="min-w-[260px]"
            >
              {projectEnquiry.submitLabel}
            </Button>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/50">
              Once we receive your enquiry, our team will review your project
              requirements and contact you to discuss the next steps.
            </p>
          </div>
        </form>
      </Container>
    </Section>
  );
}