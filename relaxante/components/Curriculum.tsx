import React from 'react';
import { Hand, Flame, Sparkles, Coffee, Video, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    icon: Video,
    title: "Aulas Completas em Vídeo",
    desc: "Passo a passo detalhado de cada movimento, filmado com closes para você não perder nenhum detalhe."
  },
  {
    num: "02",
    icon: Hand,
    title: "Massagem Relaxante Terapêutica",
    desc: "Técnicas que reduzem tensões musculares com eficiência, proporcionando relaxamento profundo sem causar dor."
  },
  {
    num: "03",
    icon: Flame,
    title: "Pedras Quentes — Aplicação Estratégica",
    desc: "Use o calor para acessar musculaturas profundas com conforto e precisão, potencializando cada manobra."
  },
  {
    num: "04",
    icon: Coffee,
    title: "Recepção Sensorial com Chá",
    desc: "Encante o cliente desde o primeiro segundo com um acolhimento que ativa os sentidos e cria conexão imediata."
  },
  {
    num: "05",
    icon: Sparkles,
    title: "Spa dos Pés + Ritual Thai",
    desc: "O ritual que ativa o relaxamento antes da massagem começar e encerra com uma finalização memorável."
  },
];

export const Curriculum: React.FC = () => {
  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Orb decorativo */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-soft/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Título — fixo à esquerda no desktop */}
          <div className="lg:w-1/3 lg:sticky lg:top-24">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Conteúdo</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-3 mb-6 leading-tight">
              O que você vai <span className="italic text-brand-primary">dominar</span>
            </h2>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">
              Um protocolo estruturado do início ao fim — da recepção à finalização — para você se posicionar como profissional diferenciada.
            </p>
            {/* Destaque premium */}
            <div className="relative rounded-2xl overflow-hidden bg-brand-primary p-6 text-white">
              <video
                className="absolute inset-0 h-full w-full object-cover opacity-30"
                src="/relaxante/videos/relaxante-4.mov"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-brand-primary/75" />
              <div className="relative z-10">
                <div className="mb-3 bg-white/20 inline-flex p-2 rounded-full">
                  <Star className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <h3 className="font-bold text-lg mb-1">Posicionamento Premium</h3>
                <p className="text-brand-surface/80 text-xs leading-relaxed">
                  Crie um ambiente de spa mesmo em espaço simples e cobre mais pelo seu trabalho.
                </p>
              </div>
            </div>
          </div>

          {/* Steps — lista vertical com linha timeline */}
          <div className="lg:w-2/3 relative">
            {/* Linha vertical */}
            <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-soft via-brand-secondary to-transparent hidden md:block" />

            <div className="space-y-6">
              {steps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative flex items-start gap-6 bg-white rounded-2xl p-6 border border-brand-soft/40 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-soft/30 transition-all duration-300"
                >
                  {/* Número / dot da timeline */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center border-2 border-white shadow-sm group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors duration-300 relative z-10">
                    <item.icon className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors duration-300" />
                  </div>

                  <div className="flex-1 pt-1">
                    {/* Número watermark */}
                    <span className="text-xs font-bold tracking-widest text-brand-primary/40 uppercase">{item.num}</span>
                    <h3 className="text-base font-bold text-brand-dark mt-0.5 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
