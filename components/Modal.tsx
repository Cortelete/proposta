
import React, { useEffect } from 'react';
import type { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const keyframes = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes scaleUp {
    from { transform: translate(-50%, -48%) scale(0.95); opacity: 0; }
    to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <style>{keyframes}</style>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      >
        <div
          className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl shadow-2xl w-full max-w-lg p-6 md:p-8 text-[var(--text-primary)] relative"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'scaleUp 0.3s ease-out' }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Fechar modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 gold-text">{title}</h3>
          <div className="text-[var(--text-secondary)] space-y-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;