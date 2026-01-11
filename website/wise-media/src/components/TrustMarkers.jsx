import Icon from "./Icon";

export default function TrustMarkers() {
  const stats = [
    {
      number: "50+",
      label: "Clientes Atendidos",
      iconName: "users"
    },
    {
      number: "5+",
      label: "Anos de Experiência",
      iconName: "award"
    },
    {
      number: "98%",
      label: "Taxa de Satisfação",
      iconName: "star"
    },
    {
      number: "24h",
      label: "Tempo de Resposta",
      iconName: "lightning"
    }
  ];

  // Placeholder for client logos - replace with actual client logos
  const clientLogos = [
    { id: 1, name: "Cliente 1", placeholder: true },
    { id: 2, name: "Cliente 2", placeholder: true },
    { id: 3, name: "Cliente 3", placeholder: true },
    { id: 4, name: "Cliente 4", placeholder: true },
    { id: 5, name: "Cliente 5", placeholder: true },
    { id: 6, name: "Cliente 6", placeholder: true },
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Icon name={stat.iconName} className="w-8 h-8 text-white" />
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

        {/* Client Logos Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-brand-navy/60 mb-3">
              Confiança de Profissionais e Marcas
            </h3>
            <p className="text-brand-navy/50 text-sm">
              Atuação discreta com clientes que valorizam excelência e responsabilidade
            </p>
          </div>

          {/* Logo Grid - Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client) => (
              <div
                key={client.id}
                className="group relative aspect-video flex items-center justify-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-brand-navy/5 hover:border-brand-lightBlue/30 transition-all hover:shadow-lg"
              >
                {client.placeholder && (
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-lightBlue/10 to-brand-navy/10 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <Icon name="users" className="w-6 h-6 text-brand-navy/30" />
                    </div>
                    <div className="text-xs text-brand-navy/20 font-medium">Logo</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Note about confidentiality */}
          <div className="mt-12 text-center">
            <p className="text-brand-navy/40 text-xs italic max-w-2xl mx-auto">
              Por razões de confidencialidade, alguns clientes optam por não divulgar publicamente nossa parceria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
