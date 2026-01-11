import { Link } from "react-router";
import { useState } from "react";
import Icon from "./Icon";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/servicos", label: "Serviços" },
    { to: "/sobre", label: "Sobre" },
  ];

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm relative">
      {/* Bold gradient bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-brand-navy to-brand-lightBlue"></div>

      <div className="container-content">
        <div className="flex items-center justify-between" style={{ height: '80px' }}>
          {/* Logo with gradient */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-brand-navy to-brand-lightBlue bg-clip-text text-transparent">
                  Wise Media
                </div>
                <div className="text-xs text-brand-navy/50 -mt-1">
                  Comunicação Estratégica
                </div>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[15px] text-brand-navy/70 hover:text-brand-lightBlue transition-colors font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-lightBlue to-brand-navy group-hover:w-full transition-all"></span>
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <Link
              to="/contato"
              className="hidden md:inline-flex bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white text-sm py-3 px-8 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Contato
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-brand-navy hover:text-brand-lightBlue transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <Icon name="close" className="w-6 h-6" />
              ) : (
                <Icon name="menu" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-t border-brand-navy/10 shadow-xl">
          <div className="container-content py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-brand-navy hover:text-brand-lightBlue transition-colors font-medium py-3 px-4 rounded-lg hover:bg-brand-lightBlue/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white text-center py-3 px-4 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
