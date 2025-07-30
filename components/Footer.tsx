import React, { useState, useEffect } from 'react';
import { createWhatsAppLink, INSTAGRAM_LINK, WhatsAppIcon, InstagramIcon } from '../constants';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-[var(--gold-text)] text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Voltar ao topo"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

const MailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H4V8l8 5 8-5v10zM12 11L4 6h16l-8 5z" />
    </svg>
);

interface FooterProps {
    onWhatsAppClick: (url: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onWhatsAppClick }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-transparent mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="text-center md:text-left">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="inline-block" aria-label="Ir para o Instagram da InteligenciArte.IA">
              <div className="shine-effect rounded-2xl p-3 inline-block">
                <img src="/images/logoIAl.png" alt="InteligenciArte.IA Logo" className="h-12 w-auto" />
              </div>
            </a>
            <p className="text-[var(--text-secondary)] mt-4 max-w-xs mx-auto md:mx-0">Criando soluções com inteligência e design.</p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-[var(--text-primary)] mb-4 uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#plans" onClick={handleNavClick} className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors">Planos</a></li>
              <li><a href="#add-ons" onClick={handleNavClick} className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors">Serviços Adicionais</a></li>
              <li><a href="#automations" onClick={handleNavClick} className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors">Automações</a></li>
              <li><a href="#summary" onClick={handleNavClick} className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors">Projeções</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-[var(--text-primary)] mb-4 uppercase tracking-wider text-sm">Contato</h4>
            <div className="flex justify-center md:justify-start items-center gap-6">
                <button onClick={() => onWhatsAppClick(createWhatsAppLink("Olá, Davi! Encontrei seu contato no site e gostaria de conversar."))} aria-label="WhatsApp" className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors transform hover:scale-110">
                    <WhatsAppIcon className="w-7 h-7" />
                </button>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors transform hover:scale-110">
                    <InstagramIcon className="w-7 h-7" />
                </a>
                <a href="mailto:contato@inteligenciarte.ia" aria-label="E-mail" className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors transform hover:scale-110">
                    <MailIcon className="w-7 h-7" />
                </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--border-color)] text-center text-[var(--text-secondary)] text-sm">
          <p>&copy; {new Date().getFullYear()} InteligenciArte.IA. Todos os direitos reservados.</p>
        </div>
      </div>
      <BackToTopButton />
    </footer>
  );
};

export default Footer;