import { Link } from "react-router";

export default function Navbar() {
    return (
      <nav className="w-full bg-white/80 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white font-bold">
              W
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-lg">Wise Media</span>
              <div className="text-xs text-slate-500 -mt-0.5">Soluções em comunicação</div>
            </div>
          </Link>
  
          <div className="hidden md:flex gap-8 items-center text-slate-700">
            <a href="#services" className="hover:text-slate-900">Serviços</a>
            <a href="#benefits" className="hover:text-slate-900">Benefícios</a>
            <a href="#contact" className="hover:text-slate-900">Contato</a>
          </div>
  
          <div className="flex items-center gap-3">
            <a
              href="mailto:wisemediasolucoes@gmail.com"
              className="text-sm px-3 py-2 rounded-md hover:bg-gray-100"
            >
              Email
            </a>
  
            <a
              href="https://wa.me/5511990094457"
              target="_blank"
              rel="noreferrer"
              className="btn-accent"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>
    );
  }