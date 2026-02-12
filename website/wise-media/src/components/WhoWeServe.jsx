import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function WhoWeServe() {
  const { t } = useTranslation();

  const segments = [
    { key: "highVisibility", iconName: "UserCircle" },
    { key: "entrepreneurs", iconName: "Briefcase" },
  ];

  return (
    <section className="relative w-full overflow-hidden" aria-labelledby="who-we-serve-heading">
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
            <span className="text-white/80 text-xs font-semibold tracking-wide uppercase">{t('whoWeServe.tag')}</span>
          </div>
          <h2 id="who-we-serve-heading" className="text-h2 text-white mb-4 heading-secondary">{t('whoWeServe.title')}</h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {t('whoWeServe.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {segments.map((segment) => (
            <article key={segment.key} className="relative group">
              <div className="relative bg-white/8 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/10 hover:bg-white/12 hover:border-white/20 transition-all duration-300">
                {/* Icon badge */}
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-lightBlue/90 to-white mb-4 shadow-md group-hover:scale-105 transition-transform" aria-hidden="true">
                  <Icon name={segment.iconName} size={22} className="text-brand-navy" />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 leading-snug">
                  {t(`whoWeServe.segments.${segment.key}.title`)}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {t(`whoWeServe.segments.${segment.key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-white/60 text-sm mb-5">
            {t('whoWeServe.cta')}
          </p>
          <a href="/contato" className="inline-flex items-center gap-2 bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-xl hover:shadow-brand-accent/25 transition-all hover:translate-y-[-1px]">
            {t('whoWeServe.ctaButton')}
            <Icon name="ArrowRight" size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
