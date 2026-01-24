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
        <header className="max-w-4xl mx-auto mb-14 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-white/90 text-sm font-semibold tracking-wide">{t('services.title')}</span>
          </div>
          <h1 className="text-h1 text-white mb-6 heading-primary">{t('services.title')}</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </header>

        {/* Services Grid - compact 2x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-16">
          {services.map((service) => {
            const isActive = activeService === service.key;

            return (
              <article
                key={service.key}
                className="relative group cursor-pointer"
                onClick={() => setActiveService(isActive ? null : service.key)}
              >
                {/* Gradient border glow */}
                <div className={`absolute -inset-1 bg-gradient-to-br from-white/30 to-brand-lightBlue/30 rounded-2xl blur transition ${
                  isActive ? "opacity-100" : "opacity-75 group-hover:opacity-100"
                }`} aria-hidden="true" />

                <div className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border h-full transition-all duration-300 ${
                  isActive ? "border-brand-lightBlue/40" : "border-white/20"
                }`}>
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-brand-lightBlue to-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true">
                      <Icon name={service.iconName} size={22} className="text-brand-navy" />
                    </div>
                    <h2 className="text-lg font-semibold text-white leading-tight">
                      {t(`services.items.${service.key}.title`)}
                    </h2>
                  </div>

                  {/* Deliver - always visible */}
                  <p className="text-white/70 text-sm leading-relaxed mb-3">
                    {t(`services.items.${service.key}.deliver`)}
                  </p>

                  {/* Expandable "When to use" */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-start gap-2">
                        <Icon name="Info" size={14} className="text-brand-lightBlue flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <span className="text-xs font-semibold text-white/60 block mb-1">{t('services.whenLabel')}</span>
                          <p className="text-white/60 text-xs leading-relaxed">
                            {t(`services.items.${service.key}.when`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <div className="flex items-center gap-1 mt-3 text-xs text-brand-lightBlue/80">
                    <Icon name={isActive ? "ChevronUp" : "ChevronDown"} size={14} />
                    <span>{isActive ? (t('services.seeLess') || "Less") : (t('services.seeMore') || "More")}</span>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-brand-lightBlue/15 to-transparent rounded-tl-full" aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/contato" className="inline-flex items-center gap-2 bg-brand-accent text-white px-10 py-4 rounded-lg font-bold hover:shadow-2xl hover:shadow-brand-accent/30 transition-all hover:scale-105">
            {t('services.cta')}
            <Icon name="ArrowRight" size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
