import ContactForm from "@/components/contact/ContactForm";

export default function ContactSection() {
  const address = `IMPRIMIS INNOVATIONS PVT LTD,
127 1stFloor, 9thMain, 10thCross Rd, Ideal Homes Twp,
Rajarajeshwari Nagara, Bengaluru, Karnataka 560098`;

  return (
    <section
      className="
        py-20
        bg-white
        dark:bg-gradient-to-b dark:from-[#020617] dark:to-[#020617]
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl">
            Have questions or want to request a demo? Reach out to us.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left - Form */}
          <ContactForm />

          {/* Right - Address + Map */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Office Address
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {address}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Phone Number
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                080-40998204
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                contact@imprimis.in
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/QN7xr9fc1tQwU8XF6?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="
                block rounded-xl overflow-hidden
                border border-gray-200 dark:border-white/10
                shadow-md hover:shadow-lg transition
              "
            >
              <img
                src="/hero/map.png"
                alt="Office Location Map"
                className="w-full h-64 object-cover hover:opacity-90 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}