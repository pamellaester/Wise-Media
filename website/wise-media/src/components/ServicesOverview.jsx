import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function ServicesOverview() {
  const { t } = useTranslation();

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
        <header className="text-center mb-10 md:mb-14">
          <div className="inline-block px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-5">
            <span className="text-white/80 text-xs font-semibold tracking-wide uppercase">{t('servicesOverview.tag')}</span>
          </div>
          <h2 className="text-h2 text-white mb-4 heading-secondary">{t('servicesOverview.title')}</h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {t('servicesOverview.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
          {services.map((service) => (
            <article key={service.key} className="relative group">
              <div className="relative bg-white/8 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/10 h-full hover:bg-white/12 hover:border-white/20 transition-all duration-300">
                {/* Icon badge */}
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-lightBlue/90 to-white mb-4 shadow-md group-hover:scale-105 transition-transform" aria-hidden="true">
                  <Icon name={service.iconName} size={22} className="text-brand-navy" />
                </div>

                <h3 className="text-base md:text-lg font-semibold text-white mb-2 leading-snug">
                  {t(`servicesOverview.services.${service.key}.title`)}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {t(`servicesOverview.services.${service.key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <a href="/servicos" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg font-medium text-sm hover:bg-white/20 transition-all inline-flex items-center gap-2">
            {t('servicesOverview.cta')}
            <Icon name="ArrowRight" size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
