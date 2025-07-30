import React, { useState } from 'react';
import type { Theme } from '../types';
import { SunIcon, MoonIcon, WhatsAppIcon, InstagramIcon, createWhatsAppLink, INSTAGRAM_LINK, MenuIcon, MenuCloseIcon } from '../constants';


interface HeaderProps {
    theme: Theme;
    toggleTheme: () => void;
    onWhatsAppClick: (url: string) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, onWhatsAppClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      category: "Propostas",
      links: [
        { name: "Planos", href: "#plans" },
        { name: "Serviços Adicionais", href: "#add-ons" }
      ]
    },
    {
      category: "Tecnologia",
      links: [
        { name: "Automações", href: "#automations" },
        { name: "Projeções", href: "#summary" }
      ]
    },
    {
      category: "Vantagens",
      links: [
        { name: "Benefícios Club.IA", href: "#bonus" }
      ]
    },
    {
      category: "Contato",
      links: [
        { name: "Fale Conosco", href: "#contact" }
      ]
    }
  ];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on click
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20; // offset to not have the title stick to the top
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed top-6 left-6 z-30">
          <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-text)]"
              aria-label="Abrir menu"
          >
              <MenuIcon className="w-6 h-6" />
          </button>
      </div>

      <div className="fixed top-6 right-6 z-30">
          <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-text)]"
              aria-label="Toggle theme"
          >
              <div className="relative w-6 h-6">
                  <SunIcon className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${theme === 'dark' ? 'opacity-100 transform rotate-0 scale-100' : 'opacity-0 transform -rotate-90 scale-0'}`} />
                  <MoonIcon className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${theme === 'light' ? 'opacity-100 transform rotate-0 scale-100' : 'opacity-0 transform rotate-90 scale-0'}`} />
              </div>
          </button>
      </div>
      
      <header className="text-center pt-24 sm:pt-16 pb-8">
        <div className="mb-6 flex justify-center">
            <img src="/images/logoIAl.png" alt="InteligenciArte.IA Logo" className="h-24 sm:h-32 w-auto" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-[var(--text-primary)] mb-4">
            Planos e Soluções Digitais
        </h1>
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 px-4">
            Soluções completas para impulsionar seu negócio no mundo digital.
        </p>

        <div id="contact" className="flex flex-col sm:flex-row justify-center items-center gap-4 scroll-mt-24">
            <button 
                onClick={() => onWhatsAppClick(createWhatsAppLink("Olá, Davi! Vi sua página de planos e gostaria de conversar."))}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Fale no WhatsApp</span>
            </button>
            <a 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
                <InstagramIcon className="w-5 h-5" />
                <span>Siga no Instagram</span>
            </a>
        </div>
      </header>
      
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        
        <div className={`relative z-50 w-full max-w-xs h-24 bg-[var(--card-bg)] border-r border-[var(--border-color)] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-[var(--border-color)]">
              <img src="/images/logoIA.png" alt="InteligenciArte.IA Logo" className="h-12 w-auto" />
              <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--gold-text)]"
                  aria-label="Fechar menu"
              >
                  <MenuCloseIcon className="w-6 h-6"/>
              </button>
          </div>
          <nav className="flex-1 p-6 space-y-6 overflow-y-auto">
            {navLinks.map((section) => (
              <div key={section.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--gold-text)] mb-3">{section.category}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block py-2 px-3 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className="p-6 border-t border-[var(--border-color)]">
             <p className="text-center text-xs text-[var(--text-secondary)]">&copy; {new Date().getFullYear()} InteligenciArte.IA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;