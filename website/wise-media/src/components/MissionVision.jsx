import Icon from "./Icon";

export default function MissionVision() {
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
            Visão e Missão
          </h2>
          <p className="text-premium max-w-2xl mx-auto">
            Nosso propósito institucional e compromisso com a excelência em comunicação estratégica.
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
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy mb-6 shadow-lg group-hover:scale-105 transition-transform"
                aria-hidden="true"
              >
                <Icon name="Eye" size={32} className="text-white" />
              </div>
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white text-xs font-bold uppercase tracking-wider mb-4 shadow">
                Visão
              </span>
              <p className="text-premium leading-relaxed">
                Ser referência nacional em comunicação estratégica e gestão de reputação, oferecendo soluções éticas, inteligentes e consistentes para marcas e líderes.
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
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-navy to-brand-lightBlue mb-6 shadow-lg group-hover:scale-105 transition-transform"
                aria-hidden="true"
              >
                <Icon name="Compass" size={32} className="text-white" />
              </div>
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-brand-navy to-brand-lightBlue text-white text-xs font-bold uppercase tracking-wider mb-4 shadow">
                Missão
              </span>
              <p className="text-premium leading-relaxed">
                Ajudar nossos clientes a comunicar com clareza, inteligência e credibilidade, transformando narrativas em resultados reais e sustentáveis.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
