---
title: 'Zine: Gerador de Site Estático'
description: 'Zine is a fast, young static site generator written in Zig, with its own Super templating language and near-instant builds — a profile of the minimalist SSG.'
draft: false
keywords:
  - gerador de site estático
  - zelo Sg
  - gerador de site estático
  - zine ssg vs hugo
  - zanga ssg mais rápido
isCJKLanguage: false
headless: false
preview: /og-image.webp
taxonomies:
  tags:
    - ssg
    - zine
    - zig
    - estático-sítios
---

[Zine](https://zine-ssg.io) É um novo gerador de site estático Zine é rápido, informado e comoventemente não convencional. É um jovem projeto que já lida com sites pessoais e blogs com facilidade, e recompensa os autores dispostos a aprender sua própria maneira de fazer as coisas.

## O que Torna Zine Diferente

Zine stands out from other static site generators in several ways:

- \*\*Escrito em Zig, do zero. \* Sem tempo de execução de JavaScript, sem Ruby, sem zona de conforto da biblioteca padrão: o renderizador de Markdown, mecanismo de template e orquestração são construídos de propósito. Os tempos de construção são efetivamente instantâneos.
- **Seu próprio script de linguagem de template.** Zine usa o SuperHTML e o SuperMD: e o sistema de templates de script projetado para o projeto, em vez de emprestado de um ecossistema.
- **Scripty**, sua camada de script, adiciona uma lógica programável onde os templates por si só são curtos.
- \*\*Conteúdo como uma coleção de arquivos e layouts. \* Zine transforma arquivos de conteúdo em HTML, aplica seus layouts e copia o resultado em um diretório de saída, o modelo estático clássico corre rápido.
- **Extras de primeira classe**: Sites multilíngues (i18n), suporte de editores e destinos de deploy documentados: GitHub Pages, Cloudflare Pages, Páginas de Codeberg e páginas da cabana de origem.
-

## O ofício honesto

O repositório Zine afirma claramente: o projeto é jovem e ainda não apresenta paridade com alternativas populares como Hugo. E como o Super é a própria linguagem para modelos de Zine, existe uma curva de aprendizagem: temas e conhecimento da comunidade são menores, fazendo o apoio com maior frequência, você mesmo.

Para um site pessoal com um blog (a zona de conforto declarada do projeto), Zine é mais que capaz, e a experiência do autor é rápida e agradável quando Super cliques.

## Compatibilidade de conteúdo e CMS

Zine não consome CommonMark Markdown com primeira matéria da mesma forma que a maioria dos geradores de site estático consome, então um fluxo de trabalho típico de CMS baseado no GitLab não se aplica diretamente.

Zine espera seus próprios formatos de conteúdo, incluindo [SuperMD](https://zine-ssg.io/docs/supermd/), [Scripty](https://zine-ssg.io/docs/scripty/) e [Ziggy](https://ziggy-lang.io/). If you already have Markdown content, [md2smd](https://github.com/light-cms/md2smd) can help convert between [CommonMark](https://commonmark.org/) and Zine's formats.

![Zine build pipeline](https://i.ibb.co/gMQxLRXy/Nov-1-02-26-AM-edited-png.png)

Você precisa de dois repositórios: um para o frontend e outro para o conteúdo.

- [https://github.com/light-cms/zine\_site](https://github.com/light-cms/zine_template), the frontend repository
- [https://github.com/light-cms/blogs\_md](https://github.com/light-cms/zine_content), the content repository

Acionar um envio de repositório quando um novo conteúdo for empurrado para o repositório de conteúdo.

## Onde cabe

- Se você quer tentar algo alfa.

[Experimente os modelos de nossa organização para obter mais informações.](https://github.com/light-cms)
