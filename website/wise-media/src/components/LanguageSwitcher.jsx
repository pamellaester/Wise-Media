import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher({ scrolled = false }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2) || 'pt';

  const toggleLanguage = () => {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-xs font-medium transition-colors duration-300"
      aria-label={currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <span className={`transition-colors duration-300 ${
        currentLang === 'pt'
          ? scrolled ? 'text-brand-navy' : 'text-white'
          : scrolled ? 'text-brand-navy/40' : 'text-white/40'
      }`}>
        PT
      </span>
      <span className={`transition-colors duration-300 ${
        scrolled ? 'text-brand-navy/30' : 'text-white/30'
      }`}>
        /
      </span>
      <span className={`transition-colors duration-300 ${
        currentLang === 'en'
          ? scrolled ? 'text-brand-navy' : 'text-white'
          : scrolled ? 'text-brand-navy/40' : 'text-white/40'
      }`}>
        EN
      </span>
    </button>
  );
}
