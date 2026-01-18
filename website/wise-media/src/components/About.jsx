import Icon from "./Icon";

export default function About() {
  return (
    <section className="w-full  relative overflow-hidden">
      {/* Bold gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

      {/* Diagonal gradient overlay */}
      <div className="absolute top-0 left-0 w-1/2 h-96 bg-gradient-to-br from-brand-navy/5 to-transparent"></div>

      <div className="container-content section-spacing relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="accent-line-bold mx-auto mb-8"></div>
          <h1 className="text-h1 text-white mb-8 heading-primary">Sobre</h1>
          <p className="text-white max-w-3xl mx-auto">
            Agência de comunicação estratégica especializada em assessoria de imprensa, gestão de reputação e atuação em cenários sensíveis de exposição pública.
          </p>
        </div>

        {/* Mission & Vision - Lead Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="card-premium relative overflow-hidden group">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 to-brand-lightBlue/5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-lightBlue to-brand-navy" aria-hidden="true" />

              <div className="relative">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                    <Icon name="Compass" size={32} className="text-brand-navy" />
                  </div>
                </div>
                <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-brand-navy to-brand-lightBlue text-white text-xs font-bold uppercase tracking-wider mb-4 shadow">
                  Missão
                </span>
                <p className="text-premium leading-relaxed">
                  Ajudar nossos clientes a comunicar com clareza, inteligência e credibilidade, transformando narrativas em resultados reais e sustentáveis.
                </p>
              </div>
            </article>

            <article className="card-premium relative overflow-hidden group">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-lightBlue/5 to-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue" aria-hidden="true" />

              <div className="relative">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                    <Icon name="Eye" size={32} className="text-brand-navy" />
                  </div>
                </div>
                <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white text-xs font-bold uppercase tracking-wider mb-4 shadow">
                  Visão
                </span>
                <p className="text-premium leading-relaxed">
                  Ser referência nacional em comunicação estratégica e gestão de reputação, oferecendo soluções éticas, inteligentes e consistentes para marcas e líderes.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Founders - Credibility Markers */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-white mb-4 heading-secondary">Fundadoras</h2>
            <p className="text-white max-w-2xl mx-auto">
              Experiência comprovada em mídia, comunicação estratégica e gestão de reputação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="card-premium relative overflow-hidden group">
              {/* Left gradient accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

              <div className="flex items-start gap-6 relative">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                    <span className="text-3xl font-bold text-white">RC</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-brand-navy mb-2">Rosy Cordeiro</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-lightBlue/10 to-brand-navy/10 text-brand-navy/70 text-xs font-medium mb-4 border border-brand-lightBlue/20">
                    <Icon name="Tv" size={12} aria-hidden="true" />
                    Jornalista, Estilista e Apresentadora
                  </div>
                  <p className="text-brand-navy/70 leading-relaxed text-[15px] mb-4">
                    Experiência em televisão e moda, com atuação em programas relevantes e expertise na interseção entre mídia e comunicação estratégica.
                  </p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-lightBlue/5 text-brand-navy/50 text-xs">
                      <Icon name="Mic" size={10} aria-hidden="true" /> Mídia
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-lightBlue/5 text-brand-navy/50 text-xs">
                      <Icon name="Sparkles" size={10} aria-hidden="true" /> Moda
                    </span>
                  </div>
                </div>
              </div>
            </article>

            <article className="card-premium relative overflow-hidden group">
              {/* Left gradient accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-navy to-brand-lightBlue opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

              <div className="flex items-start gap-6 relative">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-lightBlue flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                    <span className="text-3xl font-bold text-white">DT</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-brand-navy mb-2">Débora Tawil</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-navy/10 to-brand-lightBlue/10 text-brand-navy/70 text-xs font-medium mb-4 border border-brand-navy/20">
                    <Icon name="UserCog" size={12} aria-hidden="true" />
                    Mentora de Desenvolvimento Humano & Gestão de Imagem
                  </div>
                  <p className="text-brand-navy/70 leading-relaxed text-[15px] mb-4">
                    Especialista em posicionamento e gestão de crises, lidera operações estratégicas para expansão e proteção de reputação de marcas.
                  </p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-navy/5 text-brand-navy/50 text-xs">
                      <Icon name="Target" size={10} aria-hidden="true" /> Estratégia
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-navy/5 text-brand-navy/50 text-xs">
                      <Icon name="Shield" size={10} aria-hidden="true" /> Crises
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* How We Work */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-white mb-4 heading-secondary">Como Atuamos</h2>
            <p className="text-white max-w-2xl mx-auto">
              Três pilares fundamentais guiam nossa abordagem estratégica em cada projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-service text-center group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                  <Icon name="BarChart3" size={28} className="text-brand-navy" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Analítico</h3>
              <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                Avaliamos cenários com profundidade e precisão estratégica.
              </p>
            </div>

            <div className="card-service text-center group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                  <Icon name="Lock" size={28} className="text-brand-navy" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Discreto</h3>
              <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                Atuamos com confidencialidade e responsabilidade institucional.
              </p>
            </div>

            <div className="card-service text-center group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-1 ring-brand-navy/10" aria-hidden="true">
                  <Icon name="Target" size={28} className="text-brand-navy" />
                </div>
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
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                    <Icon name="Scale" size={18} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Ética</h4>
                  <p className="text-brand-navy/70 text-sm leading-relaxed">
                    Comprometimento com práticas responsáveis e transparentes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-navy to-brand-lightBlue flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                    <Icon name="Gem" size={18} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Excelência</h4>
                  <p className="text-brand-navy/70 text-sm leading-relaxed">
                    Busca contínua por resultados superiores e sustentáveis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                    <Icon name="KeyRound" size={18} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Confidencialidade</h4>
                  <p className="text-brand-navy/70 text-sm leading-relaxed">
                    Proteção absoluta das informações e estratégias dos clientes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-navy to-brand-lightBlue flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                    <Icon name="Brain" size={18} className="text-white" />
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
            <Icon name="ArrowRight" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
