import React from 'react';

const CHECKOUT_URL = 'https://pay.cakto.com.br/vc4xgmu_678676';

export const Header: React.FC = () => {

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
            Novidade
          </span>
          <strong>4x de R$ 121,50 sem juros no Pix.</strong>{' '}
          <span className="text-gc-gold font-semibold">Sem usar o limite do cartão.</span>
        </span>
      </a>
    </header>
  );
};
