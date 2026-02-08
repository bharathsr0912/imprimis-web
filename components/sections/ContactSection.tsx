// import Link from "next/link";

// export default function ContactSection() {
//   return (
//     <div className="mx-auto max-w-7xl px-6">
//       <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
//         Contact Us
//       </h2>

//       <p className="mt-4 text-slate-600 dark:text-slate-300">
//         Have questions or want to request a demo?
//       </p>

//       <Link
//         href="/contact"
//         className="mt-6 inline-block rounded-md bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-700"
//       >
//         Get in Touch
//       </Link>
//     </div>
//   );
// }
import ContactForm from "@/components/contact/ContactForm";

export default function ContactSection() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
          Have questions or want to request a demo? Reach out to us.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Form */}
        <ContactForm />

        {/* Office Info + Map */}
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Office Address
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Imprimisis Technologies
            <br />
            Bengaluru, Karnataka
            <br />
            India
          </p>

          <iframe
            className="mt-6 h-64 w-full rounded-lg border"
            src="https://www.google.com/maps?q=Bengaluru&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
