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

[LightCMS](https://lightcms.me) é um CMS para sites estáticos. Edite Markdown no seu navegador e submeta para o GitHub. A sua compilação e pipeline de deploy existentes tiram-no de lá.

## Antes de começar

Você precisa:

- Um repositório GitHub contendo um site estático que usa o conteúdo Markdown.
- Um pipeline de deploy como GitHub Actions, Cloudflare Pages, Netlify ou Vercel.
- Acesso do repositório para que o LightCMS possa ler e submissão de arquivos de conteúdo.

## Etapas de configuração

1. Entrar com suporte a um provedor LightCMS.
2. Dê ao [LightCMS](https://lightcms.me) acesso ao repositório que contém o conteúdo do seu site.
3. Escolha onde suas publicações, páginas e arquivos moram.
4. Crie ou edite uma publicação, incluindo a frente das necessidades do gerador do seu site.
5. Publique a mudança, em seguida, verifique se sua pipeline CI/CD constrói e implementa o site.

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
