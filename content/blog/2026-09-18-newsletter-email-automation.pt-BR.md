---
title: Automação da Newsletter sem um pagamento
description: "Como executar um boletim informativo de blog diretamente do seu repositório Git com o Newsy: sem lista de envio para gerenciar, sem retransmissão SMTP, sem taxas de transmissão"
serial: 5
date: 2026-09-18T01:50:00Z
draft: false
keywords:
  - automação da newsletter
  - github newsletter
  - noticiário
  - Boletim do site estático
preview: /og-image.webp
taxonomies:
  tags:
    - boletim
    - noticiário
    - github
    - publicação
---
O e-mail é uma das formas mais eficazes de construir um público dedicado. No entanto, a forma tradicional de o fazer tornou-se pesada e dispendiosa.

[LightCMS](https://lightcms.me) leva uma rota diferente: **Git-driven newsletters** alimentado por [Newsy](https://github.com/light-cms/newsy), onde o repositório você já tem _é_ o backend, então você pode excluir o serviço da newsletter completamente.

---

## O problema tradicional da Newsletter

Com plataformas convencionais como Mailchimp, Substack, ou Brevo, seu fluxo de trabalho normalmente exige:

1. Inscrevendo-se para um serviço externo com níveis rígidos de assinatura.
2. Gerenciar listas de discussão fragmentadas entre painéis de terceiros.
3. Copiando e colando manualmente o post do seu blog em construtores de e-mail de rich text.
4. Lidando com scripts de rastreamento inchados, cookies e requisitos de conformidade com a privacidade.
5. À medida que o número de seus assinantes aumenta, pagando taxas mensais substanciais.

Cada um desses passos existe porque um serviço de e-mail está entre você e seus leitores. Novidades remove essa camada em vez de melhorá-la.

---

## A Abordagem Orientada ao Git: Novidades

A filosofia **Newsy** é simples: **seu repositório Git é o backend da newsletter.**

[Newsy](https://github.com/light-cms/newsy) é um serviço de newsletter de código aberto para sites estáticos, inspirado por [utterances](https://utteranc.es), e deliberadamente não mantém nenhuma lista de e-mails, nenhum fornecedor de e-mail no loop:

1. **Publicar**: Você clicou em Publish no [LightCMS](https://lightcms.me), e o arquivo Markdown está disponível no seu repositório.
2. **Detectar**: o Newsy observa eventos por push. Um novo arquivo de postagem (ou um post existente virado de `draft: true` para `false`) aciona um anúncio. Edições e exclusões de rotina são ignoradas, então o trabalho diário nunca esmaga seus leitores.
3. **Upsert**: Novidades cria ou atualiza uma única issue aberta por repositório intitulado `anúncio` com a etiqueta `newsletter`. Ele carrega o resumo do commit, a lista de arquivos e o conteúdo do post; cada post subsequente aparece como um comentário sobre essa questão. Os problemas podem ser bloqueados e desbloqueados como qualquer outro.
4. **Assinar**: Você solta um botão de inscrição incorporável no seu site estático; [newsy.lightcms.me](https://newsy.lightcms.me) gera o snippet do seu `proprietário/repo`. Ele aponta os leitores para o problema, onde eles clicam em **inscrever** para obter notificações GitHub para cada nova publicação.

A entrega é feita através do próprio sistema de notificação do GitHub, não há lista para exportar, sem preços por assinante, sem depuração de entregáveis e sem plataforma de e-mail de terceiros para renovar.

---

## Por que isso se enquadra em um site estático

Um site estático já tem um pipeline: o conteúdo é compilado com CI, os servos CDN. Novos slots para o mesmo fluxo: o commit que publica a página também o anuncia. Nada é duplicado em um editor proprietário e nada precisa de sincronização de volta.

É também gratuito na forma como o hospedagem estática é gratuito: código aberto, Hostable self-hostable (Go plus uma tabela de pequenos Postgres), e é executado alegremente em plataformas sem servidores. Não há nenhum plano mensal que escale com seu público.

---

## Primeiros passos

1. Instale o **Newsy GitHub App** no repositório no qual você publica: [github.com/apps/newsletter-newsy](https://github.com/apps/newsletter-newsy/installations/select_target).
2. Empurre uma nova postagem a partir de [LightCMS](https://lightcms.me) ou seu terminal.
3. Gere o botão "Inscrever" em [newsy.lightcms.me](https://newsy.lightcms.me) e cole-o no seu site.

Os leitores publicam a questão do anúncio e assinam lá; cada publicação futura chega automaticamente a eles.

---

## Leitura mais recente

- [Nova fonte e documentação](https://github.com/light-cms/newsy)
- [Luz de auto-hospedagem](/blog/selfhost/): a referência ao ambiente completo
- [Rascunhos, revisões e reversões](/blog/lightcms-drafts-and-versioning/): como a publicação funciona
- [Começando com LightCMS](/getting-started/): o fluxo de trabalho mais amplo
