import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="mt-10 mb-16">
      <div className="card">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Entre em contato</h2>
            <p className="mt-2 text-slate-700 max-w-xl">
              Para orçamentos e parcerias: envie uma mensagem por WhatsApp ou por email.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/5511990094457" target="_blank" rel="noreferrer" className="btn-accent">
                WhatsApp: (11) 99009-4457
              </a>

              <a href="mailto:wisemediasolucoes@gmail.com" className="px-5 py-3 rounded-xl border border-slate-200">
                Email
              </a>
            </div>
          </div>

          <div className="text-sm text-slate-500">
            <div><strong>Instagram:</strong> <a href="https://instagram.com/wisemediasolucoes11" target="_blank" rel="noreferrer" className="hover:underline">@wisemediasolucoes11</a></div>
            <div className="mt-2"><strong>Email:</strong> <a href="mailto:wisemediasolucoes@gmail.com">wisemediasolucoes@gmail.com</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
