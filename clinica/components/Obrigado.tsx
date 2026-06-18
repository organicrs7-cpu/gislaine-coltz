import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, CreditCard, Smartphone, Timer, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Obrigado: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes in seconds
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    // 1. Check if the offer has already been viewed/expired on a previous session
    const hasViewed = localStorage.getItem('piriforme_obrigado_seen');
    const timerEndStr = localStorage.getItem('piriforme_obrigado_timer_end');

    if (hasViewed && !timerEndStr) {
      // If they viewed it and the timer is cleared, it's expired
      setIsExpired(true);
      return;
    }

    let timerEnd = 0;
    if (timerEndStr) {
      timerEnd = parseInt(timerEndStr, 10);
    } else {
      // First time loading the page: set the end time (10 minutes from now)
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
        localStorage.removeItem('piriforme_obrigado_timer_end'); // Clear timer end so it remains expired
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time (MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleGoToNormalSite = () => {
    window.location.href = '/clinica/';
  };

  if (isExpired) {
    return (
      <div className="min-h-screen bg-brand-dark text-white flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center shadow-2xl">
          <AlertTriangle className="w-16 h-16 text-brand-secondary mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-4">Esta Oferta Expirou!</h1>
          <p className="text-gray-300 text-sm font-light leading-relaxed mb-8">
            Como esta era uma oportunidade única e de tempo limitado para leitores do eBook, o desconto especial de R$ 297 por R$ 97 expirou e não está mais disponível.
          </p>
          <button
            onClick={handleGoToNormalSite}
            className="w-full py-4 bg-brand-primary hover:bg-opacity-90 text-white rounded-full font-medium transition-all shadow-lg"
          >
            Acessar Página Oficial do Curso
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans overflow-x-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
        
        {/* Top bar warning */}
        <div className="bg-brand-secondary/20 border border-brand-secondary/40 rounded-2xl p-4 text-center mb-10 max-w-2xl mx-auto flex items-center justify-center gap-3 animate-pulse">
          <AlertTriangle className="w-5 h-5 text-brand-secondary shrink-0" />
          <p className="text-xs md:text-sm font-semibold text-brand-soft">
            ATENÇÃO: Oportunidade única. Se você fechar esta página, esta oferta sumirá para sempre.
          </p>
        </div>

        {/* Ebook Delivery Confirmation */}
        <div className="text-center mb-12">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            ✓ Seu Ebook foi enviado por e-mail!
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-6 tracking-tight leading-tight">
            Mas espere... <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary via-brand-soft to-brand-secondary">Quer acelerar seus resultados?</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto mt-4 font-light text-sm md:text-base leading-relaxed">
            Você acabou de dar o primeiro passo com o eBook. Agora, você tem a chance única de dominar o protocolo prático completo na maca com <strong>R$ 200,00 de desconto imediato</strong>.
          </p>
        </div>

        {/* Countdown Timer Widget */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 max-w-xl mx-auto text-center shadow-xl mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 text-brand-secondary">
            <Timer className="w-5 h-5 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold">Esta oferta expira em:</span>
          </div>
          <div className="text-5xl md:text-6xl font-bold font-mono tracking-wider text-white select-none">
            {formatTime(timeLeft)}
          </div>
          <p className="text-xs text-white/40 mt-3 font-light">
            Não atualize a página. O cronômetro continuará correndo.
          </p>
        </div>

        {/* Product Offer Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle light effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-10 rounded-full blur-[80px] -mr-16 -mt-16"></div>

          {/* Left Column: Course details */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Curso Piriforme na Prática <br />
              <span className="text-brand-secondary font-medium text-lg">Método Clínico de Descompressão Sem Dor</span>
            </h2>

            <p className="text-white/70 font-light text-sm leading-relaxed">
              O eBook é excelente para introduzir a teoria, mas a prática clínica exige segurança palpatória. Neste curso prático em vídeo, você aprenderá exatamente como tocar, diagnosticar e aplicar as pedras quentes para descompressão profunda sem machucar suas mãos.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "Demonstração em vídeo de testes ortopédicos precisos",
                "Passo a passo da termoterapia com Pedras Quentes",
                "Manobras detalhadas de liberação miofascial sem dor",
                "Ajustes articulares de quadril para alívio definitivo",
                "Certificado de Conclusão incluso para valorizar sua sessão",
                "Suporte direto para dúvidas com a mentora"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 text-sm font-light">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <ShieldCheck className="w-10 h-10 text-brand-secondary shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Risco Zero: Garantia Incondicional de 7 Dias</p>
                <p className="text-[11px] text-white/50 font-light">Assista às primeiras aulas. Se não gostar, devolvemos 100% do seu dinheiro.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Checkout */}
          <div className="md:col-span-5 bg-white text-gray-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl border border-white/20 self-stretch">
            <div className="text-center">
              <span className="bg-brand-soft text-brand-dark px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Oportunidade Única
              </span>
              <p className="text-gray-400 text-xs mt-4 line-through">Preço Normal: R$ 297,00</p>
              
              <div className="mt-2 mb-4">
                <span className="text-xs font-semibold block text-gray-500">Por Apenas:</span>
                <div className="flex items-center justify-center gap-1 text-brand-dark">
                  <span className="text-2xl font-medium">12x de</span>
                  <span className="text-5xl font-bold tracking-tighter">10,27</span>
                </div>
                <p className="text-sm text-gray-500 mt-1 font-light">ou R$ 97,00 à vista</p>
              </div>
            </div>

            <div className="space-y-4">
              <a href="https://pay.cakto.com.br/xkzou5i_923465" target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button fullWidth className="py-4 text-base font-bold shadow-brand-primary/40 animate-pulse">
                  QUERO MINHA VAGA COM DESCONTO
                </Button>
              </a>

              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1.5 text-gray-400 text-[10px]">
                  <Lock className="w-3 h-3" />
                  <span>Pagamento 100% Seguro</span>
                </div>
                <div className="flex gap-2 grayscale opacity-40">
                  <CreditCard className="w-5 h-5" />
                  <Smartphone className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Warning */}
        <p className="text-center text-white/30 text-xs mt-8 font-light max-w-xl mx-auto leading-relaxed">
          *Esta promoção especial não está disponível no site público ou em outras páginas de venda de Gislaine Coltz. Ela é válida somente nesta página por 10 minutos. Ao sair desta página, o valor retornará a R$ 297,00.
        </p>

      </div>
    </div>
  );
};
