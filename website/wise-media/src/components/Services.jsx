import React from "react";

export default function Services() {
  const items = [
    {
      title: "Assessoria de Imprensa",
      desc:
        "Press releases estratégicos, articulação de entrevistas e relacionamento com veículos para aumentar sua presença nos meios certos.",
    },
    {
      title: "Assessoria Pontual & Estratégica",
      desc:
        "Campanhas e pautas pontuais para momentos decisivos — lançamento, premiações, processos de vistos e exposição qualificada.",
    },
    {
      title: "Assessoria para Vistos (O-1 / EB2-NIW)",
      desc:
        "Construção de provas públicas e matérias em veículos de relevância para fortalecer processos de imigração por habilidades extraordinárias.",
    },
    {
      title: "Gestão Google Meu Negócio",
      desc:
        "Otimização, postagens, gestão de avaliações e relatórios para aumentar visibilidade local e credibilidade.",
    },
    {
      title: "Gestão de Crise",
      desc:
        "Monitoramento, remoção de dados indesejados e estratégias de comunicação para mitigar danos à reputação.",
    },
    {
      title: "Limpa Nome",
      desc:
        "Remoção e gerenciamento de reclamações em plataformas como Reclame Aqui, Google Reviews e conteúdos difamatórios.",
    },
  ];

  return (
    <section id="services" className="mt-10">
      <h2 className="text-2xl font-semibold mb-6">Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((s) => (
          <div key={s.title} className="card">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-3 text-slate-700 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
