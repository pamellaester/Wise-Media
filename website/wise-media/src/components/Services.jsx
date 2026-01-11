import Icon from "./Icon";

export default function Services() {
  const services = [
    {
      title: "Assessoria de Imprensa",
      outcome: "Posicionamos sua marca com consistência e autoridade nos principais veículos de comunicação.",
      when: "Você precisa de Assessoria de Imprensa quando busca construir presença estratégica na mídia, ampliar reconhecimento profissional ou fortalecer credibilidade institucional.",
      iconName: "Newspaper"
    },
    {
      title: "Assessoria Estratégica e Pontual",
      outcome: "Garantimos mensagens claras e alinhadas em momentos decisivos que exigem precisão comunicacional.",
      when: "Você precisa de Assessoria Pontual quando enfrenta lançamentos, premiações, eventos estratégicos ou situações que demandam visibilidade qualificada em curto prazo.",
      iconName: "MessageSquare"
    },
    {
      title: "Assessoria para Vistos",
      outcome: "Construímos narrativa pública e provas de relevância profissional para processos de imigração e reconhecimento internacional.",
      when: "Você precisa de Assessoria para Vistos quando solicita O-1, EB2-NIW ou outros vistos que exigem comprovação de destaque e contribuição extraordinária em sua área.",
      iconName: "Globe"
    },
    {
      title: "Gestão do Google Meu Negócio",
      outcome: "Fortalecemos credibilidade e visibilidade local através de otimização, monitoramento e gestão contínua da sua presença digital.",
      when: "Você precisa de Gestão do Google Meu Negócio quando sua reputação local impacta resultados comerciais ou quando avaliações e presença digital exigem acompanhamento profissional.",
      iconName: "MapPin"
    },
    {
      title: "Serviço Limpa Nome",
      outcome: "Protegemos imagem e reputação digital com atuação estratégica na remoção ou mitigação de conteúdos prejudiciais.",
      when: "Você precisa do Serviço Limpa Nome quando conteúdos negativos, reclamações ou informações desatualizadas comprometem sua credibilidade profissional ou institucional.",
      iconName: "ShieldCheck"
    },
    {
      title: "Gestão de Crise",
      outcome: "Preservamos confiança, imagem pública e relações institucionais em situações sensíveis através de planejamento preventivo e atuação imediata.",
      when: "Você precisa de Gestão de Crise quando enfrenta exposição negativa, controvérsias públicas ou situações que ameaçam reputação e relações estratégicas.",
      iconName: "AlertTriangle"
    },
  ];

  return (
    <section className="w-full  relative overflow-hidden">
      {/* Bold gradient background accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

      {/* Diagonal gradient overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-bl from-brand-lightBlue/5 to-transparent"></div>

      <div className="container-content section-spacing relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="accent-line-bold mx-auto mb-8"></div>
          <h1 className="text-h1 text-white mb-8 heading-primary">Serviços</h1>
          <p className="text-white max-w-3xl mx-auto">
            Comunicação estratégica na Wise Media significa atuar com inteligência, precisão e responsabilidade para proteger reputações e construir autoridade sustentável.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={service.title} className="relative group">
              {/* Gradient glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-lightBlue to-brand-navy rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>

              {/* Service Card */}
              <div className="card-premium relative overflow-hidden">
                {/* Bold left gradient accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center shadow-lg">
                      <Icon name={service.iconName} size={36} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-h2 text-brand-navy mb-6 heading-secondary">
                      {service.title}
                    </h2>

                    {/* Outcome */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy/60 mb-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        O QUE ENTREGAMOS
                      </div>
                      <p className="text-premium">
                        {service.outcome}
                      </p>
                    </div>

                    {/* When to engage */}
                    <div className="bg-gray-50/50 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-lightBlue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <div className="text-sm font-semibold text-brand-navy/70 mb-2">
                            QUANDO CONTRATAR
                          </div>
                          <p className="text-brand-navy/70 text-[15px] leading-relaxed">
                            {service.when}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bold gradient connector line (except for last item) */}
              {index < services.length - 1 && (
                <div className="flex justify-center my-12">
                  <div className="w-1 h-16 bg-gradient-to-b from-brand-lightBlue via-brand-navy to-transparent rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust reinforcement with bold gradient */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="relative group">
            {/* Bold gradient glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition"></div>

            <div className="relative card-premium text-center bg-gradient-to-br from-brand-navy via-brand-navy to-brand-lightBlue/90 border-0 overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6 shadow-xl border border-white/20">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Atuamos com inteligência, precisão e responsabilidade.
                </h3>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Cada serviço é personalizado para atender suas necessidades específicas com total discrição e excelência estratégica.
                </p>
                <a href="/contato" className="inline-flex items-center gap-2 bg-white text-brand-navy px-10 py-4 rounded-lg font-bold hover:shadow-2xl transition-all hover:scale-105">
                  Fale com a Wise Media
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
