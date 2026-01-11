export default function Contact() {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      {/* Bold gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

      {/* Diagonal gradient overlay */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-bl from-brand-lightBlue/5 to-transparent"></div>

      <div className="container-content section-spacing relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="accent-line-bold mx-auto mb-8"></div>
            <h1 className="text-h1 text-brand-navy mb-8 heading-primary">
              Comunicação começa com confiança.
            </h1>
            <p className="text-premium max-w-2xl mx-auto">
              Entre em contato para discutir como podemos apoiar sua estratégia com inteligência, discrição e responsabilidade.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="mb-20">
            <h2 className="text-h2 text-brand-navy mb-12 heading-secondary text-center">
              Formas de Contato
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-premium text-center group relative overflow-hidden">
                {/* Bold left gradient accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Email</h3>
                <p className="text-sm text-brand-navy/60 mb-4">Preferencial para discrição</p>
                <a
                  href="mailto:wisemediasolucoes@gmail.com"
                  className="text-brand-lightBlue hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  wisemediasolucoes@gmail.com
                </a>
              </div>

              <div className="card-premium text-center group relative overflow-hidden">
                {/* Bold left gradient accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-navy to-brand-lightBlue opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-navy to-brand-lightBlue mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">WhatsApp</h3>
                <p className="text-sm text-brand-navy/60 mb-4">Resposta em até 24 horas</p>
                <a
                  href="https://wa.me/5511990094457"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-lightBlue hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  (11) 99009-4457
                </a>
              </div>

              <div className="card-premium text-center group relative overflow-hidden">
                {/* Bold left gradient accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Instagram</h3>
                <p className="text-sm text-brand-navy/60 mb-4">Institucional</p>
                <a
                  href="https://instagram.com/wisemediasolucoes11"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-lightBlue hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  @wisemediasolucoes11
                </a>
              </div>
            </div>
          </div>

          {/* Process with bold gradient */}
          <div className="mb-20 relative overflow-hidden bg-gradient-to-br from-brand-lightBlue/5 via-white to-brand-navy/5 rounded-2xl p-12">
            {/* Bold top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

            <h2 className="text-h2 text-brand-navy mb-12 heading-secondary text-center relative">
              Como Funciona
            </h2>

            <div className="space-y-10 max-w-3xl mx-auto relative">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Conversa Inicial</h3>
                  <p className="text-brand-navy/70 leading-relaxed">
                    Entendemos sua situação, objetivos e desafios de comunicação com confidencialidade absoluta.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-navy to-brand-lightBlue flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Análise Estratégica</h3>
                  <p className="text-brand-navy/70 leading-relaxed">
                    Avaliamos cenários, riscos e oportunidades com precisão analítica e visão de longo prazo.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Plano Personalizado</h3>
                  <p className="text-brand-navy/70 leading-relaxed">
                    Apresentamos estratégia clara, cronograma realista e investimento necessário para resultados consistentes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Discretion Assurance & CTA with gradient */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-brand-navy/60 text-sm mb-8">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span>Todas as conversas são tratadas com confidencialidade e responsabilidade institucional.</span>
            </div>
            <div>
              <a
                href="mailto:wisemediasolucoes@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white px-10 py-4 rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                Iniciar Conversa
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
