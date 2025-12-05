import React from "react";

export default function Hero() {
  return (
    <header className="w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight max-w-xl">
            Protegemos sua imagem. Construímos sua autoridade. Ampliamos sua visibilidade.
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Wise Media Soluções — assessoria de imprensa e gestão de reputação fundada por Rosy
            Cordeiro e Débora Tawil. Estrategias sob medida para visibilidade midiática e mitigação
            de crises, com foco em resultados e credibilidade.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/5511990094457"
              target="_blank"
              rel="noreferrer"
              className="btn-accent"
            >
              Falar pelo WhatsApp
            </a>

            <a
              href="#services"
              className="px-6 py-3 rounded-xl font-semibold border border-slate-200 bg-white hover:bg-slate-50"
            >
              Conhecer Serviços
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-500">
            Email: <a href="mailto:wisemediasolucoes@gmail.com">wisemediasolucoes@gmail.com</a> •
            Instagram: <a href="https://instagram.com/wisemediasolucoes11" target="_blank" rel="noreferrer" className="text-slate-700 hover:underline">@wisemediasolucoes11</a>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-xl">
            {/* Placeholder image; substitua pela foto do cliente */}
            <div className="h-64 bg-gradient-to-tr from-[var(--accent)]/20 to-slate-100 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-2xl font-bold text-[var(--accent)] mb-2">Wise Media</div>
                <div className="text-sm text-slate-600">Assessoria de imprensa & Gestão de Crise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
