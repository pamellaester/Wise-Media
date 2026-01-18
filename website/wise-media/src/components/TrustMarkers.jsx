import Icon from "./Icon";

export default function TrustMarkers() {
  const stats = [
    {
      number: "50+",
      label: "Clientes Atendidos",
      iconName: "Users"
    },
    {
      number: "5+",
      label: "Anos de Experiência",
      iconName: "Trophy"
    },
    {
      number: "98%",
      label: "Taxa de Satisfação",
      iconName: "ThumbsUp"
    },
    {
      number: "24h",
      label: "Tempo de Resposta",
      iconName: "Zap"
    }
  ];

  // Client sectors with representative icons
  const clientSectors = [
    { id: 1, name: "Tecnologia", iconName: "Cpu", description: "Tech & Startups" },
    { id: 2, name: "Finanças", iconName: "Landmark", description: "Finance & Banking" },
    { id: 3, name: "Saúde", iconName: "HeartPulse", description: "Healthcare" },
    { id: 4, name: "Jurídico", iconName: "Scale", description: "Legal & Law" },
    { id: 5, name: "Entretenimento", iconName: "Clapperboard", description: "Media & Entertainment" },
    { id: 6, name: "Executivos", iconName: "UserCircle", description: "C-Level Executives" },
  ];

  return (
    <section className="w-full bg-white relative overflow-hidden">
      {/* Diagonal gradient overlay */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-brand-lightBlue/5 to-transparent"></div>

      <div className="container-content section-spacing relative">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy mb-4 shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                <Icon name={stat.iconName} size={28} className="text-white" />
              </div>
              <div className="text-4xl font-bold text-brand-navy mb-2 bg-gradient-to-r from-brand-navy to-brand-lightBlue bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-brand-navy/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider with gradient */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="h-px bg-gradient-to-r from-transparent via-brand-navy/20 to-transparent"></div>
        </div>

        {/* Client Sectors Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-brand-navy/60 mb-3">
              Setores que Atendemos
            </h3>
            <p className="text-brand-navy/50 text-sm">
              Experiência em comunicação estratégica para diversos segmentos
            </p>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clientSectors.map((sector) => (
              <div
                key={sector.id}
                className="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-brand-navy/5 hover:border-brand-lightBlue/30 transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-lightBlue/20 to-brand-navy/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:from-brand-lightBlue/30 group-hover:to-brand-navy/20 transition-all" aria-hidden="true">
                  <Icon name={sector.iconName} size={26} className="text-brand-navy/60 group-hover:text-brand-navy transition-colors" />
                </div>
                <div className="text-sm text-brand-navy/70 font-medium text-center">
                  {sector.name}
                </div>
              </div>
            ))}
          </div>

          {/* Note about confidentiality */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-brand-navy/40 text-xs italic">
              <Icon name="ShieldCheck" size={14} aria-hidden="true" />
              <span>Atuação discreta com clientes que valorizam confidencialidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
