import React from 'react';
import { Gift, Users, Smartphone, MessageCircle, BookOpen } from 'lucide-react';

export const BonusShowcase: React.FC = () => {
    const bonuses = [
        {
            title: "Curso de Detox",
            description: "Aprenda a desintoxicar o organismo e potencializar resultados.",
            value: "R$ 200,00",
            icon: Gift,
            color: "text-gc-dark",
            bg: "bg-gc-primary/30"
        },
        {
            title: "Precificação de Drenagem e Detox",
            description: "Aprenda a precificar e como vender ambos.",
            value: "R$ 300,00",
            icon: Smartphone,
            color: "text-gc-dark",
            bg: "bg-gc-gold/20"
        },
        {
            title: "Ebook Linfonodos",
            description: "Guia completo de todos os linfonodos e sistema linfático.",
            value: "R$ 200,00",
            icon: BookOpen,
            color: "text-gc-dark",
            bg: "bg-gc-accent/40"
        },
        {
            title: "Suporte Direto",
            description: "Tire dúvidas diretamente comigo no WhatsApp.",
            value: "R$ 250,00/h",
            icon: MessageCircle,
            color: "text-gc-dark",
            bg: "bg-gc-primary/30"
        },
        {
            title: "Comunidade VIP",
            description: "Acesso exclusivo à futura comunidade de alunas.",
            value: "Imensurável",
            icon: Users,
            color: "text-gc-dark",
            bg: "bg-gc-gold/20",
            tag: "Em Construção"
        }
    ];

    return (
        <section className="py-24 bg-gc-light relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gc-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gc-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="inline-block py-2 px-4 rounded-full bg-gc-dark text-white font-bold text-sm tracking-widest uppercase mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        BÔNUS EXCLUSIVOS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gc-text mb-6 leading-tight">
                        Leve mais de <span className="text-gc-dark">R$ 1.000,00</span> em bônus <br />
                        <span className="relative inline-block mt-2">
                            <span className="relative z-10 italic font-serif text-gc-dark/80">totalmente de graça</span>
                            <span className="absolute bottom-1 left-0 w-full h-3 bg-gc-gold/30 -rotate-1 rounded-full -z-0"></span>
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Preparei este pacote especial para acelerar seus resultados e garantir que você tenha tudo o que precisa para começar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {bonuses.map((bonus, index) => {
                        const Icon = bonus.icon;
                        return (
                            <div key={index} className="group relative bg-white p-6 rounded-3xl border border-gc-gold/20 shadow-xl hover:shadow-2xl hover:shadow-gc-gold/10 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center h-full">
                                {bonus.tag && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gc-dark text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md tracking-wider uppercase">
                                        {bonus.tag}
                                    </div>
                                )}

                                <div className={`w-16 h-16 ${bonus.bg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <Icon className={`w-8 h-8 ${bonus.color}`} />
                                </div>

                                <h3 className="text-lg font-bold text-gc-text mb-3 leading-snug min-h-[3rem] w-full flex items-center justify-center">{bonus.title}</h3>

                                <p className="text-gray-500 text-xs mb-6 leading-relaxed flex-grow">
                                    {bonus.description}
                                </p>

                                <div className="w-full pt-4 border-t border-dashed border-gray-200 mt-auto">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Valor Individual</p>
                                    <p className={`font-bold text-lg ${bonus.color}`}>
                                        {bonus.value}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
