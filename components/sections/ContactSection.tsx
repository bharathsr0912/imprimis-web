 "use client";

import { usePathname } from "next/navigation";
import ContactForm from "@/components/contact/ContactForm";

const content = {
  en: {
    title: "Contact Us",
    subtitle: "Have questions or want to request a demo? Reach out to us.",
    address: "Office Address",
    phone: "Phone Number",
    email: "Email",
  },
  fr: {
    title: "Contactez-nous",
    subtitle: "Vous avez des questions ou souhaitez demander une demo ? Contactez-nous.",
    address: "Adresse du bureau",
    phone: "Numero de telephone",
    email: "E-mail",
  },
};

export default function ContactSection() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/fr") ? "fr" : "en";
  const t = content[locale];

  const address = "IMPRIMIS INNOVATIONS PVT LTD, 127 1st Floor, 9th Main, 10th Cross Rd, Rajarajeshwari Nagara, Bengaluru, Karnataka 560098";

  return (
    <section className="bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto sm:mx-0">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
          <ContactForm />

          <div className="space-y-5 sm:space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {t.address}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {address}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {t.phone}
                </h3>
                <a href="tel:08040998204" className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 transition-colors">
                  080-40998204
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {t.email}
                </h3>
                <a href="mailto:contact@imprimis.in" className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 transition-colors">
                  contact@imprimis.in
                </a>
              </div>
            </div>

            <a href="https://maps.app.goo.gl/QN7xr9fc1tQwU8XF6" target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-md hover:shadow-lg transition">
              <img src="/hero/map.png" alt="Office Location Map" className="w-full h-48 sm:h-56 lg:h-64 object-cover hover:opacity-90 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}