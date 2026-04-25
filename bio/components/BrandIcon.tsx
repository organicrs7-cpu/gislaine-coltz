import React from 'react';
import { BrandColors } from '../types';

export const BrandIcon: React.FC<{ color: string, className?: string }> = ({ color, className }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 27.9 72.1 10 50 10ZM50 82C32.3 82 18 67.7 18 50C18 32.3 32.3 18 50 18C67.7 18 82 32.3 82 50C82 67.7 67.7 82 50 82Z" 
      stroke={color} 
      strokeWidth="2"
    />
    <path 
      d="M65 35H45C39.5 35 35 39.5 35 45V55C35 60.5 39.5 65 45 65H55" 
      stroke={color} 
      strokeWidth="3" 
      strokeLinecap="round"
    />
    <path 
      d="M55 50H65" 
      stroke={color} 
      strokeWidth="3" 
      strokeLinecap="round"
    />
  </svg>
);