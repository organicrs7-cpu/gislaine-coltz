import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 text-base shadow-lg";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-opacity-90 hover:shadow-brand-primary/30 border border-transparent",
    secondary: "bg-brand-soft text-brand-dark hover:brightness-95 border border-transparent",
    outline: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-soft/20"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className="w-5 h-5 ml-1" />
    </motion.button>
  );
};