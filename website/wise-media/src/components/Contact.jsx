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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-20">
            <div className="accent-line-bold mx-auto mb-8" aria-hidden="true" />
            <h1 id="contact-heading" className="text-h1 text-white mb-8 heading-primary">
              {t('contact.title')}
            </h1>
            <p className="text-white max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </header>

          {/* Contact Methods */}
          <div className="mb-20">
            <h2 className="text-h2 text-white mb-12 heading-secondary text-center">
              {t('contact.methodsTitle')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="card-premium text-center group relative overflow-hidden">
                {/* Left gradient accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                    <Icon name="Mail" size={28} className="text-brand-navy" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">{t('contact.methods.email.title')}</h3>
                <p className="text-sm text-brand-navy/60 mb-4">{t('contact.methods.email.description')}</p>
                <a
                  href="mailto:wisemediasolucoes@gmail.com"
                  className="text-brand-lightBlue hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  wisemediasolucoes@gmail.com
                </a>
              </article>

              <article className="card-premium text-center group relative overflow-hidden">
                {/* Left gradient accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-navy to-brand-lightBlue opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                    <Icon name="MessageCircle" size={28} className="text-brand-navy" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">{t('contact.methods.whatsapp.title')}</h3>
                <p className="text-sm text-brand-navy/60 mb-4">{t('contact.methods.whatsapp.description')}</p>
                <a
                  href="https://wa.me/5511922250182"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-lightBlue hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  (11) 92225-0182
                </a>
              </article>

              <article className="card-premium text-center group relative overflow-hidden">
                {/* Left gradient accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                    <Icon name="Instagram" size={28} className="text-brand-navy" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">{t('contact.methods.instagram.title')}</h3>
                <p className="text-sm text-brand-navy/60 mb-4">{t('contact.methods.instagram.description')}</p>
                <a
                  href="https://instagram.com/wisemediasolucoes11"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-lightBlue hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  @wisemediasolucoes11
                </a>
              </article>
            </div>
          </div>

          {/* Process with gradient */}
          <div className="mb-20 relative overflow-hidden bg-gradient-to-br from-brand-lightBlue/5 via-white to-brand-navy/5 rounded-2xl p-12">
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue" aria-hidden="true" />

            <h2 className="text-h2 text-brand-navy mb-12 heading-secondary text-center relative">
              {t('contact.processTitle')}
            </h2>

            <div className="space-y-10 max-w-3xl mx-auto relative">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                    <Icon name="MessageSquare" size={24} className="text-brand-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">{t('contact.process.initial.title')}</h3>
                  <p className="text-brand-navy/70 leading-relaxed">
                    {t('contact.process.initial.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                    <Icon name="Search" size={24} className="text-brand-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">{t('contact.process.analysis.title')}</h3>
                  <p className="text-brand-navy/70 leading-relaxed">
                    {t('contact.process.analysis.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                    <Icon name="FileText" size={24} className="text-brand-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">{t('contact.process.plan.title')}</h3>
                  <p className="text-brand-navy/70 leading-relaxed">
                    {t('contact.process.plan.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Discretion Assurance & CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-sm mb-8 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm ring-1 ring-white/20" aria-hidden="true">
                <Icon name="Lock" size={14} className="text-brand-navy" />
              </div>
              <span className="text-white/90">{t('contact.confidentiality')}</span>
            </div>
            <div>
              <a
                href="mailto:wisemediasolucoes@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white px-10 py-4 rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                {t('contact.cta')}
                <Icon name="ArrowRight" size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
