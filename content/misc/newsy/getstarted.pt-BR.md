---
title: "Newsy: A GitHub Powered Newsletter Platform"
description: "Newsy is a serverless, GitHub powered newsletter platform where subscribers and issues live in your repository, without mailing lists, SMTP, or a database."

tags:
  - noticiário
  - boletim
  - github
  - golang
  - webassembly
slug: getstarted
date: "2026-11-19T10:59:17.693Z"
---

Executar um boletim de e-mail para um blog estático geralmente força você a gerenciar servidores SMTP, lidar com e-mails e um banco de dados de assinantes. [Newsy](https://newsy.lightcms.me) ignora esse overhead executando seu boletim informativo dentro do repositório do GitHub.

Utterances, Giscus, e Gitalk usaram Issues do GitHub para trazer comentários para sites estáticos sem um backend. O Newsy aplica a mesma ideia aos boletins informativos: assinantes e anúncios de publicações em tempo real ao lado de seu código. O trade-off é que os leitores precisam de uma conta no GitHub para se inscrever.

## O que executar um boletim informativo no GitHub

1. Seu boletim informativo mora junto com o código do site no mesmo repositório.
2. O GitHub rastreia assinantes e notificações sem um banco de dados separado.
3. Você não gerencia servidores de e-mail, registros SPF/DKIM ou quotas de API de e-mail.
4. Você pode executar o binário Go em plataformas serverless como Vercel ou AWS Lambda, ou compile-o para WebAssembly com [TinyGo](https://tinygo.org/) para runtimes JavaScript e TypeScript.

Se você prefere assistir do que a leitura, há uma caminhada no [guia do vídeo](/misc/newsy/video/).

## Auto-hospedar seu bot

Siga estes passos para executar o Newsy localmente e conectá-lo aos seus repositórios GitHub.

### 1. Clonar o repositório

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

### 2. Configurar ambiente

Novidades usam [mise](https://mise.jdx.dev) para gerenciar dependências entre ferramentas:

```bash
mise deps
```

### 3. Construir e correr

Construa e execute o binário de Gn:

```bash
Ir construir
./newsy
```

### 4. Configure the GitHub App

1. Abra o arquivo `http://localhost:3000` no seu navegador.
2. Se você precisa expor seu servidor local, use um serviço de túnel como [ngrok](https://ngrok.com), Túnel do Cloudflare (https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/), ou SSH tunelamento via [localhost.run](https://localhost.run/):

   ```bash
   ssh -R 80:localhost:3000 localhost.run
   ```

3. Abra seu túnel (por exemplo, `https://xyz.localhost.run`) no seu navegador.

   [![Nova etapa de configuração](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

   Caso encontre problemas, verifique o [guia do vídeo](/misc/newsy/video/) ou mude para outro provedor de túnel.

4. Escolha um nome único para o aplicativo.
5. Cole a URL do túnel no campo URL do Webhook e envie.
6. Mantenha o arquivo `.env` gerado na raiz do seu projeto seguro. Deve ficar assim:

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> [!IMPORTANT]
> Instale o aplicativo GitHub somente nos repositórios selecionados, em vez de "Todos os repositórios".

Você pode compartilhar uma única instância de Novato em vários repositórios ou usuários.

> [!NOTE]
> Por padrão, Newsy cria anúncios quando você adiciona novos arquivos de conteúdo (`.html`, `.md`, `.mdx`), não quando você editar os existentes.

## Experimente Novamente com o site hospedado

Você pode testar a instância hospedada em [newsy.lightcms.me](https://newsy.lightcms.me) antes de auto-hospedagem.

[![Demo do Novo](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

## Implantação em Vercel ou Tempos de Execução sem servidor

Você pode implantar o repositório Newsy diretamente no Vercel ou qualquer host sem servidor que suporte Go binaries. Se seu tempo de execução alvo roda apenas JavaScript ou TypeScript, compilar Newsy para WebAssembly com [TinyGo](https://tinygo.org/). Níveis gratuitos no Vercel e plataformas semelhantes são tipicamente suficientes para blogs pessoais.

## Assine o boletim informativo demo

Você pode testar o fluxo do leitor inscrevendo-se no repositório demo: [Inscreva-se no GitHub](https://github.com/Pratyay360/blogs_md/issues/1).

## Crie seu botão de assinatura

Gere um botão de assinatura inline para a sua conta em [newsy.lightcms.me](https://newsy.lightcms.me/), e estilize com [Primer CSS](https://cdnjs.com/libraries/Primer) se necessário.

> [!TIP]
> After the bot posts its first newsletter issue, lock the conversation so readers can subscribe without adding off-topic comments.

![Conversa de issue no GitHub bloqueada](https://i.ibb.co/nsjMkY9v/screenshot-2026-10-24-160830-png.png)

![Workflow de assinatura de novas](https://i.ibb.co/8nKjyvXD/screenshot-2026-10-24-160916-png.png)
