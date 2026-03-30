import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import usePageMeta from "../hooks/usePageMeta";
import Icon from "../components/Icon";

export default function Metodo() {
  usePageMeta("seo.method.title", "seo.method.description");
  const { t } = useTranslation();

  const steps = [
    { letter: "W", key: "w", iconName: "User", color: "from-brand-lightBlue to-brand-accent" },
    { letter: "I", key: "i", iconName: "Image", color: "from-brand-accent to-brand-lightBlue" },
    { letter: "S", key: "s", iconName: "Compass", color: "from-brand-lightBlue to-brand-accent" },
    { letter: "E", key: "e", iconName: "Rocket", color: "from-brand-accent to-brand-lightBlue" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden" aria-labelledby="method-hero-heading">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
          aria-hidden="true"
        />

        <div className="container-content py-20 md:py-28 lg:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="text-brand-lightBlue text-sm font-semibold tracking-wider uppercase">
                {t('metodo.hero.tag')}
              </span>
            </span>

            <h1 id="method-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('metodo.hero.title')}
            </h1>

            <p className="text-xl text-white/70 leading-relaxed">
              {t('metodo.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-white relative overflow-hidden">
        <div className="container-content py-16 md:py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">
              {t('metodo.intro.title')}
            </h2>
            <p className="text-lg text-brand-navy/70 leading-relaxed">
              {t('metodo.intro.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Method Steps */}
      <section className="w-full relative overflow-hidden" aria-labelledby="method-steps-heading">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
          aria-hidden="true"
        />

        <div className="container-content section-spacing relative">
          <h2 id="method-steps-heading" className="sr-only">Etapas do Método WISE</h2>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const includes = t(`metodo.steps.${step.key}.includes`, { returnObjects: true });
              const isEven = index % 2 === 0;

              return (
                <article
                  key={step.key}
                  className="relative"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Letter Card */}
                    <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
                        <div className="flex items-center gap-6 mb-6">
                          <span className={`text-7xl md:text-8xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                            {step.letter}
                          </span>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                              {t(`metodo.steps.${step.key}.title`)}
                            </h3>
                            <p className="text-brand-lightBlue font-medium">
                              {t(`metodo.steps.${step.key}.subtitle`)}
                            </p>
                          </div>
                        </div>

                        <p className="text-white/70 leading-relaxed text-lg">
                          {t(`metodo.steps.${step.key}.description`)}
                        </p>
                      </div>
                    </div>

                    {/* Includes List */}
                    <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="bg-white rounded-2xl p-6 md:p-8 border border-brand-navy/10 shadow-lg">
                        <h4 className="text-lg font-semibold text-brand-navy mb-5 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center">
                            <Icon name={step.iconName} size={20} className="text-brand-navy" />
                          </div>
                          {t('metodo.includesLabel')}
                        </h4>

                        <ul className="space-y-4">
                          {includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Icon name="Check" size={12} className="text-brand-accent" />
                              </div>
                              <span className="text-brand-navy/75 text-sm leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex justify-center py-8">
                      <div className="w-0.5 h-16 bg-gradient-to-b from-brand-lightBlue/50 to-transparent" aria-hidden="true" />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-navy/5 to-transparent" aria-hidden="true" />

        <div className="container-content py-20 md:py-28 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              {t('metodo.cta.title')}
            </h2>
            <p className="text-lg text-brand-navy/70 mb-10 leading-relaxed">
              {t('metodo.cta.description')}
            </p>

            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-brand-accent/25 transition-all hover:translate-y-[-2px]"
            >
              {t('metodo.cta.button')}
              <Icon name="ArrowRight" size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
