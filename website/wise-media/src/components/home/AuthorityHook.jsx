import { useTranslation } from "react-i18next";

export default function AuthorityHook() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white relative overflow-hidden" aria-labelledby="authority-hook-heading">
      {/* Subtle diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-navy/5 to-transparent" aria-hidden="true" />

      <div className="container-content py-20 md:py-28 lg:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Bold accent line */}
          <div className="w-16 h-1 bg-brand-accent mx-auto mb-8" aria-hidden="true" />

          <h2
            id="authority-hook-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-6"
          >
            {t('authorityHook.title')}
          </h2>

          <p className="text-lg md:text-xl text-brand-navy/70 max-w-3xl mx-auto leading-relaxed">
            {t('authorityHook.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
