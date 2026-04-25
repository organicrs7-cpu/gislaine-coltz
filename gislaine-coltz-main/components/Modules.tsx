import React, { useState } from 'react';
import { MODULES } from '../constants';
import { ChevronDown, BookOpen } from 'lucide-react';

export const Modules: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gc-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">

          {/* Header */}
          <div className="w-full md:w-1/3">
            <div className="sticky top-24">
              <h2 className="text-sm font-bold text-gc-gold uppercase tracking-widest mb-2 text-center md:text-left">Conteúdo Programático</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gc-text mb-6 text-center md:text-left">O que você vai aprender</h3>
              <p className="text-gray-500 mb-8 text-center md:text-left">
                Um treinamento completo, do básico ao avançado, estruturado para você ter segurança em cada atendimento.
              </p>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gc-primary">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="text-gc-dark w-6 h-6" />
                  <span className="font-bold text-gc-text">Certificado Incluso</span>
                </div>
                <p className="text-sm text-gray-500">60 horas de carga horária válida em todo território nacional.</p>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="w-full md:w-2/3 space-y-4">
            {MODULES.map((module, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`text-2xl font-bold ${isOpen ? 'text-gc-dark' : 'text-gray-300'}`}>
                        {module.number}
                      </span>
                      <h4 className="text-lg md:text-xl font-bold text-gc-text">{module.title}</h4>
                    </div>
                    <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 pl-6 md:p-6 md:pl-20 text-gray-500 border-l-2 border-gc-primary ml-4 md:ml-8 mb-6 text-sm md:text-base">
                      {module.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};