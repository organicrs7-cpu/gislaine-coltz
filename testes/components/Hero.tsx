import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Shield, Sparkles, BookOpen, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-brand-surface py-12 md:py-20 lg:py-28 min-h-screen flex items-center">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-brand-soft rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-brand-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Top Header */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          <span className="text-[#9d6a6b] font-bold text-sm tracking-[0.3em] uppercase block">
            GISLAINE COLTZ
          </span>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="h-px w-6 bg-brand-secondary" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
              Guia de Referência Clínica
            </p>
            <span className="h-px w-6 bg-brand-secondary" />
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text copy */}
          <div className={`lg:col-span-7 text-center lg:text-left transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9d6a6b]/10 border border-[#9d6a6b]/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-brand-primary text-xs font-bold uppercase tracking-wider">Acesso Digital Imediato</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-6">
              Avalie com <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">100% de precisão</span> na maca e elimine a insegurança
            </h1>

            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              A <strong>Tabela de Testes Neurológicos & Ortopédicos</strong> é o seu guia visual prático de consulta rápida. Identifique a causa exata da dor do seu paciente em segundos, com mais de 30 testes mapeados de forma extremamente ilustrada e objetiva.
            </p>

            {/* Desktop / Large screen list */}
            <div className="hidden sm:grid grid-cols-2 gap-4 text-left mb-8 max-w-md mx-auto lg:mx-0">
              {[
                "Mapeamento de 8 articulações",
                "+30 testes ilustrados passo a passo",
                "Indicação, execução e diagnóstico",
                "Formato PDF otimizado para celular"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
                    <span className="text-brand-primary text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm font-light">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button onClick={scrollToPricing} className="w-full sm:w-auto px-10 py-5">
                QUERO A TABELA DE TESTES
              </Button>
              <span className="text-gray-500 text-xs font-light flex items-center gap-1.5 mt-2 sm:mt-0">
                <Shield className="w-4 h-4 text-emerald-500" /> Compra 100% segura • R$ 37 à vista
              </span>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className={`lg:col-span-5 flex justify-center transition-all duration-1000 delay-500 transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative group max-w-sm md:max-w-md">
              {/* Soft decorative shadow background */}
              <div className="absolute inset-0 bg-brand-secondary/30 rounded-3xl blur-3xl transform group-hover:scale-105 transition-transform duration-500 -z-10" />
              
              {/* Product Mockup Image */}
              <img
                src="/testes/images/card-tabela-testes.webp"
                alt="Mockup Tabela de Testes Neurológicos e Ortopédicos"
                className="w-full h-auto object-contain rounded-2xl shadow-2xl border border-white/20 transform group-hover:translate-y-[-5px] transition-all duration-500"
              />

              {/* Float floating badges */}
              <div className="absolute -top-4 -right-4 bg-brand-primary text-white text-[10px] md:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-white/10 animate-bounce">
                +30 Testes Clínicos
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white text-brand-dark text-[10px] md:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-brand-soft flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5 text-brand-primary" />
                <span>PDF Download</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
