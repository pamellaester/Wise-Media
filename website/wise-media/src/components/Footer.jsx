import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white/60 mt-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
        <div>© {new Date().getFullYear()} Wise Media Soluções — Todos os direitos reservados.</div>
        <div className="mt-2 md:mt-0">Email: <a href="mailto:wisemediasolucoes@gmail.com">wisemediasolucoes@gmail.com</a></div>
      </div>
    </footer>
  );
}
