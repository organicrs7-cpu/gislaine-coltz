import React, { useState } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const brl = (value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

export const EarningsCalculator: React.FC = () => {
  const [price, setPrice] = useState(150);
  const [appointments, setAppointments] = useState(2);
  const [days, setDays] = useState(3);
  const monthly = price * appointments * days * 4;
  const sliders = [
    { id: 'session-price', label: 'Valor por atendimento', value: price, min: 50, max: 500, step: 10, display: brl(price), change: setPrice },
    { id: 'appointments', label: 'Atendimentos por dia', value: appointments, min: 1, max: 8, step: 1, display: String(appointments), change: setAppointments },
    { id: 'days', label: 'Dias por semana', value: days, min: 1, max: 7, step: 1, display: String(days), change: setDays },
  ];
  return (
    <section className="detox-calculator" aria-labelledby="calculator-title">
      <div className="container mx-auto px-6">
        <div className="detox-section-heading">
          <span className="detox-eyebrow">FAÇA AS CONTAS</span>
          <h2 id="calculator-title">Quanto seus atendimentos<br /><em>podem render?</em></h2>
          <p>Ajuste o valor da sessão e a sua agenda.</p>
        </div>
        <div className="detox-calculator-grid">
          <div className="detox-calculator-inputs">
            {sliders.map(slider => (
              <div key={slider.id}>
                <div className="detox-slider-label"><label htmlFor={slider.id}>{slider.label}</label><output htmlFor={slider.id}>{slider.display}</output></div>
                <input id={slider.id} type="range" min={slider.min} max={slider.max} step={slider.step} value={slider.value} aria-valuetext={slider.display} onChange={event => slider.change(Number(event.target.value))} />
                <div className="detox-slider-limits"><span>{slider.id === 'session-price' ? brl(slider.min) : slider.min}</span><span>{slider.id === 'session-price' ? brl(slider.max) : slider.max}</span></div>
              </div>
            ))}
          </div>
          <div className="detox-calculator-result">
            <div aria-live="polite" aria-atomic="true">
              <p className="detox-result-label"><TrendingUp size={18} /> Faturamento bruto mensal estimado</p>
              <strong className="detox-monthly">{brl(monthly)}</strong>
              <p className="detox-formula">{brl(price)} × {appointments} atend./dia × {days} dias × 4 semanas</p>
              <div className="detox-result-details"><div><span>Por atendimento</span><strong>{brl(price)}</strong></div><div><span>Em 3 meses</span><strong>{brl(monthly * 3)}</strong></div></div>
            </div>
            <a href="#pricing" className="detox-secondary">Quero aprender o protocolo <ArrowRight size={18} /></a>
          </div>
        </div>
        <p className="detox-calculator-note">Simulação ilustrativa com meses de 4 semanas. Valores antes de custos, impostos e despesas; não representam lucro nem garantia de renda.</p>
        <div className="detox-body-care">
          <span className="detox-eyebrow">CUIDADO CORPORAL</span>
          <h3>Suas clientes buscam reduzir medidas?</h3>
          <p>Da aparência da cintura ao cuidado corporal: entenda os objetivos de cada cliente e valorize uma experiência de atendimento individualizada. A redução de medidas e de gordura depende da avaliação e dos tratamentos indicados para cada caso; não é um resultado garantido deste protocolo.</p>
        </div>
      </div>
    </section>
  );
};
