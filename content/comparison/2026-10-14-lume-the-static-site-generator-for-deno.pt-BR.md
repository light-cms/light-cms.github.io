---
title: "Lume: O Gerador de Site Estático para Deno"
description: "Gerador de site estático da Deno, explicou: formatos suportados, arquitetura de plugins, como eles se compara com Jekyll, Hugo e Elevatória e como se encaixa num fluxo de trabalho do Git CMS."
serial: 29
date: 2026-10-14T15:40:00Z
draft: false
keywords:
  - Gerador de site estático lume
  - deno ssg
  - lume contra elevação
  - lume deno cms
  - Lume terreno
preview: /og-image.webp
taxonomies:
  tags:
    - ssg
    - lume
    - deno
    - estático-sítios
---

[Lume](https://lume.land) (galego para "fogo") é o gerador estático do site no centro do ecossistema de Deno. Inspirado em Jekyll, Hugo e Eleventy, pretende ser mais simples de configurar do que qualquer um deles enquanto se mantém tão flexível, e roda nativamente em Deno, sem a vista de `node_modules`.

---

## O que é Lume

Um gerador de site estático rápido, composto e extensível escrito em Deno. Você o aponta para um diretório de origem de conteúdo, ele processa seus arquivos através de um pipeline de plugins, e escreve HTML estático puro pronto para qualquer CDN. A filosofia: padrões sensatos, configuração mínima e cada etapa trocável.

## Formatos e Modelos

O recurso de título do Lume é flexibilidade no formato. Fora da caixa que manipula:

- **Markdown** (com plugins para sintaxe flavored no GitHub, notas de rodapé e muito mais)
- **Arquivos de dados YAML e JSON**
- **Módulos JavaScript e TypeScript** como páginas ou fontes de dados
- **JSX** (Componentes predefinidos renderizados para HTML)
- **Nunjucks** e outros modelos de linguagens através de plugins

O último ponto importa: um site Lume pode misturar artigos Markdown com componentes JSX na mesma compilação, Sites tão pesados com conteúdos com seções interativas ocasionais se sentem naturais.

## Eco-sistema

- **Plugins** cobrem tudo, desde o realce de sintaxe (Prism, Shiki) à transformação de imagem, sitemaps e feeds: O modelo "montagem sua própria pipeline" estilo ElevVinte com ergonomia Deno-nativa.
- **Deno toolchain**: construído no TypeScript, execução padrão segura e ambientes reprodutíveis sem um ritual de gerenciador de pacotes.
- **De volta pelo Deno**: usado em tutoriais oficiais, é a resposta de fato "o que eu uso para criar um site estático no Deno?"

## Onde cabe

Lume ocupa o mesmo nicho que [Eleventy](/blog/eleventy-vs-astro/): saída mínima, liberdade de template, nenhum framework no lado do cliente imposto. Escolha se o seu mundo é Deno/TypeScript; escolha Eleventy se o seu mundo é Node; Escolher [Astro](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/) se você quer as ilhas de componentes construídas nelas. O campo mais amplo é inquirido nos [melhores geradores de site estáticos](/blog/best-static-site-generators/).

## Conteúdo e CMS Workflow

Lume lê Markdown com questão frontal do seu repositório, como todos os geradores nesta categoria. Pareá-lo com um CMS baseado no Git ([LightCMS](/getting-started/) ou o [campo maior](/comparison/top-git-cms/)) e os escritores publicam visualmente enquanto Lume compila os commits em HTML. Os alvos de implantação são os hosts estáticos livres habitualmente ([comparison](/blog/cloudflare-pages-vs-github-pages/)).

---

## Perguntas Frequentes

### O Lume é um CMS ou um gerador de site estático?

Um gerador de site estático. Para a camada de edição, paree-a com um CMS baseado em Git que commits Markdown em seu diretório de origem.

### Qual é a diferença entre Lume e Elevação?

Muito pouco filosófico: ambos produzem saída estática zero JS com liberdade de template. Lume é Deno-native com TypeScript embutido; Eleventy é executado no Node com o ecossistema maior.

### O Lume suporta JSX?

Sim. Os componentes predefinidos podem renderizar em HTML estático ao lado das páginas Markdown, um dos seus recursos mais queridos.

### A Lume é rápida?

Sim. Como todos os geradores de processo único que produzem saída estática, as compilações são medidas em segundos; os visitantes recebem o mesmo HTML em cache todas as produções de SSG.
