import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);

  // Handle scroll effect and detect background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect if we're past the hero section (typically dark)
      // Hero sections are usually around 600-800px tall
      const heroHeight = window.innerHeight * 0.85;
      setIsDarkSection(window.scrollY < heroHeight);
    };

    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/servicos", labelKey: "nav.services" },
    { to: "/sobre", labelKey: "nav.about" },
    { to: "/contato", labelKey: "nav.contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "py-2" : "py-4"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex justify-between items-center rounded-2xl px-5 sm:px-6 py-3 transition-all duration-500 ${
            isDarkSection
              ? scrolled
                ? "bg-brand-navy shadow-2xl shadow-black/25 border border-white/10"
                : "bg-brand-navy/90 backdrop-blur-sm shadow-xl shadow-black/15 border border-white/5"
              : scrolled
                ? "bg-white shadow-2xl shadow-brand-navy/15 border border-brand-navy/10"
                : "bg-white/95 backdrop-blur-sm shadow-xl shadow-brand-navy/10 border border-brand-navy/5"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
              isDarkSection ? "bg-white/10" : "bg-brand-navy/10"
            } ${scrolled ? "w-9 h-9" : "w-10 h-10"}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/bluelogo.svg"
                  alt="Wise Media"
                  className={`object-contain transition-all duration-300 ${
                    isDarkSection ? "brightness-0 invert" : ""
                  } ${scrolled ? "w-5 h-5" : "w-6 h-6"}`}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-500 ${
                isDarkSection ? "text-white" : "text-brand-navy"
              }`}>
                Wise Media
              </span>
              <span className={`text-[10px] sm:text-xs font-medium tracking-wide uppercase -mt-0.5 transition-colors duration-500 ${
                isDarkSection ? "text-white/50" : "text-brand-navy/50"
              }`}>
                {t('nav.tagline')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isDarkSection
                    ? isActive(link.to)
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                    : isActive(link.to)
                      ? "text-brand-navy bg-brand-navy/10"
                      : "text-brand-navy/70 hover:text-brand-navy hover:bg-brand-navy/5"
                }`}
              >
                {t(link.labelKey)}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-lightBlue shadow-lg shadow-brand-lightBlue/50" />
                )}
              </Link>
            ))}

            {/* Divider */}
            <div className={`w-px h-5 mx-3 transition-colors duration-500 ${
              isDarkSection ? "bg-white/20" : "bg-brand-navy/20"
            }`} />

            {/* Language Switcher */}
            <LanguageSwitcher isDark={isDarkSection} />

            {/* CTA Button */}
            <Link
              to="/contato"
              className={`ml-3 px-5 py-2 text-sm font-semibold rounded-lg hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 ${
                isDarkSection
                  ? "bg-white text-brand-navy hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
                  : "bg-brand-navy text-white hover:bg-brand-navy/90 hover:shadow-lg hover:shadow-brand-navy/20"
              }`}
            >
              <Icon name="Send" size={14} aria-hidden="true" />
              {t('hero.cta')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher isDark={isDarkSection} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
                isDarkSection
                  ? "bg-white/10 hover:bg-white/20"
                  : "bg-brand-navy/10 hover:bg-brand-navy/20"
              }`}
              aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                  isDarkSection ? "bg-white" : "bg-brand-navy"
                } ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isDarkSection ? "bg-white" : "bg-brand-navy"
                } ${mobileMenuOpen ? "opacity-0 scale-0" : ""}`} />
                <span className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                  isDarkSection ? "bg-white" : "bg-brand-navy"
                } ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 px-4 sm:px-6 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mt-2 bg-brand-navy rounded-2xl shadow-2xl shadow-black/30 border border-white/10 overflow-hidden">
          <div className="p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive(link.to)
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {t(link.labelKey)}
                {isActive(link.to) && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-lightBlue shadow-lg shadow-brand-lightBlue/50" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="p-4 pt-2 border-t border-white/10">
            <Link
              to="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-brand-navy font-semibold rounded-xl hover:bg-white/90 transition-all duration-300"
            >
              <Icon name="Send" size={16} aria-hidden="true" />
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm -z-10"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
