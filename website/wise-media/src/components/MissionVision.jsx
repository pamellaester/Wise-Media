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
        <header className="text-center mb-10 md:mb-14">
          <div className="inline-block px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-5">
            <span className="text-white/80 text-xs font-semibold tracking-wide uppercase">{t('missionVision.title')}</span>
          </div>
          <h2
            id="vision-mission-heading"
            className="text-h2 text-white mb-4 heading-secondary"
          >
            {t('missionVision.title')}
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {t('missionVision.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* Vision Card */}
          <article className="relative group">
            <div className="relative bg-white/8 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/10 h-full hover:bg-white/12 hover:border-white/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-lightBlue/90 to-white mb-4 shadow-md group-hover:scale-105 transition-transform" aria-hidden="true">
                <Icon name="Eye" size={22} className="text-brand-navy" />
              </div>

              <span className="inline-block px-2.5 py-1 rounded-full bg-white/15 text-white/80 text-xs font-semibold uppercase tracking-wide mb-3">
                {t('missionVision.vision.label')}
              </span>
              <p className="text-white/60 leading-relaxed text-sm">
                {t('missionVision.vision.text')}
              </p>
            </div>
          </article>

          {/* Mission Card */}
          <article className="relative group">
            <div className="relative bg-white/8 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/10 h-full hover:bg-white/12 hover:border-white/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-lightBlue/90 to-white mb-4 shadow-md group-hover:scale-105 transition-transform" aria-hidden="true">
                <Icon name="Compass" size={22} className="text-brand-navy" />
              </div>

              <span className="inline-block px-2.5 py-1 rounded-full bg-white/15 text-white/80 text-xs font-semibold uppercase tracking-wide mb-3">
                {t('missionVision.mission.label')}
              </span>
              <p className="text-white/60 leading-relaxed text-sm">
                {t('missionVision.mission.text')}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
