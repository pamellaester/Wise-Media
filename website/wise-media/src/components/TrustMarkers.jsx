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
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                  <Icon name={stat.iconName} size={28} className="text-brand-navy drop-shadow-sm" />
                </div>
              </div>
              <div className="text-4xl font-bold text-brand-navy mb-2 bg-gradient-to-r from-brand-navy to-brand-lightBlue bg-clip-text text-transparent">
                {t(`trustMarkers.stats.${stat.key}Value`)}
              </div>
              <div className="text-sm text-brand-navy/70 font-medium">
                {t(`trustMarkers.stats.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>

        {/* Divider with gradient */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="h-px bg-gradient-to-r from-transparent via-brand-navy/20 to-transparent"></div>
        </div>

        {/* Client Sectors Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-brand-navy/60 mb-3">
              {t('trustMarkers.sectorsTitle')}
            </h3>
            <p className="text-brand-navy/50 text-sm">
              {t('trustMarkers.sectorsDescription')}
            </p>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clientSectors.map((sector) => (
              <div
                key={sector.id}
                className="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-brand-navy/5 hover:border-brand-lightBlue/30 transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-lightBlue/20 to-brand-navy/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:from-brand-lightBlue/30 group-hover:to-brand-navy/20 transition-all" aria-hidden="true">
                  <Icon name={sector.iconName} size={26} className="text-brand-navy/60 group-hover:text-brand-navy transition-colors" />
                </div>
                <div className="text-sm text-brand-navy/70 font-medium text-center">
                  {t(`trustMarkers.sectors.${sector.key}`)}
                </div>
              </div>
            ))}
          </div>

          {/* Note about confidentiality */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-brand-navy/40 text-xs italic">
              <Icon name="ShieldCheck" size={14} aria-hidden="true" />
              <span>{t('trustMarkers.confidentialityNote')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
