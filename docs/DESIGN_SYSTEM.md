# DESIGN_SYSTEM.md — N.E.R.D.S. Landing Page

## 1) Diretriz Visual
- Estética: Cyber-tech / Futurista
- Tema: Dark Mode
- Linguagem visual: alto contraste, brilho sutil, bordas leves, atmosfera tecnológica

## 2) Paleta Oficial

| Token | HEX / Valor | Uso |
|---|---|---|
| Fundo Base | `#0b1326` | Fundo principal da aplicação |
| Fundo Secundário | `#0a192f` | Blocos de destaque (placeholder/chart/banner) |
| Texto Primário | `rgba(255,255,255,0.8)` | Corpo de texto |
| Texto Forte | `#ffffff` | Títulos e textos de alto contraste |
| Primária (Cyan) | `#63f7ff` | CTAs, bordas ativas, destaques |
| Secundária (Deep Purple) | `#5b2a86` | Apoio visual/gradientes |

## 3) Mapeamento SCSS Oficial
- `$body-bg: #0b1326;`
- `$body-color: rgba(255, 255, 255, 0.8);`
- `$primary: #63f7ff;`
- `$secondary: #5b2a86;`
- `$font-family-sans-serif: "Inter", sans-serif;`
- `$headings-font-family: "Space Grotesk", sans-serif;`

## 4) Tipografia
- Fonte de texto geral: **Inter**
- Fonte de títulos/destaques: **Space Grotesk**
- Regras:
  - Títulos com maior peso e contraste.
  - Parágrafos com legibilidade em fundo escuro.
  - Evitar variação excessiva de pesos e tamanhos sem necessidade.

## 5) Espaçamento e Layout
- Base de ritmo vertical por seção: `padding` amplo (ex.: `4rem 0`).
- Grid oficial com `Container`, `Row`, `Col` do React-Bootstrap.
- Distâncias internas consistentes com utilitários Bootstrap (`mb-*`, `py-*`, `gap-*`).
- Não colar elementos; sempre preservar respiro visual.

## 6) Comportamento de Componentes Base

### Navbar
- Fundo translúcido com blur (glassmorphism leve).
- Borda inferior sutil em cyan translúcido.
- Links com hover para cyan.

### Botões
- Primário: `variant="primary"` para ação principal.
- Secundário: `variant="outline-primary"` para ação alternativa.
- Hover/focus devem manter contraste e feedback visual.

### Cards (Vetores)
- Fundo escuro translúcido.
- Borda padrão sutil.
- Hover com borda cyan + elevação leve + brilho suave.

### Equipe
- Cards verticais simples.
- Avatar circular com borda cyan translúcida.
- Nome centralizado, cargo com destaque cyan.

### Footer
- Fundo escuro mais denso.
- Hierarquia clara entre marca e links institucionais.

## 7) Efeitos Visuais
- `grid-pattern`: grade sutil em cyan translúcido para sensação tecnológica.
- `glow-effect`: brilho controlado em elementos de destaque.
- Não exagerar em brilho; priorizar leitura e clareza.

## 8) Regras de Acessibilidade Visual
- Garantir contraste suficiente em texto sobre fundo escuro.
- Estados de foco e hover devem ser perceptíveis.
- Evitar textos pequenos demais em blocos críticos.
- Não depender apenas de cor para comunicar ação.
