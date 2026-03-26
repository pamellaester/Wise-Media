import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Icon from "./Icon";
import rosyPhoto from "../assets/wisemediaphotos/rosy-bluephoto.jpeg";
import deboraPhoto from "../assets/wisemediaphotos/debora-blue-photo.jpeg";

export default function About() {
  const { t } = useTranslation();

  const values = [
    { key: "excellence", iconName: "Gem" },
    { key: "confidentiality", iconName: "KeyRound" },
    { key: "selectivity", iconName: "Filter" },
    { key: "results", iconName: "Target" },
  ];

  return (
    <section className="w-full relative overflow-hidden">
      {/* Bold gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue" aria-hidden="true" />

      <div className="container-content section-spacing relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 md:mb-20 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-brand-lightBlue text-sm font-semibold tracking-wider uppercase">
              {t('about.tag')}
            </span>
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('about.title')}
          </h1>

          <p className="text-2xl md:text-3xl text-white/80 font-light mb-6">
            {t('about.subtitle')}
          </p>

          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white rounded-2xl p-6 md:p-8 border border-brand-navy/5 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-navy/5 mb-5">
                <Icon name="Compass" size={24} className="text-brand-navy" />
              </div>
              <span className="inline-block px-3 py-1.5 rounded-full bg-brand-navy text-white text-xs font-semibold uppercase tracking-wide mb-4">
                {t('about.mission.label')}
              </span>
              <p className="text-brand-navy/75 leading-relaxed">
                {t('about.mission.text')}
              </p>
            </article>

            <article className="bg-white rounded-2xl p-6 md:p-8 border border-brand-navy/5 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-navy/5 mb-5">
                <Icon name="Eye" size={24} className="text-brand-navy" />
              </div>
              <span className="inline-block px-3 py-1.5 rounded-full bg-brand-lightBlue text-white text-xs font-semibold uppercase tracking-wide mb-4">
                {t('about.vision.label')}
              </span>
              <p className="text-brand-navy/75 leading-relaxed">
                {t('about.vision.text')}
              </p>
            </article>
          </div>
        </div>

        {/* Founders */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-white mb-4 heading-secondary">
              {t('about.founders.title')}
            </h2>
            <p className="text-white/70 max-w-lg mx-auto leading-relaxed">
              {t('about.founders.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rosy */}
            <article className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-white/25 to-brand-lightBlue/25 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/15 h-full group-hover:border-white/25 transition-colors duration-300">
                <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
                  <img
                    src={rosyPhoto}
                    alt={t('about.founders.rosy.name')}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    style={{ objectPosition: '50% 20%' }}
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {t('about.founders.rosy.name')}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-brand-lightBlue text-sm font-medium mb-4">
                    <Icon name="Megaphone" size={15} aria-hidden="true" />
                    {t('about.founders.rosy.role')}
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed mb-5">
                    {t('about.founders.rosy.description')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t('about.founders.rosy.tags', { returnObjects: true }).map((tag, index) => (
                      <span key={index} className="px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Débora */}
            <article className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-lightBlue/25 to-white/25 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/15 h-full group-hover:border-white/25 transition-colors duration-300">
                <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
                  <img
                    src={deboraPhoto}
                    alt={t('about.founders.debora.name')}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    style={{ objectPosition: '50% 25%' }}
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {t('about.founders.debora.name')}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-brand-lightBlue text-sm font-medium mb-4">
                    <Icon name="Target" size={15} aria-hidden="true" />
                    {t('about.founders.debora.role')}
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed mb-5">
                    {t('about.founders.debora.description')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t('about.founders.debora.tags', { returnObjects: true }).map((tag, index) => (
                      <span key={index} className="px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* How We Work / Values */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-white mb-4 heading-secondary">
              {t('about.values.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value) => (
              <article
                key={value.key}
                className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/12 hover:border-white/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-lightBlue/90 to-white mb-4 shadow-lg">
                  <Icon name={value.iconName} size={22} className="text-brand-navy" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t(`about.values.items.${value.key}.title`)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t(`about.values.items.${value.key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-brand-accent/25 transition-all hover:translate-y-[-2px]"
          >
            {t('about.cta')}
            <Icon name="ArrowRight" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
