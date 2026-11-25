---
title: "O que é um Gerador do Site Estático?"
description: "Um gerador de site estático compila conteúdo e templates em arquivos HTML, CSS e JavaScript estáticos antes da implantação."
date: "2026-11-16T08:58:17.908Z"
draft: false
tags:
  - o que é um gerador de site estático
  - gerador de site estático
  - Explicação ssg
  - como funcionam os sites estáticos
  - HTML pré-renderizado
slug: what-is-a-static-site-generator
---

Um gerador estático de site (SSG) compila arquivos de conteúdo, modelos e assets em HTML estático, CSS e JavaScript antes da implantação. Em vez de renderizar cada página em cada solicitação, a etapa de compilação produz arquivos que um CDN ou um servidor web podem entregar diretamente.

## Como funciona um gerador de site estático

```text
Content (Markdown + front matter)
Templates and components
Assets and configuration
        │
        ▼
   SSG build
        │
        ▼
 public/ or dist/
        │
        ▼
   CDN / static host
```

Uma construção típica faz quatro coisas:

1. Lê conteúdo: Analisa os metadados Markdown e front matter tais como título, data, tags e rascunho de status.
2. Aplica modelos: Mapeia o conteúdo para layouts para páginas, listas, taxonomias e feeds.
3. Gera saída: Escreve páginas HTML, feeds RSS, Mapas de Site e índices de pesquisa.
4. Copies assets: Move imagens, fontes e arquivos estáticos no diretório de saída.

## Benefícios e trade-off

| Benefício                    | Por que isso importa                                                                                     | Operação                                                             |
| :--------------------------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| Entrega rápida               | Arquivos pré-construídos podem ser servidos a partir dos caches de arestas                               | Compilar o passo necessário antes que as alterações cheguem ao ar    |
| Superfície de execução menor | Nenhum aplicativo por solicitação requer tempo de execução ou banco de dados para as páginas de conteúdo | Recursos dinâmicos precisam de APIs ou JavaScript do lado do cliente |
| Portabilidade                | O conteúdo frequentemente vive como arquivos Markdown simples                                            | Os ecossistemas de template e plugin variam de acordo com o gerador  |
| Controle de versão ajustado  | Conteúdo e código podem ser encontrados no Git                                                           | Workflows editoriais podem precisar de uma camada CMS                |

Geradores de site estáticos funcionam bem para blogs, documentação, sites de marketing e portfólios. Eles são menos adequados quando cada solicitação precisa de renderização do lado do servidor ou de consultas de banco de dados em tempo real.

## Geradores de site estáticos comuns

SSGs populares incluem Astro, Hugo, Zola, Eleventy, Jekyll e SvelteKit em modo estático. Para uma comparação, veja [Melhores Geradores Estáticos do Site em 2026](/blog/best-static-site-generators/).

## Onde um CMS baseado em Git se encaixa

Uma renderização do SSG. A Git based CMS handles authoring by giving editors a browser interface that commits Markdown to the repository. Essa combinação mantém a arquitetura de entrega estática ao tornar a edição de conteúdo acessível para não-desenvolvedores. See [What Is a Git based CMS?](/blog/Git based-cms-explained/).
