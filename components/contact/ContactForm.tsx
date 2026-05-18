"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const result = await emailjs.sendForm(
        "service_fxwmnqr",
        "template_lp33v39",
        form,
        "GEyo1tNkpTFiEmd_6"
      );
      if (result.status === 200) {
        setSuccess(true);
        form.reset();
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
  <label className="block text-sm font-medium">
    Subject
  </label>
  <input
    name="title"
    className="mt-1 w-full rounded-md border px-3 py-2"
  />
</div>
      <div>
        <label className="block text-sm font-medium">
          Message <span className="text-red-500">*</span>
        </label>
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
        className="rounded-md bg-cyan-600 px-6 py-3 text-white hover:bg-cyan-700 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-sm text-green-600"> Message sent successfully!</p>
      )}
      {error && (
  <p className="text-sm text-red-600">
     {error}{" "}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@imprimis.in"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-cyan-600"
    >
      contact@imprimis.in
    </a>
  </p>
)}
    </form>
  );
}