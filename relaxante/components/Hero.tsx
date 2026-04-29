import React from 'react';
import { Button } from './Button';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-brand-surface">

      {/* ======================== MOBILE ======================== */}
      <div className="lg:hidden">
        {/* Foto com fade embaixo para brand-surface */}
        <div className="relative w-full h-[420px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-surface z-10" />
          <img
            src="/relaxante/gislaine-66.png"
            alt="Gislaine Coltz"
            className="w-full h-full object-cover object-top"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)',
            }}
          />
          {/* Nome sobreposto */}
          <div className="absolute bottom-0 left-0 right-0 z-20 text-center pb-3 px-4">
            <h1 className="text-4xl font-bold tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #9d6a6b, #cea29b, #9d6a6b)' }}>
                GISLAINE COLTZ
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="h-px w-8 bg-brand-secondary" />
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">Massoterapeuta</p>
              <span className="h-px w-8 bg-brand-secondary" />
            </div>
          </div>
        </div>

        {/* Texto abaixo */}
        <div className="px-6 pt-4 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-5 border border-brand-soft shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-brand-primary text-sm font-semibold tracking-wider uppercase">Curso Online Exclusivo</span>
          </div>
          <p className="text-xl font-bold text-brand-dark mb-3 leading-tight">
            Transforme seu toque em uma{' '}
            <span className="text-brand-primary">experiência de alto valor</span>
          </p>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed font-light">
            Massagem Relaxante + Pedras Quentes com Protocolo Thai Spa — um método completo capaz de fidelizar clientes e aumentar seu faturamento.
          </p>
          <ul className="space-y-3 text-left mb-8">
            {[
              "Protocolo completo pronto para aplicar",
              "Fidelize clientes desde a primeira sessão",
              "Cobre mais pelo seu atendimento"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button onClick={scrollToPricing} fullWidth>
            Quero Dominar Esse Método
          </Button>
        </div>
      </div>

      {/* ======================== DESKTOP ======================== */}
      <div className="hidden lg:flex items-stretch justify-center" style={{ minHeight: '100vh' }}>
        <div className="flex items-stretch w-full max-w-6xl mx-auto px-10">

        {/* Coluna esquerda — texto */}
        <div className="flex items-center pr-8" style={{ width: '52%' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full text-left py-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-brand-soft shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-brand-primary text-sm font-semibold tracking-wider uppercase">Curso Online Exclusivo</span>
            </motion.div>

            <h1 className="text-5xl xl:text-6xl font-bold text-brand-dark leading-tight mb-4">
              Transforme seu toque em uma{' '}
              <span className="text-brand-primary">experiência de alto valor</span>
            </h1>

            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light">
              Massagem Relaxante + Pedras Quentes com Protocolo Thai Spa — um atendimento memorável que fideliza clientes e aumenta seu faturamento.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Button onClick={scrollToPricing}>
                Quero Dominar Esse Método
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-brand-accent overflow-hidden">
                      <img src={`https://picsum.photos/seed/aluna${i}/100/100`} alt="aluna" className="w-full h-full object-cover opacity-80" />
                    </div>
                  ))}
                </div>
                <span>+500 alunas satisfeitas</span>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Protocolo completo pronto para aplicar",
                "Fidelize clientes desde a primeira sessão",
                "Cobre mais pelo seu atendimento"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Coluna direita — foto colada na base */}
        <div className="flex items-end justify-end" style={{ width: '48%' }}>
          <motion.img
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            src="/relaxante/gislaine-66.png"
            alt="Gislaine Coltz"
            className="object-contain object-bottom select-none"
            style={{ maxHeight: '94vh', width: 'auto', maxWidth: '100%', display: 'block' }}
            draggable={false}
          />
        </div>

        </div>{/* fecha max-w container */}
      </div>
    </section>
  );
};
