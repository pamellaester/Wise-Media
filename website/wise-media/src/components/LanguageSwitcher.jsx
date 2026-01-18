import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-sm font-medium"
      aria-label={currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <span className={`transition-opacity ${currentLang === 'pt' ? 'opacity-100' : 'opacity-50'}`}>
        PT
      </span>
      <span className="text-white/40">|</span>
      <span className={`transition-opacity ${currentLang === 'en' ? 'opacity-100' : 'opacity-50'}`}>
        EN
      </span>
    </button>
  );
}
