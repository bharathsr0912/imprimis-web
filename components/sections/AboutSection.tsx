"use client";

import { usePathname } from "next/navigation";

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
      {children}
    </div>
  );
}

const content = {
  en: {
    title: "ABOUT IMPRIMIS",
    subtitle: "Built on a Belief That Technology Should Work in the Real World",
    p1: "Imprimis is an IoT solutions company on a mission to bring intelligent, real-world automation to businesses across India. We design and deploy connected systems that give you live visibility, smart alerts, and meaningful control — whether you're managing a fleet, a farm, a water network, or your people's safety.",
    p2: "We're a young company with deep conviction: that the gap between complex enterprise IoT and accessible, practical solutions needs to close. Everything we build is designed to be simple to deploy, easy to use, and genuinely impactful from day one.",
    cards: [
      { title: "IoT Expertise", desc: "Deep experience building reliable, real-time IoT systems." },
      { title: "Real-Time Data", desc: "Smart Water Management." },
      { title: "Scalable Platform", desc: "Designed to grow from few devices to large-scale deployments." },
      { title: "Secure by Design", desc: "Built with strong security practices to protect data and devices." },
    ],
  },
  fr: {
    title: "À PROPOS D'IMPRIMIS",
    subtitle: "Fondé sur la conviction que la technologie doit fonctionner dans le monde réel",
    p1: "Imprimis est une société de solutions IoT avec pour mission d'apporter une automatisation intelligente aux entreprises à travers l'Inde. Nous concevons des systèmes connectés qui vous donnent une visibilité en direct, des alertes intelligentes et un contrôle significatif.",
    p2: "Nous sommes une jeune entreprise avec une profonde conviction : que l'écart entre l'IoT d'entreprise complexe et les solutions accessibles doit se combler. Tout ce que nous construisons est conçu pour être simple à déployer et véritablement impactant dès le premier jour.",
    cards: [
      { title: "Expertise IoT", desc: "Expérience approfondie dans la création de systèmes IoT fiables en temps réel." },
      { title: "Données en temps réel", desc: "Gestion intelligente de l'eau." },
      { title: "Plateforme évolutive", desc: "Conçu pour évoluer de quelques appareils à des déploiements à grande échelle." },
      { title: "Sécurisé par conception", desc: "Construit avec de solides pratiques de sécurité pour protéger les données." },
    ],
  },
};

const icons = [
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /></svg>,
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h4l3 6 4-12 3 6h4" /></svg>,
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 20V4h16v16" /><path d="M4 16h16" /></svg>,
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z" /></svg>,
];

export default function AboutSection() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/fr') ? 'fr' : 'en';
  const t = content[locale];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start">
        {/* Left: Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <h3>{t.subtitle}</h3>
          <p>{t.p1}</p>
          <br />
          <p>{t.p2}</p>
        </div>

        {/* Right: Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {t.cards.map((card, i) => (
            <div key={i} className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 transition hover:shadow-md">
              <IconWrapper>{icons[i]}</IconWrapper>
              <h3 className="font-semibold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}