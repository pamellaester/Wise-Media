import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Icon from "../Icon";

export default function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="w-full relative overflow-hidden" aria-labelledby="final-cta-heading">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-lightBlue/20" aria-hidden="true" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="container-content py-20 md:py-28 lg:py-32 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Bold accent */}
          <div className="w-20 h-1 bg-gradient-to-r from-brand-lightBlue to-brand-accent mx-auto mb-8" aria-hidden="true" />

          <h2
            id="final-cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            {t('finalCta.title')}
          </h2>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('finalCta.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-brand-accent/25 transition-all hover:translate-y-[-2px]"
            >
              {t('finalCta.cta')}
              <Icon name="ArrowRight" size={20} aria-hidden="true" />
            </Link>

            <a
              href="https://wa.me/5511922250182"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              <Icon name="MessageCircle" size={20} aria-hidden="true" />
              {t('finalCta.whatsapp')}
            </a>
          </div>

          {/* Closing statement */}
          <p className="text-white/50 text-sm mt-10 italic">
            {t('finalCta.closing')}
          </p>
        </div>
      </div>
    </section>
  );
}
