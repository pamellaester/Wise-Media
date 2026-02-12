import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import rosyPhoto from "../assets/wisemediaphotos/rosy-bluephoto.jpeg";
import deboraPhoto from "../assets/wisemediaphotos/debora-blue-photo.jpeg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden" aria-labelledby="hero-heading">
      {/* Bold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-lightBlue via-brand-lightBlue/90 to-brand-navy" aria-hidden="true" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-navy opacity-20 transform skew-x-12 translate-x-1/4" aria-hidden="true" />

      <div className="container-content relative py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Bold accent line */}
          <div className="accent-line-bold mb-6" aria-hidden="true" />

          <h1 id="hero-heading" className="text-h1 text-white mb-6 heading-primary drop-shadow-lg">
            {t('hero.title')}
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Team avatars - larger for better visibility */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex -space-x-2">
              <img
                src={rosyPhoto}
                alt=""
                className="w-11 h-11 rounded-full object-cover border-2 border-white/70 shadow-lg"
                style={{ objectPosition: '50% 15%' }}
              />
              <img
                src={deboraPhoto}
                alt=""
                className="w-11 h-11 rounded-full object-cover border-2 border-white/70 shadow-lg"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>
            <p className="text-white/70 text-sm">{t('hero.teamNote')}</p>
          </div>

          <div className="flex flex-wrap gap-3 items-center mb-12 md:mb-16">
            <a href="#contact" className="bg-brand-accent text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:shadow-xl hover:shadow-brand-accent/25 transition-all hover:translate-y-[-1px] inline-flex items-center gap-2">
              {t('hero.cta')}
              <Icon name="ArrowRight" size={18} aria-hidden="true" />
            </a>
            <a href="/servicos" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3.5 rounded-lg font-medium text-sm hover:bg-white/20 transition-all inline-flex items-center gap-2">
              {t('hero.ctaSecondary')}
              <Icon name="Sparkles" size={16} className="text-white/70" aria-hidden="true" />
            </a>
          </div>

          {/* Trust indicators - clean, balanced grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15 group hover:bg-white/15 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center ring-1 ring-white/20">
                  <Icon name="Users" size={18} className="text-white" />
                </div>
                <span className="text-2xl font-bold text-white">{t('hero.metrics.clientsValue')}</span>
              </div>
              <p className="text-sm text-white/70">{t('hero.metrics.clients')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15 group hover:bg-white/15 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center ring-1 ring-white/20">
                  <Icon name="Zap" size={18} className="text-white" />
                </div>
                <span className="text-2xl font-bold text-white">{t('hero.metrics.responseValue')}</span>
              </div>
              <p className="text-sm text-white/70">{t('hero.metrics.response')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15 group hover:bg-white/15 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center ring-1 ring-white/20">
                  <Icon name="ShieldCheck" size={18} className="text-white" />
                </div>
                <span className="text-2xl font-bold text-white">{t('hero.metrics.confidentialityValue')}</span>
              </div>
              <p className="text-sm text-white/70">{t('hero.metrics.confidentiality')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
