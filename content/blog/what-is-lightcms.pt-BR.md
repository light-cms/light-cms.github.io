---
title: "O que é LightCMS? O Git based CMS para Sites Estáticos"
description: "LightCMS é um Git baseado em CMS com um editor WYSIWYG visual. Ele compromete o Markdown simples no seu repositório e permite que seu CI/CD existente o faça."
serial: 30
date: 2026-10-16T09:00Z
draft: false
keywords:
  - o que é luzes
  - luzes
  - CSS baseado em Git
  - markdown cms
  - editor de visual para markdown
preview: /og-image.webp
taxonomies:
  tags:
    - luzes
    - SMS
    - git
    - markdown
---

**LightCMS** é um sistema de gerenciamento de conteúdo que mantém seu conteúdo em seu repositório Git como arquivos Markdown simples.

Sem banco de dados. Sem bloqueio. Faça o login com o GitHub, escolha um repositório, gravação e publicação. [LightCMS](https://lightcms.me) submete as alterações para você.

## O problema [LightCMS](https://lightcms.me) resolve

Os geradores estáticos fazem a publicação ser rápida, barata e segura. Mas escrever um post em um editor de código pode ficar difícil se você não estiver acostumado com esse fluxo de trabalho.

Esse fluxo de trabalho serve aos desenvolvedores. Não serve a todos aqueles que querem escrever.

[LightCMS](https://lightcms.me) remove essa fricção sem remover o Git. Os desenvolvedores mantêm conteúdo no repositório e os escritores obtêm um editor baseado no navegador para elaboração e publicação.

---

## Como [LightCMS](https://lightcms.me) funciona

1. **Entre no GitHub.** O LightCMS usa o GitHub OAuth, então você não precisa de um sistema de contas separado.
2. **Conecte um repositório.** Escolha qualquer repositório que contenha conteúdo Markdown, incluindo sites criados com Astro, Hugo, Zola, Eleventy, Jekyll, SvelteKit ou Next.js.
3. **Escreva visualmente.** O editor baseado em Dicas suporta títulos, links, listas, listas, listas de tarefas, matemática, código destacado de sintaxe e mídia de arrastar e soltar.
4. **Publicar.** [LightCMS](https://lightcms.me) escreve o arquivo e a questão frontal, então o encarrega diretamente ou abre um pull request se você quiser revisão.
5. **Implementar.** Ações no GitHub, Páginas do Cloudflare, Vercel, ou Netlify podem reconstruir e implantar o seu site. Os autores ficam no navegador e os mantenedores mantêm seus fluxos de trabalho do Git.

A etapa 4 cria um commit normal. Se você parar de usar [LightCMS](https://lightcms.me), seu site ainda constrói porque seu conteúdo já vive no repositório.

---

## O que faz isso diferente

Existem várias opções CMS disponíveis no GitLab ([CMS](/comparison/netlifycms), TinaCMS, Keystatic, Páginas CMS e [LightCMS](https://lightcms.me) adopta uma abordagem diferente em algumas áreas:

|                          | [LightCMS](https://lightcms.me)                                                                         |
| :----------------------- | :------------------------------------------------------------------------------------------------------ |
| **Armazenamento**        | Seu repositório do GitHub (questão frontal Markdown + YAML)                                             |
| **Editor**               | TipTap-WYSIWYG editor com matemática (KaTeX), destaque de código, tabelas, listas de tarefas e mídia    |
| **AI**                   | Copiloto integrado para traços, reescrita e gramática, usando qualquer provedor compatível com OpenAI-2 |
| **Voz**                  | Divisão sussurra no editor                                                                              |
| **Boletins**             | Publicar o Markdown e enviar atualizações com o Newsy do GitHub                                         |
| **Modelo de hospedagem** | Auto-hospedado, Apache 2.0 licenciado, executa em qualquer host do Node.js                              |
| **Bloqueado**            | Nenhum: seu conteúdo permanece em arquivos que você possui                                              |

[LightCMS](https://lightcms.me) cobre a redação, edição, publicação e distribuição do boletim informativo sem adicionar um banco de dados separado.

---

## O que [LightCMS](https://lightcms.me) não é

- \*\*Não é o CMS pela primeira vez em banco de dados. \* Se você precisa de conteúdo relacional, funções e permissões complexas ou uma API de conteúdo em forma de aplicativo, uma plataforma headless como [Payload](/comparison/lightcms-vs-payload-cms) deve se encaixar melhor.
- **Não é um serviço de hospedagem.** [LightCMS](https://lightcms.me) gerencia o conteúdo; seu host (Cloudflare Pages, Vercel, Netlify, GitHub Pages) serve o site. Ver [local estático de hospedagem comparado](/misc/top-static-site-hosting).
- **Ele não é um tema ou um gerador de site.** Ele submete o conteúdo em qualquer gerador de site estático que você já executa.

---

## Quem é para quem

- **Compositores e bloggers** que querem possuir seu conteúdo sem rodar uma infraestrutura extra.
- **Equipe** onde os desenvolvedores mantêm o site e os não-desenvolvedores escrevem e publicam conteúdo.
- **Projetos estáticos do site** que superaram a edição de Markdown em um editor de código, mas ainda querem um fluxo de trabalho baseado no Git.

Se isso soar como você, é possível [copiar um modelo iniciante](/blog/start-with-a-lightcms-template/) para obter um repositório, configuração de compilação e fluxo de trabalho de implantação pronto para sua primeira publicação.

---

## Perguntas mais frequentes

### [LightCMS](https://lightcms.me) está livre?

[LightCMS](https://lightcms.me) é de código aberto sob a licença Apache 2.0 e projetado para ser auto-hospedado. Você não paga por lugar e você pode hospedá-lo onde quer que você execute o Node.js.

### [LightCMS](https://lightcms.me) funciona com Hugo e Astro?

Sim. Hugo e Astro leram arquivos Markdown com a página inicial YAML de um repositório, que é o que [LightCMS](https://lightcms.me) escreve. O mesmo se aplica a Zola, Eleventy, Jekyll e SvelteKit.

### Onde o meu conteúdo mora?

No seu repositório como `.md` arquivos com o front matter. Não existe uma base de dados separada e não existe nenhuma etapa de exportação.

### Os autores precisam saber o Git?

Não. Os escritores usam o editor e o botão publicar. Commits, ramificações e pull requests acontecem em segundo plano.

### Como isso é diferente do WordPress?

O WordPress armazena o conteúdo no MySQL e renderiza as páginas com PHP a solicitação. [LightCMS](https://lightcms.me) escreve arquivos estáticos que um CDN pode servir. Para uma comparação mais profunda, veja [estática vs sites dinâmicos](/blog/static-vs-dynamic/) e [alternativas do WordPress](/blog/wordpress-alternatives/).
