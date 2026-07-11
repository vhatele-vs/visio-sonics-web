import { projectEnquiry } from "@/lib/content/contact";
import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

export default function ProjectEnquiry() {
  return (
    <Section
      id="project-enquiry"
      spacing="editorial"
    >
      <Container size="narrow">

        <Heading
          title={projectEnquiry.heading}
          description={projectEnquiry.description}
          align="left"
        />

        <form className="mt-16 space-y-8">

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-white/70"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-white/40"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-white/70"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-white/40"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm text-white/70"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-white/40"
              />
            </div>

            <div>
              <label
                htmlFor="project-type"
                className="mb-2 block text-sm text-white/70"
              >
                Project Type
              </label>

              <select
                id="project-type"
                className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-white/40"
              >
                <option>Luxury Residence</option>
                <option>Commercial</option>
                <option>Boardroom</option>
                <option>Hospitality</option>
                <option>Private Cinema</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-sm text-white/70"
              >
                Project Location
              </label>

              <input
                id="location"
                type="text"
                className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-white/40"
              />
            </div>

            <div>
              <label
                htmlFor="timeline"
                className="mb-2 block text-sm text-white/70"
              >
                Project Timeline
              </label>

              <input
                id="timeline"
                type="text"
                placeholder="e.g. Q1 2027"
                className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-white/30 outline-none transition focus:border-white/40"
              />
            </div>

          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-white/70"
            >
              Tell Us About Your Project
            </label>

            <textarea
              id="message"
              rows={8}
              className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-white/40"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-white px-8 py-4 text-black transition hover:opacity-90"
          >
            {projectEnquiry.submitLabel}
          </button>

        </form>

      </Container>
    </Section>
  );
}