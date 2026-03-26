import { useTranslation } from "react-i18next";
import Icon from "../Icon";

export default function ProblemSection() {
  const { t } = useTranslation();

  const problems = [
    { key: "unknown", iconName: "EyeOff" },
    { key: "ignored", iconName: "UserX" },
    { key: "undervalued", iconName: "TrendingDown" },
  ];

  return (
    <section className="w-full relative overflow-hidden" aria-labelledby="problem-heading">
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
        <header className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-5">
            <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">
              {t('problem.tag')}
            </span>
          </span>

          <h2 id="problem-heading" className="text-h2 text-white mb-4 heading-secondary">
            {t('problem.title')}
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            {t('problem.subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem) => (
            <article key={problem.key} className="relative group">
              <div className="relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 h-full hover:bg-white/12 hover:border-white/20 transition-all duration-300">
                {/* Left accent bar */}
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-brand-accent to-brand-lightBlue rounded-full" aria-hidden="true" />

                <div className="pl-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-5 group-hover:bg-white/15 transition-colors">
                    <Icon name={problem.iconName} size={24} className="text-brand-lightBlue" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {t(`problem.items.${problem.key}.title`)}
                  </h3>

                  <p className="text-white/60 leading-relaxed">
                    {t(`problem.items.${problem.key}.description`)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
