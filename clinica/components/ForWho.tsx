import React from 'react';
import { Star, Award, Gem, Flame, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const ForWho: React.FC = () => {
  const { ref: cardsRef, isInView: cardsVisible } = useInView();
  const { ref: panelRef, isInView: panelVisible } = useInView();

  const profiles = [
    {
      icon: Award,
      title: "Massoterapeutas",
      text: "Que querem perder o medo de atender casos de dores agudas e se tornar referência em tratamentos de coluna e quadril."
    },
    {
      icon: Star,
      title: "Esteticistas e Fisios",
      text: "Que desejam agregar valor e resultados clínicos rápidos aos seus atendimentos manuais, diversificando seu portfólio."
    },
    {
      icon: Gem,
      title: "Busca por Valorização",
      text: "Profissionais que querem cobrar mais pelo seu atendimento por entregar alívio imediato de dores na primeira sessão."
    },
    {
      icon: Flame,
      title: "Quem sente desgaste",
      text: "Terapeutas que desejam poupar as mãos e articulações usando o calor das pedras quentes como alavanca de descompressão."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="for-who">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs font-semibold">Destinatários</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-3 font-sans">
            Esse curso foi feito <span className="italic text-brand-primary">para você?</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch max-w-5xl mx-auto">

          {/* Cards à esquerda */}
          <div ref={cardsRef} className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profiles.map((p, idx) => (
              <div
                key={idx}
                className="group flex flex-col gap-3 p-6 rounded-2xl bg-brand-surface border border-brand-soft/30 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-soft/30 transition-all duration-300"
                style={{
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.5s ease ${idx * 0.1}s, transform 0.5s ease ${idx * 0.1}s`,
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 shrink-0">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-brand-dark text-base">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-light">{p.text}</p>
              </div>
            ))}
          </div>

          {/* Painel direito — destaque */}
          <div
            ref={panelRef}
            className="lg:w-1/2 relative rounded-3xl overflow-hidden bg-brand-dark text-white p-10 flex flex-col justify-between"
            style={{
              opacity: panelVisible ? 1 : 0,
              transform: panelVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <div className="absolute inset-0 bg-brand-dark" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-secondary/10 rounded-full blur-2xl -ml-10 -mb-10" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-secondary font-bold mb-6">Prático e Resolutivo</p>
              <h3 className="text-2xl font-bold leading-snug mb-6">
                Um protocolo validado em clínica, explicado detalhadamente sem enrolação.
              </h3>
              <ul className="space-y-4">
                {[
                  "Foco em anatomia palpatória aplicada",
                  "Passo a passo visual e didático",
                  "Preservação física do terapeuta",
                  "Material de apoio em PDF",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-secondary shrink-0" />
                <p className="text-white/60 text-xs leading-relaxed font-light">
                  Garantia incondicional de <strong className="text-white">7 dias</strong>. Se achar que o curso não é para você, devolvemos 100% do valor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
