---
title: Primeiros passos com LightCMS
description: Conecte um repositório GitHub ao LightCMS, edite o conteúdo do Markdown no navegador e publique através de seu fluxo de trabalho de implantação baseado em Git existente.
slug: getting-started-with-lightcms
date: 2026-11-22T11:47:03.315Z
tags:
  - luzes
  - git
  - github
  - estático-sítios
draft: Falso
---

[LightCMS](https://lightcms.me) is a CMS for static sites. Edit Markdown in your browser and commit it to GitHub. Your existing build and deployment pipeline takes it from there.

## Antes de começar

Você precisa:

- Um repositório GitHub contendo um site estático que usa o conteúdo Markdown.
- Um pipeline de deploy como GitHub Actions, Cloudflare Pages, Netlify ou Vercel.
- Acesso do repositório para que o LightCMS possa ler e submissão de arquivos de conteúdo.

## Etapas de configuração

1. Sign in with a provider LightCMS supports.
2. Give [LightCMS](https://lightcms.me) access to the repository that holds your site content.
3. Choose where your posts, pages, and assets live.
4. Create or edit a post, including the front matter your site generator needs.
5. Publish the change, then check that your CI/CD pipeline builds and deploys the site.

## O que verificar após a configuração

| Verificar                 | Resultado esperado                                          |
|:------------------------- |:----------------------------------------------------------- |
| Caminho do conteúdo       | O LightCMS lê e escreve os arquivos Markdown corretos       |
| Material inicial          | Os campos obrigatórios correspondem ao seu tema/modelos SSG |
| Mídias                    | Upload de imagens para o diretório estático/mídia esperado  |
| Implantar pipeline        | Um commit aciona uma compilação de sites com sucesso        |
| Comportamento do rascunho | Mensagens de rascunho se comportam como esperado no seu SSG |

## Próximos passos

- [Por que o CMS claro existe](/blog/why-this/)
- [Comece com um Modelo de CMS LightCMS](/blog/start-with-a-lightcms-template/)
- [Auto hospedagem LightCMS](/blog/selfhost/)
- [Configurando seu repositório e CI/CD](/blog/configuring-your-repository-cicd/)
