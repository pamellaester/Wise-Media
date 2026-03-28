import { useTranslation } from "react-i18next";

export default function AuthorityHook() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white relative overflow-hidden" aria-labelledby="authority-hook-heading">
      {/* Subtle diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-navy/5 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-brand-lightBlue/5 to-transparent" aria-hidden="true" />

      <div className="container-content py-20 md:py-28 lg:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <span className="inline-block px-4 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 mb-8">
            <span className="text-brand-navy text-sm font-semibold tracking-wider uppercase">
              {t('authorityHook.tag')}
            </span>
          </span>

          <h2
            id="authority-hook-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-6"
          >
            {t('authorityHook.title')}
          </h2>

          <p className="text-lg md:text-xl text-brand-navy/70 max-w-3xl mx-auto leading-relaxed mb-12">
            {t('authorityHook.description')}
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-2">
                {t('authorityHook.stat1')}
              </div>
              <div className="text-sm text-brand-navy/60 max-w-[180px]">
                {t('authorityHook.stat1Label')}
              </div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-brand-navy/10" aria-hidden="true" />

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2">
                {t('authorityHook.stat2')}
              </div>
              <div className="text-sm text-brand-navy/60 max-w-[180px]">
                {t('authorityHook.stat2Label')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
