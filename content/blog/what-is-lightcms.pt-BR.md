---
title: "O que é LightCMS?"
description: "LightCMS é um Git baseado em CMS com um editor visual. Ele compromete o Markdown no seu repositório e aciona o deploy através do CI/CD existente."
serial: 30
date: 2026-10-16T09:00:00Z
draft: false
tags:
  - luzes
  - SMS
  - git
  - markdown
---

[LightCMS](https://lightcms.me) é um sistema de gerenciamento de conteúdo para publicação de Markdown a partir do Git. Você escreve em um editor visual no seu navegador, e [LightCMS](https://lightcms.me) compromete o arquivo Markdown e o front-matter para o repositório. Seu pipeline CI/CD existente pode então construir e implantar o site.

## Os endereços LightCMS

Geradores de site estáticos podem tornar fácil a construção e a implantação de um site. Escrever para um é menos conveniente se você tem que editar Markdown bruto, formato front, ou resolver conflitos Git à mão.

[LightCMS](https://lightcms.me) dá aos autores um editor visual, mantendo o conteúdo no Git. Isso combina com equipes que querem a propriedade e revisão do Git. É uma escolha diferente de um banco de dados apoiado em CMS com colaboração em tempo real.

## Como o CMS publica o conteúdo

1. Entrar com o GitHub.
2. Conectar um repositório com conteúdo Markdown. Pode ser um site construído com Astro, Hugo, Zola, 11ty, Jekyll ou Next.js.
3. Escreva no editor, que suporta títulos, links, tabelas, listas de verificação, blocos de código e mídia.
4. Publicar a mudança. [LightCMS](https://lightcms.me) formata o Markdown, atualiza o assunto inicial, e os commits no seu branch ou abre uma pull request para revisão.
5. Seu fluxo de trabalho CI/CD existente, como GitHub Actions, Cloud Pages, Vercel, ou Netlify, pode então construir e implantar o site.

Uma vez que a publicação cria um commit padrão do Git, seu site ainda pode criar a partir do repositório, se parar de usar o LightCMS.

## Perfil técnico

| Atributo                   | Implementação lighttCMS                                                         |
| :------------------------- | :------------------------------------------------------------------------------ |
| Armazenamento              | Repositório Git com arquivos Markdown e questão frontal                         |
| Interface do editor        | Editor visual no seu navegador                                                  |
| Assistência de IA          | Assistência de escrita no editor                                                |
| Transcrição de voz         | Ditar voz no editor                                                             |
| Atualizações de assinantes | Integração de anúncio do GitHub via [Newsy](https://github.com/light-cms/newsy) |
| Licenciamento e hospedagem | Código aberto e auto-hostable                                                   |
| Portabilidade              | O conteúdo permanece nos arquivos do repositório que você controla              |

## Quando o LightCMS não é o adequado

LightCMS ajusta sites que mantêm seu conteúdo no Git e já usam CI/CD para publicar. Considere uma ferramenta diferente se:

- Você precisa de consultas relacionais, permissões de usuário ou uma API de conteúdo em tempo de execução. Um CMS secundário de cabeça como [Payload](/comparison/lightcms-vs-payload-cms) ou Strapi talvez se encaixe melhor.
- Você quer um serviço para hospedar o site público. O Light CMS não o hospeda. Páginas do Cloudflare, Vercel, Netlify ou S3 podem servir o site construído.
- Você precisa de uma ferramenta para renderizar seus modelos HTML. O LightCMS não faz isso; o seu gerador de site estático, como Hugo, Astro ou Zola, lida com a construção.

Se precisar de gerenciamento de conteúdo com base no Git e um editor visual, o próximo passo é conectar um repositório de testes e confirmar que o LightCMS escreve a primeira matéria e o Markdown no formato esperado pelo gerador de site estático.
