function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
      {children}
    </div>
  );
}

export default function AboutSection() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-12 lg:grid-cols-2 items-start">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            About Imprimisis
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Imprimisis is an IoT-focused technology company delivering
            intelligent, real-time solutions for modern businesses.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            We help organizations gain visibility, improve safety, and optimize
            operations through scalable IoT platforms.
          </p>
        </div>

        {/* Right: Highlights */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Card 1 */}
          <div
            className="rounded-lg border border-slate-200 dark:border-slate-800
  bg-white dark:bg-slate-900 p-6
  transition hover:shadow-md"
          >
            <IconWrapper>
              {/* IoT / Chip icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </IconWrapper>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              IoT Expertise
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Deep experience building reliable, real-time IoT systems.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-lg border border-slate-200 dark:border-slate-800
  bg-white dark:bg-slate-900 p-6
  transition hover:shadow-md"
          >
            <IconWrapper>
              {/* Live data icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h4l3 6 4-12 3 6h4" />
              </svg>
            </IconWrapper>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Real-Time Data
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Live tracking and analytics for faster decision-making.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-lg border border-slate-200 dark:border-slate-800
  bg-white dark:bg-slate-900 p-6
  transition hover:shadow-md"
          >
            <IconWrapper>
              {/* Scale icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 20V4h16v16" />
                <path d="M4 16h16" />
              </svg>
            </IconWrapper>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Scalable Platform
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Designed to grow from few devices to large-scale deployments.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="rounded-lg border border-slate-200 dark:border-slate-800
  bg-white dark:bg-slate-900 p-6
  transition hover:shadow-md"
          >
            <IconWrapper>
              {/* Package icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z" />
              </svg>
            </IconWrapper>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Secure by Design
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Built with strong security practices to protect data and devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
