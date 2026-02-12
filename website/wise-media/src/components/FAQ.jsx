import { useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = t('faq.items', { returnObjects: true });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Diagonal gradient overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-navy/5 to-transparent" aria-hidden="true" />

      <div className="container-content section-spacing relative">
        {/* Header */}
        <header className="text-center mb-10 md:mb-12">
          <div className="accent-line-bold mx-auto mb-5" aria-hidden="true" />
          <h2 id="faq-heading" className="text-h2 text-brand-navy mb-4 heading-secondary">
            {t('faq.title')}
          </h2>
          <p className="text-brand-navy/70 max-w-xl mx-auto text-base leading-relaxed">
            {t('faq.description')}
          </p>
        </header>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3" role="list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-compact relative overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => toggleFAQ(index)}
              onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(index)}
              role="listitem"
              tabIndex={0}
              aria-expanded={openIndex === index}
            >
              {/* Left accent when open */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-lightBlue to-brand-navy transition-opacity ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-brand-navy pr-4">
                    {faq.question}
                  </h3>

                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <p className="text-brand-navy/65 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-full bg-brand-navy/10 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-brand-navy' : ''}`}
                  aria-hidden="true"
                >
                  <Icon name="ChevronDown" size={14} className={openIndex === index ? 'text-white' : 'text-brand-navy/60'} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-brand-navy/60 mb-5 text-sm">
            {t('faq.cta')}
          </p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-brand-accent/25 transition-all hover:translate-y-[-1px]"
          >
            {t('faq.ctaButton')}
            <Icon name="ArrowRight" size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
