import ContactForm from "@/components/contact/ContactForm";

export default function ContactSection() {
  const address = `IMPRIMIS INNOVATIONS PVT LTD,
127 1st Floor, 9th Main, 10th Cross Rd, Ideal Homes Twp,
Rajarajeshwari Nagara, Bengaluru, Karnataka 560098`;

  return (
    <section className="bg-white dark:bg-gradient-to-b dark:from-[#020617] dark:to-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto sm:mx-0">
            Have questions or want to request a demo? Reach out to us.
          </p>
        </div>

        {/* 
          Grid:
          - mobile  (<lg): stacked single column
          - desktop (lg+): two columns side by side
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
          {/* Left - Form */}
          <ContactForm />

          {/* Right - Info + Map */}
          <div className="space-y-5 sm:space-y-6">
            {/* Info cards row on tablet, stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-5 lg:gap-0 lg:space-y-5">
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  Office Address
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {address}
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  Phone Number
                </h3>
                <a
                  href="tel:08040998204"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  080-40998204
                </a>
              </div>

              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  Email
                </h3>
                <a
                  href="mailto:contact@imprimis.in"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors break-all"
                >
                  contact@imprimis.in
                </a>
              </div>
            </div>

            {/* Map */}
            <a
              href="https://maps.app.goo.gl/QN7xr9fc1tQwU8XF6?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-md hover:shadow-lg transition"
            >
              <img
                src="/hero/map.png"
                alt="Office Location Map"
                className="w-full h-48 sm:h-56 lg:h-64 object-cover hover:opacity-90 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}