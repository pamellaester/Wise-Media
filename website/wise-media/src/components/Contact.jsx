import Icon from "./Icon";

export default function Contact() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Bold gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

      {/* Diagonal gradient overlay */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-bl from-brand-lightBlue/5 to-transparent"></div>

      <div className="container-content section-spacing relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="accent-line-bold mx-auto mb-8"></div>
            <h1 className="text-h1 text-white mb-8 heading-primary">
              Comunicação começa com confiança.
            </h1>
            <p className="text-white max-w-2xl mx-auto">
              Entre em contato para discutir como podemos apoiar sua estratégia com inteligência, discrição e responsabilidade.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="mb-20">
            <h2 className="text-h2 text-white mb-12 heading-secondary text-center">
              Formas de Contato
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-premium text-center group relative overflow-hidden">
                {/* Bold left gradient accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy mb-6 shadow-lg">
                  <Icon name="Mail" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Email</h3>
                <p className="text-sm text-brand-navy/60 mb-4">Preferencial para discrição</p>
                <a
                  href="mailto:wisemediasolucoes@gmail.com"
                  className="text-brand-lightBlue hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  wisemediasolucoes@gmail.com
                </a>
              </div>

              <div className="card-premium text-center group relative overflow-hidden">
                {/* Bold left gradient accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-navy to-brand-lightBlue opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-navy to-brand-lightBlue mb-6 shadow-lg">
                  <Icon name="MessageCircle" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">WhatsApp</h3>
                <p className="text-sm text-brand-navy/60 mb-4">Resposta em até 24 horas</p>
                <a
                  href="https://wa.me/5511990094457"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-lightBlue hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  (11) 99009-4457
                </a>
              </div>

              <div className="card-premium text-center group relative overflow-hidden">
                {/* Bold left gradient accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy mb-6 shadow-lg">
                  <Icon name="Instagram" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Instagram</h3>
                <p className="text-sm text-brand-navy/60 mb-4">Institucional</p>
                <a
                  href="https://instagram.com/wisemediasolucoes11"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-lightBlue hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  @wisemediasolucoes11
                </a>
              </div>
            </div>
          </div>

          {/* Process with bold gradient */}
          <div className="mb-20 relative overflow-hidden bg-gradient-to-br from-brand-lightBlue/5 via-white to-brand-navy/5 rounded-2xl p-12">
            {/* Bold top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

            <h2 className="text-h2 text-brand-navy mb-12 heading-secondary text-center relative">
              Como Funciona
            </h2>

            <div className="space-y-10 max-w-3xl mx-auto relative">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Conversa Inicial</h3>
                  <p className="text-brand-navy/70 leading-relaxed">
                    Entendemos sua situação, objetivos e desafios de comunicação com confidencialidade absoluta.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-navy to-brand-lightBlue flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Análise Estratégica</h3>
                  <p className="text-brand-navy/70 leading-relaxed">
                    Avaliamos cenários, riscos e oportunidades com precisão analítica e visão de longo prazo.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Plano Personalizado</h3>
                  <p className="text-brand-navy/70 leading-relaxed">
                    Apresentamos estratégia clara, cronograma realista e investimento necessário para resultados consistentes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Discretion Assurance & CTA with gradient */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-brand-navy/60 text-sm mb-8">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center flex-shrink-0">
                <Icon name="Lock" size={12} className="text-white" />
              </div>
              <span className="text-white">Todas as conversas são tratadas com confidencialidade e responsabilidade institucional.</span>
            </div>
            <div>
              <a
                href="mailto:wisemediasolucoes@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white px-10 py-4 rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                Iniciar Conversa
                <Icon name="ArrowRight" size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
