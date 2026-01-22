import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher({ isDark = true }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2) || 'pt';

  const toggleLanguage = () => {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`relative flex items-center gap-0.5 p-1 rounded-lg transition-all duration-300 text-xs font-semibold ${
        isDark
          ? "bg-white/10 hover:bg-white/20"
          : "bg-brand-navy/10 hover:bg-brand-navy/20"
      }`}
      aria-label={currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <span className={`px-2 py-1 rounded-md transition-all duration-300 ${
        currentLang === 'pt'
          ? isDark
            ? 'bg-white text-brand-navy shadow-sm'
            : 'bg-brand-navy text-white shadow-sm'
          : isDark
            ? 'text-white/60 hover:text-white/80'
            : 'text-brand-navy/60 hover:text-brand-navy/80'
      }`}>
        PT
      </span>
      <span className={`px-2 py-1 rounded-md transition-all duration-300 ${
        currentLang === 'en'
          ? isDark
            ? 'bg-white text-brand-navy shadow-sm'
            : 'bg-brand-navy text-white shadow-sm'
          : isDark
            ? 'text-white/60 hover:text-white/80'
            : 'text-brand-navy/60 hover:text-brand-navy/80'
      }`}>
        EN
      </span>
    </button>
  );
}
