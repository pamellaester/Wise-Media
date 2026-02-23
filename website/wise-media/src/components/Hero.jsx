import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import rosyPhoto from "../assets/wisemediaphotos/rosy-bluephoto.jpeg";
import deboraPhoto from "../assets/wisemediaphotos/debora-blue-photo.jpeg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden" aria-labelledby="hero-heading">

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

          {/* Team avatars - premium size for better visibility */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-3">
              <img
                src={rosyPhoto}
                alt=""
                className="w-14 h-14 rounded-full object-cover border-[3px] border-white/80 shadow-xl ring-2 ring-white/20"
                style={{ objectPosition: '50% 15%' }}
              />
              <img
                src={deboraPhoto}
                alt=""
                className="w-14 h-14 rounded-full object-cover border-[3px] border-white/80 shadow-xl ring-2 ring-white/20"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>
            <p className="text-white/80 text-sm font-medium">{t('hero.teamNote')}</p>
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

          {/* Trust indicators - premium balanced grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 group hover:bg-white/15 hover:border-white/25 transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center ring-1 ring-white/20 group-hover:ring-white/30 transition-all">
                  <Icon name="Users" size={20} className="text-white" />
                </div>
                <span className="text-2xl lg:text-3xl font-bold text-white">{t('hero.metrics.clientsValue')}</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">{t('hero.metrics.clients')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 group hover:bg-white/15 hover:border-white/25 transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center ring-1 ring-white/20 group-hover:ring-white/30 transition-all">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-2xl lg:text-3xl font-bold text-white">{t('hero.metrics.responseValue')}</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">{t('hero.metrics.response')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 group hover:bg-white/15 hover:border-white/25 transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center ring-1 ring-white/20 group-hover:ring-white/30 transition-all">
                  <Icon name="ShieldCheck" size={20} className="text-white" />
                </div>
                <span className="text-2xl lg:text-3xl font-bold text-white">{t('hero.metrics.confidentialityValue')}</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">{t('hero.metrics.confidentiality')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
