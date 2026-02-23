import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function TrustMarkers() {
  const { t } = useTranslation();

  const stats = [
    { key: "clients", iconName: "Users" },
    { key: "experience", iconName: "Trophy" },
    { key: "satisfaction", iconName: "ThumbsUp" },
    { key: "responseTime", iconName: "Zap" }
  ];

  const clientSectors = [
    { id: 1, key: "technology", iconName: "Cpu" },
    { id: 2, key: "finance", iconName: "Landmark" },
    { id: 3, key: "health", iconName: "HeartPulse" },
    { id: 4, key: "legal", iconName: "Scale" },
    { id: 5, key: "entertainment", iconName: "Clapperboard" },
    { id: 6, key: "executives", iconName: "UserCircle" },
  ];

  return (
    <section className="w-full bg-white relative overflow-hidden">
      {/* Diagonal gradient overlay */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-brand-lightBlue/5 to-transparent"></div>

      <div className="container-content section-spacing relative">
        {/* Stats Grid - refined spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-4xl mx-auto mb-16 md:mb-20">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 ring-1 ring-brand-navy/10" aria-hidden="true">
                  <Icon name={stat.iconName} size={26} className="text-brand-navy" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy mb-1.5">
                {t(`trustMarkers.stats.${stat.key}Value`)}
              </div>
              <div className="text-xs md:text-sm text-brand-navy/60 font-medium leading-tight">
                {t(`trustMarkers.stats.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-14">
          <div className="h-px bg-gradient-to-r from-transparent via-brand-navy/15 to-transparent"></div>
        </div>

        {/* Client Sectors Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-lg font-semibold text-brand-navy/70 mb-2">
              {t('trustMarkers.sectorsTitle')}
            </h3>
            <p className="text-brand-navy/50 text-sm">
              {t('trustMarkers.sectorsDescription')}
            </p>
          </div>

          {/* Sectors Grid - balanced and elegant */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-5">
            {clientSectors.map((sector) => (
              <div
                key={sector.id}
                className="group flex flex-col items-center justify-center p-5 md:p-6 rounded-xl bg-gray-50/80 border border-brand-navy/5 hover:border-brand-lightBlue/40 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center mb-3 group-hover:bg-brand-lightBlue/20 transition-all duration-300" aria-hidden="true">
                  <Icon name={sector.iconName} size={22} className="text-brand-navy/50 group-hover:text-brand-navy transition-colors duration-300" />
                </div>
                <div className="text-xs text-brand-navy/70 font-medium text-center leading-tight">
                  {t(`trustMarkers.sectors.${sector.key}`)}
                </div>
              </div>
            ))}
          </div>

          {/* Note about confidentiality */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-brand-navy/40 text-xs">
              <Icon name="ShieldCheck" size={12} aria-hidden="true" />
              <span>{t('trustMarkers.confidentialityNote')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
