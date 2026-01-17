import Icon from "./Icon";

export default function WhoWeServe() {
  const segments = [
    {
      title: "Profissionais de Alta Visibilidade",
      description: "Líderes, executivos, especialistas e figuras públicas que precisam proteger e fortalecer sua reputação.",
      iconName: "UserCircle"
    },
    {
      title: "Empreendedores e Vistos Especiais",
      description: "Profissionais que necessitam comprovar relevância pública e posicionamento estratégico para processos internacionais.",
      iconName: "Briefcase"
    },
  ];

  return (
    <section className="relative w-full overflow-hidden" aria-labelledby="who-we-serve-heading">
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
        <header className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-white/90 text-sm font-semibold tracking-wide">PÚBLICO-ALVO</span>
          </div>
          <h2 id="who-we-serve-heading" className="text-h2 text-white mb-6 heading-secondary">Para Quem</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Especialistas em atender profissionais que enfrentam exposição pública e necessitam de comunicação estratégica.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {segments.map((segment, index) => (
            <article key={segment.title} className="relative group">
              {/* Gradient border glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-white/30 to-brand-lightBlue/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" aria-hidden="true" />

              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                {/* Icon badge */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-white mb-6 shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                  <Icon name={segment.iconName} size={26} className="text-brand-navy" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">
                  {segment.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-[15px]">
                  {segment.description}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-lightBlue/20 to-transparent rounded-tl-full" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-white/80 text-sm mb-6">
            Se você se identifica, estamos prontos para apoiar sua estratégia.
          </p>
          <a href="/contato" className="inline-flex items-center gap-2 bg-white text-brand-navy px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all hover:scale-105">
            Iniciar Conversa
            <Icon name="ArrowRight" size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
