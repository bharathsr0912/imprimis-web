"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const result = await emailjs.sendForm(
          "service_i04vnf7", // service ID
          "template_cth2xzf", // template ID
          e.currentTarget,
          "U-khEHFEf7wuhvYtw", // public key
        );

      // EmailJS returns { status: 200, text: "OK" } on success
      if (result.status === 200) {
        setSuccess(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-cyan-600 px-6 py-3 text-white hover:bg-cyan-700"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-sm text-green-600">Message sent successfully!</p>
      )}
    </form>
  );
}
