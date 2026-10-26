import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Results: React.FC = () => (
  <section id="resultados" className="detox-results" aria-labelledby="results-title">
    <div className="container mx-auto px-6">
      <div className="detox-section-heading">
        <span className="detox-eyebrow">PROTOCOLO DETOX</span>
        <h2 id="results-title">Resultados <em>do método</em></h2>
        <p>Confira os registros compartilhados pela Gi.</p>
      </div>
      <div className="detox-results-grid">
        {[1, 2].map(number => (
          <figure key={number} className="detox-result-photo">
            <a href={`/detox/images/resultados/resultado-detox-${number}.jpeg`} target="_blank" rel="noopener noreferrer" aria-label={`Abrir registro ${number} do resultado do método em tamanho original`}>
              <img src={`/detox/images/resultados/resultado-detox-${number}.jpeg`} alt={`Comparação fotográfica ${number} da região abdominal, compartilhada pela Gi como resultado do Protocolo Detox`} width={900} height={1600} loading="lazy" />
              <span>Ver imagem completa <ArrowUpRight size={18} /></span>
            </a>
          </figure>
        ))}
      </div>
      <p className="detox-calculator-note">Resultados individuais podem variar. As imagens não representam garantia de resultado.</p>
    </div>
  </section>
);
