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
        <header className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-white/90 text-sm font-semibold tracking-wide">{t('whoWeServe.tag')}</span>
          </div>
          <h2 id="who-we-serve-heading" className="text-h2 text-white mb-6 heading-secondary">{t('whoWeServe.title')}</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('whoWeServe.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {segments.map((segment) => (
            <article key={segment.key} className="relative group">
              {/* Gradient border glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-white/30 to-brand-lightBlue/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" aria-hidden="true" />

              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                {/* Icon badge */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-white mb-6 shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                  <Icon name={segment.iconName} size={26} className="text-brand-navy" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">
                  {t(`whoWeServe.segments.${segment.key}.title`)}
                </h3>
                <p className="text-white/80 leading-relaxed text-[15px]">
                  {t(`whoWeServe.segments.${segment.key}.description`)}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-lightBlue/20 to-transparent rounded-tl-full" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-white/80 text-sm mb-6">
            {t('whoWeServe.cta')}
          </p>
          <a href="/contato" className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl hover:shadow-brand-accent/30 transition-all hover:scale-105">
            {t('whoWeServe.ctaButton')}
            <Icon name="ArrowRight" size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
