import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Icon from "./Icon";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-lightBlue/10 transform skew-x-12 translate-x-1/4" aria-hidden="true" />

      <div className="container-content relative py-20 md:py-24">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-brand-lightBlue text-sm font-semibold tracking-wider uppercase">
              {t('hero.tag')}
            </span>
          </div>

          {/* Main headline */}
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-4 leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-2xl mb-10 leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-16">
            <Link
              to="/contato"
              className="bg-brand-accent text-white px-8 py-4 rounded-lg font-semibold text-base hover:shadow-xl hover:shadow-brand-accent/25 transition-all hover:translate-y-[-2px] inline-flex items-center gap-2"
            >
              {t('hero.cta')}
              <Icon name="ArrowRight" size={20} aria-hidden="true" />
            </Link>

            <Link
              to="/metodo"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-medium text-base hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              {t('hero.ctaSecondary')}
              <Icon name="ChevronRight" size={18} className="text-brand-lightBlue" aria-hidden="true" />
            </Link>
          </div>

          {/* Authority metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {t('hero.metrics.authoritiesValue')}
              </div>
              <div className="text-white/50 text-sm">
                {t('hero.metrics.authorities')}
              </div>
            </div>

            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {t('hero.metrics.mediaValue')}
              </div>
              <div className="text-white/50 text-sm">
                {t('hero.metrics.media')}
              </div>
            </div>

            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {t('hero.metrics.confidentialityValue')}
              </div>
              <div className="text-white/50 text-sm">
                {t('hero.metrics.confidentiality')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-navy to-transparent" aria-hidden="true" />
    </section>
  );
}
