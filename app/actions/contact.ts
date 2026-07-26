"use server";

import { transporter } from "@/lib/email";
import { contactSchema } from "@/lib/validation/contactSchema";

export async function sendContactForm(formData: FormData) {
  // Honeypot check — real users never fill this in, bots often do
  if (formData.get("website")) {
    return { success: true }; // pretend success so bots don't learn they were caught
  }

  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    projectType: formData.get("projectType"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data" };
  }

  const { name, email, phone, projectType, message } = parsed.data;

  try {
    await transporter.sendMail({
      from: `"Visio Sonics" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Project Enquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Project Type: ${projectType || "N/A"}

Message:
${message}
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Email failed to send" };
  }
}