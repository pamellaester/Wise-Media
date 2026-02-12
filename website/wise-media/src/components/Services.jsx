import { useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function Services() {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState(null);

  const services = [
    { key: "pressAdvisory", iconName: "Megaphone" },
    { key: "strategicAdvisory", iconName: "Lightbulb" },
    { key: "visaAdvisory", iconName: "Award" },
    { key: "googleBusiness", iconName: "MapPinned" },
    { key: "cleanName", iconName: "ShieldCheck" },
    { key: "crisisManagement", iconName: "ShieldAlert" },
  ];

  return (
    <section className="w-full relative overflow-hidden">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      <div className="container-content section-spacing relative">
        {/* Header */}
        <header className="max-w-3xl mx-auto mb-10 md:mb-12 text-center">
          <div className="accent-line-bold mx-auto mb-5" aria-hidden="true" />
          <h1 className="text-h1 text-white mb-4 heading-primary">{t('services.title')}</h1>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {services.map((service) => {
            const isActive = activeService === service.key;

            return (
              <article
                key={service.key}
                className="cursor-pointer"
                onClick={() => setActiveService(isActive ? null : service.key)}
              >
                <div className={`bg-white/8 backdrop-blur-sm rounded-xl p-5 border h-full transition-all duration-300 ${
                  isActive ? "border-brand-lightBlue/30 bg-white/12" : "border-white/10 hover:bg-white/10 hover:border-white/15"
                }`}>
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue/90 to-white shadow-sm flex-shrink-0">
                      <Icon name={service.iconName} size={18} className="text-brand-navy" />
                    </div>
                    <h2 className="text-base font-semibold text-white leading-snug">
                      {t(`services.items.${service.key}.title`)}
                    </h2>
                  </div>

                  {/* Deliver - always visible */}
                  <p className="text-white/55 text-sm leading-relaxed mb-2">
                    {t(`services.items.${service.key}.deliver`)}
                  </p>

                  {/* Expandable "When to use" */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-start gap-2">
                        <Icon name="Info" size={12} className="text-brand-lightBlue/70 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <span className="text-xs font-medium text-white/50 block mb-1">{t('services.whenLabel')}</span>
                          <p className="text-white/50 text-xs leading-relaxed">
                            {t(`services.items.${service.key}.when`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <div className="flex items-center gap-1 mt-2 text-xs text-brand-lightBlue/70">
                    <Icon name={isActive ? "ChevronUp" : "ChevronDown"} size={12} />
                    <span>{isActive ? t('services.seeLess') : t('services.seeMore')}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/contato" className="inline-flex items-center gap-2 bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-brand-accent/25 transition-all hover:translate-y-[-1px]">
            {t('services.cta')}
            <Icon name="ArrowRight" size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
