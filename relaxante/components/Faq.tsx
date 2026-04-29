import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: "Preciso ter experiência prévia em massagem?",
    answer: "Não! O curso foi pensado para iniciantes e também para quem já atua. Tudo é ensinado do zero, com explicações claras e demonstrações completas."
  },
  {
    question: "Por quanto tempo tenho acesso ao curso?",
    answer: "O acesso é vitalício. Você pode assistir quantas vezes quiser, no seu ritmo."
  },
  {
    question: "Preciso comprar pedras quentes para começar?",
    answer: "Recomendamos que tenha o kit de pedras para praticar, mas você pode começar assistindo as aulas e adquirir os materiais conforme for aplicando."
  },
  {
    question: "O curso tem certificado?",
    answer: "Sim! Ao concluir todas as aulas, você receberá um certificado de conclusão."
  },
  {
    question: "Como vou receber o acesso?",
    answer: "O acesso será enviado para o seu e-mail imediatamente após a confirmação do pagamento."
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu investimento."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-soft to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 max-w-5xl mx-auto">

          {/* Título à esquerda */}
          <div className="lg:w-1/3">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Dúvidas</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-3 mb-4 leading-tight">
              Perguntas <span className="italic text-brand-primary">frequentes</span>
            </h2>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Ficou com alguma dúvida que não está aqui? Entre em contato pelo WhatsApp.
            </p>
            <a
              href="https://wa.me/5551993909150?text=Olá! Tenho uma dúvida sobre o curso de Massagem Relaxante."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand-primary hover:underline"
            >
              Falar pelo WhatsApp →
            </a>
          </div>

          {/* Accordion à direita */}
          <div className="lg:w-2/3 space-y-3">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === idx
                    ? 'border-brand-primary/40 bg-white shadow-md shadow-brand-soft/30'
                    : 'border-brand-soft/40 bg-white/60 hover:border-brand-primary/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <span className={`font-semibold text-sm transition-colors duration-300 ${openIndex === idx ? 'text-brand-primary' : 'text-brand-dark'}`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === idx ? 'bg-brand-primary text-white' : 'bg-brand-soft text-brand-primary'
                  }`}>
                    {openIndex === idx
                      ? <Minus className="w-3.5 h-3.5" />
                      : <Plus className="w-3.5 h-3.5" />
                    }
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-brand-soft/30 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
