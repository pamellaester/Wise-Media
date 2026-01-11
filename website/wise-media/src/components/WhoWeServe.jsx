export default function WhoWeServe() {
  const segments = [
    {
      title: "Profissionais de Alta Visibilidade",
      description: "Líderes, executivos, especialistas e figuras públicas que precisam proteger e fortalecer sua reputação.",
    },
    {
      title: "Empreendedores e Vistos Especiais",
      description: "Profissionais que necessitam comprovar relevância pública e posicionamento estratégico para processos internacionais.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Bold split background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy to-brand-lightBlue"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)'
        }}></div>
      </div>

      <div className="container-content section-spacing relative">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-white/90 text-sm font-semibold">PÚBLICO-ALVO</span>
          </div>
          <h2 className="text-h2 text-white mb-6 heading-secondary">Para Quem</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Especialistas em atender profissionais que enfrentam exposição pública e necessitam de comunicação estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {segments.map((segment, index) => (
            <div key={segment.title} className="relative group">
              {/* Bold gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-white/30 to-brand-lightBlue/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition"></div>

              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-brand-lightBlue to-white text-brand-navy font-bold text-xl mb-6 shadow-lg">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">
                  {segment.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-[15px]">
                  {segment.description}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-lightBlue/20 to-transparent rounded-tl-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-white/80 text-sm mb-6">
            Se você se identifica, estamos prontos para apoiar sua estratégia.
          </p>
          <a href="/contato" className="inline-flex items-center gap-2 bg-white text-brand-navy px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all hover:scale-105">
            Iniciar Conversa
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
