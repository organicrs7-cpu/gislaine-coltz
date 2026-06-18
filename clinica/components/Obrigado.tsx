import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, CreditCard, Smartphone, Timer, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Obrigado: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes in seconds
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    // 1. Check if the offer has already been viewed/expired
    const hasViewed = localStorage.getItem('piriforme_obrigado_seen');
    const timerEndStr = localStorage.getItem('piriforme_obrigado_timer_end');

    if (hasViewed && !timerEndStr) {
      setIsExpired(true);
      return;
    }

    let timerEnd = 0;
    if (timerEndStr) {
      timerEnd = parseInt(timerEndStr, 10);
    } else {
      timerEnd = Date.now() + 10 * 60 * 1000;
      localStorage.setItem('piriforme_obrigado_timer_end', timerEnd.toString());
      localStorage.setItem('piriforme_obrigado_seen', 'true');
    }

    const updateTimer = () => {
      const now = Date.now();
      const remaining = Math.max(0, Math.floor((timerEnd - now) / 1000));
      setTimeLeft(remaining);

      if (remaining <= 0) {
        setIsExpired(true);
        localStorage.removeItem('piriforme_obrigado_timer_end');
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (isExpired) {
    return (
      <div className="min-h-screen bg-brand-dark text-white flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center shadow-2xl">
          <AlertTriangle className="w-16 h-16 text-brand-secondary mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-4">Esta Oferta Expirou!</h1>
          <p className="text-gray-300 text-sm font-light leading-relaxed mb-8">
            Como esta era uma oportunidade única para leitores do eBook, o desconto especial de R$ 297 por R$ 97 expirou e não está mais disponível.
          </p>
          <button
            onClick={() => window.location.href = '/clinica/'}
            className="w-full py-4 bg-brand-primary hover:bg-opacity-90 text-white rounded-full font-medium transition-all shadow-lg"
          >
            Ir para a Página Oficial
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans overflow-x-hidden relative">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
        
        {/* Top Warning Banner */}
        <div className="bg-brand-secondary/20 border border-brand-secondary/40 rounded-2xl p-3 text-center mb-8 max-w-md mx-auto flex items-center justify-center gap-2.5 animate-pulse">
          <AlertTriangle className="w-4 h-4 text-brand-secondary shrink-0" />
          <p className="text-xs font-semibold text-brand-soft">
            Atenção: Esta oferta única sumirá se você fechar a página.
          </p>
        </div>

        {/* Deliver Notification & Heading */}
        <div className="text-center mb-8">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-semibold">
            ✓ eBook enviado! Verifique seu e-mail.
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight leading-tight">
            Acelere seus resultados <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary via-brand-soft to-brand-secondary">na prática</span>
          </h1>
          <p className="text-white/60 max-w-md mx-auto mt-2 font-light text-sm leading-relaxed">
            Domine o método de descompressão do piriforme na maca com R$ 200 de desconto imediato.
          </p>
        </div>

        {/* Timer Widget */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 max-w-xs mx-auto text-center shadow-xl mb-8">
          <div className="flex items-center justify-center gap-2 mb-1 text-brand-secondary">
            <Timer className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-[0.15em] font-bold">Oferta expira em:</span>
          </div>
          <div className="text-4xl font-bold font-mono tracking-wider text-white">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Main Offer Grid */}
        <div className="grid md:grid-cols-12 gap-6 items-stretch bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Left Column: Core benefits */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white leading-snug mb-3">
                Curso Piriforme na Prática
              </h2>

              <p className="text-white/70 font-light text-xs md:text-sm leading-relaxed mb-4">
                Aprenda a diagnosticar e liberar o piriforme de forma confortável, entregando alívio imediato ao cliente.
              </p>

              <ul className="space-y-2.5">
                {[
                  "Diagnóstico: Ciatalgia vs. Síndrome do Piriforme",
                  "Técnica de liberação muscular profunda na maca",
                  "Uso de pedras quentes para alívio de dor",
                  "Certificado digital de conclusão incluso"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-white/95 text-xs md:text-sm font-light">
                    <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2.5 pt-4 border-t border-white/10">
              <ShieldCheck className="w-8 h-8 text-brand-secondary shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Garantia de 7 dias</p>
                <p className="text-[10px] text-white/50 font-light">Seu investimento está 100% seguro.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing details */}
          <div className="md:col-span-5 bg-white text-gray-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg border border-white/20">
            <div className="text-center mb-4">
              <span className="bg-brand-soft text-brand-dark px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                Desconto Especial
              </span>
              <p className="text-gray-400 text-xs mt-4 line-through">De: R$ 297</p>
              
              <div className="mt-1">
                <span className="text-[10px] font-semibold text-gray-400 block">Por apenas:</span>
                <div className="flex items-center justify-center gap-0.5 text-brand-dark">
                  <span className="text-base font-medium">12x de</span>
                  <span className="text-4xl font-extrabold tracking-tighter">10,27</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5 font-light">ou R$ 97 à vista</p>
              </div>
            </div>

            <div className="space-y-3">
              <a href="https://pay.cakto.com.br/xkzou5i_923465" target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button fullWidth className="py-3 px-4 text-xs font-bold shadow-brand-primary/30 animate-pulse">
                  GARANTIR MINHA VAGA
                </Button>
              </a>

              <div className="flex flex-col items-center gap-1.5">
                <div className="flex items-center gap-1.5 text-gray-400 text-[9px]">
                  <Lock className="w-3 h-3" />
                  <span>Ambiente 100% Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fineprint warning */}
        <p className="text-center text-white/20 text-[9px] mt-6 font-light max-w-sm mx-auto leading-relaxed">
          *Oferta válida apenas para esta página. Caso você saia ou recarregue, o valor retornará ao preço original.
        </p>

      </div>
    </div>
  );
};
