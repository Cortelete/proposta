import React from 'react';
import type { Plan } from '../types';
import { createWhatsAppLink } from '../constants';

interface PlanCardProps {
  plan: Plan;
  onShowDetailsClick: () => void;
  onWhatsAppClick: (url: string) => void;
  className?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onShowDetailsClick, onWhatsAppClick, className = '' }) => {
  return (
    <div
      onClick={onShowDetailsClick}
      className={`shine-effect rounded-3xl p-6 md:p-8 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer ${className}`}
      style={{ '--plan-color': plan.color } as React.CSSProperties}
    >
      <div className="flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold mb-1 plan-title-hover" style={{ color: plan.color }}>{plan.title}</h3>
        <p className="text-[var(--text-secondary)] mb-6 title-hover cursor-default">{plan.subtitle}</p>

        <div className="mb-8">
          <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">{plan.price}</span>
          <span className="text-[var(--text-secondary)] ml-2">{plan.priceDetails}</span>
        </div>
      </div>

      <p className="text-center text-xs text-[var(--text-secondary)] mb-4 mt-2">Clique para ver os detalhes</p>

      <button
        onClick={(e) => {
            e.stopPropagation();
            onWhatsAppClick(createWhatsAppLink(`Olá, Davi! Tenho interesse em contratar o ${plan.title}. Poderíamos conversar sobre os próximos passos?`));
        }}
        className="shine-overlay mt-auto block w-full text-center text-base sm:text-lg font-bold py-3 rounded-xl transition-all duration-300 ease-in-out text-gray-900 hover:scale-105"
        style={{ backgroundColor: plan.color, boxShadow: `0 4px 20px -5px ${plan.color}80` }}
      >
        Contratar Agora
      </button>
    </div>
  );
};

export default PlanCard;