import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como vou receber a tabela?",
      a: "O envio é 100% automático e imediato. Logo após a aprovação do pagamento (PIX ou cartão de crédito), você receberá os dados de acesso diretamente no seu e-mail cadastrado."
    },
    {
      q: "O material é digital ou físico?",
      a: "Ele é 100% digital (em formato PDF de alta resolução). Isso permite que você o consulte de forma rápida e prática direto no celular, tablet ou computador na maca do paciente. Caso prefira, você também pode imprimir o arquivo."
    },
    {
      q: "Para quem é indicado?",
      a: "Massoterapeutas, fisioterapeutas, profissionais da maca e estudantes da área da saúde que realizam avaliação clínica e querem mais segurança para identificar disfunções ortopédicas ou neurológicas."
    },
    {
      q: "O pagamento é único ou mensal?",
      a: "O pagamento é único. Você paga apenas R$ 37,00 (ou parcelado) e tem acesso completo à tabela e a qualquer atualização futura do material, sem nenhuma mensalidade ou taxa recorrente."
    },
    {
      q: "E se eu não gostar do material?",
      a: "Não se preocupe. Nós oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que a tabela não agrega valor ao seu trabalho, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section ref={ref} className="py-20 bg-brand-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <HelpCircle className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight">Dúvidas Frequentes</h2>
          <p className="text-white/60 font-light mt-2 text-sm leading-relaxed">
            Selecione as perguntas abaixo para esclarecer suas dúvidas sobre a Tabela de Testes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 transform ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-semibold text-sm md:text-base hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-secondary shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-secondary shrink-0" />
                  )}
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease, opacity 0.3s ease',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="p-5 md:p-6 pt-0 text-white/70 font-light text-xs md:text-sm leading-relaxed border-t border-white/5">
                    {faq.a}
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
