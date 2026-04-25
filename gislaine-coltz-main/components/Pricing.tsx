import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Check, ShieldCheck, Zap, Lock, CreditCard, Clock, BookOpen, Star } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [currentDateFormatted, setCurrentDateFormatted] = useState('');

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    setCurrentDateFormatted(date.toLocaleDateString('pt-BR', options));

    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay.getTime() - now.getTime();

      if (diff > 0) {
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gc-primary/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gc-text mb-4 text-center">
              Investimento Inteligente
            </h2>
            <p className="text-xl text-gray-500 text-center">
              Sua carreira de sucesso começa com uma decisão simples hoje.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">

            {/* Left Column: Everything Included */}
            <div className="w-full lg:w-1/2 bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl shadow-gc-primary/10 border border-gc-primary/30 flex flex-col relative z-10 transition-transform hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-bold text-gc-text mb-2 text-center lg:text-left">Resumo do Pacote</h3>
              <p className="text-gray-400 mb-8 text-center lg:text-left">Tudo que você precisa para começar</p>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-center py-4 border-b border-gray-100 gap-2 text-center md:text-left">
                  <span className="flex items-center gap-2 font-medium text-gray-700">
                    <Check className="w-5 h-5 text-gc-gold shrink-0" /> Formação Completa em Drenagem
                  </span>
                  <span className="font-bold text-gray-900 whitespace-nowrap">R$ 997,00</span>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center md:items-center py-4 border-b border-gray-100 bg-gc-primary/20 -mx-4 px-4 rounded-lg gap-2 text-center md:text-left">
                  <span className="flex items-center gap-2 font-medium text-gray-700">
                    <Star className="w-5 h-5 text-gc-dark shrink-0" /> Certificado Internacional
                  </span>
                  <span className="font-bold text-gc-dark whitespace-nowrap">Imensurável</span>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center md:items-center py-4 border-b border-gray-100 bg-gc-light -mx-4 px-4 rounded-lg gap-2 text-center md:text-left">
                  <span className="flex items-center gap-2 font-medium text-gray-700">
                    <Zap className="w-5 h-5 text-gc-gold shrink-0" /> Bônus: Curso de Detox
                  </span>
                  <span className="font-bold text-gc-gold whitespace-nowrap">R$ 200,00</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-center py-4 border-b border-gray-100 bg-gc-light -mx-4 px-4 rounded-lg gap-2 text-center md:text-left">
                  <span className="flex items-center gap-2 font-medium text-gray-700">
                    <Zap className="w-5 h-5 text-gc-gold shrink-0" /> Bônus: Precificação de Drenagem e Detox
                  </span>
                  <span className="font-bold text-gc-gold whitespace-nowrap">R$ 300,00</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-center py-3 border-b border-gray-100 bg-gc-accent/30 -mx-4 px-4 rounded-lg gap-2 text-center md:text-left">
                  <span className="flex items-center gap-2 font-medium text-gray-700">
                    <BookOpen className="w-5 h-5 text-gray-600 shrink-0" /> Bônus: Ebook Linfonodos
                  </span>
                  <span className="font-bold text-gray-600 whitespace-nowrap">R$ 200,00</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-center py-4 border-b border-gray-100 bg-gc-primary/20 -mx-4 px-4 rounded-lg gap-2 text-center md:text-left">
                  <span className="flex items-center gap-2 font-medium text-gray-700">
                    <Zap className="w-5 h-5 text-gc-dark shrink-0" /> Bônus: Suporte + Comunidade
                  </span>
                  <span className="font-bold text-gc-dark whitespace-nowrap">Imensurável</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-dashed border-gray-300 text-center md:text-left">
                <span className="text-lg font-bold text-gray-500">Valor Total Entregue:</span>
                <span className="text-2xl font-bold text-gray-400 line-through">R$ 1.947,00+</span>
              </div>
            </div>

            {/* Right Column: Pricing Card (Tech Style) */}
            <div className="w-full lg:w-1/2 relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gc-gold to-gc-dark rounded-[2rem] blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

              <div className="relative h-full bg-gc-dark text-white rounded-[1.8rem] p-8 lg:p-12 flex flex-col justify-between shadow-2xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center text-center">

                  {/* Countdown Badge */}
                  <div className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-8 flex flex-col items-center animate-pulse">
                    <div className="flex items-center gap-2 text-gc-gold font-bold uppercase tracking-widest text-xs mb-2">
                      <Clock className="w-4 h-4" /> Oferta por Tempo Limitado
                    </div>
                    <div className="text-white font-mono text-lg md:text-xl font-bold">
                      Termina em: {formatTime(timeLeft.hours)}h {formatTime(timeLeft.minutes)}m {formatTime(timeLeft.seconds)}s
                    </div>
                    <p className="text-gray-300 text-xs mt-1">
                      Válido até hoje, {currentDateFormatted}
                    </p>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-2">Acesso por 1 Ano</h3>
                  <p className="text-gray-300 text-sm mb-10 max-w-sm mx-auto">Garanta sua vaga com as condições especiais de lançamento.</p>

                  <div className="mb-10 w-full bg-white/5 rounded-2xl p-6 border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
                      <span className="text-lg text-gray-400 pb-2">12x de</span>
                      <span className="text-6xl font-bold tracking-tighter text-white">69,41</span>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">ou R$ 597,00 à vista</p>
                  </div>

                  <Button
                    fullWidth
                    className="!bg-gc-primary !text-gc-text hover:!bg-white border-0 text-xl py-6 font-bold shadow-[0_0_40px_rgba(255,255,255,0.1)] mb-8 transform hover:scale-105 transition-all"
                    onClick={() => window.open("https://pay.cakto.com.br/3f9wss5", "_blank")}
                  >
                    QUERO GARANTIR MINHA VAGA
                  </Button>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs text-gray-400 w-full max-w-sm mx-auto">
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <Lock className="w-4 h-4 text-gc-gold" /> Pagamento Seguro
                    </div>
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <Zap className="w-4 h-4 text-gc-gold" /> Acesso Imediato
                    </div>
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <ShieldCheck className="w-4 h-4 text-gc-gold" /> Garantia de 7 Dias
                    </div>
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <CreditCard className="w-4 h-4 text-gc-gold" /> Pix ou Cartão
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section >
  );
};