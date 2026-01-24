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
        <header className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-white/90 text-sm font-semibold tracking-wide">{t('servicesOverview.title')}</span>
          </div>
          <h2 className="text-h2 text-white mb-6 heading-secondary">{t('servicesOverview.title')}</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t('servicesOverview.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article key={service.key} className="relative group">
              {/* Gradient border glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-white/30 to-brand-lightBlue/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" aria-hidden="true" />

              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 h-full">
                {/* Icon badge */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-white mb-6 shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                  <Icon name={service.iconName} size={26} className="text-brand-navy" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                  {t(`servicesOverview.services.${service.key}.title`)}
                </h3>
                <p className="text-white/80 leading-relaxed text-[15px]">
                  {t(`servicesOverview.services.${service.key}.description`)}
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-lightBlue/20 to-transparent rounded-tl-full" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/servicos" className="bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white px-10 py-4 rounded-lg font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2 hover:scale-105">
            {t('servicesOverview.cta')}
            <Icon name="ArrowRight" size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
