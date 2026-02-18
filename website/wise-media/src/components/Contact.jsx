import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="w-full relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue" aria-hidden="true" />

      {/* Diagonal gradient overlay */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-bl from-brand-lightBlue/5 to-transparent" aria-hidden="true" />

      <div className="container-content section-spacing relative">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12 md:mb-14">
            <div className="accent-line-bold mx-auto mb-5" aria-hidden="true" />
            <h1 id="contact-heading" className="text-h1 text-white mb-4 heading-primary">
              {t('contact.title')}
            </h1>
            <p className="text-white/70 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
              {t('contact.description')}
            </p>
          </header>

          {/* Contact Methods */}
          <div className="mb-14 md:mb-16">
            <h2 className="text-h2 text-white mb-8 md:mb-10 heading-secondary text-center">
              {t('contact.methodsTitle')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <article className="bg-white rounded-xl p-5 text-center group hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-navy/5 mb-4 group-hover:bg-brand-navy/10 transition-colors">
                  <Icon name="Mail" size={20} className="text-brand-navy" />
                </div>
                <h3 className="text-base font-semibold text-brand-navy mb-1">{t('contact.methods.email.title')}</h3>
                <p className="text-xs text-brand-navy/50 mb-3">{t('contact.methods.email.description')}</p>
                <a
                  href="mailto:wisemediasolucoes@gmail.com"
                  className="text-brand-accent hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  wisemediasolucoes@gmail.com
                </a>
              </article>

              <article className="bg-white rounded-xl p-5 text-center group hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-navy/5 mb-4 group-hover:bg-brand-navy/10 transition-colors">
                  <Icon name="MessageCircle" size={20} className="text-brand-navy" />
                </div>
                <h3 className="text-base font-semibold text-brand-navy mb-1">{t('contact.methods.whatsapp.title')}</h3>
                <p className="text-xs text-brand-navy/50 mb-3">{t('contact.methods.whatsapp.description')}</p>
                <a
                  href="https://wa.me/5511922250182"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-accent hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  (11) 92225-0182
                </a>
              </article>

              <article className="bg-white rounded-xl p-5 text-center group hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-navy/5 mb-4 group-hover:bg-brand-navy/10 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-navy">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-brand-navy mb-1">{t('contact.methods.instagram.title')}</h3>
                <p className="text-xs text-brand-navy/50 mb-3">{t('contact.methods.instagram.description')}</p>
                <a
                  href="https://instagram.com/wisemediasolucoes11"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-accent hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  @wisemediasolucoes11
                </a>
              </article>
            </div>
          </div>

          {/* Process */}
          <div className="mb-14 md:mb-16">
            <h2 className="text-h2 text-white mb-8 md:mb-10 heading-secondary text-center">
              {t('contact.processTitle')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <article className="bg-white/8 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/12 hover:border-white/15 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue/80 to-white mb-4 shadow-sm">
                  <Icon name="MessageSquare" size={18} className="text-brand-navy" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{t('contact.process.initial.title')}</h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {t('contact.process.initial.description')}
                </p>
              </article>

              <article className="bg-white/8 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/12 hover:border-white/15 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue/80 to-white mb-4 shadow-sm">
                  <Icon name="Search" size={18} className="text-brand-navy" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{t('contact.process.analysis.title')}</h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {t('contact.process.analysis.description')}
                </p>
              </article>

              <article className="bg-white/8 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/12 hover:border-white/15 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue/80 to-white mb-4 shadow-sm">
                  <Icon name="FileText" size={18} className="text-brand-navy" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{t('contact.process.plan.title')}</h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {t('contact.process.plan.description')}
                </p>
              </article>
            </div>
          </div>

          {/* Discretion Assurance & CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs mb-6 bg-white/10 px-4 py-2 rounded-full border border-white/15">
              <Icon name="Lock" size={12} className="text-white/60" />
              <span className="text-white/70">{t('contact.confidentiality')}</span>
            </div>
            <div>
              <a
                href="mailto:wisemediasolucoes@gmail.com"
                className="inline-flex items-center gap-2 bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-brand-accent/25 transition-all hover:translate-y-[-1px]"
              >
                {t('contact.cta')}
                <Icon name="ArrowRight" size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
