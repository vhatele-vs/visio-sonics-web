"use client";

import { useState } from "react";
import { sendContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | string>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await sendContactForm(formData);

    setLoading(false);

    if (res.success) {
      setStatus("Message sent successfully.");
    } else {
      setStatus(res.error || "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      <input name="name" placeholder="Name" className="w-full p-3 bg-black border border-white/20 text-white" />
      
      <input name="email" placeholder="Email" className="w-full p-3 bg-black border border-white/20 text-white" />
      
      <input name="phone" placeholder="Phone (optional)" className="w-full p-3 bg-black border border-white/20 text-white" />
      
      <input name="projectType" placeholder="Project Type" className="w-full p-3 bg-black border border-white/20 text-white" />
      
      <textarea name="message" placeholder="Message" className="w-full p-3 bg-black border border-white/20 text-white h-40" />

      <button
        type="submit"
        disabled={loading}
        className="bg-white text-black px-6 py-3"
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>

      {status && (
        <p className="text-white/70 text-sm">{status}</p>
      )}
    </form>
  );
}