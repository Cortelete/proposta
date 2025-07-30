
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PlanCard from './components/PlanCard';
import SummaryCard from './components/SummaryCard';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { PLANS_DATA, AUTOMATIONS_DATA, BrainIcon, PenToolIcon, HandshakeIcon, createWhatsAppLink, ConsultancyIcon } from './constants';
import type { ModalContent, Theme, Plan } from './types';

const bonusArtesModalContent: ModalContent = {
    title: 'Suas 5 Artes de Bônus: Um Toque de Exclusividade',
    content: (
        <div className="space-y-4">
            <p>Imagine ter acesso a artes com um design minimalista e elegante, no popular <span className="font-semibold text-[var(--gold-text)]">estilo Notion</span>, perfeitas para dar um toque especial em suas comunicações, redes sociais ou até mesmo como capas de documentos importantes.</p>
            <p>Esses bônus são ideais para datas comemorativas! Você pode solicitar artes temáticas para <span className="font-semibold">Páscoa, Natal, Ano Novo, Dia das Mães</span> ou qualquer outra data estratégica para o seu negócio, mantendo sua marca sempre relevante.</p>
            <h4 className="font-bold text-[var(--text-primary)] pt-2">Como funciona:</h4>
            <ul className="list-disc list-inside space-y-2">
                <li>Você tem direito a 5 dessas artes exclusivas durante seu primeiro ano como membro do Club.IA.</li>
                <li>Basta solicitar com 5 dias de antecedência.</li>
                <li>É o nosso presente para garantir que sua marca se destaque com criatividade, sem custos adicionais.</li>
            </ul>
        </div>
    )
};

const backendModalContent: ModalContent = {
    title: 'Início Seguro do Back-end: A Base do seu Futuro Digital',
    content: (
        <div className="space-y-4">
            <p>Este não é apenas um "começo", é um compromisso com a excelência técnica desde o primeiro dia. Entendemos que um grande projeto digital precisa de uma fundação sólida.</p>
            <h4 className="font-bold text-[var(--text-primary)] pt-2">O que garantimos:</h4>
            <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Segurança de Ponta:</span> Implementamos as melhores práticas de segurança para proteger seus dados e de seus clientes desde o início.</li>
                <li><span className="font-semibold">Código Limpo e Escalável:</span> Escrevemos um código organizado e bem-documentado, pensando no crescimento futuro do seu sistema. Isso significa menos custos de manutenção e mais agilidade para adicionar novas funcionalidades.</li>
                <li><span className="font-semibold">Banco de Dados Otimizado:</span> A estrutura inicial do seu banco de dados é planejada para ser eficiente e rápida, evitando gargalos de performance conforme sua operação cresce.</li>
            </ul>
            <p className="pt-2">É a nossa garantia de que a base para o seu possível sistema futuro será construída com a máxima qualidade e atenção aos detalhes.</p>
        </div>
    )
};

const descontoModalContent: ModalContent = {
    title: 'Descontos em Automações: Exclusividade Club.IA',
    content: (
        <div className="space-y-4">
            <p>Como membro do <span className="font-semibold text-[var(--gold-text)]">Club.IA</span>, você tem acesso a condições especiais para turbinar seu negócio com nossas automações.</p>
            <h4 className="font-bold text-[var(--text-primary)] pt-2">Sua Economia Detalhada:</h4>
            <ul className="list-disc list-inside space-y-2">
                <li>Ao contratar 1 automação: de R$ 1.350 por <span className="font-bold text-green-400">R$ 800</span> <span className="text-sm">(Economia de ~41%)</span>.</li>
                <li>Ao contratar 2 automações: a segunda sai por <span className="font-bold text-green-400">R$ 600</span> <span className="text-sm">(Economia de ~55% na segunda unidade)</span>.</li>
            </ul>
            <h4 className="font-bold text-[var(--text-primary)] pt-4">Bônus de Manutenção:</h4>
            <p>Além do desconto no setup, você ganha <span className="font-semibold">isenção da taxa de manutenção mensal de R$ 499 por 3 meses</span> em cada automação contratada.</p>
            <p className="text-sm italic">Após o período de 3 meses, a taxa de manutenção mensal é aplicada para garantir a performance e as atualizações contínuas do serviço. Clientes que indicam novos parceiros podem ganhar isenção estendida. Fale conosco!</p>
        </div>
    )
};

const InlineWhatsAppButton = ({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => (
    <button onClick={onClick} className="text-[var(--gold-text)] font-bold hover:underline bg-transparent border-none p-0 cursor-pointer display-inline">
        {children}
    </button>
);

const societyModalContent = (onWhatsAppClick: (url: string) => void): ModalContent => ({
    title: 'Parceria Estratégica: Crescemos Juntos',
    content: (
         <div className="space-y-4">
            <p>Acreditamos que o verdadeiro sucesso é construído em conjunto. Por isso, oferecemos um modelo de sociedade onde nos tornamos mais do que um fornecedor: viramos seu parceiro estratégico de tecnologia e marketing.</p>
            <h4 className="font-bold text-[var(--text-primary)] pt-2">Para quem é ideal?</h4>
             <p>Este modelo é perfeito para <span className="font-semibold">startups inovadoras, projetos com alto potencial de escala e negócios que buscam um parceiro técnico</span> para dividir os riscos e os lucros.</p>
            <h4 className="font-bold text-[var(--text-primary)] pt-2">Como funciona:</h4>
            <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Análise de Viabilidade:</span> Avaliamos seu plano de negócios e o potencial de mercado do seu projeto.</li>
                <li><span className="font-semibold">Definição de Escopo:</span> Em vez de um pagamento tradicional, definimos uma participação (equity) na sociedade.</li>
                <li><span className="font-semibold">Mão na Massa:</span> Dedicamos nossa expertise e equipe (o equivalente aos serviços do Club.IA) para construir, lançar e escalar o projeto.</li>
            </ul>
             <p className="pt-2">Se você tem um projeto promissor e busca um parceiro comprometido com resultados, esta é a oportunidade. <InlineWhatsAppButton onClick={() => onWhatsAppClick(createWhatsAppLink("Olá, Davi! Gostaria de agendar uma conversa confidencial sobre a Opção de Sociedade."))}>Vamos agendar uma conversa confidencial?</InlineWhatsAppButton></p>
        </div>
    )
});

const logoModalContent = (onWhatsAppClick: (url: string) => void): ModalContent => ({
    title: 'Logotipo Profissional: A Assinatura da Sua Marca',
    content: (
        <div className="space-y-4">
            <p>Um logotipo é muito mais do que uma imagem. É a <span className="font-semibold text-[var(--gold-text)]">primeira impressão</span>, a identidade visual condensada e o principal ponto de reconhecimento da sua marca. Ele precisa ser único, memorável e versátil.</p>
            <h4 className="font-bold text-[var(--text-primary)] pt-2">Nosso Processo Criativo:</h4>
            <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Briefing e Imersão:</span> Entendemos profundamente seus valores, público e objetivos.</li>
                <li><span className="font-semibold">Pesquisa e Conceitos:</span> Exploramos o mercado e apresentamos conceitos iniciais para alinhamento.</li>
                <li><span className="font-semibold">Refinamento e Entrega:</span> Trabalhamos no conceito escolhido até a perfeição e entregamos todos os arquivos que você precisa.</li>
            </ul>
             <h4 className="font-bold text-[var(--text-primary)] pt-4">O que você recebe:</h4>
             <ul className="list-disc list-inside space-y-2">
                <li>Arquivos em alta resolução (PNG, JPG).</li>
                <li>Arquivo vetorial (SVG), escalável para qualquer tamanho sem perder qualidade.</li>
                <li>Versões para fundo claro e escuro.</li>
                <li>Favicon para seu site.</li>
            </ul>
            <p className="pt-2">O valor inicial de <span className="font-semibold">R$ 500</span> cobre o desenvolvimento de um conceito de logotipo. Projetos que exigem mais complexidade ou rodadas de revisão podem ter custos adicionais. <InlineWhatsAppButton onClick={() => onWhatsAppClick(createWhatsAppLink("Olá, Davi! Tenho interesse no serviço de Logotipo Profissional."))}>Vamos criar a cara do seu negócio?</InlineWhatsAppButton></p>
        </div>
    )
});

const aiAgentModalContent = (onWhatsAppClick: (url: string) => void): ModalContent => ({
    title: 'Agente de IA Personalizado: Sua Automação Sob Medida',
    content: (
        <div className="space-y-4">
            <p>Enquanto nossas automações padrão resolvem problemas comuns, um <span className="font-semibold text-[var(--gold-text)]">Agente de IA Personalizado</span> é desenvolvido para resolver um desafio <span className="font-semibold">único do seu negócio</span>. É uma solução exclusiva, criada do zero para se integrar perfeitamente aos seus processos.</p>
            <h4 className="font-bold text-[var(--text-primary)] pt-2">Exemplos de Possibilidades:</h4>
            <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Análise de Dados:</span> Uma IA que lê planilhas ou relatórios e gera insights acionáveis automaticamente.</li>
                <li><span className="font-semibold">Chatbot de Suporte Avançado:</span> Um assistente que acessa o histórico do cliente para oferecer soluções verdadeiramente personalizadas.</li>
                <li><span className="font-semibold">Otimizador de Processos:</span> Um sistema que identifica gargalos em seu fluxo de trabalho e sugere melhorias.</li>
                 <li><span className="font-semibold">Gerador de Conteúdo Específico:</span> Uma IA treinada para criar descrições de produtos, e-mails ou posts seguindo o tom de voz exato da sua marca.</li>
            </ul>
            <p className="pt-2">O valor inicial de <span className="font-semibold">R$ 1.500</span> cobre a fase de consultoria e o desenvolvimento de um protótipo (Prova de Conceito) para validar a solução. O custo final dependerá da complexidade e do escopo do projeto.</p>
            <p className="pt-2">Se você tem uma tarefa repetitiva, complexa ou que consome muito tempo da sua equipe, provavelmente podemos automatizá-la. <InlineWhatsAppButton onClick={() => onWhatsAppClick(createWhatsAppLink("Olá, Davi! Gostaria de discutir uma ideia para um Agente de IA Personalizado."))}>Vamos desenhar a sua solução?</InlineWhatsAppButton></p>
        </div>
    )
});

const consultancyModalContent = (onWhatsAppClick: (url: string) => void): ModalContent => ({
    title: 'Consultoria Digital Estratégica',
    content: (
        <div className="space-y-4">
            <p>Precisa de um olhar experiente para destravar o potencial do seu negócio no ambiente digital? Nossa consultoria é uma sessão de 1 hora, focada em resolver seus desafios mais urgentes.</p>
            <h4 className="font-bold text-[var(--text-primary)] pt-2">O que podemos abordar:</h4>
            <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Análise de Presença Online:</span> Avaliamos seu site e redes sociais, identificando pontos de melhoria imediatos.</li>
                <li><span className="font-semibold">Planejamento de Marketing:</span> Traçamos um plano de ação para campanhas, lançamentos ou estratégias de conteúdo.</li>
                <li><span className="font-semibold">Otimização de Ferramentas:</span> Ajudamos a escolher e configurar as melhores ferramentas de automação e análise para sua necessidade.</li>
                <li><span className="font-semibold">Validação de Ideias:</span> Sessão de brainstorming para validar novas ideias de produtos, serviços ou estratégias de negócio.</li>
            </ul>
            <h4 className="font-bold text-[var(--text-primary)] pt-4">Condição Especial para Membros Club.IA:</h4>
            <p>Membros do <span className="font-semibold text-[var(--gold-text)]">Club.IA</span> já possuem <span className="font-semibold">1 hora de consultoria inclusa por mês</span>. Horas adicionais podem ser contratadas com valores especiais.</p>
            <p className="pt-2">A consultoria avulsa tem o valor de <span className="font-semibold">R$ 550 / hora</span>. <InlineWhatsAppButton onClick={() => onWhatsAppClick(createWhatsAppLink("Olá, Davi! Gostaria de agendar uma hora de Consultoria Digital."))}>Vamos agendar sua sessão estratégica?</InlineWhatsAppButton></p>
        </div>
    )
});


const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const CrossIcon = () => (
    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);

const CreditCardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-4 text-[var(--gold-text)] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM20 18H4v-6h16v6zm0-10H4V6h16v2z"/>
    </svg>
);


const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalContent | null>(null);
  const [theme, setTheme] = useState<Theme>('dark');
  const [whatsAppUrlToConfirm, setWhatsAppUrlToConfirm] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.add('dark-theme');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
  };
  
  const handleWhatsAppClick = (url: string) => {
    setWhatsAppUrlToConfirm(url);
  };
  
  const handleCloseConfirmModal = () => {
    setWhatsAppUrlToConfirm(null);
  };

  const handleConfirmRedirect = () => {
    if (whatsAppUrlToConfirm) {
      window.open(whatsAppUrlToConfirm, '_blank', 'noopener,noreferrer');
    }
    handleCloseConfirmModal();
  };

  const openModal = (content: ModalContent | null) => {
    if (content?.content) {
      setActiveModal(content);
    }
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };
  
  const handleShowPlanDetails = (plan: Plan) => {
    openModal({
        title: plan.title,
        content: (
            <div className="space-y-4">
                <p className="text-[var(--text-secondary)] mb-2">{plan.subtitle}</p>
                <div className="mb-4">
                    <span className="text-3xl font-extrabold text-[var(--text-primary)]">{plan.price}</span>
                    <span className="text-[var(--text-secondary)] ml-2">{plan.priceDetails}</span>
                </div>
                <ul className="space-y-3">
                    {plan.features.map((feature) => (
                        <li key={feature.text} className="flex items-center group">
                            <span className="mr-3 flex-shrink-0">
                                {feature.included ? <CheckIcon /> : <CrossIcon />}
                            </span>
                            <span className={`flex-1 ${feature.included ? 'text-[var(--text-primary)]' : 'text-gray-500 line-through'}`}>{feature.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    });
  };
  
  const clickableBenefitStyle = "bg-[var(--card-bg)]/50 p-6 rounded-xl border border-[var(--border-color)] text-left hover:border-[var(--gold-text)] hover:bg-[var(--card-bg)] transition-all w-full h-full focus:outline-none focus:ring-2 focus:ring-[var(--gold-text)]/50";


  return (
    <div className="min-h-screen">
       <Header theme={theme} toggleTheme={toggleTheme} onWhatsAppClick={handleWhatsAppClick} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <section className="text-center my-12 sm:my-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">Escolha a Parceria Ideal para sua Jornada Digital</h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">Nossos planos são cumulativos e desenhados para acompanhar cada etapa do seu crescimento, do lançamento à expansão.</p>
        </section>

        <section id="plans" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-4">
          {PLANS_DATA.map((plan, index) => (
            <PlanCard 
                key={plan.title} 
                plan={plan} 
                onFeatureClick={(feature) => openModal({ title: feature.text, content: feature.details })}
                onShowDetailsClick={() => handleShowPlanDetails(plan)}
                onWhatsAppClick={handleWhatsAppClick}
                className={PLANS_DATA.length === 3 && index === 2 ? "md:col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </section>

        <div className="my-8 max-w-3xl mx-auto">
            <div className="shine-effect rounded-2xl p-4 md:p-6 flex items-center justify-center">
                <CreditCardIcon />
                <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                    Todos os pagamentos únicos (não se aplica ao plano <span className="font-semibold text-[var(--text-primary)]">Club.IA</span>) podem ser parcelados em até 4x no cartão, sujeito a taxas da operadora.
                </p>
            </div>
        </div>

        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
            <p className="text-sm text-[var(--text-secondary)]">*Plano <span className="font-bold text-[var(--text-primary)]">Club.IA</span>: Fidelidade de 6 meses. Isenção da taxa de setup de R$ 5.500. <span className="font-bold text-green-400">R$500 de desconto</span> nos 2 primeiros meses. Custos de servidores de terceiros podem ser aplicados.</p>
        </div>

        <section id="add-ons" className="mb-16 sm:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--text-primary)]">Serviços Adicionais</h2>
            <p className="text-center text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto text-base sm:text-lg">Potencialize sua marca com nossos serviços especializados, que podem ser contratados de forma avulsa ou como parte de uma parceria estratégica.</p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                <button
                    onClick={() => openModal(logoModalContent(handleWhatsAppClick))}
                    className="shine-effect rounded-3xl p-6 md:p-8 text-left flex flex-col items-center w-full h-full hover:border-[var(--gold-text)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-[var(--gold-text)]"
                >
                    <PenToolIcon className="w-12 h-12 mb-4 text-[#85E3F2]" />
                    <h3 className="text-xl font-bold mb-2 text-center text-[var(--text-primary)]">Logotipo Profissional</h3>
                    <p className="text-[var(--text-secondary)] text-center mb-4 flex-grow">Criação de um logotipo exclusivo e memorável para representar sua marca.</p>
                    <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">a partir de R$ 500,00</p>
                </button>
                <button
                    onClick={() => openModal(aiAgentModalContent(handleWhatsAppClick))}
                    className="shine-effect rounded-3xl p-6 md:p-8 text-left flex flex-col items-center w-full h-full hover:border-[var(--gold-text)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-[var(--gold-text)]"
                >
                    <BrainIcon className="w-12 h-12 mb-4 text-[#FFD369]" />
                    <h3 className="text-xl font-bold mb-2 text-center text-[var(--text-primary)]">Agente de IA Personalizado</h3>
                    <p className="text-[var(--text-secondary)] text-center mb-4 flex-grow">Desenvolvemos um assistente de IA para automações complexas e personalizadas.</p>
                    <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">a partir de R$ 1.500,00</p>
                </button>
                 <button
                    onClick={() => openModal(consultancyModalContent(handleWhatsAppClick))}
                    className="shine-effect rounded-3xl p-6 md:p-8 text-left flex flex-col items-center w-full h-full hover:border-[var(--gold-text)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-[var(--gold-text)]"
                >
                    <ConsultancyIcon className="w-12 h-12 mb-4 text-[#a7d129]" />
                    <h3 className="text-xl font-bold mb-2 text-center text-[var(--text-primary)]">Consultoria Digital</h3>
                    <p className="text-[var(--text-secondary)] text-center mb-4 flex-grow">Sessões estratégicas para destravar o potencial do seu negócio online.</p>
                    <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">R$ 550 / hora</p>
                </button>
                <button
                    onClick={() => openModal(societyModalContent(handleWhatsAppClick))}
                    className="shine-effect rounded-3xl p-6 md:p-8 text-left flex flex-col items-center w-full h-full hover:border-[var(--gold-text)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-[var(--gold-text)]"
               >
                    <HandshakeIcon className="w-12 h-12 mb-4 text-[#F7AFC7]" />
                    <h3 className="text-xl font-bold mb-2 text-center text-[var(--text-primary)]">Opção de Sociedade</h3>
                    <p className="text-[var(--text-secondary)] text-center mb-4 flex-grow">Oferecemos nossos serviços em troca de participação no seu negócio. Ideal para projetos promissores.</p>
                    <p className="text-lg font-bold text-green-400">Conversar sobre Parceria</p>
                </button>
            </div>
        </section>

        <section id="automations" className="mb-16 sm:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--text-primary)]">Nossas Automações Inteligentes</h2>
            <p className="text-center text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto text-base sm:text-lg">Otimize seu tempo e melhore o atendimento com nossas soluções de automação. Cada serviço pode ser contratado individualmente.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {AUTOMATIONS_DATA.map((automation, index) => (
                    <button 
                        key={index} 
                        onClick={() => openModal({ title: automation.title, content: automation.getDetails(handleWhatsAppClick) })}
                        className={`shine-effect rounded-3xl p-6 md:p-8 text-center flex flex-col items-center w-full h-full text-left hover:border-[var(--gold-text)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-[var(--gold-text)] disabled:opacity-50 disabled:cursor-not-allowed ${AUTOMATIONS_DATA.length === 3 && index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
                        disabled={!automation.getDetails}
                    >
                        <automation.Icon className="w-12 h-12 mb-4" style={{ color: automation.color }} />
                        <h3 className="text-xl font-bold mb-2 text-center text-[var(--text-primary)]">{automation.title}</h3>
                        <p className="text-[var(--text-secondary)] mb-4 flex-grow text-center">{automation.description}</p>
                        <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">{automation.price}</p>
                        <p className="text-sm text-[var(--text-secondary)]">Setup + <span className="font-semibold">{automation.recurrence}</span> de manutenção*</p>
                    </button>
                ))}
            </div>
             <p className="text-center text-xs text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">*Membros Club.IA têm isenção da taxa de manutenção por 3 meses. Consulte os detalhes nos benefícios.</p>
        </section>

        <section id="bonus" className="mb-16 sm:mb-20 shine-effect rounded-3xl p-6 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gold-text">🌟 Benefícios Exclusivos para Membros Club.IA 🌟</h2>
            <p className="text-center text-[var(--text-secondary)] mb-10 max-w-3xl mx-auto">Ao se tornar um membro do <span className="font-bold">Club.IA</span>, você desbloqueia vantagens e descontos únicos nos nossos serviços de automação e criação.</p>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
                <button
                    onClick={() => openModal(bonusArtesModalContent)}
                    className={clickableBenefitStyle}
                >
                    <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">5 Artes Extras Aleatórias</h3>
                    <p className="text-[var(--text-secondary)]">Válidas por até 1 ano, podem ser solicitadas com 5 dias de antecedência (mediante disponibilidade).</p>
                </button>
                 <button
                    onClick={() => openModal(backendModalContent)}
                    className={clickableBenefitStyle}
                >
                    <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">Início Seguro do Back-end</h3>
                    <p className="text-[var(--text-secondary)]">Estrutura inicial com segurança reforçada e acessos internos para sua tranquilidade.</p>
                </button>
                <button
                    onClick={() => openModal(descontoModalContent)}
                    className={`${clickableBenefitStyle} md:col-span-2`}
                >
                    <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">Desconto em Automações</h3>
                    <p className="text-[var(--text-secondary)] mb-4">Descontos especiais para membros nos serviços de automação listados acima:</p>
                    <ul className="space-y-2 list-inside list-disc text-[var(--text-secondary)]">
                        <li>Contratando 1 plano, a automação sai de <span className="line-through">R$1.350,00</span> por <span className="text-green-400 font-bold">R$800,00</span>.</li>
                        <li>Contratando 2 planos, o segundo sai por <span className="text-green-400 font-bold">R$600,00</span>.</li>
                        <li className="text-sm italic">Desconto mantido na recorrência por 3 meses. Após, aplica-se taxa de manutenção.</li>
                    </ul>
                </button>
            </div>
        </section>
        
        <SummaryCard theme={theme} />

      </main>
      <Footer onWhatsAppClick={handleWhatsAppClick} />
      {activeModal && (
        <Modal
          isOpen={!!activeModal}
          onClose={handleCloseModal}
          title={activeModal.title}
        >
          {activeModal.content}
        </Modal>
      )}

      {/* WhatsApp Confirmation Modal */}
      {whatsAppUrlToConfirm && (
        <Modal
          isOpen={!!whatsAppUrlToConfirm}
          onClose={handleCloseConfirmModal}
          title="Confirmar Redirecionamento"
        >
            <div className="text-center">
                <p className="mb-6 text-lg">Você será redirecionado para o WhatsApp para continuar a conversa.</p>
                <p className="mb-8 text-sm text-[var(--text-secondary)]">Podemos prosseguir?</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={handleCloseConfirmModal}
                        className="py-2 px-6 rounded-lg bg-gray-500/20 text-[var(--text-secondary)] hover:bg-gray-500/40 transition-colors font-semibold"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleConfirmRedirect}
                        className="py-2 px-6 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 transition-colors"
                    >
                        Sim, continuar
                    </button>
                </div>
            </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
