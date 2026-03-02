
export default function HowItWorksSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 text-center">
      <p className="text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wide text-sm">
        How It Works
      </p>

      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
        Up and Running in Minutes
      </h2>

      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        Get started in three simple steps.
      </p>

      <div className="mt-12 space-y-10 text-left max-w-3xl mx-auto">

        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-full border-2 border-cyan-600 text-cyan-600 flex items-center justify-center font-bold text-lg">
            1
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Deploy Your Devices
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Install IoT sensors and trackers on your vehicles,fields,water systems, or assets.
              Hardware arrives pre-configured - power on and you're ready to go.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-full border-2 border-cyan-600 text-cyan-600 flex items-center justify-center font-bold text-lg">
            2
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Connect to Platform
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Devices appear instantly on dashboard. Setup alerts, geofences, and automation rules through a simple guided
              interface - no coding needed.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-full border-2 border-cyan-600 text-cyan-600 flex items-center justify-center font-bold text-lg">
            3
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Act on Real-Time Insights
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
                Access live data,alerts and reports from any device - web, iOS or Android. Your operations, 
                always visible and always in your hands.

            </p>
          </div>
        </div>

      </div>
    </div>
  );
}