---
title: "Primeiros passos com Newsy: Newsletters com GitHub Powered"
description: "Implantar e auto-hospedar Newsy, uma plataforma de boletim informativo sem servidor inteiramente baseada em Go, WebAssembly, e problemas no GitHub."
label: "Primeiros passos"
tags:
  - noticiário
  - boletim
  - solução moderna
  - boletim informativo grátis
  - github
  - golang
  - webassembly
isCJKLanguage: false
---

Apresentamos a [Newsy](https://newsy.lightcms.me), uma plataforma de newsletter de código aberto alimentada pelo GitHub.

Novidades são fortemente inspiradas em ferramentas como Utterances, Giscus, e Gitalk, que reimaginaram comentários para sites estáticos usando problemas do GitHub.
A nova abordagem é orientada pelo GitHub e leva-a aos boletins informativos:
em vez de depender de serviços externos ou de manter uma lista de distribuição separada,
seu boletim informativo mora junto com o seu código no seu repositório GitHub.

Why GitHub?

1. Seu boletim informativo mora junto com o seu código no seu repositório GitHub.
2. Nenhum gerenciamento de listas de envio. Assinantes e atualizações são rastreadas no GitHub.
3. Sem APIs de e-mail caras. Você não precisa de um serviço de assinatura de e-mail separado.
4. Sem configuração de entrega de e-mail. Você não precisa gerenciar SMTP, filtros de spam ou reputação de domínio.
5. Sem banco de dados de assinatura. Você não precisa de um banco de dados separado para assinaturas e cancelamentos.
6. O senhor apenas se concentra em escrever. O GitHub e o Newsy lidam com o resto.

A publicação deve ser acessível a todos. Não há necessidade de pagar uma taxa pesada a uma plataforma SaaS ou passar horas lutando com a infraestrutura de e-mail apenas para compartilhar atualizações com seus leitores.

- Implantar em não-servidor (por exemplo, Vercel, AWS Lambda) para produção.
- Suporte a WebAssembly Compilar o binário Go para WebAssembly com [TinyGo](https://tinygo.org/) e executá-lo em plataformas sem servidor que suportam runtimes JavaScript ou TypeScript.

Um vídeo passando pelas configurações locais está disponível no [guia do vídeo](/content/misc/newsy/video.md).

## Auto-hospedar seu Bot

Siga estes passos para executar o Newsy e conectá-lo aos seus repositórios GitHub.

#### 1. Clonar o Repositório

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

#### 2. Configurar ambiente

Usamos [mise](https://mise.jdx.dev) para manter o ambiente de desenvolvimento
consistente e fácil de gerenciar:

```bash
mise deps
```

#### 3. Construir e Correr

Construa e execute o binário de Gn:

```bash
Ir construir
./newsy
```

#### 4. Configure the GitHub App

1. Abra [http://localhost:3000](http://localhost:3000) em seu navegador.
2. Se você precisa expor seu servidor local, use um serviço de tunelamento como [ngrok](https://ngrok.com),
   [túnel do Cloudflare](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/),
   ou SSH tunelamento via [localhost.run](http://localhost.run/):

```bash
ssh -R 80:localhost:3000 localhost.run
```

3. Abra seu túnel (por exemplo, `https://xyz.localhost.run`) no seu navegador:

[![newsy um github issue backed newsletter platform](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

_(Se você encontrar problemas, consulte o [guia de vídeo](/guides/newsy/video/) ou tente um provedor de túnel alternativo.)_

4. Escolha um **Nome do aplicativo** (de preferência único).
5. Cole a URL do túnel no campo **URL do Webhook** e envie.
6. Um arquivo `.env` contendo os segredos do seu aplicativo será gerado na raiz do seu projeto. Mantenha este arquivo seguro.

O `.env` gerado deve se parecer com isto:

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> \[!IMPORTANT\]
> Install the GitHub App on **specific repositories only**, rather than on "All repositories".

Cada instância de Novato pode ser compartilhada entre vários repositórios ou usuários.

> \[!NOTE\]
> Por padrão, o novo aciona apenas comentários e issues após a criação de novos arquivos de conteúdo (`. tml`, `.md`, `.mdx`, etc.), ao invés de em edições subsequentes.

---

## Experimente o Newsy através da instância hospedada

Você pode testar Newsy diretamente usando a versão hospedada: [https://newsy.lightcms.me](https://newsy.lightcms.me)

[![Demo do Novo](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

---

## Implantar no Vercel

![Implantar com a Vercel](https://vercel.com/button)

Uma vez implantado, atualize o URL Webhook do seu GitHub App de `*.localhost.run` para o seu domínio de produção: `https://<your-app>.vercel.app`.

> \[!WARNING\]
> Only use the deploy button if you already have a configured GitHub App and have its credentials ready. Caso contrário, siga os passos [Auto-hospedeiro](#self-host-your-bot) primeiro para criar um.

---

## Custos Operacionais &amp; Uso de Recursos

Vercel e muitos outros provedores de nuvem oferecem níveis gratuitos para cargas de trabalho sem servidor. Você também pode hospedar Newsy em JavaScript ou TypeScript-only compilando o binário Go para WebAssembly com [TinyGo](https://tinygo.org/).

Porque é um binário compilado Go :
- **Pouco consumo de memória**, ficar confortavelmente dentro dos limites de memória e execução sem servidor.

---

## Assinar Boletim Informativo

Inscreva-se para ver Novoso na ação:

👉 [**Subscribe on GitHub**](https://github.com/Pratyay360/blogs_md/issues/1)

---

## Gerar seu botão de assinatura

Gere um botão de assinatura embutido para sua conta no [newsy.lightcms.me](https://newsy.lightcms.me/).

Você pode personalizar e estilizar o botão usando [Primer CSS](https://cdnjs.com/libraries/Primer).

> \[!TIP\]
> **Dica de segurança:** Depois que o bot publicar sua primeira newsletter , bloqueie a conversa para evitar qualquer comportamento não intencional.

![Bloqueando a conversa](/static/newsy-lock.png)

![newsy unlock](/static/newsy-unlock.png)

Para mais detalhes sobre as permissões, consulte a documentação [permissões necessárias](/guides/newsy/list-of-all-permission/).
