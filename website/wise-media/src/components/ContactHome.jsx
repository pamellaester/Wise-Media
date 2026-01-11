import Icon from "./Icon";

export default function ContactHome() {
  return (
    <section id="contact" className="relative w-full overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '48px 48px'
      }}></div>

      <div className="container-content section-spacing relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="accent-line-bold mx-auto mb-6"></div>
            <h2 className="text-h2 text-white mb-6 heading-secondary">
              Comunicação começa com confiança.
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Entre em contato para discutir como podemos apoiar sua estratégia com inteligência e discrição.
            </p>
          </div>

          {/* Premium CTA Card with bold gradient */}
          <div className="relative max-w-2xl mx-auto group">
            {/* Bold gradient glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition"></div>

            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
              {/* Bold top accent */}
              <div className="h-2 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

              <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy mb-8 shadow-xl">
                  <Icon name="Mail" size={48} className="text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                  Pronto para fortalecer sua reputação?
                </h3>
                <p className="text-brand-navy/70 mb-10">
                  Nossa equipe está pronta para uma conversa estratégica sobre seus desafios de comunicação.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <a
                    href="https://wa.me/5511990094457"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white px-10 py-4 rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                  >
                    Iniciar Conversa
                    <Icon name="ArrowRight" size={20} className="text-white" />
                  </a>
                  <a
                    href="mailto:wisemediasolucoes@gmail.com"
                    className="bg-white border-2 border-brand-navy text-brand-navy px-10 py-4 rounded-lg font-semibold hover:bg-brand-navy hover:text-white transition-all"
                  >
                    Enviar Email
                  </a>
                </div>

                {/* Contact info with gradient accents */}
                <div className="pt-10 border-t border-brand-navy/10">
                  <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
                    <a
                      href="mailto:wisemediasolucoes@gmail.com"
                      className="text-brand-navy/70 hover:text-brand-lightBlue transition-colors font-medium"
                    >
                      wisemediasolucoes@gmail.com
                    </a>
                    <span className="hidden sm:block text-brand-navy/30">•</span>
                    <a
                      href="https://instagram.com/wisemediasolucoes11"
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-navy/70 hover:text-brand-lightBlue transition-colors font-medium"
                    >
                      @wisemediasolucoes11
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
