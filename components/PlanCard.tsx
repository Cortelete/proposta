
import React from 'react';
import type { Plan } from '../types';
import { createWhatsAppLink } from '../constants';

interface PlanCardProps {
  plan: Plan;
  onFeatureClick: (feature: { text: string; details?: React.ReactNode }) => void;
  onShowDetailsClick: () => void;
  onWhatsAppClick: (url: string) => void;
  className?: string;
}

const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const CrossIcon = () => (
    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);

const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 group-hover:text-[var(--text-primary)] transition-colors" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
);

const PlanCard: React.FC<PlanCardProps> = ({ plan, onFeatureClick, onShowDetailsClick, onWhatsAppClick, className = '' }) => {
  return (
    <div
      className={`shine-effect rounded-3xl p-6 md:p-8 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 ${className}`}
      style={{ '--plan-color': plan.color } as React.CSSProperties}
    >
      <div className="flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold mb-1 plan-title-hover" style={{ color: plan.color }}>{plan.title}</h3>
        <p className="text-[var(--text-secondary)] mb-6 title-hover cursor-default">{plan.subtitle}</p>

        <div className="mb-8">
          <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">{plan.price}</span>
          <span className="text-[var(--text-secondary)] ml-2">{plan.priceDetails}</span>
        </div>

        <ul className="space-y-4 mb-8 hidden md:block">
          {plan.features.map((feature) => (
            <li key={feature.text} className="flex items-center group">
              <span className="mr-3 flex-shrink-0">
                {feature.included ? <CheckIcon /> : <CrossIcon />}
              </span>
              <span className={`flex-1 ${feature.included ? 'text-[var(--text-primary)]' : 'text-gray-500 line-through'}`}>{feature.text}</span>
              {feature.details && (
                <button
                  onClick={() => onFeatureClick(feature)}
                  className="ml-2 p-1 rounded-full hover:bg-white/10 transition-colors"
                  aria-label={`Mais detalhes sobre ${feature.text}`}
                >
                  <InfoIcon />
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={onShowDetailsClick}
        className="shine-overlay block md:hidden w-full text-center text-base font-bold py-3 rounded-xl transition-all duration-300 ease-in-out bg-white/10 hover:bg-white/20 text-[var(--text-primary)] mb-4"
      >
        Ver Detalhes
      </button>

      <button
        onClick={() => onWhatsAppClick(createWhatsAppLink(`Olá, Davi! Tenho interesse em contratar o ${plan.title}. Poderíamos conversar sobre os próximos passos?`))}
        className="shine-overlay block w-full text-center text-base sm:text-lg font-bold py-3 rounded-xl transition-all duration-300 ease-in-out text-gray-900 hover:scale-105"
        style={{ backgroundColor: plan.color, boxShadow: `0 4px 20px -5px ${plan.color}80` }}
      >
        Contratar Agora
      </button>
    </div>
  );
};

export default PlanCard;