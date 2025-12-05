import React from "react";

export default function Benefits() {
  const benefits = [
    "Soluções sob medida para objetivos únicos",
    "Equipe experiente com histórico em mídia e moda",
    "Resultados comprovados e foco em reputação",
  ];

  return (
    <section id="benefits" className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Por que escolher a Wise Media</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <div key={b} className="card flex flex-col">
            <div className="text-xl font-bold text-[var(--accent)]">✓</div>
            <p className="mt-3 text-slate-700">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
