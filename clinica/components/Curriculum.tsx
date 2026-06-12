import React from 'react';
import { ShieldCheck, Flame, Stethoscope, Move3d, Compass, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    icon: Stethoscope,
    title: "Diferenciação Diagnóstica (Ciatalgia vs. Piriforme)",
    desc: "Aprenda a aplicar os testes ortopédicos e clínicos (Elevação da perna estendida para ciatalgia e rotação/dobra para piriforme) para identificar a causa exata da dor antes de tocar no paciente."
  },
  {
    num: "02",
    icon: Compass,
    title: "Palpação e Descompressão Neural",
    desc: "Aprenda a localizar o sacro, o fêmur e a sacroilíaca. Faça o relaxamento superficial com manobras circulares usando tenar e hipotenar. Conheça a regra de ouro: nunca use ponta de cotovelo na dor."
  },
  {
    num: "03",
    icon: Flame,
    title: "O Pulo do Gato: Termoterapia com Pedras Quentes",
    desc: "O segredo para entrar profundo sem causar sofrimento. Use o calor estratégico das pedras quentes para relaxar o glúteo máximo e médio, preparando a região para o acesso ao músculo piriforme."
  },
  {
    num: "04",
    icon: Move3d,
    title: "Liberação Miofascial Profunda e Direções",
    desc: "Manobras manuais e mecânicas no sentido da fibra e contra a fibra. Como trabalhar com a escala de dor (0 a 10) do paciente para atingir a camada profunda sem gerar espasmos protetores."
  },
  {
    num: "05",
    icon: ShieldCheck,
    title: "Mobilizações e Ajustes do Quadril",
    desc: "O ciático e o piriforme estão sempre associados a disfunções de mobilidade. Aprenda ajustes articulares manuais do quadril e a liberação do músculo psoas para uma melhora definitiva."
  },
];

export const Curriculum: React.FC = () => {
  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden" id="curriculum">
      {/* Orb decorativo */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-soft/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Título — fixo à esquerda no desktop */}
          <div className="lg:w-1/3 lg:sticky lg:top-24">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs font-semibold">O Cronograma</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-3 mb-6 leading-tight">
              O que você vai <span className="italic text-brand-primary">dominar</span>
            </h2>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">
              Um método clínico completo, baseado em anatomia palpatória e raciocínio lógico, projetado para dar resultados rápidos na primeira sessão e fidelizar pacientes pela eficácia.
            </p>
            {/* Destaque premium */}
            <div className="relative rounded-2xl overflow-hidden bg-brand-primary p-6 text-white shadow-xl shadow-brand-primary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="mb-3 bg-white/20 inline-flex p-2 rounded-full">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">Passo a Passo em Vídeo</h3>
                <p className="text-brand-surface/80 text-xs leading-relaxed font-light">
                  Aulas filmadas em alta definição com closes das manobras, palpações e posicionamentos da perna para você reproduzir com segurança na sua clínica.
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
                    <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
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
