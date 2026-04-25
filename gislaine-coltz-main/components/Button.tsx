import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  // Increased hover:scale to 110 and added hover:shadow-2xl for more pronounced effect
  const baseStyle = "px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl shadow-lg text-lg flex items-center justify-center gap-2 active:scale-95";
  
  const variants = {
    primary: "bg-gc-dark text-white hover:bg-[#8a5d5e] hover:shadow-gc-dark/40",
    secondary: "bg-gc-gold text-white hover:bg-[#c2968f] hover:shadow-gc-gold/40",
    outline: "border-2 border-gc-dark text-gc-dark hover:bg-gc-dark hover:text-white hover:shadow-lg"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};