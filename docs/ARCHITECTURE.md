# ARCHITECTURE.md — N.E.R.D.S. Landing Page

## 1) Visão Geral da Stack
- Runtime UI: React 19
- Build Tooling: Vite
- Linguagem: TypeScript
- UI Framework: React-Bootstrap
- Estilização: SCSS (com customização de variáveis do Bootstrap)
- Qualidade: ESLint + TypeScript check no build

## 2) Princípios Arquiteturais
- Separar estrutura de página de componentes reutilizáveis.
- Centralizar regras visuais em SCSS global e variáveis.
- Evitar acoplamento entre conteúdo e layout quando possível.
- Priorizar legibilidade, previsibilidade e baixo custo de manutenção.
- Evoluir por composição de seções, sem "monólito" em `App.tsx`.

## 3) Estrutura de Diretórios

```txt
src/
  components/        # Componentes reutilizáveis de UI (Header, cards, item de equipe)
  sections/          # Blocos semânticos da página (Hero, Vectors, Team, Footer)
  styles/            # Tokens visuais, temas e regras globais SCSS
  assets/            # Imagens, ícones e mídias locais
  App.tsx            # Orquestração das seções da landing
  main.tsx           # Bootstrap da aplicação e import global de estilos
```

## 4) Responsabilidades por Camada
- `components/`
  - Componentes pequenos e reutilizáveis.
  - Não conter regras de layout de página inteira.
- `sections/`
  - Estruturar cada bloco de conteúdo da landing.
  - Compor componentes com `Container`, `Row`, `Col`.
- `styles/`
  - Definir tema, variáveis e comportamentos visuais globais.
  - Evitar duplicação de estilos entre seções.
- `assets/`
  - Guardar imagens oficiais da interface.
  - Evitar dependência de URLs remotas para itens críticos.

## 5) Padrões de Codificação

### Clean Code
- Nomear componentes com intenção clara (`HeroSection`, `VectorCard`).
- Uma responsabilidade principal por componente.
- Evitar lógica desnecessária dentro do JSX.
- Repetição visual deve virar componente reutilizável.

### Componentização
- Se um bloco repete estrutura em lista, usar mapeamento de array.
- Props tipadas explicitamente para componentes reutilizáveis.
- Não misturar dados estáticos com regras visuais complexas.

### Estado e Dados
- Preferir dados estáticos locais para MVP.
- Evitar estado global sem necessidade.
- Se não há interatividade dinâmica, não introduzir estado artificial.

### Tipagem (TypeScript)
- Tipar props com `type` ou `interface`.
- Não usar `any`.
- Tipos devem refletir o domínio visual mínimo (ex.: `tags: string[]`).

## 6) Convenções Técnicas Obrigatórias
- Usar componentes do React-Bootstrap para grid e elementos base.
- Estilos em SCSS; não introduzir Tailwind, styled-components ou CSS-in-JS.
- Classes CSS com nomes semânticos e previsíveis.
- Manter imports organizados: libs externas, internos, estilos.

## 7) Qualidade e Governança
- Sempre rodar `npm run lint` antes de commit.
- Sempre validar `npm run build` em mudanças estruturais.
- Mudanças de arquitetura devem atualizar documentação em `/docs`.
- Qualquer exceção de padrão deve ser justificada no PR/commit.
