import React from 'react';
import { useInView } from '../hooks/useInView';
import { Layers, MapPin, Eye, CheckCircle } from 'lucide-react';

export const TabelaInfo: React.FC = () => {
  const { ref, isInView } = useInView();

  const regions = [
    { name: "Ombro", tests: "Neer, Hawkins-Kennedy, Queda do Braço, Yergason" },
    { name: "Cotovelo", tests: "Cozen, Mill, Esforço em Varo/Valgo" },
    { name: "Punho & Mão", tests: "Phalen, Sinal de Tinel, Finkelstein" },
    { name: "Coluna Cervical", tests: "Compressão de Spurling, Tração Cervical, Distração" },
    { name: "Coluna Lombar", tests: "Lasègue (Elevação da Perna Estendida), Slump Test, Bragard" },
    { name: "Quadril", tests: "Patrick-Fabere, Thomas, Trendelenburg" },
    { name: "Joelho", tests: "Lachman, Gaveta Anterior/Posterior, McMurray, Patela" },
    { name: "Tornozelo & Pé", tests: "Gaveta Anterior, Thompson (Tênis), Compressão Lateral" }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-surface relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            O Conteúdo Completo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
            Como a Tabela de Testes vai organizar sua rotina de atendimento
          </h2>
          <p className="text-gray-500 font-light mt-4 text-sm md:text-base leading-relaxed">
            Esqueça explicações acadêmicas complexas. A tabela traz o passo a passo resumido e esquematizado de tudo o que você precisa fazer na frente do paciente.
          </p>
        </div>

        {/* Mapped regions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className={`bg-white border border-brand-soft hover:border-brand-secondary/40 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-500 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-secondary" />
                <h3 className="font-bold text-brand-dark text-base">{region.name}</h3>
              </div>
              <p className="text-gray-500 font-light text-xs leading-relaxed">{region.tests}</p>
            </div>
          ))}
        </div>

        {/* 4 Pillars detail */}
        <div className="bg-white border border-brand-soft rounded-3xl p-8 md:p-12 shadow-md">
          <h3 className="text-xl md:text-2xl font-bold text-brand-dark text-center mb-10">
            Mapeamento de 4 Etapas Cruciais por Teste
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin className="w-6 h-6 text-brand-primary" />,
                title: "1. Indicação Precisa",
                desc: "Descubra qual disfunção clínica ou lesão o teste visa diagnosticar logo de partida."
              },
              {
                icon: <Layers className="w-6 h-6 text-brand-primary" />,
                title: "2. Execução Direta",
                desc: "Como posicionar o paciente e onde aplicar suas mãos passo a passo na maca."
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-brand-primary" />,
                title: "3. Resposta Positiva",
                desc: "Quais sinais (dor, dormência, crepitação) indicam que o teste deu positivo."
              },
              {
                icon: <Eye className="w-6 h-6 text-brand-primary" />,
                title: "4. Demonstração Visual",
                desc: "Esquemas gráficos que facilitam entender o vetor de força e posicionamento."
              }
            ].map((pillar, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-12 h-12 rounded-xl bg-brand-soft/50 flex items-center justify-center mb-4 text-brand-primary shrink-0">
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-brand-dark text-base mb-2">{pillar.title}</h4>
                <p className="text-gray-500 font-light text-xs md:text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
