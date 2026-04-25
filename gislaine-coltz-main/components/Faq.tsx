import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gc-light">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-gc-gold uppercase tracking-widest mb-2">Tira Dúvidas</h2>
          <h2 className="text-3xl font-bold text-gc-text">Perguntas Frequentes</h2>
        </div>
        
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md' : 'hover:shadow'}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-gc-dark' : 'text-gc-text group-hover:text-gc-dark'}`}>
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-gc-primary/30' : 'bg-gc-light group-hover:bg-gc-primary/20'}`}>
                    <ChevronDown 
                      className={`w-5 h-5 text-gc-dark transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-gray-500 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};