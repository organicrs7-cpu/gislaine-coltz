import React from 'react';
import { useInView } from '../hooks/useInView';
import { GraduationCap, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

export const WhoIsItFor: React.FC = () => {
  const { ref, isInView } = useInView();

  const cards = [
    {
      icon: <HeartPulse className="w-6 h-6 text-white" />,
      title: "Massoterapeutas Clínicos",
      desc: "Quem deseja sair da massagem relaxante básica e começar a tratar dores severas (como ciatalgia, dores lombares e cervicais) com segurança técnica de fisioterapeuta."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Fisioterapeutas",
      desc: "Ideal para profissionais formados que precisam de um guia rápido de consulta rápida no dia a dia da clínica, economizando tempo na hora de preencher prontuários e fechar diagnósticos."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Estudantes de Saúde",
      desc: "Perfeito para fixar o raciocínio clínico por trás de cada teste ortopédico de forma prática e visual antes de estágios supervisionados e provas práticas na faculdade."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Profissionais que buscam Destaque",
      desc: "Terapeutas que desejam cobrar mais caro por sua hora de atendimento, demonstrando autoridade desde o primeiro minuto de avaliação com o paciente na maca."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-brand-secondary text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            Público-Alvo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Para quem é a Tabela de Referência Clínica?
          </h2>
          <p className="text-white/60 font-light mt-4 text-sm md:text-base leading-relaxed">
            Se você trabalha na maca com o paciente em dor física, esse material digital foi feito sob medida para facilitar sua vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-700 transform hover:bg-white/10 hover:border-brand-secondary/30 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-primary flex items-center justify-center mb-6 shadow-md shadow-brand-primary/20 shrink-0">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-white/70 font-light text-xs md:text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
