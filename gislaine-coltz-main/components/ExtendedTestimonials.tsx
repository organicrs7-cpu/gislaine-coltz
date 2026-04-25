import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const FEEDBACKS = [
    "/images/testimonials/feedback-1.png",
    "/images/testimonials/feedback-2.png",
    "/images/testimonials/feedback-3.png",
    "/images/testimonials/feedback-4.png",
    "/images/testimonials/feedback-5.png",
    "/images/testimonials/feedback-6.png",
    "/images/testimonials/feedback-7.png",
    "/images/testimonials/feedback-8.png",
    "/images/testimonials/feedback-9.png",
];

export const ExtendedTestimonials: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            const currentScroll = scrollRef.current.scrollLeft;
            const targetScroll = direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount;

            scrollRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 bg-gc-light relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#233e2f 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}>
            </div>

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-6">
                        <MessageCircle className="w-6 h-6 text-gc-gold mr-2" />
                        <span className="text-gc-dark font-medium uppercase tracking-wider text-sm">Resultados Reais</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gc-text mb-6">
                        Mais <span className="text-gc-gold">Feedbacks</span> de Alunas
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Confira o que as alunas estão dizendo sobre a transformação que o curso trouxe para suas carreiras.
                    </p>
                </div>

                <div className="relative group">
                    <button
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center text-gc-dark hover:bg-gc-gold hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-100"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center text-gc-dark hover:bg-gc-gold hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-100"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {FEEDBACKS.map((src, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[280px] md:w-[320px] snap-center"
                            >
                                <div className="relative bg-white p-2 rounded-3xl shadow-lg border-2 border-white transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-200 rounded-b-lg z-10"></div>
                                    <img
                                        src={src}
                                        alt={`Feedback aluna ${index + 1}`}
                                        className="w-full h-auto rounded-2xl cursor-pointer"
                                        onClick={() => window.open(src, '_blank')}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style>{`
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
      `}</style>
        </section>
    );
};
