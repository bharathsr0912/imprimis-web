
"use client";

import { usePathname } from "next/navigation";

const content = {
  en: {
    label: "How It Works",
    title: "Up and Running in Minutes",
    subtitle: "Get started in three simple steps.",
    steps: [
      {
        title: "Deploy Your Devices",
        body: "Install IoT sensors and trackers on your vehicles, fields, water systems, or assets. Hardware arrives pre-configured - power on and you're ready to go.",
      },
      {
        title: "Connect to Platform",
        body: "Devices appear instantly on dashboard. Setup alerts, geofences, and automation rules through a simple guided interface - no coding needed.",
      },
      {
        title: "Act on Real-Time Insights",
        body: "Access live data, alerts and reports from any device - web, iOS or Android. Your operations, always visible and always in your hands.",
      },
    ],
  },
  fr: {
    label: "Comment ça marche",
    title: "Opérationnel en quelques minutes",
    subtitle: "Commencez en trois étapes simples.",
    steps: [
      {
        title: "Déployez vos appareils",
        body: "Installez des capteurs IoT sur vos véhicules, champs, systèmes d'eau ou actifs. Le matériel arrive préconfiguré - allumez et vous êtes prêt.",
      },
      {
        title: "Connectez-vous à la plateforme",
        body: "Les appareils apparaissent instantanément sur le tableau de bord. Configurez les alertes et les règles d'automatisation via une interface simple - aucun codage requis.",
      },
      {
        title: "Agissez sur les données en temps réel",
        body: "Accédez aux données en direct, aux alertes et aux rapports depuis n'importe quel appareil - web, iOS ou Android. Vos opérations, toujours visibles.",
      },
    ],
  },
};

export default function HowItWorksSection() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/fr') ? 'fr' : 'en';
  const t = content[locale];

  return (
    <div className="max-w-5xl mx-auto px-4 text-center">
      <p className="text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wide text-sm">
        {t.label}
      </p>

      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
        {t.title}
      </h2>

      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        {t.subtitle}
      </p>

      <div className="mt-12 space-y-10 text-left max-w-3xl mx-auto">
        {t.steps.map((step, i) => (
          <div key={i} className="flex gap-6">
            <div className="w-12 h-12 rounded-full border-2 border-cyan-600 text-cyan-600 flex items-center justify-center font-bold text-lg flex-shrink-0">
              {i + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}