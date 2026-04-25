import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Texture Subtle */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-5/12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-secondary rounded-3xl rotate-3 opacity-20 translate-y-4 translate-x-4"></div>
              <img
                src="/gislaine-coltz.jpg"
                alt="Gislaine Coltz"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4] border-4 border-brand-primary/30"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-7/12"
          >
            <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs">Sua Mentora</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-6">Gislaine Coltz</h2>
            <h3 className="text-xl text-brand-soft mb-8 font-light italic">Massoterapeuta e Mentora Internacional</h3>

            <div className="space-y-6 text-brand-surface/80 leading-relaxed text-lg font-light">
              <p>
                Criadora de protocolos práticos que geram resultado visível e imediato. Ela reuniu tudo que realmente funciona com manta térmica em um só protocolo.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <h4 className="font-bold text-xl mb-2 text-brand-soft">Prática Real</h4>
                  <p className="text-sm">Método criado por quem vive da estética e aplicado em clínicas de alto padrão.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <h4 className="font-bold text-xl mb-2 text-brand-soft">Resultados</h4>
                  <p className="text-sm">Resultados notáveis já nas primeiras sessões, gerando fidelização orgânica.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};