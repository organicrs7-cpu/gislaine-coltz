import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 bg-brand-surface">
      {/* Abstract Background Shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 -mr-24 -mt-24 w-[500px] h-[500px] bg-brand-soft rounded-full blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-brand-secondary rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6 border border-brand-soft"
            >
              <span className="text-brand-primary text-sm font-semibold tracking-wider uppercase">✨ Protocolo Exclusivo</span>
            </motion.div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-dark leading-tight mb-6">
              O Protocolo <span className="text-brand-primary">Detox</span> que Faz Suas Clientes Perderem Medidas
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Aprenda como aplicar sessões de Detox Profundo com Manta Térmica, combinando ativos e técnicas que elevam o valor do seu atendimento.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button onClick={scrollToPricing}>
                Quero Dominar Esse Protocolo
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-brand-accent overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" className="w-full h-full object-cover opacity-80" />
                    </div>
                  ))}
                </div>
                <span>+500 alunas satisfeitas</span>
              </div>
            </div>

            <ul className="space-y-3 text-left inline-block">
              {[
                "Método simples e lucrativo",
                "Transforme a experiência da cliente",
                "Valorize seu trabalho profissional"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white">
              <img
                src="/detox/hero-image.jpg"
                alt="Tratamento Estético Profissional"
                className="w-full h-[550px] object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent pointer-events-none"></div>

              {/* Floating Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                className="absolute bottom-8 left-8 right-8 glass-effect p-6 rounded-xl shadow-lg border border-white/50"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-brand-soft p-3 rounded-full text-brand-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-brand-primary font-bold uppercase tracking-wide">Resultado Imediato</p>
                    <p className="text-lg font-semibold text-gray-800">Agenda cheia de indicações</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};