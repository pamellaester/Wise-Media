import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = t('testimonials.items', { returnObjects: true });

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-lightBlue/20" aria-labelledby="testimonials-heading">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="container-content section-spacing relative">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-white/90 text-sm font-semibold tracking-wide">{t('testimonials.tag')}</span>
          </div>
          <h2 id="testimonials-heading" className="text-h2 text-white mb-6 heading-secondary">
            {t('testimonials.title')}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="relative group">
              {/* Gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-lightBlue/30 to-white/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" aria-hidden="true" />

              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" aria-hidden="true">
                  <Icon name="Quote" size={20} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-brand-lightBlue fill-brand-lightBlue" aria-hidden="true" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/90 leading-relaxed mb-6 flex-1 text-[15px]">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <footer className="border-t border-white/10 pt-6">
                  <cite className="not-italic">
                    <div className="font-semibold text-white text-sm mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-white/60 text-xs">
                      {testimonial.role}
                    </div>
                    <div className="text-white/40 text-xs mt-1">
                      {testimonial.rating}
                    </div>
                  </cite>
                </footer>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-white/70 text-sm mb-6">
            {t('testimonials.cta')}
          </p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 bg-white text-brand-navy px-10 py-4 rounded-lg font-bold hover:shadow-2xl transition-all hover:scale-105"
          >
            {t('testimonials.ctaButton')}
            <Icon name="ArrowRight" size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
