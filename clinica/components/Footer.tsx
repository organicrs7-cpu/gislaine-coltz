import React from 'react';
import { useInView } from '../hooks/useInView';

export const Footer: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <footer className="bg-brand-dark text-brand-soft py-12 border-t border-brand-primary/20">
      <div
        ref={ref}
        className="container mx-auto px-4 text-center"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">Gislaine Coltz</h3>
        <p className="opacity-60 text-sm mb-8 max-w-md mx-auto">
          Transformando vidas e carreiras através do método Piriforme na Prática.
        </p>
        <div className="text-xs opacity-40">
          &copy; {new Date().getFullYear()} Gislaine Coltz. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
