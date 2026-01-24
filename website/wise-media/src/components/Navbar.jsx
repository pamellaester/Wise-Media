import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", labelKey: "nav.home" },
    { to: "/servicos", labelKey: "nav.services" },
    { to: "/artigos", labelKey: "nav.articles" },
    { to: "/sobre", labelKey: "nav.about" },
    { to: "/contato", labelKey: "nav.contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/bluelogo.svg"
              alt="Wise Media"
              className="w-8 h-8 object-contain"
            />
            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-brand-navy" : "text-white"
            }`}>
              Wise Media
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? isActive(link.to)
                      ? "text-brand-navy"
                      : "text-brand-navy/60 hover:text-brand-navy"
                    : isActive(link.to)
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-brand-lightBlue after:transition-all after:duration-300 ${
                  isActive(link.to) ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher scrolled={scrolled} />
            <Link
              to="/contato"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-brand-accent text-white hover:bg-brand-accent/90 shadow-md shadow-brand-accent/20"
                  : "bg-white text-brand-navy hover:bg-white/90"
              }`}
            >
              {t('hero.cta')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher scrolled={scrolled} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center"
              aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-5 h-3.5 flex flex-col justify-between">
                <span className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${
                  scrolled ? "bg-brand-navy" : "bg-white"
                } ${mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
                <span className={`block h-[2px] rounded-full transition-all duration-300 ${
                  scrolled ? "bg-brand-navy" : "bg-white"
                } ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${
                  scrolled ? "bg-brand-navy" : "bg-white"
                } ${mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? "text-brand-navy bg-brand-navy/5"
                  : "text-brand-navy/70 hover:text-brand-navy hover:bg-gray-50"
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-2.5 bg-brand-accent text-white text-sm font-medium rounded-lg"
            >
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
