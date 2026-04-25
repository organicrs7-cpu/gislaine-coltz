import React from 'react';

export interface BrandColors {
  primaryLight: string;   // #eaddd5
  primaryDark: string;    // #9d6a6b
  secondaryPeach: string; // #cea29b
  secondaryLight: string; // #f6f5f2
  accent: string;         // #d8d4c9
}

export interface LinkCardProps {
  type: 'course' | 'booking' | 'social';
  title: string;
  subtitle?: string;
  buttonText: string;
  imageUrl?: string;
  theme: 'light' | 'dark' | 'peach';
  onClick: () => void;
  icon?: React.ReactNode;
  badgeText?: string;
  extraContent?: React.ReactNode;
}