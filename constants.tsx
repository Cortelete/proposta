
import React from 'react';
import type { Plan, ModalContent } from './types';

export const SunIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

export const MoonIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

export const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.849 6.069l-1.254 4.587 4.68-1.241z" />
    </svg>
);

export const InstagramIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.667 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.667-4.771 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm0-2.163c-3.273 0-3.694.012-4.982.072-4.295.196-6.136 2.045-6.332 6.332-.06 1.288-.072 1.71-.072 4.982s.012 3.694.072 4.982c.196 4.287 2.037 6.136 6.332 6.332 1.288.06 1.709.072 4.982.072s3.694-.012 4.982-.072c4.295-.196 6.136-2.045 6.332-6.332.06-1.288.072-1.71.072-4.982s-.012-3.694-.072-4.982c-.196-4.287-2.037-6.136-6.332-6.332-1.288-.06-1.709-.072-4.982-.072zm0 6.84c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm6.406-11.844c-.746 0-1.35.604-1.35 1.35s.604 1.35 1.35 1.35 1.35-.604 1.35-1.35-.604-1.35-1.35-1.35z"/>
    </svg>
);

export const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export const MenuCloseIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const CalendarIcon = ({ className = "w-10 h-10 mb-4", style }: { className?: string; style?: React.CSSProperties }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="currentColor"> <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2z" /> </svg> );
export const ChatBubbleIcon = ({ className = "w-10 h-10 mb-4", style }: { className?: string; style?: React.CSSProperties }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="currentColor"> <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /> </svg> );
export const StoreIcon = ({ className = "w-10 h-10 mb-4", style }: { className?: string; style?: React.CSSProperties }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="currentColor"> <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" /> </svg> );
export const BrainIcon = ({ className = "w-12 h-12 mb-4" }: { className?: string }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2C9.243 2 7 4.243 7 7c0 1.52.662 2.872 1.694 3.791A5.995 5.995 0 0 0 8 13v2c0 1.103.897 2 2 2h1v1.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V17h1c1.103 0 2-.897 2-2v-2a5.995 5.995 0 0 0-.694-2.209C16.338 9.872 17 8.52 17 7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm-2 9v-1h4v1h-4z"/> </svg> );
export const PenToolIcon = ({ className = "w-12 h-12 mb-4" }: { className?: string }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"> <path d="M21.561 4.439l-2-2a1.002 1.002 0 0 0-1.414 0l-2.586 2.586L3.293 17.293a1 1 0 0 0-.293.707V21a1 1 0 0 0 1 1h3a1 1 0 0 0 .707-.293l12.263-12.264 2.586-2.586a1.002 1.002 0 0 0 0-1.414zM8 19H5v-3l8.737-8.737L17 11.263 8 20.263V19zM18.414 9.849l-1.262-1.262L18 7.737l1.263 1.262-1.435.85zm1.172-1.172L19 8.101 17.899 7l.586-.586L20.263 8.2l-1.788.477z"/> </svg> );
export const HandshakeIcon = ({ className = "w-12 h-12 mb-4" }: { className?: string }) => ( <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M13.2,19.33C12.89,19.33 12.58,19.45 12.36,19.67L12.28,19.75L10.33,21.7L10.09,21.95L9.85,21.7L5.35,17.2L3.5,19.05L2.8,18.35L4.92,16.23L3.5,14.81L2.8,14.11L4.22,12.69L2.8,11.27L3.5,10.57L5.63,12.7L6.33,12L4.91,10.59L5.61,9.89L7.03,11.3L7.73,10.6L6.31,9.18L7.01,8.48L8.44,9.9L9.14,9.2L7.72,7.78L8.42,7.08L9.84,8.5L10.54,7.8L9.12,6.38L9.82,5.68L11.25,7.11L11.59,6.77C11.9,6.46 12.4,6.46 12.71,6.77L13.41,7.47L14.12,6.77C14.42,6.46 14.92,6.46 15.23,6.77L15.94,7.47L16.64,6.77C16.95,6.46 17.45,6.46 17.76,6.77L18.46,7.47L19.17,6.77C19.47,6.46 19.97,6.46 20.28,6.77L21.35,7.84L20.65,8.54L19.58,7.47C19.43,7.32 19.19,7.32 19.04,7.47L18.33,8.18L17.63,7.47C17.48,7.32 17.24,7.32 17.09,7.47L16.39,8.18L15.68,7.47C15.54,7.32 15.3,7.32 15.15,7.47L14.44,8.18L13.74,7.47C13.59,7.32 13.35,7.32 13.2,7.47L12.14,8.54L11.43,7.84C11.28,7.69 11.04,7.69 10.9,7.84L10.19,8.54L11.62,9.97L10.92,10.67L9.5,9.25L8.79,9.95L10.22,11.38L9.52,12.08L8.09,10.65L7.39,11.35L8.82,12.78L8.12,13.48L6.69,12.05L5.99,12.75L7.41,14.17L6,15.59L6.7,16.29L8.12,14.87L9.55,16.3L8.85,17L5.9,14.05L4.2,15.75L5.32,16.87L9.15,20.7L11.6,18.25L11.9,18.55C12.21,18.86 12.71,18.86 13.02,18.55L14.85,16.72L16.27,18.14L15.57,18.84L14.15,17.42L12.33,19.25C12.55,19.47 12.87,19.58 13.2,19.58C13.53,19.58 13.84,19.47 14.06,19.25L19.01,14.3L21.13,16.42L21.83,15.72L14.06,7.95L13.2,8.81L18.86,14.47L14.06,19.01C13.84,19.22 13.53,19.33 13.2,19.33Z" /></svg> );
export const ConsultancyIcon = ({ className = "w-12 h-12 mb-4" }: { className?: string }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A7,7,0,0,0,5,9c0,2.38,1.19,4.47,3,5.74V17a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14.74c1.81-1.27,3-3.36,3-5.74A7,7,0,0,0,12,2Zm1,17.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V19h2Zm2-3.5H9V15a1,1,0,0,0-1,1v1H8v-1a3,3,0,0,1,3-3h2a3,3,0,0,1,3,3v1h-1V16A1,1,0,0,0,15,15Z"/></svg>);

export const ChartBarIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

export const BoltIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

export const UsersIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.226a21.684 21.684 0 005.682-2.72m-5.682 2.72a21.682 21.682 0 01-5.682-2.72m5.682 2.72A9.094 9.094 0 016.259 18.72m11.811 0a21.683 21.683 0 01-5.682 2.72M6.259 18.72a21.683 21.683 0 01-5.682 2.72m5.682 2.72A9.094 9.094 0 0112 21.75a9.094 9.094 0 015.741-3.03M11.25 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" />
    </svg>
);


export const createWhatsAppLink = (message: string): string => {
    const baseURL = "https://wa.me/41988710303";
    return `${baseURL}?text=${encodeURIComponent(message)}`;
};

const ALL_FEATURES = [
    // Web & Software
    { text: "Landing Page de Alta Conversão", details: <div><h4 className="text-lg font-semibold mb-2">Página Focada em Resultados</h4><p>Desenvolvimento de uma página de vendas com design moderno, responsivo e otimizado para transformar visitantes em clientes.</p></div> },
    { text: "Back-end Contínuo (3 meses)", details: <div><h4 className="text-lg font-semibold mb-2">Estrutura Robusta e Segura</h4><p>Criação e manutenção de um sistema de back-end seguro, garantindo que sua aplicação funcione de forma estável e escalável.</p></div> },
    { text: "Sistema de Login para Admins", details: <div><h4 className="text-lg font-semibold mb-2">Gerenciamento Autônomo</h4><p>Painel administrativo seguro com sistema de login, permitindo que sua equipe gerencie o conteúdo e as operações com total autonomia.</p></div> },
    { text: "Controle de Estoque e Vendas", details: <div><h4 className="text-lg font-semibold mb-2">Operação Otimizada</h4><p>Um sistema completo para registrar produtos, controlar o estoque em tempo real e gerenciar o histórico de vendas.</p></div> },
    { text: "1 ano de hospedagem", details: <div><h4 className="text-lg font-semibold mb-2">Tranquilidade por 1 Ano</h4><p>Seu site hospedado em servidores rápidos e seguros, com manutenção e certificado de segurança (SSL) inclusos por um ano inteiro.</p></div> },
    // Design & Branding
    { text: "Criação de Nome Comercial", details: <div><h4 className="text-lg font-semibold mb-2">Um Nome com Impacto</h4><p>Desenvolvimento de um nome comercial estratégico que reflete os valores da sua marca, é memorável e se destaca no mercado.</p></div> },
    { text: "Identidade Visual Completa", details: <div><h4 className="text-lg font-semibold mb-2">Marca Coesa e Profissional</h4><p>Criação de manual de marca completo, definindo cores, fontes e diretrizes de uso para garantir consistência visual em todos os canais.</p></div> },
    { text: "Flyer e Cartão de Visita Digitais", details: <div><h4 className="text-lg font-semibold mb-2">Comunicação e Networking</h4><p>Design de artes digitais atrativas para promoções, anúncios e networking, alinhadas à sua nova identidade visual.</p></div> },
    // Networking
    { text: "Grupo de networking de WhatsApp", details: <div><h4 className="text-lg font-semibold mb-2">Conexões que Geram Negócios</h4><p>Acesso ao nosso grupo exclusivo de clientes e parceiros, um ambiente para trocar experiências, tirar dúvidas e criar oportunidades de negócio.</p></div> },
    // VIP Features
    { text: "Consultoria Estratégica de IA", details: <div><h4 className="text-lg font-semibold mb-2">Inteligência Competitiva</h4><p>Análise do seu negócio para identificar oportunidades de automação e uso de IA, criando um roadmap de inovação personalizado.</p></div> },
    { text: "Setup de SEO Técnico Inicial", details: <div><h4 className="text-lg font-semibold mb-2">Visibilidade no Google</h4><p>Configuração das bases técnicas de SEO (Search Engine Optimization) em seu site para melhorar o ranqueamento em buscas orgânicas.</p></div> },
    { text: "Otimização de Performance (Core Web Vitals)", details: <div><h4 className="text-lg font-semibold mb-2">Velocidade e Experiência</h4><p>Otimização do código e imagens do site para garantir um carregamento rápido e uma excelente experiência do usuário, fatores cruciais para o Google.</p></div> },
    { text: "Automação de Postagens (Setup Inicial)", details: <div><h4 className="text-lg font-semibold mb-2">Eficiência nas Redes Sociais</h4><p>Configuração de uma ferramenta para agendamento e automação de postagens em redes sociais, economizando seu tempo e mantendo a consistência.</p></div> },
    { text: "Mentoria Redes Sociais (3 meses)", details: <div><h4 className="text-lg font-semibold mb-2">Domine suas Redes Sociais</h4><p>Acompanhamento estratégico por 3 meses para otimizar seu conteúdo, aumentar o engajamento e transformar seguidores em clientes.</p></div> },
    // Club Features
    { text: "Suporte Prioritário via WhatsApp", details: <div><h4 className="text-lg font-semibold mb-2">Atendimento Ágil</h4><p>Acesso direto à nossa equipe para tirar dúvidas e solicitar ajustes rápidos, garantindo que suas operações nunca parem.</p></div> },
    { text: "Relatórios Mensais de Performance", details: <div><h4 className="text-lg font-semibold mb-2">Visão Clara dos Resultados</h4><p>Receba análises detalhadas sobre o desempenho do seu site, engajamento nas redes e o retorno sobre o investimento (ROI) das estratégias aplicadas.</p></div> },
    { text: "1h de consultoria por mês", details: <div><h4 className="text-lg font-semibold mb-2">Sua Hora Estratégica Mensal</h4><p>Como membro do Club.IA, você tem direito a uma hora de consultoria conosco todo mês para discutir estratégias, tirar dúvidas ou planejar os próximos passos do seu negócio.</p></div> },
    { text: "Acesso a Grupo de Mentoria e Networking", details: <div><h4 className="text-lg font-semibold mb-2">Conhecimento e Conexões</h4><p>Acesso exclusivo ao nosso grupo de mentoria para trocar experiências, aprender com outros empresários e expandir sua rede de contatos.</p></div> },
    { text: "Ofertas Exclusivas para Membros", details: <div><h4 className="text-lg font-semibold mb-2">Vantagens Contínuas</h4><p>Acesso a descontos e condições especiais em novos serviços, workshops e produtos parceiros, disponíveis apenas para membros do Club.</p></div> },
    { text: "Ingressos para Eventos Exclusivos", details: <div><h4 className="text-lg font-semibold mb-2">Networking de Alto Nível</h4><p>Receba convites e ingressos para eventos, webinars e meetups exclusivos organizados pela InteligenciArte.IA, focados em networking e conhecimento de ponta.</p></div> },
];

const getPlanFeatures = (includedFeatures: string[]) => {
  return ALL_FEATURES.map(feature => ({
    ...feature,
    included: includedFeatures.includes(feature.text),
  }));
};

const premiumFeatures = [
  "Landing Page de Alta Conversão",
  "Back-end Contínuo (3 meses)",
  "Sistema de Login para Admins",
  "Controle de Estoque e Vendas",
  "1 ano de hospedagem",
  "Criação de Nome Comercial",
  "Identidade Visual Completa",
  "Flyer e Cartão de Visita Digitais",
  "Grupo de networking de WhatsApp",
];

const vipFeatures = [
  ...premiumFeatures,
  "Consultoria Estratégica de IA",
  "Setup de SEO Técnico Inicial",
  "Otimização de Performance (Core Web Vitals)",
  "Automação de Postagens (Setup Inicial)",
  "Mentoria Redes Sociais (3 meses)",
];

const clubFeatures = ALL_FEATURES.map(f => f.text);

export const PLANS_DATA: Plan[] = [
  {
    title: "Plano Premium",
    subtitle: "A base digital completa para o seu negócio.",
    price: "R$ 2.000",
    priceDetails: "Pagamento único",
    color: "#85E3F2", // Azul
    features: getPlanFeatures(premiumFeatures),
  },
  {
    title: "Plano VIP",
    subtitle: "Tudo do Premium + estratégias de otimização e IA.",
    price: "R$ 5.500",
    priceDetails: "Pagamento único (R$ 2.000 + R$ 3.500)",
    color: "#FFD369", // Amarelo
    features: getPlanFeatures(vipFeatures),
  },
  {
    title: "Club.IA",
    subtitle: "A parceria definitiva para crescimento e exclusividade.",
    price: "R$ 1.600",
    priceDetails: "/mês (plano semestral)*",
    color: "#F7AFC7", // Rosa
    features: getPlanFeatures(clubFeatures),
  },
];

export const AUTOMATIONS_DATA = [
    {
      Icon: CalendarIcon,
      title: "Automação de Agendamentos",
      description: "Sistema automatizado para que seus clientes marquem horários 24/7.",
      price: "R$ 1.350,00",
      recurrence: "R$ 499/mês",
      color: "#85E3F2",
      getDetails: (onWhatsAppClick: (url: string) => void) => (
        <div className="space-y-4">
            <p>Cansado de perder tempo respondendo "qual seu horário disponível?" e gerenciando agendamentos manualmente? Deixe que um sistema inteligente cuide disso por você.</p>
            <h4 className="font-bold text-[var(--text-primary)] pt-2">Funcionalidades Principais:</h4>
            <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Calendário Inteligente:</span> Sincroniza com sua agenda (Google Calendar, etc.) e mostra apenas os horários realmente livres.</li>
                <li><span className="font-semibold">Página de Agendamento Personalizada:</span> Uma página profissional com sua marca onde clientes podem marcar e até pagar por um serviço.</li>
                <li><span className="font-semibold">Lembretes Automáticos:</span> Reduza drasticamente o não comparecimento (no-show) com lembretes automáticos via E-mail ou WhatsApp.</li>
            </ul>
            <p className="pt-2 font-semibold">Resultado: você otimiza seu tempo, transmite mais profissionalismo e melhora a experiência do seu cliente.</p>
            <div className="pt-6 text-center">
                <button 
                    onClick={() => onWhatsAppClick(createWhatsAppLink("Olá, Davi! Tenho interesse no serviço de Automação de Agendamentos."))}
                    className="inline-block text-base sm:text-lg font-bold py-3 px-8 rounded-xl transition-all duration-300 ease-in-out text-gray-900 hover:scale-105"
                    style={{ backgroundColor: "#85E3F2", boxShadow: `0 4px 20px -5px #85E3F280` }}
                >
                    Contratar Automação
                </button>
            </div>
        </div>
      )
    },
    {
      Icon: ChatBubbleIcon,
      title: "Automação de Pré-Atendimento",
      description: "Filtre e qualifique contatos iniciais no WhatsApp de forma automática.",
      price: "R$ 1.350,00",
      recurrence: "R$ 499/mês",
      color: "#FFD369",
      getDetails: (onWhatsAppClick: (url: string) => void) => (
        <div className="space-y-4">
            <p>Seu WhatsApp está cheio de contatos, mas poucos se tornam clientes? A automação de pré-atendimento qualifica os leads antes que eles cheguem até você ou sua equipe.</p>
            <h4 className="font-bold text-[var(--text-primary)] pt-2">Como Funciona:</h4>
            <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Menu Interativo:</span> Ao iniciar a conversa, o cliente escolhe o que precisa (Orçamento, Suporte, Dúvidas).</li>
                <li><span className="font-semibold">Coleta de Dados:</span> O bot coleta informações essenciais como nome, e-mail e detalhes do projeto de forma automática.</li>
                <li><span className="font-semibold">Direcionamento Inteligente:</span> Apenas os leads qualificados e prontos para comprar são encaminhados para um vendedor, enquanto dúvidas comuns são respondidas instantaneamente.</li>
            </ul>
            <p className="pt-2 font-semibold">Resultado: sua equipe de vendas se torna mais produtiva, focando apenas em quem tem real potencial de compra.</p>
            <div className="pt-6 text-center">
                <button
                    onClick={() => onWhatsAppClick(createWhatsAppLink("Olá, Davi! Tenho interesse no serviço de Automação de Pré-Atendimento."))}
                    className="inline-block text-base sm:text-lg font-bold py-3 px-8 rounded-xl transition-all duration-300 ease-in-out text-gray-900 hover:scale-105"
                    style={{ backgroundColor: "#FFD369", boxShadow: `0 4px 20px -5px #FFD36980` }}
                >
                    Contratar Automação
                </button>
            </div>
        </div>
      )
    },
    {
      Icon: StoreIcon,
      title: "Automação Google Meu Negócio",
      description: "Responda avaliações e perguntas frequentes de forma inteligente.",
      price: "R$ 1.350,00",
      recurrence: "R$ 499/mês",
      color: "#F7AFC7",
      getDetails: (onWhatsAppClick: (url: string) => void) => (
        <div className="space-y-4">
            <p>Manter seu perfil no Google Meu Negócio ativo e com boas avaliações é crucial para a reputação local. Deixe a IA trabalhar para fortalecer sua prova social.</p>
            <h4 className="font-bold text-[var(--text-primary)] pt-2">Capacidades da Automação:</h4>
            <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Respostas a Avaliações:</span> A IA gera respostas personalizadas e profissionais para avaliações de clientes, agradecendo os elogios e lidando com críticas de forma construtiva.</li>
                <li><span className="font-semibold">Análise de Sentimento:</span> O sistema identifica se a avaliação é positiva, negativa ou neutra para gerar a resposta mais adequada.</li>
                <li><span className="font-semibold">FAQ Inteligente:</span> Responde automaticamente às perguntas mais frequentes feitas diretamente no seu perfil do Google.</li>
            </ul>
            <p className="pt-2 font-semibold">Resultado: melhora sua imagem online, aumenta o engajamento e economiza horas de trabalho manual.</p>
            <div className="pt-6 text-center">
                <button 
                    onClick={() => onWhatsAppClick(createWhatsAppLink("Olá, Davi! Tenho interesse no serviço de Automação para Google Meu Negócio."))}
                    className="inline-block text-base sm:text-lg font-bold py-3 px-8 rounded-xl transition-all duration-300 ease-in-out text-gray-900 hover:scale-105"
                    style={{ backgroundColor: "#F7AFC7", boxShadow: `0 4px 20px -5px #F7AFC780` }}
                >
                    Contratar Automação
                </button>
            </div>
        </div>
      )
    },
];

export const INSTAGRAM_LINK = "https://www.instagram.com/inteligenciarte.ia";