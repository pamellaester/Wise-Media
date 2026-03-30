import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Icon from "../Icon";

export default function WiseMethod() {
  const { t } = useTranslation();

  const steps = [
    { letter: "W", key: "w" },
    { letter: "I", key: "i" },
    { letter: "S", key: "s" },
    { letter: "E", key: "e" },
  ];

  return (
    <section className="w-full relative overflow-hidden" aria-labelledby="method-heading">
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
        <header className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-5">
            <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">
              {t('wiseMethod.tag')}
            </span>
          </span>

          <h2 id="method-heading" className="text-h2 text-white mb-4 heading-secondary">
            {t('wiseMethod.title')}
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            {t('wiseMethod.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <article key={step.key} className="relative group">
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-gradient-to-r from-brand-lightBlue/50 to-transparent" aria-hidden="true" />
              )}

              <div className="relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full hover:bg-white/12 hover:border-white/20 transition-all duration-300">
                {/* Large letter */}
                <div className="mb-5">
                  <span className="text-5xl md:text-6xl font-bold text-brand-lightBlue/90">
                    {step.letter}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">
                  {t(`wiseMethod.steps.${step.key}.title`)}
                </h3>

                <p className="text-brand-lightBlue/80 text-sm font-medium mb-3">
                  {t(`wiseMethod.steps.${step.key}.subtitle`)}
                </p>

                <p className="text-white/55 text-sm leading-relaxed">
                  {t(`wiseMethod.steps.${step.key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/metodo"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg font-medium text-sm hover:bg-white/20 transition-all"
          >
            {t('wiseMethod.cta')}
            <Icon name="ArrowRight" size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
