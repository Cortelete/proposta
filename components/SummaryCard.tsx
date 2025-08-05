
import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Theme } from '../types';
import { ChartBarIcon, BoltIcon, UsersIcon } from '../constants';


const effortData = [
  { name: 'Web/Software', Esforço: 80, fill: '#85E3F2' },
  { name: 'Design/Branding', Esforço: 65, fill: '#FFD369' },
  { name: 'Estratégia/IA', Esforço: 50, fill: '#F7AFC7' },
];

const growthData = [
  { name: 'Mês 1', Alcance: 1000, Tráfego: 400, Conversões: 20 },
  { name: 'Mês 2', Alcance: 1800, Tráfego: 900, Conversões: 54 },
  { name: 'Mês 3', Alcance: 3200, Tráfego: 1600, Conversões: 120 },
  { name: 'Mês 4', Alcance: 5000, Tráfego: 2500, Conversões: 250 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[var(--backdrop-bg)] backdrop-blur-sm p-3 border border-[var(--border-color)] rounded-lg text-sm">
        <p className="label font-bold text-[var(--text-primary)]">{`${label}`}</p>
        {payload.map((pld: any) => (
          <div key={pld.dataKey} style={{ color: pld.color }}>
              {`${pld.name}: ${pld.value.toLocaleString('pt-BR')}`}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

interface SummaryCardProps {
    theme: Theme;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ theme }) => {
    const axisColor = theme === 'light' ? '#606770' : '#8b949e';
    const gridColor = theme === 'light' ? '#e0e0e0' : '#374151';

  return (
    <section id="summary" className="shine-effect rounded-3xl p-6 md:p-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[var(--text-primary)] title-hover cursor-default">Resumo Estratégico & Projeções</h2>
      <p className="text-center text-[var(--text-secondary)] mb-10 text-sm title-hover cursor-default">
        <span className="font-bold">Aviso:</span> Todos os dados são simbólicos e servem apenas como estimativa potencial de crescimento.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="shine-effect rounded-2xl p-6 text-center border border-transparent hover:border-green-400/50 transition-colors">
            <div className="flex justify-center mb-4">
                <ChartBarIcon className="w-10 h-10 text-green-400" />
            </div>
            <h4 className="font-bold text-lg mb-2 text-[var(--text-primary)] title-hover">ROI Projetado</h4>
            <p className="text-4xl font-extrabold text-green-400 mb-2">+450%</p>
            <p className="text-sm text-[var(--text-secondary)]">O acompanhamento do <span className="font-semibold text-[var(--text-primary)]">Club.IA</span> visa multiplicar seu investimento em até 6 meses.</p>
        </div>
        
        <div className="shine-effect rounded-2xl p-6 text-center border border-transparent hover:border-yellow-400/50 transition-colors">
             <div className="flex justify-center mb-4">
                <BoltIcon className="w-10 h-10 text-yellow-400" />
            </div>
            <h4 className="font-bold text-lg mb-2 text-[var(--text-primary)] title-hover">Aumento de Eficiência</h4>
            <p className="text-4xl font-extrabold text-yellow-400 mb-2">+30%</p>
            <p className="text-sm text-[var(--text-secondary)]">Libere horas da sua equipe com automações e processos otimizados a partir do plano <span className="font-semibold text-[var(--text-primary)]">VIP</span>.</p>
        </div>

        <div className="shine-effect rounded-2xl p-6 text-center border border-transparent hover:border-blue-400/50 transition-colors">
             <div className="flex justify-center mb-4">
                <UsersIcon className="w-10 h-10 text-blue-400" />
            </div>
            <h4 className="font-bold text-lg mb-2 text-[var(--text-primary)] title-hover">Crescimento de Leads</h4>
            <p className="text-4xl font-extrabold text-blue-400 mb-2">+200%</p>
            <p className="text-sm text-[var(--text-secondary)]">Atraia clientes mais qualificados com as estratégias de SEO e conteúdo do <span className="font-semibold text-[var(--text-primary)]">Club.IA</span>.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4 gold-text">Esforço Estimado por Categoria</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer>
              <BarChart data={effortData} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis type="number" stroke={axisColor} />
                <YAxis dataKey="name" type="category" stroke={axisColor} width={100} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(133, 227, 242, 0.1)' }} />
                <Bar dataKey="Esforço" barSize={30} radius={[0, 10, 10, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4 gold-text">Projeção Simbólica de Crescimento</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer>
              <LineChart data={growthData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="name" stroke={axisColor} />
                <YAxis stroke={axisColor} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{fontSize: "14px"}}/>
                <Line type="monotone" dataKey="Alcance" stroke="#85E3F2" strokeWidth={2} dot={{r: 4}} activeDot={{r: 6}} />
                <Line type="monotone" dataKey="Tráfego" stroke="#FFD369" strokeWidth={2} dot={{r: 4}} activeDot={{r: 6}}/>
                <Line type="monotone" dataKey="Conversões" stroke="#00FF94" strokeWidth={2} dot={{r: 4}} activeDot={{r: 6}}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryCard;