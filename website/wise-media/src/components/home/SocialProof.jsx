import { useTranslation } from "react-i18next";
import Icon from "../Icon";

export default function SocialProof() {
  const { t } = useTranslation();

  const testimonials = t('socialProof.items', { returnObjects: true });

  return (
    <section className="w-full bg-white relative overflow-hidden" aria-labelledby="social-proof-heading">
      {/* Diagonal gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-navy/5 to-transparent" aria-hidden="true" />

      <div className="container-content section-spacing relative">
        <header className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1.5 rounded-full bg-brand-navy/10 border border-brand-navy/20 mb-5">
            <span className="text-brand-navy/80 text-xs font-semibold tracking-wider uppercase">
              {t('socialProof.tag')}
            </span>
          </span>

          <h2 id="social-proof-heading" className="text-h2 text-brand-navy mb-4 heading-secondary">
            {t('socialProof.title')}
          </h2>

          <p className="text-brand-navy/70 text-lg leading-relaxed">
            {t('socialProof.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="relative group">
              <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-brand-navy/10 shadow-sm h-full hover:shadow-xl hover:border-brand-lightBlue/30 transition-all duration-300">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center mb-5 group-hover:bg-brand-lightBlue/10 transition-colors">
                  <Icon name="Quote" size={18} className="text-brand-navy/40" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-brand-accent fill-brand-accent" aria-hidden="true" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-brand-navy/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <footer className="border-t border-brand-navy/10 pt-5">
                  <cite className="not-italic">
                    <div className="font-semibold text-brand-navy text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-brand-navy/50 text-xs mt-1">
                      {testimonial.role}
                    </div>
                  </cite>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
