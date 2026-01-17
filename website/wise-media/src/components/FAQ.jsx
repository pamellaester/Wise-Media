import { useState } from "react";
import Icon from "./Icon";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como funciona o processo de contratação?",
      answer: "O processo inicia com uma conversa inicial sigilosa para entendermos suas necessidades específicas. Em seguida, realizamos uma análise estratégica e apresentamos um plano personalizado com cronograma e investimento. Após aprovação, iniciamos a execução com acompanhamento constante."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "O tempo varia conforme o tipo de serviço e os objetivos. Em gestão de crise, atuamos imediatamente. Em assessoria de imprensa e construção de reputação, os primeiros resultados aparecem em 30-60 dias, com consolidação em 3-6 meses. Sempre priorizamos resultados sustentáveis."
    },
    {
      question: "A Wise Media atende em quais regiões?",
      answer: "Atuamos nacionalmente no Brasil e temos experiência internacional, especialmente em processos de vistos para EUA e Europa. Trabalhamos remotamente com eficiência e mantemos reuniões presenciais quando estrategicamente relevante."
    },
    {
      question: "Como é garantida a confidencialidade?",
      answer: "Confidencialidade é um pilar fundamental. Todas as informações e estratégias são protegidas por acordos de sigilo. Atuamos com discrição absoluta e, quando necessário, alguns clientes optam por não divulgar publicamente nossa parceria."
    },
    {
      question: "Qual o investimento necessário?",
      answer: "O investimento varia conforme a complexidade, abrangência e duração do projeto. Trabalhamos com modelos de retainer mensal ou projetos pontuais. Durante a conversa inicial, apresentamos um orçamento transparente e adequado à realidade do cliente."
    },
    {
      question: "A Wise Media trabalha com gestão de redes sociais?",
      answer: "Nosso foco é comunicação estratégica e gestão de reputação. Trabalhamos com assessoria de imprensa, gestão de crise e estratégia de presença pública. Podemos indicar parceiros especializados em social media quando necessário."
    },
    {
      question: "Como funciona a Assessoria para Vistos?",
      answer: "Construímos narrativa pública profissional através de assessoria de imprensa, publicações estratégicas e documentação de relevância. Ideal para processos de O-1, EB2-NIW e outros vistos que exigem comprovação de destaque extraordinário na área de atuação."
    },
    {
      question: "O que diferencia a Wise Media de outras agências?",
      answer: "Atuamos com inteligência estratégica, precisão e responsabilidade institucional. Não fazemos promessas vazias nem trabalhamos com métodos questionáveis. Nosso diferencial é a abordagem analítica, ética e focada em resultados reais e sustentáveis."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Diagonal gradient overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-navy/5 to-transparent" aria-hidden="true" />

      <div className="container-content section-spacing relative">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="accent-line-bold mx-auto mb-6" aria-hidden="true" />
          <h2 id="faq-heading" className="text-h2 text-brand-navy mb-6 heading-secondary">
            Perguntas Frequentes
          </h2>
          <p className="text-premium max-w-2xl mx-auto">
            Respostas claras para dúvidas comuns sobre nossos serviços e processos.
          </p>
        </header>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4" role="list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-premium relative overflow-hidden group cursor-pointer"
              onClick={() => toggleFAQ(index)}
              onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(index)}
              role="listitem"
              tabIndex={0}
              aria-expanded={openIndex === index}
            >
              {/* Left gradient accent when open */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-lightBlue to-brand-navy transition-opacity ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-brand-navy mb-2 pr-8">
                    {faq.question}
                  </h3>

                  {openIndex === index && (
                    <p className="text-brand-navy/70 leading-relaxed text-[15px] mt-4 animate-fadeIn">
                      {faq.answer}
                    </p>
                  )}
                </div>

                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <Icon name="ChevronDown" size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-brand-navy/60 mb-6">
            Ainda tem dúvidas? Estamos prontos para uma conversa.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white px-10 py-4 rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105"
          >
            Fale com a Wise Media
            <Icon name="ArrowRight" size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
