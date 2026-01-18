import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function MissionVision() {
  const { t } = useTranslation();

  return (
    <section
      className="w-full bg-white relative overflow-hidden"
      aria-labelledby="vision-mission-heading"
    >
      {/* Decorative diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-lightBlue/10 to-transparent"
        aria-hidden="true"
      />

      <div className="container-content section-spacing relative">
        <header className="text-center mb-20">
          <div className="accent-line-bold mx-auto mb-6" aria-hidden="true" />
          <h2
            id="vision-mission-heading"
            className="text-h2 text-brand-navy mb-6 heading-secondary"
          >
            {t('missionVision.title')}
          </h2>
          <p className="text-premium max-w-2xl mx-auto">
            {t('missionVision.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <article className="card-premium relative overflow-hidden group">
            {/* Gradient overlay on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-brand-lightBlue/5 to-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />

            {/* Top border accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div
                  className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform ring-1 ring-brand-navy/10"
                  aria-hidden="true"
                >
                  <Icon name="Eye" size={32} className="text-brand-navy" />
                </div>
              </div>
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white text-xs font-bold uppercase tracking-wider mb-4 shadow">
                {t('missionVision.vision.label')}
              </span>
              <p className="text-premium leading-relaxed">
                {t('missionVision.vision.text')}
              </p>
            </div>
          </article>

          {/* Mission Card */}
          <article className="card-premium relative overflow-hidden group">
            {/* Gradient overlay on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 to-brand-lightBlue/5 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />

            {/* Top border accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-lightBlue to-brand-navy"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div
                  className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform ring-1 ring-brand-navy/10"
                  aria-hidden="true"
                >
                  <Icon name="Compass" size={32} className="text-brand-navy" />
                </div>
              </div>
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-brand-navy to-brand-lightBlue text-white text-xs font-bold uppercase tracking-wider mb-4 shadow">
                {t('missionVision.mission.label')}
              </span>
              <p className="text-premium leading-relaxed">
                {t('missionVision.mission.text')}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
