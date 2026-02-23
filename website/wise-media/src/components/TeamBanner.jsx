import { useTranslation } from "react-i18next";
import eventPhoto from "../assets/wisemediaphotos/client-event-photo.JPG";

export default function TeamBanner() {
  const { t } = useTranslation();

  return (
    <section className="w-full relative overflow-hidden section-spacing-tight">
      <div className="container-content relative">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            {/* Responsive aspect ratio - more balanced on all screens */}
            <div className="aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.2/1] overflow-hidden">
              <img
                src={eventPhoto}
                alt={t('teamBanner.alt')}
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 40%' }}
              />
            </div>

            {/* Refined gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/40 via-transparent to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <p className="text-white font-semibold text-lg md:text-xl mb-1">
                    {t('teamBanner.title')}
                  </p>
                  <p className="text-white/70 text-sm md:text-base">
                    {t('teamBanner.subtitle')}
                  </p>
                </div>
                <a
                  href="/sobre"
                  className="inline-flex items-center gap-2 text-brand-lightBlue text-sm font-semibold hover:text-white transition-colors group"
                >
                  {t('teamBanner.cta')}
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
