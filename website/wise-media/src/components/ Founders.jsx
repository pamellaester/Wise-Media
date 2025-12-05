import React from "react";

export default function Founders() {
  const founders = [
    {
      name: "Rosy Cordeiro",
      title: "Jornalista, Estilista e Apresentadora",
      desc:
        "Experiência em televisão e moda, com atuação em programas relevantes. Inova na interseção entre mídia e estilo.",
    },
    {
      name: "Débora Tawil",
      title: "Mentora de Desenvolvimento Humano & Gestão de Imagem",
      desc:
        "Especialista em posicionamento e gestão de crises; lidera operações estratégicas para expansão de marcas.",
    },
  ];

  return (
    <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {founders.map((f) => (
        <div key={f.name} className="card">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-xl font-bold text-slate-700">
              {f.name.split(" ").map(n => n[0]).slice(0,2).join("")}
            </div>
            <div>
              <h3 className="font-semibold">{f.name}</h3>
              <div className="text-sm text-slate-500">{f.title}</div>
              <p className="mt-3 text-slate-700">{f.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
