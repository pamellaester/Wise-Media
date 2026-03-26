import { useTranslation } from "react-i18next";
import Icon from "../Icon";

export default function OfferSection() {
  const { t } = useTranslation();

  const audiences = t('offer.audience', { returnObjects: true });
  const included = t('offer.included', { returnObjects: true });

  return (
    <section className="w-full relative overflow-hidden" aria-labelledby="offer-heading">
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
          <h2 id="offer-heading" className="text-h2 text-white mb-4 heading-secondary">
            {t('offer.title')}
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            {t('offer.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Who it's for */}
          <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-lightBlue/20 flex items-center justify-center">
                <Icon name="Users" size={24} className="text-brand-lightBlue" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {t('offer.whoTitle')}
              </h3>
            </div>

            <ul className="space-y-4">
              {audiences.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-brand-accent" />
                  </div>
                  <span className="text-white/75 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's included */}
          <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center">
                <Icon name="Package" size={24} className="text-brand-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {t('offer.whatTitle')}
              </h3>
            </div>

            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-lightBlue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-brand-lightBlue" />
                  </div>
                  <span className="text-white/75 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Transformation statement */}
        <div className="max-w-3xl mx-auto text-center mt-12 md:mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-3">
              {t('offer.transformationTitle')}
            </h4>
            <p className="text-white/70 leading-relaxed">
              {t('offer.transformationDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
