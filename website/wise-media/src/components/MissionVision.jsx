import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function MissionVision() {
  const { t } = useTranslation();

  return (
    <section
      className="w-full relative overflow-hidden"
      aria-labelledby="vision-mission-heading"
    >
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
        <header className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-white/90 text-sm font-semibold tracking-wide">{t('missionVision.title')}</span>
          </div>
          <h2
            id="vision-mission-heading"
            className="text-h2 text-white mb-6 heading-secondary"
          >
            {t('missionVision.title')}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t('missionVision.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <article className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-white/30 to-brand-lightBlue/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" aria-hidden="true" />

            <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 h-full">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-white mb-6 shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                <Icon name="Eye" size={28} className="text-brand-navy" />
              </div>

              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
                {t('missionVision.vision.label')}
              </span>
              <p className="text-white/80 leading-relaxed">
                {t('missionVision.vision.text')}
              </p>

              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-lightBlue/20 to-transparent rounded-tl-full" aria-hidden="true" />
            </div>
          </article>

          {/* Mission Card */}
          <article className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-lightBlue/30 to-white/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" aria-hidden="true" />

            <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 h-full">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-white mb-6 shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                <Icon name="Compass" size={28} className="text-brand-navy" />
              </div>

              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
                {t('missionVision.mission.label')}
              </span>
              <p className="text-white/80 leading-relaxed">
                {t('missionVision.mission.text')}
              </p>

              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-lightBlue/20 to-transparent rounded-tl-full" aria-hidden="true" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
