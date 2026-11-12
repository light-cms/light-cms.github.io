---
title: 'Zine: Gerador de Site Estático'
description: 'O que Zine é: um jovem e rápido gerador de site estático escrito em Zig'
date: '11-11-11T11:11h00Z'
draft: false
keywords:
  - gerador de site estático
  - zelo Sg
  - gerador de site estático
  - zine ssg vs hugo
  - zanga ssg mais rápido
tags:
  - zine
  - zig
  - porquilha
  - ssg
  - luzes
isCJKLanguage: false
headless: false
serial: 28
preview: /og-image.webp
taxonomies:
  tags:
    - ssg
    - zine
    - zig
    - estático-sítios
slug: zine
---
[Zine](https://zine-ssg.io) É um novo gerador de site estático Zine é rápido, informado e comoventemente não convencional. É um jovem projeto que já lida com sites pessoais e blogs com facilidade, e recompensa os autores dispostos a aprender sua própria maneira de fazer as coisas.

## O que Torna Zine Diferente

- \*\*Escrito em Zig, do zero. \* Sem tempo de execução de JavaScript, sem Ruby, sem zona de conforto da biblioteca padrão: o renderizador de Markdown, mecanismo de template e orquestração são construídos de propósito. Os tempos de construção são efetivamente instantâneos.
- **Seu próprio script de linguagem de template.** Zine usa o SuperHTML e o SuperMD: e o sistema de templates de script projetado para o projeto, em vez de emprestado de um ecossistema.
- **Scripty**, sua camada de script, adiciona uma lógica programável onde os templates por si só são curtos.
- \*\*Conteúdo como uma coleção de arquivos e layouts. \* Zine transforma arquivos de conteúdo em HTML, aplica seus layouts e copia o resultado em um diretório de saída, o modelo estático clássico corre rápido.
- **Extras de primeira classe**: Sites multilíngues (i18n), suporte de editores e destinos de deploy documentados: GitHub Pages, Cloudflare Pages, Páginas de Codeberg e páginas da cabana de origem.

## O ofício honesto

O repositório Zine afirma claramente: o projeto é jovem e ainda não apresenta paridade com alternativas populares como Hugo. E como o Super é a própria linguagem para modelos de Zine, existe uma curva de aprendizagem: temas e conhecimento da comunidade são menores, fazendo o apoio com maior frequência, você mesmo.

Para um site pessoal com um blog (a zona de conforto declarada do projeto), Zine é mais que capaz, e a experiência do autor é rápida e agradável quando Super cliques.

## Compatibilidade de conteúdo e CMS

Zine não consome CommonMark Markdown com primeira matéria da mesma forma que a maioria dos geradores de site estático consome, então um fluxo de trabalho típico de CMS baseado no GitLab não se aplica diretamente.

Zine espera seus próprios formatos de conteúdo, incluindo [SuperMD](https://zine-ssg.io/docs/supermd/), [Scripty](https://zine-ssg.io/docs/scripty/) e [Ziggy](https://ziggy-lang.io/). Se você já tem conteúdo de Markdown, [md2smd](https://github.com/Pratyay360/md2smd) pode ajudar a converter entre [CommonMark](https://commonmark.org/) e os formatos de Zine.

![](https://i.ibb.co/gMQxLRXy/Nov-1-02-26-AM-edited-png.png "Zine build pipeline")

Você precisa de dois repositórios: um para o frontend e outro para o conteúdo.

- [https://github.com/light-cms/zine\_site](https://github.com/light-cms/zine_site), o repositório no frontend
- [https://github.com/light-cms/blogs\_md](https://github.com/light-cms/blogs_md), o repositório de conteúdo

Acionar um envio de repositório quando um novo conteúdo for empurrado para o repositório de conteúdo.

## Onde cabe

- Se você quer tentar algo alfa.

[Experimente os modelos de nossa organização para obter mais informações.](https://github.com/light-cms)
