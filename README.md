# N.E.R.D.S. - Núcleo Especializado em Reengenharia e Desenvolvimento de Software

Bem-vindo ao repositório oficial da Landing Page do **N.E.R.D.S.** da Universidade Federal do Ceará (UFC). 
Este projeto consiste na interface institucional para apresentação da equipe de desenvolvedores, áreas de especialização, portfólio de projetos e informações de contato.

## 🚀 Tecnologias e Stack
O projeto foi inteiramente construído com práticas modernas de desenvolvimento Web, visando performance, tipagem estrita e uma experiência de usuário (UX) com estética Cyberpunk/Neon "Premium".

- **Framework Core:** React 18 + TypeScript
- **Bundler:** Vite
- **Estilização e Layout:** SCSS + React Bootstrap (Sistema de Grid e Cards)
- **Animações (Micro-interações):** Framer Motion
- **Interatividade 3D (Carrossel):** Swiper.js (Módulo EffectCoverflow)
- **Ícones:** React-Icons (FontAwesome)

## 🏗️ Arquitetura do Projeto (MVC)
Nós isolamos lógicas para manter os componentes da View limpos.
- `src/types/`: Centralização das tipagens e contratos do TypeScript (Model).
- `src/data/`: Atua como nosso "Banco de Dados Fictício". Informações da equipe, áreas de especialidade e lista de projetos devem ser editadas aqui (Model).
- `src/utils/`: Controladores e regras de física (variantes do Framer Motion) para ditar como as animações se comportam (Controller).
- `src/components/` e `src/sections/`: Pedaços puramente visuais da interface (View).

## 🛠️ Como Rodar Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento (Vite):**
   ```bash
   npm run dev
   ```

3. **Para fazer a compilação final e verificar se há erros de tipo:**
   ```bash
   npx tsc --noEmit && npm run build
   ```

## ✒️ Editando Conteúdo
Não é necessário procurar nos arquivos complexos para alterar o texto do site. Toda a base de dados reside em `src/data/index.tsx`. Modifique as matrizes de `teamMembers`, `vectorsData` ou `projectsData` e a interface reagirá automaticamente.
