import { useTranslation } from "react-i18next";
import Icon from "../Icon";

export default function SolutionSection() {
  const { t } = useTranslation();

  const solutions = [
    { key: "positioning", iconName: "Target" },
    { key: "media", iconName: "Megaphone" },
    { key: "narrative", iconName: "MessageSquare" },
    { key: "reputation", iconName: "ShieldCheck" },
  ];

  return (
    <section className="w-full bg-white relative overflow-hidden" aria-labelledby="solution-heading">
      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-navy/5 to-transparent" aria-hidden="true" />

      <div className="container-content section-spacing relative">
        <header className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1.5 rounded-full bg-brand-navy/10 border border-brand-navy/20 mb-5">
            <span className="text-brand-navy/80 text-xs font-semibold tracking-wider uppercase">
              {t('solution.tag')}
            </span>
          </span>

          <h2 id="solution-heading" className="text-h2 text-brand-navy mb-4 heading-secondary">
            {t('solution.title')}
          </h2>

          <p className="text-brand-navy/70 text-lg leading-relaxed">
            {t('solution.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((solution) => (
            <article key={solution.key} className="relative group">
              <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-brand-navy/10 shadow-sm hover:shadow-lg hover:border-brand-lightBlue/30 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-lightBlue/90 to-brand-accent flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                    <Icon name={solution.iconName} size={26} className="text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">
                      {t(`solution.items.${solution.key}.title`)}
                    </h3>

                    <p className="text-brand-navy/65 leading-relaxed text-sm">
                      {t(`solution.items.${solution.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
