
import type { ReactNode } from 'react';

export interface Feature {
  text: string;
  included: boolean;
  details?: ReactNode;
}

export interface Plan {
  title: string;
  subtitle:string;
  price: string;
  priceDetails: string;
  color: string;
  features: Feature[];
}

export interface ModalContent {
    title: string;
    content: ReactNode;
}

export type Theme = 'light' | 'dark';
