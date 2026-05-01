import React from 'react';
import { Star, Award, Gem, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ForWho: React.FC = () => {
  const profiles = [
    {
      icon: Star,
      title: "Iniciantes",
      text: "Quer começar na massoterapia da forma certa, com um método profissional e completo desde o primeiro atendimento."
    },
    {
      icon: Award,
      title: "Massoterapeutas",
      text: "Já atua na área mas quer se destacar no mercado com um diferencial que fideliza e encanta."
    },
    {
      icon: Gem,
      title: "Quem quer cobrar mais",
      text: "Sabe que entrega valor, mas precisa de um protocolo premium para justificar um ticket mais alto."
    },
    {
      icon: Sparkles,
      title: "Quem busca o premium",
      text: "Quer oferecer algo memorável sem complicação — um método pronto para transformar seu atendimento."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Para quem é</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-3">
            Esse curso foi feito <span className="italic text-brand-primary">para você?</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch max-w-5xl mx-auto">

          {/* Cards à esquerda */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profiles.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col gap-3 p-6 rounded-2xl bg-brand-surface border border-brand-soft/30 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-soft/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 shrink-0">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-brand-dark text-base">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Painel direito — destaque */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative rounded-3xl overflow-hidden bg-brand-dark text-white p-10 flex flex-col justify-between"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-35"
              src="/relaxante/videos/relaxante-2.mov"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-brand-dark/70" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-secondary font-bold mb-6">Não precisa de experiência</p>
              <h3 className="text-2xl font-bold leading-snug mb-6">
                O curso ensina do zero, com demonstrações completas e linguagem clara.
              </h3>
              <ul className="space-y-4">
                {[
                  "Didática simples e objetiva",
                  "Demonstrações em modelo real",
                  "Protocolo pronto para aplicar",
                  "Acesso imediato e vitalício",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-secondary shrink-0" />
                <p className="text-white/60 text-xs leading-relaxed">
                  Garantia incondicional de <strong className="text-white">7 dias</strong>. Se não gostar, devolvemos 100% do seu investimento.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
