import { useTranslation } from "react-i18next";
import eventPhoto from "../assets/wisemediaphotos/client-event-photo.JPG";

export default function TeamBanner() {
  const { t } = useTranslation();

  return (
    <section className="w-full relative overflow-hidden section-spacing-tight">
      <div className="container-content relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            {/* Responsive aspect ratio container */}
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <img
                src={eventPhoto}
                alt={t('teamBanner.alt')}
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 35%' }}
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/40 to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                <div>
                  <p className="text-white font-semibold text-base md:text-lg mb-0.5">
                    {t('teamBanner.title')}
                  </p>
                  <p className="text-white/60 text-sm">
                    {t('teamBanner.subtitle')}
                  </p>
                </div>
                <a
                  href="/sobre"
                  className="inline-flex items-center gap-1.5 text-brand-lightBlue text-sm font-medium hover:text-white transition-colors"
                >
                  {t('teamBanner.cta')}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
