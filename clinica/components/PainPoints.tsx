import React from 'react';
import { ShieldAlert, HelpCircle, Activity } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const PainPoints: React.FC = () => {
  const { ref: cardsRef, isInView: cardsVisible } = useInView();
  const { ref: ctaRef, isInView: ctaVisible } = useInView();

  const points = [
    {
      icon: HelpCircle,
      title: "Insegurança no Diagnóstico?",
      text: "Você sente medo de não saber identificar se a dor do cliente vem de uma compressão na coluna (lombar) ou de uma inflamação direta no glúteo (Síndrome do Piriforme)."
    },
    {
      icon: ShieldAlert,
      title: "Medo de Machucar o Cliente?",
      text: "O piriforme inflamado é extremamente sensível. Se você aplicar pressão bruta (como enfiar o cotovelo ou polegar forte), causará mais dor e gerará um trauma físico no seu cliente."
    },
    {
      icon: Activity,
      title: "Mãos e Articulações Exaustas?",
      text: "Você se desgasta fisicamente tentando massagear e liberar um músculo que é extremamente profundo, terminando o dia com as mãos doloridas de tanto fazer força."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs font-semibold">Os Desafios na Clínica</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-4 font-sans">
            Você passa por <span className="italic text-brand-secondary">algum desses problemas?</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-light text-sm">
            Tratar dor clínica não é como fazer uma massagem relaxante comum. Sem o método correto, você se cansa, machuca o paciente e não resolve a causa raiz.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {points.map((point, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-brand-secondary/40 transition-all duration-300"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${idx * 0.15}s, transform 0.5s ease ${idx * 0.15}s`,
              }}
            >
              <span className="absolute top-5 right-6 text-6xl font-bold text-white/5 select-none leading-none">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-brand-secondary bg-white/10 mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{point.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm font-light">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Virada de chave */}
        <div
          ref={ctaRef}
          className="relative rounded-3xl overflow-hidden bg-brand-primary p-10 md:p-14 text-center shadow-2xl shadow-brand-primary/20"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-secondary/20 rounded-full blur-2xl -ml-10 -mb-10" />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-soft/70 font-bold mb-4">A virada de chave</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-3xl mx-auto leading-snug">
              A massoterapia clínica sem dor é um protocolo inteligente de descompressão.
            </h3>
            <p className="text-brand-soft text-base font-light max-w-2xl mx-auto leading-relaxed">
              Ao usar o calor terapêutico das <strong className="text-white font-semibold">Pedras Quentes</strong> para amolecer a musculatura superficial antes de ir profundo, você acessa o piriforme de forma confortável, entregando alívio imediato e preservando suas articulações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
