export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Bold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-lightBlue via-brand-lightBlue/90 to-brand-navy"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '48px 48px'
      }}></div>

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-navy opacity-20 transform skew-x-12 translate-x-1/4"></div>

      <div className="container-content relative" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
        <div className="max-w-5xl mx-auto">
          {/* Bold accent line */}
          <div className="accent-line-bold mb-8 bg-white/80"></div>

          <h1 className="text-h1 text-white mb-10 heading-primary drop-shadow-lg">
            Comunicação estratégica que protege, posiciona e fortalece reputações.
          </h1>

          <p className="text-xl text-white/95 max-w-3xl mb-12 leading-relaxed drop-shadow">
            Atuamos com inteligência, precisão e responsabilidade para preservar credibilidade e construir autoridade de marcas, líderes e profissionais de alta exposição.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-20">
            <a href="#contact" className="bg-white text-brand-navy px-10 py-4 rounded-lg font-bold text-[15px] hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2">
              Fale com a Wise Media
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/servicos" className="bg-brand-navy/40 backdrop-blur-sm text-white border-2 border-white/40 px-10 py-4 rounded-lg font-semibold text-[15px] hover:bg-brand-navy/60 transition-all">
              Conheça os Serviços
            </a>
          </div>

          {/* Trust indicators - bold cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">+50</div>
              <div className="text-sm text-white/80">Clientes Atendidos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-sm text-white/80">Resposta em Crises</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-white/80">Confidencialidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
