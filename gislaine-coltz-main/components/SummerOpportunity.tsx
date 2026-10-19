import React, { useEffect, useRef, useState } from 'react';
import { Sun, CalendarCheck, TrendingUp } from 'lucide-react';
import { Button } from './Button';

const COURSE_PRICE = 597;
const WEEKS_PER_MONTH = 4;
// Print real dos 4 atendimentos; enquanto for null, a seção aparece só com o texto
const AGENDA_PRINT: string | null = '/images/agenda-4-atendimentos.webp';

const brl = (n: number) =>
  n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

// Anima o número até o valor novo
const useAnimatedNumber = (target: number, duration = 450) => {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (t < 1) raf = requestAnimationFrame(step);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(step);
    return () => { cancelAnimationFrame(raf); fromRef.current = target; };
  }, [target, duration]);
  return value;
};

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}

const Slider: React.FC<SliderProps> = ({ label, value, min, max, step, display, onChange }) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-sm font-medium text-gc-text">{label}</span>
        <span className="text-xl font-bold text-gc-dark tabular-nums">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="gc-range w-full"
        style={{ background: `linear-gradient(to right, #9d6a6b ${pct}%, #eaddd5 ${pct}%)` }}
        aria-label={label}
      />
      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export const SummerOpportunity: React.FC = () => {
  const [price, setPrice] = useState(200);
  const [perDay, setPerDay] = useState(4);
  const [days, setDays] = useState(5);

  const monthly = price * perDay * days * WEEKS_PER_MONTH;
  const summer = monthly * 3;
  const payback = Math.ceil(COURSE_PRICE / price);

  const animatedMonthly = useAnimatedNumber(monthly);
  const animatedSummer = useAnimatedNumber(summer);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="verao" className="py-20 lg:py-28 bg-gc-light relative overflow-hidden">
      <style>{`
        .gc-range { -webkit-appearance: none; appearance: none; height: 8px; border-radius: 999px; outline: none; cursor: pointer; }
        .gc-range::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 26px; height: 26px; border-radius: 50%; background: #fff; border: 3px solid #9d6a6b; box-shadow: 0 4px 12px rgba(157,106,107,.35); transition: transform .15s; }
        .gc-range::-webkit-slider-thumb:active { transform: scale(1.15); }
        .gc-range::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: #fff; border: 3px solid #9d6a6b; box-shadow: 0 4px 12px rgba(157,106,107,.35); }
      `}</style>

      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gc-gold/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gc-primary/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-16 relative z-10">

        {/* Storytelling */}
        <div className={AGENDA_PRINT ? "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20" : "max-w-3xl mx-auto mb-16"}>
          <div className={AGENDA_PRINT ? "text-center lg:text-left" : "text-center"}>
            <span className="inline-flex items-center gap-2 bg-white/80 border border-gc-gold/50 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gc-dark">
              <Sun className="w-4 h-4 text-gc-gold" /> A oportunidade do verão
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gc-text leading-tight mt-5 mb-5">
              O verão é a época em que a <span className="text-gc-dark">agenda de drenagem lota.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Calor, inchaço, retenção de líquido, praia e festas. É quando as clientes mais procuram drenagem e quando aceitam pagar mais por um atendimento bem feito.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              No verão dá para cobrar de <strong className="text-gc-dark">R$ 200 a R$ 300 por atendimento</strong>. Agora imagina isso no mês inteiro.
            </p>
          </div>

          {/* Espaço do print dos 4 atendimentos */}
          {AGENDA_PRINT && (
          <div className="flex justify-center">
            <div className="relative w-full max-w-[340px]">
              <div className="absolute inset-0 bg-gc-gold/30 rounded-[2rem] rotate-3 translate-x-3 translate-y-3" />
              <img src={AGENDA_PRINT} alt="Mensagem de aluna: todo dia tenho alguém, quarta atendi 4" className="relative w-full rounded-[2rem] shadow-2xl border border-gc-primary" loading="lazy" />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-2xl px-5 py-3 flex items-center gap-3 whitespace-nowrap border border-gc-primary">
                <CalendarCheck className="w-5 h-5 text-gc-dark" />
                <span className="text-sm font-semibold text-gc-text">"Quarta atendi 4"</span>
              </div>
            </div>
          </div>
          )}
        </div>

        {/* Calculadora */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-bold text-gc-text">
              Quanto você pode ganhar <span className="text-gc-dark">neste verão?</span>
            </h3>
            <p className="text-gray-500 mt-3">Mexa nos valores e veja na hora.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <div className="bg-white rounded-[2rem] shadow-xl border border-gc-primary p-6 md:p-10 space-y-9">
              <Slider
                label="Valor do atendimento"
                value={price}
                min={150}
                max={300}
                step={10}
                display={brl(price)}
                onChange={setPrice}
              />
              <Slider
                label="Atendimentos por dia"
                value={perDay}
                min={1}
                max={6}
                step={1}
                display={`${perDay}`}
                onChange={setPerDay}
              />
              <Slider
                label="Dias por semana"
                value={days}
                min={3}
                max={6}
                step={1}
                display={`${days}`}
                onChange={setDays}
              />
            </div>

            <div className="rounded-[2rem] p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(150deg, #9d6a6b 0%, #7d5152 55%, #5a3a3b 100%)' }}>
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium mb-2">
                  <TrendingUp className="w-4 h-4" /> Você pode faturar por mês
                </div>
                <p className="text-[2.6rem] sm:text-5xl md:text-6xl font-bold tracking-tight tabular-nums leading-none">
                  {brl(animatedMonthly)}
                </p>
                <p className="text-white/70 text-sm mt-3">
                  {perDay} {perDay === 1 ? 'atendimento' : 'atendimentos'} × {days} dias × 4 semanas
                </p>

                <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/75 text-xs sm:text-sm leading-snug">Nos 3 meses de verão</p>
                    <p className="text-xl sm:text-2xl font-bold tabular-nums mt-1 whitespace-nowrap">{brl(animatedSummer)}</p>
                  </div>
                  <div>
                    <p className="text-white/75 text-xs sm:text-sm leading-snug">O curso se paga com</p>
                    <p className="mt-1 font-bold leading-tight"><span className="text-xl sm:text-2xl">{payback}</span> <span className="text-sm sm:text-base">{payback === 1 ? 'atendimento' : 'atendimentos'}</span></p>
                  </div>
                </div>
              </div>

              <div className="relative mt-8">
                <Button variant="secondary" fullWidth onClick={scrollToPricing} className="hover:scale-105 !text-base md:!text-lg !px-6">
                  Quero aproveitar o verão
                </Button>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            Simulação ilustrativa. O resultado depende da sua agenda, da sua região e da sua dedicação.
          </p>
        </div>
      </div>
    </section>
  );
};
