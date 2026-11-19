---
title: Auto hospedagem LightCMS
description: Guia para LightCMS auto-hospedado.
serial: 4
section: Comece Agora
badge: Implantar
date: 2026-09-18T01:45:00Z
draft: false
tags:
  - selfhost
  - luzes
  - postgresql
  - implantação
keywords:
  - luzes
  - probot
  - auto-hospedagem
  - github_app
  - Transportadora
  - sveltekit
preview: /og-image.png
canonical: https://www.lightcms.me/docs
---

Quer [LightCMS](https://lightcms.me) totalmente sob seu controle? [LightCMS](https://lightcms.me) é uma aplicação [SvelteKit](https://svelte.dev) para que possa ser implantada em qualquer lugar, apoiado por um banco de dados postgre e um GitHub App(octokit). Seu conteúdo nunca sai de seus próprios repositórios GitHub.

Este guia leva você através de tudo o que você precisa para executar a sua própria instância: criar o aplicativo GitHub, provisionar
PostgreSQL, configurando variáveis de ambiente e implantação.

## Como as Peças Encaixam Juntas

| Componente                           | Objetivo                                                                   | Obrigatório                          |
| ------------------------------------ | -------------------------------------------------------------------------- | ------------------------------------ |
| PostgreSQL                           | Armazena usuários, sessões, senhas e instalações do GitHub                 | sim                                  |
| GitHub App                           | Lê e escreve conteúdo nos seus repositórios e assina os usuários no GitHub | sim                                  |
| Provedor SMTP                        | Envia e-mails de login com link mágico                                     | Sim, para login com link mágico      |
| API compatível com OpenAI-compatível | Força o Copilot IA                                                         | Opcional                             |
| API Speech-to-text                   | Ordem de voz                                                               | Opcional                             |
| CDN da imagem                        | Imagens de host carregadas no editor                                       | Opcional                             |
| Jaqueta                              | Análise de produtos e observação de IA                                     | Necessário apenas em desenvolvimento |

## Pré-requisitos

- **[mise](https://mise.jdx.dev)**: instala e gerencia dependências de tarefas. Eu presumirei que você o instalou.
- **PostgreSQL**: um banco de dados que aceita conexões TLS. Cloud providers such as [Neon](https://neon.tech),
  [Supabase](https://supabase.com) or [Nile](https://thenile.dev) works well. Veja
  [awesome-free-postgres](https://github.com/alexeyfv/awesome-free-postgres) para opções gratuitas.
- **Conta GitHub**: necessário para registrar o aplicativo GitHub.
- **Provedor SMTP** (para links mágicos): Se você tem um domínio, então [Resend](https://resend.com) será uma experiência incrível,
  se não for então [Zoho Mail](https://www.zoho.com/mail) lembre-se de criar uma senha do aplicativo.

> **TLS é obrigatório.** A aplicação conecta ao PostgreSQL com `ssl: "require"`. Uma instância local do PostgreSQL
> sem TLS habilitado será rejeitada, então use uma base de dados hospedada ou configure TLS no seu próprio servidor.

## 1. Faça fork no repositório e instale dependências

Clonar o repositório e instalar dependências:

```bash
cd lightcms
mise trust
mise deps
mise run install
```

Instale o toolchain e as dependências do projeto:

```bash
mise trust
mise deps
mise run install
```

## 2. Create the GitHub App

[LightCMS](https://lightcms.me) utiliza um aplicativo GitHub para duas coisas: assinar usuários com o GitHub (OAuth) e agir em seu nome
através de instalações. Você pode criá-lo com o assistente de configuração do Probot, ou com a mão.

### Opção A: Assistente de configuração do Probot

iniciar o bot com:

```bash
bot de execução mise
```

Sem credenciais no `.env`, Probot inicia um servidor de configuração em `http://localhost:3000`:

1. Abra `http://localhost:3000` e clique em **Register GitHub App**.
2. Escolha sua conta pessoal ou organização.
3. Confirmar. O Probot cria o aplicativo e escreve suas credenciais no seu arquivo `.env`.

O assistente define a URL do webhook do aplicativo para um canal Smee (ou `http://localhost:3000/`), não para o webhook [LightCMS](https://lightcms.me)'s
endpoint. Atualize nas configurações do GitHub App antes de entrar ao vivo (consulte [Implementação de Produção](#6-production-deployment)).

### Opção B: Configuração manual

Crie o aplicativo em **Configurações do GitHub → Configurações do desenvolvedor → Aplicativos GitHub → Novo aplicativo GitHub** com estes valores:

| Configuração          | Valor                                                               |
| --------------------- | ------------------------------------------------------------------- |
| URL da Página Inicial | `https://<your-domain>`                                             |
| Callback URL          | `https://<your-domain>/api/auth/callback/github`                    |
| Setup URL             | `https://<your-domain>/github/setup`                                |
| URL do webhook        | `https://<your-domain>/api/github/webhook`                          |
| Webhook secreto       | Um segredo aleatório (veja [Gerando segredos](#generating-secrets)) |

**Permissões do repositório**

| Permisschar@@0o    | Acesso          | Usado para                                         |
| ------------------ | --------------- | -------------------------------------------------- |
| `Conteúdo`         | Ler e escrever  | Leitura e confirmação de arquivos de conteúdo      |
| `Issues`           | Ler e escrever  | Revisar comentários e etiquetas em pull requests   |
| `Pull requests`    | Somente leitura | Listando os arquivos alterados em uma pull request |
| `Status de commit` | Ler e escrever  | Reportando validação de conteúdo em pushes         |
| `Metadados`        | Somente leitura | Obrigatório para cada aplicativo do GitHub         |

**Inscreva-se para eventos:** `Push` and `Pull request`. Eventos de instalação são entregues automaticamente no GitHub Apps.

Depois de criar o aplicativo, observe o **ID do aplicativo**, gere um **segredo do cliente** e gere e baixe uma **chave privada**
(`.pem`).

## 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto. O repositório não envia um arquivo de exemplo utilizável, por isso use a referência abaixo.

### Obrigatório

```bash
# ---------------------------------------------------------------------------
# Authentication (Better Auth)
# ---------------------------------------------------------------------------
BETTER_AUTH_SECRET="<output of: openssl rand -hex 32>"
# Public URL of this instance. Must match the URL users visit.
BETTER_AUTH_URL="http://localhost:5173"

# ---------------------------------------------------------------------------
# Database (PostgreSQL, TLS required)
# ---------------------------------------------------------------------------
DATABASE_URL="postgresql://user:password@host:5432/lightcms?sslmode=require"

# ---------------------------------------------------------------------------
# GitHub App
# ---------------------------------------------------------------------------
GITHUB_APP_ID="123456"
GITHUB_CLIENT_ID="Iv1.xxxxxxxxxxxx"
GITHUB_CLIENT_SECRET="<github-app-client-secret>"
GITHUB_WEBHOOK_SECRET="<webhook-secret>"
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
-----END RSA PRIVATE KEY-----"
```

`GITHUB_PRIVATE_KEY` é o conteúdo completo de PEM. Mantenha a linha quebrando e envolva o valor em aspas duplas, como
o assistente Probot escreve.

### Necessário para desenvolvimento

[LightCMS](https://lightcms.me) informa análises e erros a [PostHog](https://posthog.com). Quando as teclas estão faltando, o aplicativo **lança em desenvolvimento** para impedir que eventos sejam descartados silenciosamente. Na produção, elas são opcionais e a telemetria é ignorada quando estão desmarcadas.

```bash
PUBLIC_POSTHOG_KEY="phc_xxxxxxxxxxxx"
PUBLIC_POSTHOG_HOST="https://us.i.posthog.com"
```

### E-mail: necessário para login por magic-link

Links mágicos são enviados por SMTP com [Nodemailer](https://nodemailer.com). Envio falhou com um erro de configuração quando
`MAIL_HOST`, `MAIL_USER`, `MAIL_PASS` ou `MAIL_FROM` está ausente.

```bash
MAIL_HOST="smtp.resend.com"
# Padrão de 587 quando omitido
MAIL_PORT="465"
# "true", "1", "yes" ou "on" habilita TLS implícitos. Quando omitido, TLS está habilitado apenas para a porta 465.
MAIL_SECURE="1"
MAIL_USER="resend"
MAIL_PASS="<smtp-password-or-api-key>"
MAIL_FROM="LightCMS <noreply@yourdomain.com>"
```

### Opcional: Copilot IA

O Copilot usa qualquer API de conclusão de chat compatível com OpenAI. Todas as três variáveis são necessárias para que funcione.

```bash
OPEN_AI_ENDPOINT="https://api.openai.com/v1"
OPEN_AI_APIKEY="sk-..."
OPEN_AI_MODEL="gpt-4o-mini"
```

Qualquer provedor que explique uma API compatível com OpenAI, por exemplo [OpenAI](https://platform.openai.com),
[OpenRouter](https://openrouter.ai) (`https://openrouter.ai/api/v1`) ou [NVIDIA NIM](https://build.nvidia.com).

### Opcional: ditado de fala-texto

[LightCMS](https://lightcms.me) suporta dois planos de transcrição Quando ambos são configurados, é usada uma backend compatível com OpenAI.

**Transcrição compatível com OpenAI.** É selecionada quando `SPEECH_API_KEY` está definido, e também precisa de `SPEECH_MODEL`:

```bash
SPEECH_API_KEY="<api-key>"
SPEECH_MODEL="sussurro -1"
# URL base do provedor. Omita para usar o padrão do OpenAI.
SPEECH_ENDPOINT="https://api.openai.com/v1"
```

Ponto `SPEECH_ENDPOINT` em qualquer provedor que implemente a API `/audio/transcriptions`, e configure `SPEECH_MODEL` para um modelo
que o provedor oferece. Um arquivo no final do arquivo `/audio/transcrições` é automaticamente descartado.

**[Wit.ai](https://wit.ai)** é usado quando `SPEECH_API_KEY` não está definido:

```bash
WIT_AI_TOKEN="<wit-ai-server-access-token>"
```

Se não estiver configurada, a ditadura não estará disponível.

### Opcional: uploads de imagens (CDN)

As imagens coladas ou enviadas no editor são enviadas para uma API de upload [Chevereto](https://chevereto.com)-compatível.
Opções hospedadas incluem [FreeImage.host](https://freeimage.host) e [ImgBB](https://imgbb.com), ou você pode executar
sua própria instância Chevereto.

```bash
CDN_URL="https://freeimage.host/api/1/upload"
CDN_KEY="<cdn-api-key>
```

`CDN_KEY` é enviada como o parâmetro `key` da consulta, a menos que `CDN_URL` já contenha um. Se o envio falhar ou as variáveis
não estiverem definidas, [LightCMS](https://lightcms.me) volta a incorporar a imagem no documento como um URL de base64 `data:`. Isso funciona,
mas torna seus arquivos Markdown muito maiores, então configure um CDN para uso real.

### Encaminhamento de webhook local (apenas desenvolvimento)

```bash
WEBHOOK_PROXY_URL="https://smee.io/<your-channel>"
```

Este é lido pelo Probot, não pelo aplicativo SvelteKet. Veja [Testando webhooks localmente](#testing-webhooks-locally).

### Gerando segredos

Utilize qualquer um deles para gerar `BETTER_AUTH_SECRET` e `GITHUB_WEBHOOK_SECRET`:

```bash
openssl rand -hex 32
# or
node -e "console.log(require('crypto').randomBytes(32).toString('hex')))"
```

## 4. Configurando o banco de dados

[LightCMS](https://lightcms.me) usos [ORM do drizzo](https://orm.drizzle.team). O esquema vive em `src/lib/server/db/schema.ts`, e as migrações
são geradas no diretório `drizzle`. Com o conjunto `DATABASE_URL`, aplique as migrações:

```bash
rodado db:migrate
```

Durante o desenvolvimento local, você pode, em vez disso, empurrar o esquema diretamente para o banco de dados, sem arquivos de migração:

```bash
corrida de bun db:push
```

Outros scripts do banco de dados:

| Comando               | Descrição:                                    |
| --------------------- | --------------------------------------------- |
| `bun run db:generate` | Gerar uma migração depois de editar o esquema |
| `bun run db:studio`   | Navegue e edite seus dados no Drizzle Studio  |

## 5. Executar localmente

```bash
execução de bun
```

![imagebot](https://i.ibb.co/Jw1bjLrr/image.png)

![permissões detalhadas](https://i.ibb.co/0p7tk88V/image.png)

[LightCMS](https://lightcms.me) está agora disponível em `http://localhost:5173`. Defina `BETTER_AUTH_URL` para este endereço e inicie uma sessão com o GitHub pela primeira vez.

### Testando webhooks localmente

O GitHub não pode entregar webhooks para `localhost`, então encaminhe-os através do [smee.io](https://smee.io):

1. Criar um canal em [smee.io](https://smee.io) e copiar sua URL.
2. Defina `WEBHOOK_PROXY_URL` no `.env` para essa URL.
3. Defina a **URL do Webhook** nas configurações do seu aplicativo GitHub para a mesma URL.
4. Execute o bot em um segundo terminal:

   ```bash
   bun executar bot:start
   ```

O bot registra o mesmo manipulador do ponto de produção: validação de conteúdo em `push`, comentários e
rótulos em `pull_request` e registro de `installation`.

## 6. Deploy da produção

O projeto está configurado com sveltekit que é muito agnostico do fornecedor, so
[Vercel](https://vercel.com) [netlify](https://www.netlify.com/) [workers cloudflare](https://www.cloudflare.com/) são todos alvos de deploy suportados fora da caixa.

1. Importe seu repositório Git na plataforma de implantação.
2. Adicione cada variável de ambiente do [passo 3](#3-configure-environment-variables) em **Configurações do Projeto → Ambiente
   Variáveis**. Defina `BETTER_AUTH_URL` para o seu URL de produção.
3. Implantação.

Para verificar a compilação de produção localmente:

```bash
bun run build
bun run preview
```

## Solução de problemas

Fazer uma conta com [Wit.ai](https://wit.ai/) é um serviço gratuito por meta .htm
E qualquer API compatível com o openai para transcrição. |
One can use [groq](https://groq.com/) or [assemblyai](https://assemblyai.com/) or |
[elevenlabs](https://elevenlabs.io/) or [deepgram](https://deepgram.com/) or [sarvam](https://sarvam.ai/). |

## Por motivos de desenvolvimento, você pode usar as seguintes credenciais para o posthog

PUBLIC_POSTHOG_KEY = "phc_AS2JXQsqEwNreH5kra5Eefd5TijExE5eiLfwdzXLhPg"
PUBLIC_POSTHOG_URL = "https://us.i.posthog.com"

```bash
PUBLIC_POSTHOG_KEY=phc_AS2JXQsqEwNreH5kra5Eefd5TijExE5eiLfwdzXLhPg
PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

https://wit.ai

![wit.ai](https://i.ibb.co/MySskPTt/image.png)

```bash
WIT_AI_TOKEN="Token de acesso ao servidor"
WIT_AI_CLIENT_TOKEN="Token de acesso ao cliente"
```

```bash
APP_ID=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
CDN_KEY=
CDN_URL=
DATABASE_URL=
GITHUB_APP_ID=
GITHUB_APP_NAME=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_PRIVATE_KEY=
GITHUB_WEBHOOK_SECRET=
MAIL_FROM=
MAIL_HOST=
MAIL_PASS=
MAIL_PORT=
MAIL_SECURE=
MAIL_USER=
OPEN_AI_ENDPOINT=
OPEN_AI_MODEL=
OPEN_AI_APIKEY=
ORIGIN=
PRIVATE_KEY=
PUBLIC_POSTHOG_HOST=
PUBLIC_POSTHOG_KEY=
SPEECH_API_KEY=
SPEECH_ENDPOINT=
SPEECH_MODEL=
WEBHOOK_SECRET=
WIT_AI_CLIENT_TOKEN=
WIT_AI_TOKEN=
```

![configuração para o bot](https://i.ibb.co/jP5tgcJH/image.png)
