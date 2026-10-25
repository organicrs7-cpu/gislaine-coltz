import React from 'react';

const CHECKOUT_URL = 'https://pay.cakto.com.br/vc4xgmu_678676';

const hojeBR = () =>
  new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', timeZone: 'America/Sao_Paulo' });

export const Header: React.FC = () => {
  const hoje = hojeBR();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#1f1213] text-white text-center px-4 py-2.5 shadow-md hover:bg-black transition-colors"
      >
        <span className="text-xs sm:text-sm font-medium leading-snug">
          <span className="inline-block bg-gc-gold text-[#1f1213] font-bold uppercase tracking-wider text-[10px] sm:text-xs px-2 py-0.5 rounded mr-2 align-middle">
            Black
          </span>
          <strong>Acesso vitalício</strong> ao curso de Drenagem.{' '}
          <span className="text-gc-gold font-semibold whitespace-nowrap">Válido só até hoje, {hoje}.</span>
        </span>
      </a>
    </header>
  );
};
