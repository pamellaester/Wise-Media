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
        <header className="text-center mb-16">
          <div className="accent-line-bold mx-auto mb-6" aria-hidden="true" />
          <h2 id="faq-heading" className="text-h2 text-brand-navy mb-6 heading-secondary">
            {t('faq.title')}
          </h2>
          <p className="text-premium max-w-2xl mx-auto">
            {t('faq.description')}
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
            {t('faq.cta')}
          </p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white px-10 py-4 rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105"
          >
            {t('faq.ctaButton')}
            <Icon name="ArrowRight" size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
