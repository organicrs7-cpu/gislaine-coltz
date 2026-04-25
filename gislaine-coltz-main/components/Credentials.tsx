import React from 'react';

export const Credentials: React.FC = () => {
    return (
        <section className="py-20 bg-gc-dark relative overflow-hidden">
            {/* Texture/Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}>
            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gc-gold/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gc-gold/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-gc-gold font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                        Qualidade Comprovada
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Certificações <span className="text-gc-gold">Internacionais</span>
                    </h3>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                        Nossa metodologia e empresa são reconhecidas por órgãos internacionais, garantindo a você um ensino de excelência e validade global.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">

                    {/* Badge 1 */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gc-gold/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-full transform transition-transform duration-500 group-hover:scale-105 group-hover:border-gc-gold/50">
                            <img
                                src="/images/credentials/seal-therapist.png"
                                alt="Terapeuta Credenciada Internacionalmente"
                                className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
                            />
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-gc-gold font-bold text-lg uppercase tracking-wide">Terapeuta Credenciada</p>
                            <p className="text-gray-400 text-sm">RRTH-PT Portugal</p>
                        </div>
                    </div>

                    {/* Divider (only on desktop) */}
                    <div className="hidden md:block w-px h-40 bg-gradient-to-b from-transparent via-gc-gold/50 to-transparent"></div>

                    {/* Badge 2 */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gc-gold/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-full transform transition-transform duration-500 group-hover:scale-105 group-hover:border-gc-gold/50">
                            <img
                                src="/images/credentials/seal-company.png"
                                alt="Empresa Credenciada Internacionalmente"
                                className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
                            />
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-gc-gold font-bold text-lg uppercase tracking-wide">Empresa Credenciada</p>
                            <p className="text-gray-400 text-sm">RPC-PT Portugal</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
