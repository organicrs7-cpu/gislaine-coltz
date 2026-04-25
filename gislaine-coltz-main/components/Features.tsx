import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-gc-gold uppercase tracking-widest mb-2">Por que este curso?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gc-text mb-4">Mais que um curso, uma transformação profissional</h3>
          <p className="text-gray-500">
            Diferente de cursos tradicionais, entregamos um ecossistema completo para você se destacar no mercado de estética.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group p-8 rounded-3xl bg-gc-light hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gc-primary">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-gc-dark" />
                </div>
                <h4 className="text-xl font-bold text-gc-text mb-3">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};