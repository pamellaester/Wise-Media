import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-navy relative overflow-hidden">
      {/* Bold gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightBlue via-white to-brand-lightBlue"></div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(65, 194, 243, 0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container-content relative" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand with gradient */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-lightBlue to-white/20 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Wise Media</div>
                  <div className="text-xs text-brand-lightBlue/70">Comunicação Estratégica</div>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed text-sm max-w-md">
                Agência especializada em comunicação estratégica e gestão de reputação para profissionais de alta visibilidade.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://instagram.com/wisemediasolucoes11"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-lightBlue/20 to-white/5 hover:from-brand-lightBlue/30 hover:to-white/10 flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-6">Navegação</h4>
              <div className="space-y-3 text-sm">
                <Link to="/" className="block text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="/servicos" className="block text-white/70 hover:text-white transition-colors">
                  Serviços
                </Link>
                <Link to="/sobre" className="block text-white/70 hover:text-white transition-colors">
                  Sobre
                </Link>
                <Link to="/contato" className="block text-white/70 hover:text-white transition-colors">
                  Contato
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contato</h4>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:wisemediasolucoes@gmail.com"
                  className="block text-white/70 hover:text-brand-lightBlue transition-colors"
                >
                  wisemediasolucoes@gmail.com
                </a>
                <a
                  href="https://wa.me/5511990094457"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-white/70 hover:text-brand-lightBlue transition-colors"
                >
                  (11) 99009-4457
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
              <div>
                © {new Date().getFullYear()} Wise Media. Todos os direitos reservados.
              </div>
              <div>
                Comunicação estratégica e gestão de reputação.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
