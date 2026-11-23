---
title: Newsletter Automation Without a Paid Subscription
description: >-
  Run your blog newsletter straight from Git: no mailing list, no SMTP API, no SaaS fees.
date: "2026-09-18T01:50:00.000Z"
draft: false
keywords:
  - automação da newsletter
  - github newsletter
  - noticiário
  - Boletim do site estático

taxonomies:
  tags:
    - boletim
    - noticiário
    - github
    - publicação
slug: newsletter-email-automation
---

O e-mail é uma das formas mais eficazes de construir um público dedicado. No entanto, a forma tradicional de o fazer tornou-se pesada e dispendiosa.

[LightCMS](https://www.lightcms.me) takes a different route, Git driven newsletters powered by [Newsy](https://github.com/light-cms/newsy), where the repository you already have is The backend, so you can drop the newsletter service entirely.

---

## O problema tradicional da Newsletter

Com plataformas convencionais como Mailchimp, Substack, ou Brevo, seu fluxo de trabalho normalmente exige:

1. Inscrevendo-se para um serviço externo com níveis rígidos de assinatura.
2. Gerenciar listas de discussão fragmentadas entre painéis de terceiros.
3. Manually copying and pasting your blog post into email builders.
4. Lidando com scripts de rastreamento inchados, cookies e requisitos de conformidade com a privacidade.
5. À medida que o número de seus assinantes aumenta, pagando taxas mensais substanciais.

Everyone of those steps exists because an email service sits between you and your readers. Novidades remove essa camada em vez de melhorá-la.

## A Abordagem Orientada ao Git: Novidades

The **Newsy** philosophy is simple: **your Git repository is the newsletter back end.**

[Newsy](https://github.com/light-cms/newsy) é um serviço de newsletter de código aberto para sites estáticos, inspirado por [utterances](https://utteranc.es), e deliberadamente não mantém nenhuma lista de e-mails, nenhum fornecedor de e-mail no loop:

1. **Publicar**: Você clicou em Publish no [LightCMS](https://lightcms.me), e o arquivo Markdown está disponível no seu repositório.
2. **Detectar**: o Newsy observa eventos por push. Um novo arquivo de postagem (ou um post existente virado de `draft: true` para `false`) aciona um anúncio. Edições e exclusões de rotina são ignoradas, então o trabalho diário nunca esmaga seus leitores.
3. **Upsert**: Novidades cria ou atualiza uma única issue aberta por repositório intitulado `anúncio` com a etiqueta `newsletter`. Ele carrega o resumo do commit, a lista de arquivos e o conteúdo do post; cada post subsequente aparece como um comentário sobre essa questão. Os problemas podem ser bloqueados e desbloqueados como qualquer outro.
4. **Subscribe**: You embed a Subscribe button into your static site; [newsy.lightcms.me](https://newsy.lightcms.me) generates the snippet from your `owner/repo`. It points readers at the issue, where they click **Subscribe** To get GitHub notifications for every new post.

A entrega é feita através do próprio sistema de notificação do GitHub, não há lista para exportar, sem preços por assinante, sem depuração de entregáveis e sem plataforma de e-mail de terceiros para renovar.

---

## Por que isso se enquadra em um site estático

Um site estático já tem um pipeline: o conteúdo é compilado com CI, os servos CDN. Novos slots para o mesmo fluxo: o commit que publica a página também o anuncia. Nada é duplicado em um editor proprietário e nada precisa de sincronização de volta.

It is also free in the way static hosting is free: open source, self hostable (Go plus a small Postgres table), and it runs happily on server less platforms. Não há nenhum plano mensal que escale com seu público.

---

## Primeiros passos

1. Instale o **Newsy GitHub App** no repositório no qual você publica: [github.com/apps/newsletter-newsy](https://github.com/apps/newsletter-newsy/installations/select_target).
2. Empurre uma nova postagem a partir de [LightCMS](https://lightcms.me) ou seu terminal.
3. Generate the Subscribe button at [newsy.lightcms.me](https://newsy.lightcms.me) And paste it into your site.

Os leitores publicam a questão do anúncio e assinam lá; cada publicação futura chega automaticamente a eles.

## Leitura mais recente

- [Nova fonte e documentação](https://github.com/light-cms/newsy)
- [Luz de auto-hospedagem](/blog/selfhost/): a referência ao ambiente completo
- [Rascunhos, revisões e reversões](/blog/lightcms-drafts-and-versioning/): como a publicação funciona
- [Começando com LightCMS](/getting-started/): o fluxo de trabalho mais amplo
