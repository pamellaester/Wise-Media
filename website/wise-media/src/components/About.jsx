export default function About() {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      {/* Bold gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

      {/* Diagonal gradient overlay */}
      <div className="absolute top-0 left-0 w-1/2 h-96 bg-gradient-to-br from-brand-navy/5 to-transparent"></div>

      <div className="container-content section-spacing relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="accent-line-bold mx-auto mb-8"></div>
          <h1 className="text-h1 text-brand-navy mb-8 heading-primary">Sobre</h1>
          <p className="text-premium max-w-3xl mx-auto">
            Agência de comunicação estratégica especializada em assessoria de imprensa, gestão de reputação e atuação em cenários sensíveis de exposição pública.
          </p>
        </div>

        {/* Mission & Vision - Lead Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
        </div>

        {/* Founders - Credibility Markers */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-brand-navy mb-4 heading-secondary">Fundadoras</h2>
            <p className="text-brand-navy/70 max-w-2xl mx-auto">
              Experiência comprovada em mídia, comunicação estratégica e gestão de reputação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-premium relative overflow-hidden group">
              {/* Bold left gradient accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-start gap-6 relative">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center shadow-xl">
                    <span className="text-3xl font-bold text-white">RC</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-brand-navy mb-2">Rosy Cordeiro</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-brand-lightBlue/10 to-brand-navy/10 text-brand-navy/70 text-xs font-medium mb-4 border border-brand-lightBlue/20">
                    Jornalista, Estilista e Apresentadora
                  </div>
                  <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                    Experiência em televisão e moda, com atuação em programas relevantes e expertise na interseção entre mídia e comunicação estratégica.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-premium relative overflow-hidden group">
              {/* Bold left gradient accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-navy to-brand-lightBlue opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-start gap-6 relative">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-lightBlue flex items-center justify-center shadow-xl">
                    <span className="text-3xl font-bold text-white">DT</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-brand-navy mb-2">Débora Tawil</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-brand-navy/10 to-brand-lightBlue/10 text-brand-navy/70 text-xs font-medium mb-4 border border-brand-navy/20">
                    Mentora de Desenvolvimento Humano & Gestão de Imagem
                  </div>
                  <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                    Especialista em posicionamento e gestão de crises, lidera operações estratégicas para expansão e proteção de reputação de marcas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Work */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-brand-navy mb-4 heading-secondary">Como Atuamos</h2>
            <p className="text-brand-navy/70 max-w-2xl mx-auto">
              Três pilares fundamentais guiam nossa abordagem estratégica em cada projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-service text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Analítico</h3>
              <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                Avaliamos cenários com profundidade e precisão estratégica.
              </p>
            </div>

            <div className="card-service text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-navy to-brand-lightBlue mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Discreto</h3>
              <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                Atuamos com confidencialidade e responsabilidade institucional.
              </p>
            </div>

            <div className="card-service text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Estratégico</h3>
              <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                Construímos narrativas com clareza, propósito e resultados sustentáveis.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section with bold gradient */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="relative overflow-hidden bg-gradient-to-br from-brand-lightBlue/5 via-white to-brand-navy/5 rounded-2xl p-12 border border-brand-navy/5">
            {/* Bold top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

            <div className="text-center mb-12 relative">
              <h2 className="text-h2 text-brand-navy mb-4 heading-secondary">Nossos Valores</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Ética</h4>
                  <p className="text-brand-navy/70 text-sm leading-relaxed">
                    Comprometimento com práticas responsáveis e transparentes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-navy to-brand-lightBlue flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Excelência</h4>
                  <p className="text-brand-navy/70 text-sm leading-relaxed">
                    Busca contínua por resultados superiores e sustentáveis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Confidencialidade</h4>
                  <p className="text-brand-navy/70 text-sm leading-relaxed">
                    Proteção absoluta das informações e estratégias dos clientes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-navy to-brand-lightBlue flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Inteligência Estratégica</h4>
                  <p className="text-brand-navy/70 text-sm leading-relaxed">
                    Análise profunda e planejamento baseado em dados concretos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA with gradient */}
        <div className="text-center max-w-3xl mx-auto">
          <a href="/contato" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white px-10 py-4 rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105">
            Fale com a Wise Media
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
