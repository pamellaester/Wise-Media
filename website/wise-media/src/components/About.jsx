import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="w-full  relative overflow-hidden">
      {/* Bold gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

      {/* Diagonal gradient overlay */}
      <div className="absolute top-0 left-0 w-1/2 h-96 bg-gradient-to-br from-brand-navy/5 to-transparent"></div>

      <div className="container-content section-spacing relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="accent-line-bold mx-auto mb-8"></div>
          <h1 className="text-h1 text-white mb-8 heading-primary">{t('about.title')}</h1>
          <p className="text-white max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        {/* Mission & Vision - Lead Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="card-premium relative overflow-hidden group">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 to-brand-lightBlue/5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-lightBlue to-brand-navy" aria-hidden="true" />

              <div className="relative">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                    <Icon name="Compass" size={32} className="text-brand-navy" />
                  </div>
                </div>
                <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-brand-navy to-brand-lightBlue text-white text-xs font-bold uppercase tracking-wider mb-4 shadow">
                  {t('about.mission.label')}
                </span>
                <p className="text-premium leading-relaxed">
                  {t('about.mission.text')}
                </p>
              </div>
            </article>

            <article className="card-premium relative overflow-hidden group">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-lightBlue/5 to-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue" aria-hidden="true" />

              <div className="relative">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                    <Icon name="Eye" size={32} className="text-brand-navy" />
                  </div>
                </div>
                <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white text-xs font-bold uppercase tracking-wider mb-4 shadow">
                  {t('about.vision.label')}
                </span>
                <p className="text-premium leading-relaxed">
                  {t('about.vision.text')}
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Founders - Credibility Markers */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-white mb-4 heading-secondary">{t('about.founders.title')}</h2>
            <p className="text-white max-w-2xl mx-auto">
              {t('about.founders.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="card-premium relative overflow-hidden group">
              {/* Left gradient accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

              <div className="flex items-start gap-6 relative">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                    <span className="text-3xl font-bold text-white">RC</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-brand-navy mb-2">{t('about.founders.rosy.name')}</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-lightBlue/10 to-brand-navy/10 text-brand-navy/70 text-xs font-medium mb-4 border border-brand-lightBlue/20">
                    <Icon name="Tv" size={12} aria-hidden="true" />
                    {t('about.founders.rosy.role')}
                  </div>
                  <p className="text-brand-navy/70 leading-relaxed text-[15px] mb-4">
                    {t('about.founders.rosy.description')}
                  </p>
                  <div className="flex gap-2">
                    {t('about.founders.rosy.tags', { returnObjects: true }).map((tag, index) => (
                      <span key={index} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-lightBlue/5 text-brand-navy/50 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="card-premium relative overflow-hidden group">
              {/* Left gradient accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-navy to-brand-lightBlue opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

              <div className="flex items-start gap-6 relative">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-lightBlue flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                    <span className="text-3xl font-bold text-white">DT</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-brand-navy mb-2">{t('about.founders.debora.name')}</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-navy/10 to-brand-lightBlue/10 text-brand-navy/70 text-xs font-medium mb-4 border border-brand-navy/20">
                    <Icon name="UserCog" size={12} aria-hidden="true" />
                    {t('about.founders.debora.role')}
                  </div>
                  <p className="text-brand-navy/70 leading-relaxed text-[15px] mb-4">
                    {t('about.founders.debora.description')}
                  </p>
                  <div className="flex gap-2">
                    {t('about.founders.debora.tags', { returnObjects: true }).map((tag, index) => (
                      <span key={index} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-navy/5 text-brand-navy/50 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* How We Work */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-white mb-4 heading-secondary">{t('about.howWeWork.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-service text-center group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                  <Icon name="BarChart3" size={28} className="text-brand-navy" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">{t('about.howWeWork.pillars.analytical.title')}</h3>
              <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                {t('about.howWeWork.pillars.analytical.description')}
              </p>
            </div>

            <div className="card-service text-center group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                  <Icon name="Lock" size={28} className="text-brand-navy" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">{t('about.howWeWork.pillars.discreet.title')}</h3>
              <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                {t('about.howWeWork.pillars.discreet.description')}
              </p>
            </div>

            <div className="card-service text-center group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                  <Icon name="Target" size={28} className="text-brand-navy" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">{t('about.howWeWork.pillars.strategic.title')}</h3>
              <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                {t('about.howWeWork.pillars.strategic.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-white mb-4 heading-secondary">{t('about.values.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <article className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-white/30 to-brand-lightBlue/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" aria-hidden="true" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-white mb-6 shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                  <Icon name="Scale" size={26} className="text-brand-navy" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{t('about.values.items.ethics.title')}</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t('about.values.items.ethics.description')}
                </p>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-lightBlue/20 to-transparent rounded-tl-full" aria-hidden="true" />
              </div>
            </article>

            <article className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-lightBlue/30 to-white/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" aria-hidden="true" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-white mb-6 shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                  <Icon name="Gem" size={26} className="text-brand-navy" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{t('about.values.items.excellence.title')}</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t('about.values.items.excellence.description')}
                </p>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-lightBlue/20 to-transparent rounded-tl-full" aria-hidden="true" />
              </div>
            </article>

            <article className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-white/30 to-brand-lightBlue/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" aria-hidden="true" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-white mb-6 shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                  <Icon name="KeyRound" size={26} className="text-brand-navy" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{t('about.values.items.confidentiality.title')}</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t('about.values.items.confidentiality.description')}
                </p>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-lightBlue/20 to-transparent rounded-tl-full" aria-hidden="true" />
              </div>
            </article>

            <article className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-lightBlue/30 to-white/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" aria-hidden="true" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-white mb-6 shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                  <Icon name="Brain" size={26} className="text-brand-navy" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{t('about.values.items.intelligence.title')}</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t('about.values.items.intelligence.description')}
                </p>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-lightBlue/20 to-transparent rounded-tl-full" aria-hidden="true" />
              </div>
            </article>
          </div>
        </div>

        {/* Contact CTA with gradient */}
        <div className="text-center max-w-3xl mx-auto">
          <a href="/contato" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white px-10 py-4 rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105">
            {t('about.cta')}
            <Icon name="ArrowRight" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
