import Icon from "./Icon";

export default function ServicesOverview() {
  const services = [
    {
      title: "Assessoria de Imprensa",
      outcome: "Posicionamos sua marca com consistência e autoridade nos principais veículos.",
      iconName: "Megaphone"
    },
    {
      title: "Assessoria Estratégica e Pontual",
      outcome: "Garantimos mensagens claras e alinhadas em momentos decisivos.",
      iconName: "Lightbulb"
    },
    {
      title: "Assessoria para Vistos",
      outcome: "Construímos narrativa pública e provas de relevância profissional para processos internacionais.",
      iconName: "Award"
    },
    {
      title: "Gestão do Google Meu Negócio",
      outcome: "Fortalecemos credibilidade e visibilidade local através de gestão contínua.",
      iconName: "MapPinned"
    },
    {
      title: "Serviço Limpa Nome",
      outcome: "Protegemos imagem e reputação digital com atuação estratégica.",
      iconName: "ShieldCheck"
    },
    {
      title: "Gestão de Crise",
      outcome: "Preservamos confiança e relações institucionais em situações sensíveis.",
      iconName: "ShieldAlert"
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
              <div className="absolute inset-0 bg-gradient-to-br from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" aria-hidden="true" />

              {/* Left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

              {/* Icon container with glow effect */}
              <div className="relative mb-6">
                {/* Glow effect behind icon */}
                <div className="absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br from-brand-lightBlue/30 to-brand-navy/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg ring-1 ring-brand-navy/10" aria-hidden="true">
                  <Icon name={service.iconName} size={28} className="text-brand-navy drop-shadow-sm" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-brand-navy mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                {service.outcome}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-lightBlue/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:bg-brand-lightBlue/10 transition-colors" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/servicos" className="bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white px-10 py-4 rounded-lg font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2 hover:scale-105">
            Ver Todos os Detalhes
            <Icon name="ArrowRight" size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
