import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import rosyPhoto from "../assets/wisemediaphotos/rosy-bluephoto.jpeg";
import deboraPhoto from "../assets/wisemediaphotos/debora-blue-photo.jpeg";
import eventPhoto from "../assets/wisemediaphotos/client-event-photo.JPG";

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
        <div className="max-w-3xl mx-auto mb-12 md:mb-16 text-center">
          <div className="accent-line-bold mx-auto mb-5"></div>
          <h1 className="text-h1 text-white mb-5 heading-primary">{t('about.title')}</h1>
          <p className="text-white/70 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Mission & Vision - Lead Section */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <article className="bg-white rounded-xl p-5 md:p-6 border border-brand-navy/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-navy/5 mb-4">
                <Icon name="Compass" size={20} className="text-brand-navy" />
              </div>
              <span className="inline-block px-2.5 py-1 rounded-full bg-brand-navy text-white text-xs font-semibold uppercase tracking-wide mb-3">
                {t('about.mission.label')}
              </span>
              <p className="text-brand-navy/70 text-sm leading-relaxed">
                {t('about.mission.text')}
              </p>
            </article>

            <article className="bg-white rounded-xl p-5 md:p-6 border border-brand-navy/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-navy/5 mb-4">
                <Icon name="Eye" size={20} className="text-brand-navy" />
              </div>
              <span className="inline-block px-2.5 py-1 rounded-full bg-brand-lightBlue text-white text-xs font-semibold uppercase tracking-wide mb-3">
                {t('about.vision.label')}
              </span>
              <p className="text-brand-navy/70 text-sm leading-relaxed">
                {t('about.vision.text')}
              </p>
            </article>
          </div>
        </div>

        {/* Founders - Credibility Markers */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-h2 text-white mb-3 heading-secondary">{t('about.founders.title')}</h2>
            <p className="text-white/70 max-w-lg mx-auto text-base leading-relaxed">
              {t('about.founders.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <article className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 to-brand-lightBlue/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/15 h-full">
                {/* Photo container with better aspect ratio */}
                <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
                  <img
                    src={rosyPhoto}
                    alt={t('about.founders.rosy.name')}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    style={{ objectPosition: '50% 15%' }}
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{t('about.founders.rosy.name')}</h3>
                  <div className="inline-flex items-center gap-2 text-brand-lightBlue/90 text-sm font-medium mb-3">
                    <Icon name="Tv" size={14} aria-hidden="true" />
                    {t('about.founders.rosy.role')}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {t('about.founders.rosy.description')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t('about.founders.rosy.tags', { returnObjects: true }).map((tag, index) => (
                      <span key={index} className="px-2.5 py-1 rounded-full bg-white/10 text-white/60 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-lightBlue/20 to-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/15 h-full">
                {/* Photo container with better aspect ratio */}
                <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
                  <img
                    src={deboraPhoto}
                    alt={t('about.founders.debora.name')}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    style={{ objectPosition: '50% 25%' }}
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{t('about.founders.debora.name')}</h3>
                  <div className="inline-flex items-center gap-2 text-brand-lightBlue/90 text-sm font-medium mb-3">
                    <Icon name="UserCog" size={14} aria-hidden="true" />
                    {t('about.founders.debora.role')}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {t('about.founders.debora.description')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t('about.founders.debora.tags', { returnObjects: true }).map((tag, index) => (
                      <span key={index} className="px-2.5 py-1 rounded-full bg-white/10 text-white/60 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Event Photo - Credibility */}
          <div className="mt-12 lg:mt-16 relative max-w-2xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={eventPhoto}
                  alt={t('about.founders.eventAlt')}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <p className="text-white/80 text-sm">{t('about.founders.eventCaption')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Work */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-h2 text-white mb-3 heading-secondary">{t('about.howWeWork.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 text-center group hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-navy/5 mb-4 group-hover:bg-brand-navy/10 transition-colors">
                <Icon name="BarChart3" size={20} className="text-brand-navy" />
              </div>
              <h3 className="text-base font-semibold text-brand-navy mb-2">{t('about.howWeWork.pillars.analytical.title')}</h3>
              <p className="text-brand-navy/60 text-sm leading-relaxed">
                {t('about.howWeWork.pillars.analytical.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 text-center group hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-navy/5 mb-4 group-hover:bg-brand-navy/10 transition-colors">
                <Icon name="Lock" size={20} className="text-brand-navy" />
              </div>
              <h3 className="text-base font-semibold text-brand-navy mb-2">{t('about.howWeWork.pillars.discreet.title')}</h3>
              <p className="text-brand-navy/60 text-sm leading-relaxed">
                {t('about.howWeWork.pillars.discreet.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 text-center group hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-navy/5 mb-4 group-hover:bg-brand-navy/10 transition-colors">
                <Icon name="Target" size={20} className="text-brand-navy" />
              </div>
              <h3 className="text-base font-semibold text-brand-navy mb-2">{t('about.howWeWork.pillars.strategic.title')}</h3>
              <p className="text-brand-navy/60 text-sm leading-relaxed">
                {t('about.howWeWork.pillars.strategic.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-h2 text-white mb-3 heading-secondary">{t('about.values.title')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <article className="bg-white/8 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/12 hover:border-white/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue/80 to-white mb-3 shadow-sm">
                <Icon name="Scale" size={18} className="text-brand-navy" />
              </div>
              <h4 className="text-base font-semibold text-white mb-2">{t('about.values.items.ethics.title')}</h4>
              <p className="text-white/55 text-sm leading-relaxed">
                {t('about.values.items.ethics.description')}
              </p>
            </article>

            <article className="bg-white/8 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/12 hover:border-white/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue/80 to-white mb-3 shadow-sm">
                <Icon name="Gem" size={18} className="text-brand-navy" />
              </div>
              <h4 className="text-base font-semibold text-white mb-2">{t('about.values.items.excellence.title')}</h4>
              <p className="text-white/55 text-sm leading-relaxed">
                {t('about.values.items.excellence.description')}
              </p>
            </article>

            <article className="bg-white/8 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/12 hover:border-white/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue/80 to-white mb-3 shadow-sm">
                <Icon name="KeyRound" size={18} className="text-brand-navy" />
              </div>
              <h4 className="text-base font-semibold text-white mb-2">{t('about.values.items.confidentiality.title')}</h4>
              <p className="text-white/55 text-sm leading-relaxed">
                {t('about.values.items.confidentiality.description')}
              </p>
            </article>

            <article className="bg-white/8 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/12 hover:border-white/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue/80 to-white mb-3 shadow-sm">
                <Icon name="Brain" size={18} className="text-brand-navy" />
              </div>
              <h4 className="text-base font-semibold text-white mb-2">{t('about.values.items.intelligence.title')}</h4>
              <p className="text-white/55 text-sm leading-relaxed">
                {t('about.values.items.intelligence.description')}
              </p>
            </article>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <a href="/contato" className="inline-flex items-center gap-2 bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-brand-accent/25 transition-all hover:translate-y-[-1px]">
            {t('about.cta')}
            <Icon name="ArrowRight" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
