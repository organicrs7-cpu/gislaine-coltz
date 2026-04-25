"use client";
import React from "react";
import { motion } from "framer-motion"; // Using framer-motion as it's the standard package installed usually. If 'motion' was installed it might work too but safer.
import { cn } from "../../lib/utils";

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: any[]; // Flexible type to support images or objects
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map((testimonial, i) => (
                                <div key={i} className="w-full">
                                    {typeof testimonial === 'string' ? (
                                        // If it's a string, assume it's an image URL (our screenshot case)
                                        <div className="rounded-3xl overflow-hidden shadow-lg border border-gc-gold/20">
                                            <img src={testimonial} alt="Feedback" className="w-full h-auto" />
                                        </div>
                                    ) : (
                                        // Existing layout for text testimonials
                                        <div className="p-8 rounded-3xl border border-gc-gold/20 bg-white shadow-lg">
                                            <div className="text-gray-600 leading-relaxed mb-4">{testimonial.content}</div>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="h-10 w-10 rounded-full object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <div className="font-bold text-gc-text text-sm">{testimonial.name}</div>
                                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};
