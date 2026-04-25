import React from 'react';

export interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface PricingProps {
  price: string;
  installments?: string;
}