import Icon from "./Icon";

export default function Testimonials() {
  // Placeholder testimonials - replace with real client testimonials
  const testimonials = [
    {
      id: 1,
      quote: "A Wise Media transformou nossa presença na mídia. Profissionalismo exemplar e resultados consistentes que fortaleceram nossa credibilidade no mercado.",
      author: "Carlos Mendes",
      role: "CEO, Tech Solutions",
      rating: 5
    },
    {
      id: 2,
      quote: "Assessoria estratégica de altíssimo nível. A equipe entende profundamente os desafios de comunicação corporativa e atua com inteligência e discrição.",
      author: "Ana Paula Rodrigues",
      role: "Diretora de Comunicação",
      rating: 5
    },
    {
      id: 3,
      quote: "Gestão de crise impecável. Quando enfrentamos uma situação delicada, a Wise Media nos orientou com precisão e preservou nossa reputação institucional.",
      author: "Roberto Silva",
      role: "Fundador, Startup de Tecnologia",
      rating: 5
    }
  ];

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-lightBlue/20">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }}></div>

      <div className="container-content section-spacing relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-white/90 text-sm font-semibold">DEPOIMENTOS</span>
          </div>
          <h2 className="text-h2 text-white mb-6 heading-secondary">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Confiança construída através de resultados reais e parcerias estratégicas de longo prazo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative group">
              {/* Gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-lightBlue/30 to-white/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition"></div>

              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <Icon name="quote" className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="star" className="w-5 h-5 text-brand-lightBlue" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/90 leading-relaxed mb-6 flex-1 text-[15px]">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-white/10 pt-6">
                  <div className="font-semibold text-white text-sm mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-white/60 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-white/70 text-sm mb-6">
            Seja o próximo a construir autoridade com comunicação estratégica.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 bg-white text-brand-navy px-10 py-4 rounded-lg font-bold hover:shadow-2xl transition-all hover:scale-105"
          >
            Fale com a Wise Media
            <Icon name="arrowRight" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
