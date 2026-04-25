# N.E.R.D.S. - Núcleo Especializado em Reengenharia e Desenvolvimento de Software

Bem-vindo ao repositório oficial da Landing Page do **N.E.R.D.S. (Núcleo Especializado em Reengenharia e Desenvolvimento de Software)**, laboratório de inovação tecnológica da Universidade Federal do Ceará (UFC).

Esta aplicação é uma *Single Page Application (SPA)* de altíssimo desempenho, construída para transmitir excelência acadêmica, autoridade técnica e maximizar conversões através de engenharia de software rigorosa e Design Premium (Awwwards Style).

## 🚀 Tecnologias e Arsenal Utilizado

- **Framework Core:** React 18 + TypeScript (Strict Mode)
- **Bundler:** Vite (HMR super-rápido)
- **Estilização e Layout:** SCSS Modular + React Bootstrap
- **Animações e Física (Awwwards):** Framer Motion (Incluindo *Custom Cursor* minimalista e Scroll Semântico)
- **Interatividade 3D (Carrossel):** Swiper.js (Módulo EffectCoverflow com Loop e Autoplay)
- **Conversão de Marketing (Serverless):** Formulários funcionais com controle de estado assíncrono conectados à API **FormSubmit** (Zero Backend).
- **SEO & Social:** Meta Tags OpenGraph para otimização de links em WhatsApp e Redes Sociais.
- **Ícones:** React-Icons (FontAwesome e SiIcons para a esteira infinita de logos)

## 🏗️ Arquitetura do Projeto (MVC Moderno)

O projeto foi refatorado seguindo boas práticas de "Clean Code" e arquitetura MVC adaptada para Front-end:

- **M (Model):** Dados simulados e centralizados em `src/data/index.tsx`. Todo texto da equipe e projetos é editado num único arquivo. Interfaces restritas em `src/types/index.ts`.
- **V (View):** Componentes estéticos localizados na pasta `src/sections/` e `src/components/`, responsáveis apenas pela beleza e UI (ex: `TeamSection.tsx`, `HeroSection.tsx`).
- **C (Controller):** Lógica e algoritmos isolados, como as físicas de inércia do scroll em `src/utils/animations.ts`.

## 📱 Mobile-First e Responsividade
- O projeto possui navegação protegida por Navbar-Collapse isolado em vidro esfumaçado escuro (`rgba(11,19,38,0.95)`) para celulares.
- Todos os "Paddings" são dinâmicos via Media Queries, reduzindo buracos vazios em smartphones (`padding: 3rem`) e expandindo em Desktops (`padding: 5rem`).
- Os botões (CTAs) assumem largura total nas telas menores para ergonomia.

## 🛠️ Como Executar o Projeto Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Inicie o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```
3. **Validação de Código (Zero Erros):**
   Garantimos que não há nenhum erro tipográfico ou falha estrutural compilando com:
   ```bash
   npx tsc --noEmit
   ```

## 📦 Build para Produção
Para compilar a aplicação otimizada para implantação (Vercel, Netlify, Github Pages):
```bash
npm run build
```
*(Isso gerará a pasta `dist/` com todos os ativos minificados).*

---
Desenvolvido com 💙 pelo time **N.E.R.D.S. | UFC**.
