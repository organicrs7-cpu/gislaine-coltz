import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => (
  <section id="inicio" className="detox-hero">
    <div className="detox-hero-inner">
      <div className="detox-hero-copy">
        <div className="detox-badges"><span>CURSO ONLINE</span></div>
        <h1>Protocolo Detox.<br /><em>Valorize cada<br />atendimento.</em></h1>
        <p>Aprenda com a Gi o passo a passo do <strong>Detox com Manta Térmica.</strong></p>
        <div className="detox-hero-actions">
          <a className="detox-primary" href="#pricing">Quero aprender por R$ 67 <ArrowRight size={19} /></a>
        </div>
      </div>
      <div className="detox-hero-visual">
        <div className="detox-photo-frame detox-portrait"><img src="/detox/images/gislaine-jaleco-sem-fundo.webp" alt="Gislaine Coltz de jaleco, professora do Protocolo Detox" fetchPriority="high" /></div>
      </div>
    </div>
  </section>
);
