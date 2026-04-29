import React from 'react';
import { TrendingDown, HelpCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const PainPoints: React.FC = () => {
  const points = [
    {
      icon: TrendingDown,
      title: "Seu atendimento parece igual ao de todo mundo?",
      text: "Você sabe fazer massagem, mas sente que não tem um diferencial que faça o cliente escolher você — e voltar."
    },
    {
      icon: HelpCircle,
      title: "Clientes não fidelizam?",
      text: "Faz um bom trabalho, mas as pessoas vêm uma vez e somem. Falta aquele 'algo a mais' que cria conexão."
    },
    {
      icon: AlertCircle,
      title: "Cobra menos do que deveria?",
      text: "Sente que entrega muito, mas o mercado te pressiona a cobrar pouco porque seu serviço parece 'mais do mesmo'."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs">Identificação</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
            Você se <span className="italic text-brand-secondary">identifica?</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-light">
            A maioria das profissionais sente isso. O problema não é falta de técnica — é falta de método e experiência completa.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-brand-secondary/40 transition-all duration-300"
            >
              <span className="absolute top-5 right-6 text-6xl font-bold text-white/5 select-none leading-none">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-brand-secondary bg-white/10 mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{point.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{point.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Virada de chave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-brand-primary p-10 md:p-14 text-center shadow-2xl shadow-brand-primary/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-secondary/20 rounded-full blur-2xl -ml-10 -mb-10" />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-soft/70 font-bold mb-4">A virada de chave</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-3xl mx-auto leading-snug">
              A Massagem Relaxante com Pedras Quentes e Protocolo Thai Spa não é só mais uma técnica.
            </h3>
            <p className="text-brand-soft text-lg font-light max-w-2xl mx-auto">
              É a chave para criar uma experiência que o cliente <em className="text-white not-italic font-semibold">lembra, indica e volta</em>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
