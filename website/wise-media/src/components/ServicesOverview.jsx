import Icon from "./Icon";

export default function ServicesOverview() {
  const services = [
    {
      title: "Assessoria de Imprensa",
      outcome: "Posicionamos sua marca com consistência e autoridade nos principais veículos.",
      iconName: "Newspaper"
    },
    {
      title: "Assessoria Estratégica e Pontual",
      outcome: "Garantimos mensagens claras e alinhadas em momentos decisivos.",
      iconName: "MessageSquare"
    },
    {
      title: "Assessoria para Vistos",
      outcome: "Construímos narrativa pública e provas de relevância profissional para processos internacionais.",
      iconName: "Globe"
    },
    {
      title: "Gestão do Google Meu Negócio",
      outcome: "Fortalecemos credibilidade e visibilidade local através de gestão contínua.",
      iconName: "MapPin"
    },
    {
      title: "Serviço Limpa Nome",
      outcome: "Protegemos imagem e reputação digital com atuação estratégica.",
      iconName: "ShieldCheck"
    },
    {
      title: "Gestão de Crise",
      outcome: "Preservamos confiança e relações institucionais em situações sensíveis.",
      iconName: "AlertTriangle"
    },
  ];

  return (
    <section className="w-full  relative overflow-hidden">
      {/* Bold side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-brand-lightBlue to-brand-navy"></div>

      <div className="container-content section-spacing">
        <div className="text-center mb-20">
          <div className="accent-line-bold mx-auto mb-6"></div>
          <h2 className="text-h2 text-white mb-6 heading-secondary">Serviços</h2>
          <p className=" text-white max-w-2xl mx-auto">
            Soluções especializadas para proteger, posicionar e fortalecer sua presença estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group relative overflow-hidden"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"></div>

              {/* Bold left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Icon name={service.iconName} size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                {service.outcome}
              </p>

              {/* Bold corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-lightBlue/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:bg-brand-lightBlue/10 transition-colors"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/servicos" className="bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white px-10 py-4 rounded-lg font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2">
            Ver Todos os Detalhes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
