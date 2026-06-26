import React from 'react';
import { Phone, MapPin, ShieldCheck, CreditCard } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-surface py-12 border-t border-brand-soft">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 items-start text-center md:text-left">
          {/* Logo / Brand */}
          <div className="space-y-3">
            <span className="text-[#9d6a6b] font-bold text-lg tracking-[0.2em] block">
              GISLAINE COLTZ
            </span>
            <p className="text-gray-500 font-light text-xs leading-relaxed">
              Mapeando testes neurológicos e ortopédicos de forma prática para alavancar a segurança do terapeuta clínico na maca.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wider">Suporte & Atendimento</h4>
            <a href="tel:+5551999596176" className="flex items-center gap-2 hover:text-[#cea29b] text-gray-600 transition-colors text-xs">
              <Phone size={14} className="text-[#9d6a6b]" />
              <span>(51) 99959-6176</span>
            </a>
            <div className="flex items-start gap-2 hover:text-[#cea29b] text-gray-600 transition-colors text-xs max-w-[240px]">
              <MapPin size={14} className="text-[#9d6a6b] mt-0.5 shrink-0" />
              <span>Rua Fialho de Vargas, 49 - Sala 403, Lajeado - RS</span>
            </div>
          </div>

          {/* Secure seals */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wider">Segurança</h4>
            <div className="flex items-center gap-2 text-gray-600 text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Plataforma de Pagamento Segura</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-xs">
              <CreditCard className="w-5 h-5 text-brand-primary" />
              <span>PIX, Cartão e Boleto</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-soft text-center text-gray-400 text-[10px] space-y-2">
          <p>© 2026 Gislaine Coltz. Todos os direitos reservados. CNPJ: 50.123.456/0001-89 (Exemplo)</p>
          <p className="max-w-2xl mx-auto opacity-70 leading-relaxed">
            Aviso Legal: Os resultados podem variar de pessoa para pessoa. As informações aqui contidas não substituem a avaliação profissional de médicos ou fisioterapeutas habilitados.
          </p>
        </div>
      </div>
    </footer>
  );
};
