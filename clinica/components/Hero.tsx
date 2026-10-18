import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-brand-surface" style={{ backgroundImage: 'url(/clinica/hero-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

      {/* ======================== MOBILE ======================== */}
      <div className="lg:hidden relative">
        {/* Foto — flui naturalmente sobre o bg */}
        <div className="relative w-full h-[440px]">
          <img
            src="/clinica/gislaine-66.webp"
            alt="Gislaine Coltz"
            fetchPriority="high"
            className="w-full h-full object-cover object-top"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
            }}
          />
          {/* Nome sobreposto na base da foto */}
          <div className="absolute bottom-0 left-0 right-0 z-10 text-center pb-3 px-4">
            <h1 className="text-4xl font-bold tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #9d6a6b, #cea29b, #9d6a6b)' }}>
                GISLAINE COLTZ
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="h-px w-8 bg-brand-secondary" />
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">Piriforme na Prática</p>
              <span className="h-px w-8 bg-brand-secondary" />
            </div>
          </div>
        </div>

        {/* Texto abaixo — fundo levemente branco para equilibrar */}
        <div className="px-6 pt-4 pb-24 text-center" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 20%, rgba(255,255,255,0.92) 100%)' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-5 border border-brand-soft shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-brand-primary text-sm font-semibold tracking-wider uppercase">Método Prático e Clínico</span>
          </div>
          <p className="text-xl font-bold text-brand-dark mb-3 leading-tight">
            Saiba em minutos se é piriforme ou ciático. <span className="text-brand-primary">E trate sem dor.</span>
          </p>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed font-light">
            O protocolo clínico da Gi, com pedras quentes.
          </p>
          <Button onClick={scrollToPricing} fullWidth>
            Quero Dominar Esse Protocolo
          </Button>
        </div>
      </div>

      {/* ======================== DESKTOP ======================== */}
      <div className="hidden lg:flex items-stretch justify-center" style={{ minHeight: '100vh' }}>
        <div className="flex items-stretch w-full max-w-6xl mx-auto px-10">

          {/* Coluna esquerda — texto */}
          <div className="flex items-center pr-8" style={{ width: '55%' }}>
            <div
              className="w-full text-left py-20"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-brand-soft shadow-sm"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
                }}
              >
                <Sparkles className="w-4 h-4 text-brand-primary" />
                <span className="text-brand-primary text-sm font-semibold tracking-wider uppercase">Método Prático e Clínico</span>
              </div>

              <h1 className="text-4xl xl:text-5xl font-bold text-brand-dark leading-tight mb-4">
                Saiba em minutos se é piriforme ou ciático. <span className="text-brand-primary">E trate sem dor.</span>
              </h1>

              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light">
                O protocolo clínico da Gi, com pedras quentes.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <Button onClick={scrollToPricing}>
                  Quero Dominar Esse Protocolo
                </Button>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex gap-0.5 text-amber-400" aria-hidden="true">★★★★★</div>
                  <span>+500 profissionais formados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita — foto colada na base */}
          <div className="flex items-end justify-end" style={{ width: '45%' }}>
            <img
              src="/clinica/gislaine-66.webp"
              alt="Gislaine Coltz"
              fetchPriority="high"
              className="object-contain object-bottom select-none"
              style={{
                maxHeight: '94vh',
                width: 'auto',
                maxWidth: '100%',
                display: 'block',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(40px)',
                transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
              }}
              draggable={false}
            />
          </div>

        </div>{/* fecha max-w container */}
      </div>
    </section>
  );
};
