---
title: Autohospedagem LightCMS
description: "LightCMS auto-hospedado com SvelteKit, PostgreSQL e um aplicativo GitHub: etapas de configuração, variáveis de ambiente, migrações de banco de dados e implantação."
section: Comece Agora
badge: Implantar
date: 2026-09-18T01:45:00.000Z
draft: false
tags:
  - luzes
  - auto-hospedagem
  - github_app
  - Transportadora
  - sveltekit
preview: /og-image.png
slug: selfhost
fmContentType: default
---

Auto hospedagem LightCMS requer a execução de um aplicativo SvelteKit, conectando um banco de dados do PostgreSQL e a configuração de um aplicativo GitHub para acesso ao repositório. A hospedagem automática fornece controle total sobre a sua infraestrutura e fluxo de dados, mas também o torna responsável por atualizações, backups, segredos e uptime.

Verifique cada variável de comando e ambiente contra o repositório atual [LightCMS](https://github.com/light-cms/lightcms) antes de implantar na produção.

## Componentes que você precisa

| Componente                           | Objetivo                                                           | Obrigatório                             |
| :----------------------------------- | :----------------------------------------------------------------- | :-------------------------------------- |
| PostgreSQL                           | Armazena dados de aplicativos como usuários, sessões e instalações | sim                                     |
| GitHub App                           | Gerencia o acesso ao repositório e autenticação GitHub             | sim                                     |
| Provedor SMTP                        | Envia e-mails de login com link mágico                             | Depende da configuração da autenticação |
| API compatível com OpenAI-compatível | Poderes características do copiloto AI                             | Não                                     |
| API Speech-to-text                   | Ordem de voz                                                       | Não                                     |
| Armazenamento de Imagem/CDN          | Armazena a mídia enviada                                           | Depende da configuração da mídia        |

## 1. Pré-requisitos

- **Runtime:** Node.js ou Bun correspondendo às versões requeridas pelo repositório do LightCMS.
- **PostgreSQL com TLS:** Uma conexão PostgreSQL compatível com TLS.
- **Conta GitHub:** Necessário para criar e instalar o seu aplicativo GitHub.
- **Credenciais SMTP:** Opcional, necessário apenas se você ativar o login do e-mail de link mágico.

## 2. Criar e configurar o aplicativo GitHub

Crie um aplicativo do GitHub na sua conta do GitHub ou nas configurações da organização. Configure o callback, configuração e webhook URLs para combinar com o seu domínio implantado:

| Configuração          | Exemplo de valor                                 |
| :-------------------- | :----------------------------------------------- |
| URL da Página Inicial | `https://<your-domain>`                          |
| Callback URL          | `https://<your-domain>/api/auth/callback/github` |
| Setup URL             | `https://<your-domain>/github/setup`             |
| URL do webhook        | `https://<your-domain>/api/github/webhook`       |

Conceder apenas as permissões do LightCMS do repositório. Após a criação, grave o ID do aplicativo, ID do cliente, segredo do cliente, segredo do webhook e chave privada.

## 3. Configurar variáveis de ambiente

Crie um arquivo `.env` localmente ou configure variáveis de ambiente na sua plataforma de hospedagem:

```bash
# Authentication
BETTER_AUTH_SECRET="<random-secret>"
BETTER_AUTH_URL="https://<your-domain>"

# Database
DATABASE_URL="postgresql://user:password@host:5432/lightcms?sslmode=require"

# GitHub App
GITHUB_APP_ID="123456"
GITHUB_CLIENT_ID="Iv1.xxxxxxxxxxxx"
GITHUB_CLIENT_SECRET="<github-app-client-secret>"
GITHUB_WEBHOOK_SECRET="<webhook-secret>"
GITHUB_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----"
```

### Gerando segredos

Gere `BETTER_AUTH_SECRET` e `GITHUB_WEBHOOK_SECRET` usando OpenSSL ou Node.js:

```bash
openssl rand -hex 32
# or
node -e "console.log(require('crypto').randomBytes(32).toString('hex')))"
```

### Upload de imagem e CDN

Imagens coladas ou enviadas no editor são enviadas para uma API de upload compatível com Chevereto. Opções hospedadas incluem [FreeImage.host](https://freeimage.host) e [ImgBB](https://imgbb.com), ou você pode executar sua própria instância Chevereto.

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>
```

`CDN_KEY` é enviada como o parâmetro `key` da consulta, a menos que `CDN_URL` já contenha um. Se o envio falhar ou as variáveis não estiverem definidas, o LightCMS voltará a incorporar a imagem no documento como uma URL de base64 `data:`. Isso funciona para testes rápidos, mas bloqueia seus arquivos Markdown, então configure um CDN para uso real.

### Opcional: Voze-para-texto, IA e análise

You can enable voice dictation using [Wit.ai](https://wit.ai/) or any OpenAI-compatible transcription API (such as [Groq](https://groq.com/), [AssemblyAI](https://assemblyai.com/), [ElevenLabs](https://elevenlabs.io/), [Deepgram](https://deepgram.com/), or [Sarvam](https://sarvam.ai/)).

```bash
# Wit.ai
WIT_AI_TOKEN="<server-access-token>"
WIT_AI_CLIENT_TOKEN="<client-access-token>"

# OpenAI-compatible AI & Speech
OPEN_AI_ENDPOINT=""
OPEN_AI_MODEL=""
OPEN_AI_APIKEY=""
SPEECH_ENDPOINT=""
SPEECH_MODEL=""
SPEECH_API_KEY=""

# PostHog Analytics (optional)
PUBLIC_POSTHOG_KEY="<your-posthog-project-key>"
PUBLIC_POSTHOG_HOST="<your-posthog-host>"
```

## 4. Configurando o banco de dados

Light tCMS utiliza [Drizzle ORM](https://orm.drizzle.team). O esquema vive em `src/lib/server/db/schema.ts`, e as migrações são geradas no diretório `drizzle`. Com o conjunto `DATABASE_URL`, aplique as migrações:

```bash
rodado db:migrate
```

Durante o desenvolvimento local, você pode empurrar o esquema diretamente para o banco de dados sem arquivos de migração:

```bash
corrida de bun db:push
```

Outros scripts do banco de dados:

| Comando               | Descrição:                                    |
| :-------------------- | :-------------------------------------------- |
| `bun run db:generate` | Gerar uma migração depois de editar o esquema |
| `bun run db:studio`   | Navegue e edite seus dados no Drizzle Studio  |

## 5. Executar localmente

```bash
execução de bun
```

![LightCMS GitHub App permissions](https://i.ibb.co/Jw1bjLrr/image.png)

![Permissões detalhadas do repositório](https://i.ibb.co/0p7tk88V/image.png)

O LightCMS estará disponível em `http://localhost:5173`. Defina `BETTER_AUTH_URL` para este endereço e inicie sessão com o GitHub pela primeira vez.

### Testando webhooks localmente

O GitHub não pode entregar webhooks para `localhost`, então encaminhe-os através do [smee.io](https://smee.io):

1. Criar um canal em [smee.io](https://smee.io) e copiar sua URL.
2. Defina `WEBHOOK_PROXY_URL` no `.env` para essa URL (`WEBHOOK_PROXY_URL="https://smee.io/<your-channel>"`).
3. Defina a URL do Webhook nas configurações do aplicativo do GitHub para a mesma URL.
4. Execute o bot em um segundo terminal:

   ```bash
   bun executar bot:start
   ```

O bot registra o mesmo manipulador do ponto de produção: validação de conteúdo em `push`, comentários e rótulos no log `pull_request` e `installation`.

## 6. Deploy da produção

O LightCMS é construído com SvelteKit, então [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/), e [Cloudflare Workers](https://www.cloudflare.com/) são alvos de implantação suportados:

1. Importe seu repositório Git para sua plataforma de implantação.
2. Adicione todas as variáveis de ambiente necessárias do [passo 3](#3-configure-environment-variables) nas configurações do seu projeto e defina `BETTER_AUTH_URL` como sua URL de produção.
3. Deploy e teste o fluxo completo: faça o login, conecte um repositório, edite um arquivo, faça o commit de uma alteração e confirme as execuções da compilação do site estático.

Para verificar a compilação de produção localmente antes de implantar:

```bash
bun run build
bun run preview
```
