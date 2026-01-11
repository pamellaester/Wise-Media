export default function MissionVision() {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      {/* Bold diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-lightBlue/10 to-transparent"></div>

      <div className="container-content section-spacing relative">
        <div className="text-center mb-20">
          <div className="accent-line-bold mx-auto mb-6"></div>
          <h2 className="text-h2 text-brand-navy mb-6 heading-secondary">Visão e Missão</h2>
          <p className="text-premium max-w-2xl mx-auto">
            Nosso propósito institucional e compromisso com a excelência em comunicação estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card-premium relative overflow-hidden group">
            {/* Bold gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-lightBlue/5 to-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Bold top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white text-xs font-bold mb-4 shadow">
                VISÃO
              </div>
              <p className="text-premium leading-relaxed">
                Ser referência nacional em comunicação estratégica e gestão de reputação, oferecendo soluções éticas, inteligentes e consistentes para marcas e líderes.
              </p>
            </div>
          </div>

          <div className="card-premium relative overflow-hidden group">
            {/* Bold gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 to-brand-lightBlue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Bold top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-lightBlue to-brand-navy"></div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-navy to-brand-lightBlue mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-brand-navy to-brand-lightBlue text-white text-xs font-bold mb-4 shadow">
                MISSÃO
              </div>
              <p className="text-premium leading-relaxed">
                Ajudar nossos clientes a comunicar com clareza, inteligência e credibilidade, transformando narrativas em resultados reais e sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
