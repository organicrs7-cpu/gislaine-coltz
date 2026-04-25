import React from 'react';
import { IMAGES } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gc-text text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={IMAGES.logo} alt="Gislaine Coltz" className="h-24 opacity-90" />
          <p className="text-sm text-gray-400 text-center md:text-left max-w-xs">
            Transformando vidas e carreiras através da estética de alta performance.
          </p>
        </div>

        <div className="text-sm text-gray-500 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Gislaine Coltz. Todos os direitos reservados.</p>
          <div className="flex gap-4 justify-center md:justify-end mt-2">
            <a href="#" className="hover:text-gc-gold">Termos de Uso</a>
            <a href="#" className="hover:text-gc-gold">Políticas de Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
};