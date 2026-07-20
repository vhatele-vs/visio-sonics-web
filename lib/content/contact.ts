export const contactHero = {
  eyebrow: "Start a Conversation",

  title: "Let's Engineer What Comes Next.",

  description:
    "Whether you are planning a new build, renovating an existing property, or looking to elevate your current technology environment, we would love to understand your vision.",
};


export const consultationProcess = {
  heading: "What Happens Next",

  description:
    "Our consultation process is designed to understand your project before recommending a solution.",

  steps: [
    {
      title: "Initial Conversation",

      description:
        "We begin by understanding your vision, property, lifestyle, and technology objectives.",
    },

    {
      title: "Project Discovery",

      description:
        "We explore the architectural, technical, and operational requirements of your environment.",
    },

    {
      title: "Concept & Direction",

      description:
        "We develop an initial technology direction aligned with your goals, architecture, and future requirements.",
    },

    {
      title: "Proposal & Next Steps",

      description:
        "We present a clear path forward, outlining the recommended approach and the next stage of the project.",
    },
  ],
};


export const contactMethods = {
  heading: "Connect With Us",

  description:
    "Choose the contact method that works best for you.",

  items: [
    {
      title: "Call Us",

      value: "+27 87 657 3217",

      href: "tel:+27876573217",

      description:
        "Available during office hours for project discussions and consultation enquiries.",
    },

    {
      title: "Email",

      value: "hello@visiosonics.co.za",

      href: "mailto:hello@visiosonics.co.za",

      description:
        "Send us an overview of your project and requirements.",
    },

    {
      title: "Project Enquiry",

      value: "Start a Conversation",

      href: "#project-enquiry",

      description:
        "Tell us about the environment you are creating.",
    },

    {
      title: "Service Area",

      value: "South Africa & Africa",

      description:
        "Engineering intelligent environments across the region.",
    },
  ],
};


export const contactFAQ = {
  heading: "Frequently Asked Questions",

  description:
    "A few answers to common questions about working with Visio Sonics.",

  items: [
    {
      question:
        "When should I involve Visio Sonics in my project?",

      answer:
        "The earlier the better. Early involvement allows technology infrastructure to be coordinated with architecture, electrical systems, interior design, and construction.",
    },

    {
      question:
        "Do you work with architects and designers?",

      answer:
        "Yes. We regularly collaborate with architects, interior designers, developers, builders, and consultants to ensure technology integrates seamlessly into the wider project vision.",
    },

    {
      question:
        "Do you work on existing properties?",

      answer:
        "Yes. We can assess existing environments and develop upgrade, retrofit, or replacement strategies based on the property's requirements.",
    },

    {
      question:
        "Do you provide ongoing support after installation?",

      answer:
        "Yes. We provide ongoing maintenance, optimisation, upgrades, and long-term technology support.",
    },
  ],
};


export const projectEnquiry = {
  heading: "Tell Us About Your Project",

  description:
    "Share a little about your project, and we will begin understanding how we can help.",

  submitLabel:
    "Submit Project Enquiry",

  fields: [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      required: true,
    },

    {
      id: "email",
      label: "Email Address",
      type: "email",
      required: true,
    },

    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      required: false,
    },

    {
      id: "location",
      label: "Project Location",
      type: "text",
      required: false,
    },

    {
      id: "timeline",
      label: "Project Timeline",
      type: "text",
      required: false,
    },
  ],

  projectTypes: [
    "Luxury Residence",
    "Commercial",
    "Boardroom",
    "Hospitality",
    "Private Cinema",
    "Other",
  ],
};


export const contactCTA = {
  eyebrow: "Begin the Conversation",

  title:
    "Every extraordinary environment begins with a conversation.",

  description:
    "Tell us about your project, and let's explore what is possible.",

  primaryButton: {
    label: "Schedule a Consultation",

    href: "#project-enquiry",
  },
};