import { Link } from "react-router";
import { useState, useEffect } from "react";
import Icon from "./Icon";

export default function Navbar({ background = "dark" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState(
    background === "light" ? "text-brand-navy" : "text-white"
  );

  // If background prop changes dynamically, update color
  useEffect(() => {
    setTextColor(background === "light" ? "text-brand-navy" : "text-white");
  }, [background]);

  const navLinks = [
    { to: "/servicos", label: "Serviços" },
    { to: "/sobre", label: "Sobre" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 transition-colors">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex justify-between items-center backdrop-blur-xl rounded-3xl shadow-xl px-6 py-3 transition-colors ${textColor}`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-lightBlue to-brand-navy flex items-center justify-center transition-transform hover:scale-110 shadow-lg">
              <img
                src="/bluelogo.svg"
                alt="Wise Media Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-navy to-brand-lightBlue`}
              >
                Wise Media
              </span>
              <span className={`text-xs md:text-sm ${textColor}/70 -mt-1`}>
                Comunicação Estratégica
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-medium transition-colors ${textColor} hover:text-brand-lightBlue`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-lightBlue to-brand-navy group-hover:w-full transition-all"></span>
              </Link>
            ))}

            {/* Contact Button */}
            <Link
              to="/contato"
              className="px-6 py-2 bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${textColor}`}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/5 backdrop-blur-lg border-t border-brand-navy/10 shadow-xl transition-colors">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-lg font-medium transition-colors ${textColor} hover:bg-brand-lightBlue/10 hover:text-brand-lightBlue`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-4 rounded-lg font-semibold bg-gradient-to-r from-brand-lightBlue to-brand-navy text-white text-center shadow-lg hover:scale-105 transition-all"
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
