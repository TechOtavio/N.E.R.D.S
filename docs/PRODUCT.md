# PRODUCT.md — N.E.R.D.S. Landing Page

## 1) Propósito do Produto
A N.E.R.D.S. Landing Page é a presença institucional digital do Núcleo de Excelência em Pesquisa, Desenvolvimento e Sistemas (UFC).
O produto comunica autoridade técnica, organiza informações estratégicas e direciona usuários para exploração de pesquisas, equipe e canais de contato.

## 2) Problema que o Software Resolve
- Falta de uma vitrine digital coesa para apresentar o núcleo de pesquisa.
- Baixa clareza sobre vetores de atuação, equipe e proposta de valor.
- Ausência de página moderna, responsiva e consistente com identidade cyber-tech.
- Dificuldade de padronizar evolução de front-end sem uma base técnica e visual explícita.

## 3) Objetivos de Negócio
- Consolidar posicionamento institucional do N.E.R.D.S.
- Facilitar descoberta de pesquisas e áreas de atuação.
- Aumentar credibilidade por meio de comunicação visual e técnica consistente.
- Criar base escalável para evolução futura (integrações, conteúdo dinâmico, analytics).

## 4) Personas e Público-Alvo

### Persona A — Estudante Pesquisador
- Busca: oportunidades, temas de pesquisa, visão técnica do laboratório.
- Necessidade: entendimento rápido das áreas de atuação e equipe.
- Fricção: sites institucionais desatualizados ou pouco claros.

### Persona B — Professor/Parceiro Acadêmico
- Busca: capacidade técnica do núcleo e potencial de colaboração.
- Necessidade: prova de maturidade técnica e organização.
- Fricção: informações dispersas e identidade institucional fraca.

### Persona C — Visitante Institucional/Externo
- Busca: visão geral confiável e profissional.
- Necessidade: navegação simples, leitura objetiva e contato claro.
- Fricção: experiência ruim em mobile e linguagem pouco acessível.

## 5) Escopo Funcional

### Em Escopo (MVP Atual)
- Header com navegação e CTA principal.
- Hero section com mensagem institucional e botões de ação.
- Seção de vetores de atuação com cards.
- Seção de equipe com banner e membros.
- Footer institucional com links.
- Layout responsivo (desktop/mobile) com tema dark cyber-tech.

### Fora de Escopo (Nesta Fase)
- CMS/admin para edição de conteúdo.
- Backend/API de dados.
- Autenticação real no botão "Acesso ao Nó".
- Internacionalização multilíngue.
- Analytics avançado e testes A/B.

## 6) Requisitos Funcionais (RF)

### Prioridade Alta (P1)
- RF-01: Exibir Header com logo N.E.R.D.S., menu e botão "ACESSO AO NÓ".
- RF-02: Exibir Hero com headline, subtítulo e dois CTAs.
- RF-03: Exibir seção "Vetores de Atuação" com 3 cards via mapeamento de dados.
- RF-04: Exibir seção "Núcleo Operacional" com banner e cards de membros.
- RF-05: Exibir Footer com blocos institucionais e copyright.
- RF-06: Garantir responsividade mínima para mobile e desktop.

### Prioridade Média (P2)
- RF-07: Permitir troca de imagens e textos por configuração local de dados.
- RF-08: Manter consistência visual de hover/focus em componentes interativos.
- RF-09: Suportar crescimento para novas seções sem refatoração estrutural.

### Prioridade Baixa (P3)
- RF-10: Preparar estrutura para integração futura com dados dinâmicos (API/CMS).
- RF-11: Facilitar internacionalização futura sem reescrita massiva.

## 7) Requisitos Não Funcionais (RNF)

### Prioridade Alta (P1)
- RNF-01: Stack obrigatória React + Vite + TypeScript + React-Bootstrap + SCSS.
- RNF-02: Proibido estilo inline, salvo justificativa técnica explícita.
- RNF-03: Código modular com separação por responsabilidades (`components`, `sections`, `styles`).
- RNF-04: Build e lint devem executar sem erro.

### Prioridade Média (P2)
- RNF-05: Acessibilidade básica: contraste adequado, foco visível, texto legível.
- RNF-06: Performance inicial adequada para landing page (assets otimizados).
- RNF-07: Uso preferencial de assets locais para reduzir dependência de rede.

### Prioridade Baixa (P3)
- RNF-08: Base preparada para CI/CD e validação automatizada futura.
- RNF-09: Documentação técnica suficiente para onboarding rápido do time.

## 8) Critérios de Aceite Globais
- Todas as seções previstas renderizam corretamente em desktop e mobile.
- Identidade visual segue padrão cyber-tech dark oficial.
- Não há violações de lint nem erros de build.
- Estrutura do projeto permanece limpa, previsível e escalável.
