---
title: "Lume: Um Gerador de Site Estático para Deno"
description: "Uma visão geral do Lume, gerador de site estático criado para Deno."
serial: 29
date: 2026-10-14T15:40:00Z
draft: false

tags:
  - ssg
  - lume
  - deno
  - estático-sítios
---

[Lume](https://lume.land) é um gerador de site estático construído para o ecossistema Deno. Ele gera HTML estático a partir de arquivos de conteúdo, modelos e dados, tornando-o adequado para blogs, documentação e outros sites de conteúdo que podem ser implantados em um CDN.

## O que o Lume fornece

| área                 | O que esperar                                                     | Operação                                                |
| :------------------- | :---------------------------------------------------------------- | :------------------------------------------------------ |
| Runtime              | Executa em Deno                                                   | Ecossistema menor do que os geradores baseados em Nodes |
| Formatos de conteúdo | Markdown, arquivos de dados, templates; plugins estendem formatos | Escolhas de plugin/configuração adicionam complexidade  |
| Modelos              | Suporta vários modelos de motores e JSX através de plugins        | A equipe precisa escolher convenções mais cedo          |
| Saída                | Arquivos estáticos para hospedagem CDN/estática                   | Recursos dinâmicos requerem serviços separados          |

## Quando a Lume estiver em boa forma

Lume é uma escolha razoável se o seu time já usa o Deno e quer um gerador de site estático com template flexível e um plugin pipeline. É menos convincente se seu time depende do ecossistema Node/npm, fluxos de trabalho existentes no Eleventy/Hugo/Astro ou um grande mercado de temas.

## Lume e edição de conteúdo

Lume lida com a geração do site, não com a edição do conteúdo. Se os autores precisarem de uma interface baseada no navegador, emparelhe o Lume com um CMS baseado em Git que commits Markdown ou arquivos de conteúdo compatíveis com o repositório.

Para comparações de SSG mais amplas, consulte [Melhores Geradores de Site Estáticos em 2026](/blog/best-static-site-generators/) e [Eleventy vs. Astro](/blog/eleventy-vs-astro/).
