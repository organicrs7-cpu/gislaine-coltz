import React from 'react';
import { useInView } from '../hooks/useInView';
import { AlertCircle, HelpCircle, UserX, Clock } from 'lucide-react';

export const Problem: React.FC = () => {
  const { ref, isInView } = useInView();

  const painPoints = [
    {
      icon: <AlertCircle className="w-8 h-8 text-brand-secondary" />,
      title: "Insegurança na Avaliação",
      desc: "Não saber diferenciar uma dor ciática de uma síndrome do piriforme ou hérnia de disco, correndo o risco de aplicar manobras que pioram a dor do paciente."
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-secondary" />,
      title: "Perda de Tempo na Maca",
      desc: "Esquecer a execução de um teste específico e precisar pesquisar às pressas no celular ou em livros antigos enquanto o paciente aguarda deitado."
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-brand-secondary" />,
      title: "Falta de Raciocínio Clínico",
      desc: "Aplicar manobras apenas por 'protocolo' sem entender qual estrutura está lesionada, o que gera resultados lentos e insatisfatórios."
    },
    {
      icon: <UserX className="w-8 h-8 text-brand-secondary" />,
      title: "Sensação de Amadorismo",
      desc: "Demonstrar hesitação durante a avaliação física, perdendo a autoridade e a confiança que o paciente deposita no seu trabalho."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-brand-secondary text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            O Grande Desafio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Você ainda hesita na hora de identificar a causa exata da dor?
          </h2>
          <p className="text-white/60 font-light mt-4 text-sm md:text-base leading-relaxed">
            Muitos profissionais erram no tratamento porque pulam a etapa principal: a avaliação clínica correta. Sem testes precisos, você trabalha no escuro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 flex gap-4 transition-all duration-700 transform hover:border-brand-secondary/30 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="shrink-0 p-3 bg-white/5 rounded-xl border border-white/5 h-fit">
                {point.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-white/70 font-light text-xs md:text-sm leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
