import React from 'react';
import { Button } from './Button';
import { Check, ShieldCheck, Lock, CreditCard, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-brand-surface -skew-y-3 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-brand-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-[80px] -mr-16 -mt-16"></div>

              <div>
                <h2 className="text-3xl font-bold mb-2">Massagem Relaxante</h2>
                <p className="text-brand-soft text-sm uppercase tracking-wider mb-8">+ Pedras Quentes & Protocolo Thai Spa</p>

                <div className="space-y-5">
                  <h3 className="text-lg font-semibold border-b border-white/20 pb-2 mb-4">O que está incluso:</h3>
                  {[
                    "Aulas completas e passo a passo em vídeo",
                    "Protocolo estruturado de atendimento",
                    "Técnicas detalhadas de massagem relaxante",
                    "Aplicação correta das pedras quentes",
                    "Ritual Thai Spa completo (recepção + spa dos pés + finalização)",
                    "Acesso imediato por 1 ano"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-brand-surface font-light">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 opacity-80">
                  <ShieldCheck className="w-8 h-8" />
                  <div className="text-sm">
                    <p className="font-semibold">Garantia de 7 Dias</p>
                    <p className="text-xs">Risco Zero. Seu dinheiro de volta.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-center"
            >
              <div className="text-center mb-8">
                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Oferta Especial de Lançamento
                </span>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-center justify-center text-brand-dark gap-2 mb-1">
                  <span className="text-3xl font-medium">12x de</span>
                  <span className="text-6xl font-bold tracking-tighter">31,42</span>
                </div>
                <p className="text-gray-500">ou R$ 297,00 à vista</p>
              </div>

              <a href="https://pay.cakto.com.br/az2c3p9" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button fullWidth className="py-5 text-lg shadow-brand-primary/40 animate-pulse">
                  GARANTIR MINHA VAGA
                </Button>
              </a>

              <div className="mt-6 flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Lock className="w-3 h-3" />
                  <span>Ambiente 100% Seguro</span>
                </div>
                <div className="flex gap-3 grayscale opacity-50">
                  <CreditCard className="w-6 h-6" />
                  <Smartphone className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center text-gray-500 mt-12 text-sm max-w-2xl mx-auto"
          >
            Ao final do curso, você não será apenas alguém que faz massagem. Será a profissional que entrega uma <strong className="text-brand-primary">experiência que o cliente lembra, indica e volta</strong>.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
