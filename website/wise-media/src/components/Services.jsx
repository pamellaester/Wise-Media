import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { key: "pressAdvisory", iconName: "Megaphone" },
    { key: "strategicAdvisory", iconName: "Lightbulb" },
    { key: "visaAdvisory", iconName: "Award" },
    { key: "googleBusiness", iconName: "MapPinned" },
    { key: "cleanName", iconName: "ShieldCheck" },
    { key: "crisisManagement", iconName: "ShieldAlert" },
  ];

  return (
    <section className="w-full  relative overflow-hidden">
      {/* Bold gradient background accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

      {/* Diagonal gradient overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-bl from-brand-lightBlue/5 to-transparent"></div>

      <div className="container-content section-spacing relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="accent-line-bold mx-auto mb-8"></div>
          <h1 className="text-h1 text-white mb-8 heading-primary">{t('services.title')}</h1>
          <p className="text-white max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={service.key} className="relative group">
              {/* Gradient glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-lightBlue to-brand-navy rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>

              {/* Service Card */}
              <div className="card-premium relative overflow-hidden">
                {/* Bold left gradient accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon with glow effect */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg ring-1 ring-brand-navy/10 group-hover:scale-105 transition-transform" aria-hidden="true">
                      <Icon name={service.iconName} size={36} className="text-brand-navy drop-shadow-sm" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-h2 text-brand-navy mb-6 heading-secondary">
                      {t(`services.items.${service.key}.title`)}
                    </h2>

                    {/* Outcome */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy/60 mb-3">
                        <Icon name="CheckCircle2" size={16} className="text-brand-lightBlue" aria-hidden="true" />
                        {t('services.deliverLabel')}
                      </div>
                      <p className="text-premium">
                        {t(`services.items.${service.key}.deliver`)}
                      </p>
                    </div>

                    {/* When to engage */}
                    <div className="bg-gray-50/50 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <Icon name="Info" size={20} className="text-brand-lightBlue flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <div className="text-sm font-semibold text-brand-navy/70 mb-2">
                            {t('services.whenLabel')}
                          </div>
                          <p className="text-brand-navy/70 text-[15px] leading-relaxed">
                            {t(`services.items.${service.key}.when`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bold gradient connector line (except for last item) */}
              {index < services.length - 1 && (
                <div className="flex justify-center my-12">
                  <div className="w-1 h-16 bg-gradient-to-b from-brand-lightBlue via-brand-navy to-transparent rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust reinforcement with bold gradient */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="relative group">
            {/* Bold gradient glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition"></div>

            <div className="relative card-premium text-center bg-gradient-to-br from-brand-navy via-brand-navy to-brand-lightBlue/90 border-0 overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6 shadow-xl border border-white/20" aria-hidden="true">
                  <Icon name="Shield" size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {t('services.trustTitle')}
                </h3>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  {t('services.trustDescription')}
                </p>
                <a href="/contato" className="inline-flex items-center gap-2 bg-white text-brand-navy px-10 py-4 rounded-lg font-bold hover:shadow-2xl transition-all hover:scale-105">
                  {t('services.cta')}
                  <Icon name="ArrowRight" size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
