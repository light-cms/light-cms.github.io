+++
title = "LightCMS: Git baseado em Publicação para Sites Estáticos"
description = "Guias sobre fluxos de trabalho CMS baseados no Git , geradores de site estáticos e publicação de Markdown com LightCMS."
+++

[LightCMS](https://www.lightcms.me) é um sistema de gerenciamento de conteúdo para geradores de site estáticos. Ele mantém seu conteúdo como Markdown no Git, onde você pode editá-lo em um navegador, Reveja as alterações e publique através do pipeline de CI/CD que você já usa.

## O que você pode fazer com o LightCMS

| Funcionalidade           | Como funciona                                                                                                                 |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Edição visual            | Escreva e edite o Markdown no seu navegador.                                                                                  |
| Publicação do Git        | Salvar as alterações como commits em seu repositório, em vez de em um banco de dados CMS separado.                            |
| Avaliar                  | Use branches, pull requests e histórico do Git para revisar as alterações.                                                    |
| Atualizações de leituras | Enviar atualizações através de fluxos de trabalho do GitHub com ferramentas como [Newsy](https://github.com/light-cms/newsy). |

## Como a publicação funciona

1. Entrar com o GitHub.
2. Escolha o repositório que contém conteúdo do seu site.
3. Escreva ou edite uma postagem no navegador, incluindo qualquer prioridade que o site precise.
4. Publique a alteração no Git.
5. Deixe seu pipeline atual, como GitHub Actions, Cloudflare Pages, Vercel, ou Netlify, compilar e implantar o site.

## Começar com estes guias

- [Por que Git based publishing?](/blog/why-this/) cobre trocas entre CMS dinâmicas baseadas no Git e em banco de dados.
- [Auto hospedagem LightCMS](/blog/selfhost/) explica como implantar sua própria instância de [lightcms](https://github.com/light-cms/lightcms).
- [Como funciona o News](/blog/newsletter-automation/) descreve fluxos de trabalho baseados no git.

## Comparações e arquitetura

- [Git CMS vs. CMS] (/blog/git-cms-vs-traditional-cms/)
- [Sítios Estáticos vs. Dinâmicos](/blog/static-vs-dynamic/)
- [Astro vs. Hugo](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/)
- [Cloudflare Pages vs. Vercel](/blog/cloudflare-pages-vs-vercel/)
- [Plataformas CMS com base no Git superior](/comparison/top-git-cms/)
