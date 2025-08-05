
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
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
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
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      >
        <div
          className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl shadow-2xl w-full max-w-lg flex flex-col max-h-[calc(100vh-8rem)]"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'scaleUp 0.3s ease-out' }}
        >
          {/* Modal Header */}
          <div className="flex-shrink-0 flex items-start justify-between p-6 pb-4 border-b border-[var(--border-color)]">
              <h3 className="text-xl sm:text-2xl font-bold mb-0 gold-text pr-4">{title}</h3>
              <button
                onClick={onClose}
                className="shine-overlay p-1 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/10 transition-colors"
                aria-label="Fechar modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
          </div>
          {/* Modal Content Body */}
          <div className="overflow-y-auto p-6 pt-4">
            <div className="text-[var(--text-secondary)] space-y-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;