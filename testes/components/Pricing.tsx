import React from 'react';
import { useInView } from '../hooks/useInView';
import { Button } from './Button';
import { ShieldCheck, Lock, Mail, CheckCircle2 } from 'lucide-react';

export const Pricing: React.FC = () => {
  const { ref, isInView } = useInView();

  const inclusions = [
    "Guia Digital completo (+30 testes)",
    "Passo a passo visual e ilustrado",
    "Indicação e diagnóstico rápido",
    "Acesso vitalício no celular/computador",
    "Suporte exclusivo via e-mail/WhatsApp",
    "Download imediato pós-pagamento"
  ];

  return (
    <section ref={ref} id="pricing" className="py-20 bg-brand-surface relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-soft rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            Oportunidade Limitada
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
            Adquira agora a sua Tabela de Testes Neurológicos & Ortopédicos
          </h2>
          <p className="text-gray-500 font-light mt-4 text-sm md:text-base leading-relaxed">
            Elimine as dúvidas na maca hoje mesmo por um valor menor do que o preço de um lanche.
          </p>
        </div>

        {/* Price Card */}
        <div className={`bg-white border border-brand-soft rounded-[2rem] p-6 md:p-12 shadow-xl grid md:grid-cols-12 gap-8 items-center transition-all duration-1000 delay-300 transform ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Left Column: What you receive */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-brand-dark">O que você vai receber:</h3>
            <ul className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {inclusions.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-gray-700 text-xs md:text-sm font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#9d6a6b] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-brand-soft flex items-center gap-3.5">
              <ShieldCheck className="w-10 h-10 text-brand-primary shrink-0" />
              <div>
                <p className="text-xs font-bold text-brand-dark">Garantia de Satisfação de 7 Dias</p>
                <p className="text-[10px] md:text-xs text-gray-500 font-light leading-relaxed">
                  Experimente sem riscos. Se não gostar do material, devolvemos 100% do seu dinheiro.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Checkout Button */}
          <div className="md:col-span-5 bg-brand-surface rounded-2xl p-6 text-center border border-brand-soft flex flex-col justify-between h-full shadow-sm">
            <div className="mb-6">
              <span className="bg-brand-soft text-brand-dark px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">
                Desconto Especial
              </span>
              <p className="text-gray-400 text-xs mt-6 line-through">De: R$ 97,00</p>
              
              <div className="mt-1">
                <span className="text-[10px] font-semibold text-gray-400 block">Por Apenas:</span>
                <div className="flex items-center justify-center gap-0.5 text-brand-dark">
                  <span className="text-base font-medium">9x de</span>
                  <span className="text-4xl font-extrabold tracking-tighter">5,05</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 font-light">ou R$ 37,00 à vista</p>
              </div>
            </div>

            <div className="space-y-4">
              <a href="https://pay.cakto.com.br/nfrnxtn_932472" target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button fullWidth className="py-3.5 px-6 text-sm font-bold shadow-brand-primary/20 animate-pulse">
                  QUERO A TABELA AGORA
                </Button>
              </a>

              <div className="flex flex-col items-center gap-1.5 pt-2">
                <div className="flex items-center gap-1.5 text-gray-400 text-[10px]">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Ambiente 100% Seguro</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-[10px]">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Acesso enviado por e-mail</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
