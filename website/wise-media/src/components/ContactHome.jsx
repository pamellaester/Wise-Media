import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function ContactHome() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative w-full overflow-hidden" aria-labelledby="contact-home-heading">
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
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-10 md:mb-12">
            <div className="accent-line-bold mx-auto mb-5" aria-hidden="true" />
            <h2 id="contact-home-heading" className="text-h2 text-white mb-4 heading-secondary">
              {t('contactHome.title')}
            </h2>
            <p className="text-white/70 max-w-lg mx-auto text-base leading-relaxed">
              {t('contactHome.description')}
            </p>
          </header>

          {/* Clean CTA Card */}
          <div className="relative max-w-xl mx-auto">
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue" aria-hidden="true" />

              <div className="p-6 md:p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-navy/5 mb-5">
                  <Icon name="Send" size={28} className="text-brand-navy" />
                </div>

                <h3 className="text-xl font-semibold text-brand-navy mb-2">
                  {t('contactHome.cardTitle')}
                </h3>
                <p className="text-brand-navy/60 text-sm mb-6">
                  {t('contactHome.cardDescription')}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                  <a
                    href="https://wa.me/5511922250182"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-brand-accent/25 transition-all hover:translate-y-[-1px] inline-flex items-center justify-center gap-2"
                  >
                    {t('contactHome.cta')}
                    <Icon name="ArrowRight" size={16} className="text-white" />
                  </a>
                  <a
                    href="mailto:wisemediasolucoes@gmail.com"
                    className="bg-white border border-brand-navy/20 text-brand-navy px-6 py-3 rounded-lg font-medium text-sm hover:bg-brand-navy/5 transition-all"
                  >
                    {t('contactHome.ctaEmail')}
                  </a>
                </div>

                {/* Contact info */}
                <div className="pt-5 border-t border-brand-navy/10">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center text-xs">
                    <a
                      href="mailto:wisemediasolucoes@gmail.com"
                      className="text-brand-navy/50 hover:text-brand-navy transition-colors"
                    >
                      wisemediasolucoes@gmail.com
                    </a>
                    <span className="hidden sm:block text-brand-navy/20">•</span>
                    <a
                      href="https://instagram.com/wisemediasolucoes11"
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-navy/50 hover:text-brand-navy transition-colors"
                    >
                      @wisemediasolucoes11
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
