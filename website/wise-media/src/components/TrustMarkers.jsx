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
        {/* Stats Grid - tighter spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-14 md:mb-16">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center group">
              <div className="relative inline-block mb-3">
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                  <Icon name={stat.iconName} size={24} className="text-brand-navy" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-brand-navy mb-1">
                {t(`trustMarkers.stats.${stat.key}Value`)}
              </div>
              <div className="text-xs md:text-sm text-brand-navy/60 font-medium">
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

          {/* Sectors Grid - more compact */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {clientSectors.map((sector) => (
              <div
                key={sector.id}
                className="group flex flex-col items-center justify-center p-4 md:p-5 rounded-lg bg-gray-50/80 border border-brand-navy/5 hover:border-brand-lightBlue/30 hover:bg-white transition-all"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-brand-navy/5 flex items-center justify-center mb-2 group-hover:bg-brand-lightBlue/15 transition-colors" aria-hidden="true">
                  <Icon name={sector.iconName} size={20} className="text-brand-navy/50 group-hover:text-brand-navy transition-colors" />
                </div>
                <div className="text-xs text-brand-navy/60 font-medium text-center leading-tight">
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
