import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-brand-navy relative overflow-hidden" role="contentinfo">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-white to-brand-lightBlue" aria-hidden="true" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(65, 194, 243, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      <div className="container-content relative" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center shadow-lg">
                  <img
                    src="/bluelogo.svg"
                    alt="Wise Media Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Wise Media</div>
                  <div className="text-xs text-brand-lightBlue/70">{t('footer.tagline')}</div>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed text-sm max-w-md">
                {t('footer.description')}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://instagram.com/wisemediasolucoes11"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-lightBlue/20 to-white/5 hover:from-brand-lightBlue/40 hover:to-white/10 flex items-center justify-center transition-all hover:scale-110"
                  aria-label={t('footer.ariaLabels.instagram')}
                >
                  <Icon name="Instagram" size={20} className="text-white" />
                </a>
                <a
                  href="mailto:wisemediasolucoes@gmail.com"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-lightBlue/20 to-white/5 hover:from-brand-lightBlue/40 hover:to-white/10 flex items-center justify-center transition-all hover:scale-110"
                  aria-label={t('footer.ariaLabels.email')}
                >
                  <Icon name="Mail" size={20} className="text-white" />
                </a>
                <a
                  href="https://wa.me/5511922250182"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-lightBlue/20 to-white/5 hover:from-brand-lightBlue/40 hover:to-white/10 flex items-center justify-center transition-all hover:scale-110"
                  aria-label={t('footer.ariaLabels.whatsapp')}
                >
                  <Icon name="MessageCircle" size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-6">{t('footer.navigation')}</h4>
              <div className="space-y-3 text-sm">
                <Link to="/" className="block text-white/70 hover:text-white transition-colors">
                  {t('common.home')}
                </Link>
                <Link to="/servicos" className="block text-white/70 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
                <Link to="/sobre" className="block text-white/70 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
                <Link to="/contato" className="block text-white/70 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6">{t('footer.contactTitle')}</h4>
              <div className="space-y-4 text-sm">
                <a
                  href="mailto:wisemediasolucoes@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-brand-lightBlue transition-colors"
                >
                  <Icon name="Mail" size={16} className="flex-shrink-0" aria-hidden="true" />
                  <span>wisemediasolucoes@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/5511922250182"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-brand-lightBlue transition-colors"
                >
                  <Icon name="Phone" size={16} className="flex-shrink-0" aria-hidden="true" />
                  <span>(11) 92225-0182</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
              <div>
                © {new Date().getFullYear()} Wise Media. {t('footer.copyright')}
              </div>
              <div>
                {t('footer.bottomTagline')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
