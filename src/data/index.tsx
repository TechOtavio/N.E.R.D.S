/**
 * @file index.tsx
 * @description Banco de dados estático e simulado (Model).
 * Toda a informação textual, cargos e especialidades renderizadas na Landing Page
 * são lidas a partir destas variáveis. Edite os arrays abaixo para alterar o conteúdo do site.
 */
import { FaLaptopCode, FaTools, FaDatabase } from 'react-icons/fa'
import type { ProjectData, TeamMemberProps, VectorData } from '../types'

import avatarJC from '../assets/avatar-jc.svg'
import avatarMV from '../assets/MarcosVinícius.jpeg'
import whatsappImg2 from '../assets/avatar-as.svg'
import whatsappImg3 from '../assets/avatar-cm.svg'

export const teamMembers: TeamMemberProps[] = [
  {
    image: avatarMV,
    name: 'Marcos Vinicius',
    role: 'Líder Técnico / Full-stack',
  },
  {
    image: whatsappImg2,
    name: 'Ana Silva',
    role: 'Desenvolvedora Front-end',
  },
  {
    image: whatsappImg3,
    name: 'Carlos Mendes',
    role: 'Arquiteto de Software',
  },
  {
    image: avatarJC,
    name: 'Julia Costa',
    role: 'Especialista UI/UX',
  },
]

export const vectorsData: VectorData[] = [
  {
    icon: <FaLaptopCode size={40} />,
    title: 'Desenvolvimento Web',
    description: 'Criação de interfaces modernas, responsivas e de alta performance focadas na melhor experiência do usuário.',
    tags: ['React', 'Interfaces', 'Web'],
  },
  {
    icon: <FaTools size={40} />,
    title: 'Reengenharia de Sistemas',
    description: 'Modernização de sistemas legados, refatoração profunda de código e otimização de arquiteturas existentes.',
    tags: ['Refatoração', 'Arquitetura', 'Legado'],
  },
  {
    icon: <FaDatabase size={40} />,
    title: 'Back-end & APIs',
    description: 'Construção de lógicas de negócio robustas, bancos de dados eficientes e APIs seguras para aplicações corporativas.',
    tags: ['Node.js', 'Bancos de Dados', 'Segurança'],
  },
]

export const projectsData: ProjectData[] = [
  {
    title: 'Portal Acadêmico Integrado',
    description: 'Um sistema web unificado para gestão de notas, frequências e matriz curricular, desenhado para suportar alta concorrência de acessos durante períodos de matrícula.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Plataforma de Extensão',
    description: 'Aplicação voltada para o cadastro e gerenciamento de horas complementares de extensão e pesquisa, com fluxo de aprovação via painel administrativo.',
    tags: ['Vue.js', 'Python', 'Django'],
    link: '#',
  },
  {
    title: 'Dashboard de Indicadores (UFC)',
    description: 'Interface interativa para visualização em tempo real das métricas do laboratório e dados de pesquisa, com gráficos de alta performance.',
    tags: ['TypeScript', 'Recharts', 'Express'],
    link: '#',
  },
]
