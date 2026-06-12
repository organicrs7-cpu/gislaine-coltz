import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: "Preciso ter formação prévia na área da saúde ou massagem?",
    answer: "Não é obrigatório, mas o curso é voltado para quem deseja atuar com atendimentos clínicos de dor. É ideal para massoterapeutas (iniciantes ou experientes), fisioterapeutas, esteticistas corporais e terapeutas manuais que buscam um diferencial prático de alto resultado."
  },
  {
    question: "Qual é o papel das Pedras Quentes no protocolo clínico?",
    answer: "As pedras quentes atuam como termoterapia preparatória. O calor relaxa os grandes grupos musculares do glúteo (glúteo máximo e médio), que ficam tensos em cima do piriforme. Isso facilita a descompressão profunda sem a necessidade de cotoveladas ou manobras brutas dolorosas."
  },
  {
    question: "Como funciona o suporte para dúvidas?",
    answer: "Você pode enviar todas as suas dúvidas sobre manobras, testes de diagnóstico ou casos reais de pacientes diretamente na nossa plataforma de estudos, recebendo orientação prática da mentora."
  },
  {
    question: "Por quanto tempo terei acesso ao curso?",
    answer: "Você terá acesso completo a todas as videoaulas, materiais em PDF e futuras atualizações por 1 ano (12 meses) a partir da aprovação do pagamento, podendo assistir no seu próprio ritmo."
  },
  {
    question: "O curso emite Certificado de Conclusão?",
    answer: "Sim! Ao concluir todas as aulas práticas do protocolo, você receberá o seu certificado de extensão do método Piriforme na Prática: Descompressão e Alívio da Dor."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Você pode se inscrever, assistir às aulas teóricas e ver as primeiras demonstrações. Se em até 7 dias você decidir que o método não é para você, basta solicitar o reembolso e devolveremos 100% do valor pago, sem burocracias."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden" id="faq">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-soft to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 max-w-5xl mx-auto">

          {/* Título à esquerda */}
          <div className="lg:w-1/3">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs font-semibold">Dúvidas</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-3 mb-4 leading-tight font-sans">
              Perguntas <span className="italic text-brand-primary">frequentes</span>
            </h2>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Ficou com alguma dúvida específica sobre o protocolo ou formato do curso? Fale diretamente com nosso suporte no WhatsApp.
            </p>
            <a
              href="https://wa.me/5551993909150?text=Olá! Tenho uma dúvida sobre o curso Piriforme na Prática."
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
                      <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-brand-soft/30 pt-4 font-light">
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
