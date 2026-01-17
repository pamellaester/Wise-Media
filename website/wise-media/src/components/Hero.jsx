import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" aria-labelledby="hero-heading">
      {/* Bold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-lightBlue via-brand-lightBlue/90 to-brand-navy" aria-hidden="true" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-navy opacity-20 transform skew-x-12 translate-x-1/4" aria-hidden="true" />

      <div className="container-content relative" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
        <div className="max-w-5xl mx-auto">
          {/* Bold accent line */}
          <div className="accent-line-bold mb-8 bg-white/80" aria-hidden="true" />

          <h1 id="hero-heading" className="text-h1 text-white mb-10 heading-primary drop-shadow-lg">
            Comunicação estratégica que protege, posiciona e fortalece reputações.
          </h1>

          <p className="text-xl text-white/95 max-w-3xl mb-12 leading-relaxed drop-shadow">
            Atuamos com inteligência, precisão e responsabilidade para preservar credibilidade e construir autoridade de marcas, líderes e profissionais de alta exposição.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-20">
            <a href="#contact" className="bg-white text-brand-navy px-10 py-4 rounded-lg font-bold text-[15px] hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2">
              Fale com a Wise Media
              <Icon name="ArrowRight" size={20} aria-hidden="true" />
            </a>
            <a href="/servicos" className="bg-brand-navy/40 backdrop-blur-sm text-white border-2 border-white/40 px-10 py-4 rounded-lg font-semibold text-[15px] hover:bg-brand-navy/60 transition-all inline-flex items-center gap-2">
              Conheça os Serviços
              <Icon name="Sparkles" size={18} className="text-white/80" aria-hidden="true" />
            </a>
          </div>

          {/* Trust indicators - bold cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 group hover:bg-white/15 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform" aria-hidden="true">
                  <Icon name="Users" size={20} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white">+50</div>
              </div>
              <div className="text-sm text-white/80">Clientes Atendidos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 group hover:bg-white/15 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform" aria-hidden="true">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white">24h</div>
              </div>
              <div className="text-sm text-white/80">Resposta em Crises</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 group hover:bg-white/15 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform" aria-hidden="true">
                  <Icon name="ShieldCheck" size={20} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white">100%</div>
              </div>
              <div className="text-sm text-white/80">Confidencialidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
