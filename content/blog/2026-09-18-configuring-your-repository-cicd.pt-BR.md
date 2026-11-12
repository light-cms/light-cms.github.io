---
title: Configurando seu repositório e CI/CD
description: Conecte um site estático (Hugo, Astro, Jekyll, SvelteKit) ao LightCMS e automatize deploys com CI/CD.
serial: 3
date: 2026-09-18T01:42:00Z
draft: false
keywords:
  - configuração do repositório
  - ações do github
  - gerador de site estático
  - Astro
  - hugo
preview: /og-image.png
taxonomies:
  tags:
    - Configuração
    - github
    - cifra
    - luzes
---

Conectar seu site estático a [LightCMS](https://lightcms.me) requer apenas dois ingredientes: um repositório do GitHub contendo seus arquivos de conteúdo e um fluxo de trabalho automatizado CI/CD que constrói e implementa seu site sempre que houver alterações no sistema.

Siga este guia para estruturar o repositório, instalar o aplicativo [LightCMS](https://lightcms.me) GitHub App, e configurar implantações automatizadas.

---

## 1. Estrutura seu repositório de conteúdo

[LightCMS](https://lightcms.me) funciona nativamente com qualquer gerador de site estático (SSG) que armazena conteúdos como arquivos Markdown (`.md` ou `.mdx`) com o assunto frontal YAML.

Um layout típico do repositório se parece com isto:

```text
meu-blog-repo/
── content/ # ou src/content/blog/ no Astro
── hello-world. d
── meu-para-pena-post.md
─ . ithub/
── fluxos de trabalho/
├── implantação. ml # Construção automatizada e pipeline de deploy
pacote de ─tive. son
── astro.config.mjs # ou config.toml para Hugo
```

### Cabeçalho Padrão de Elementos Frontais

[LightCMS](https://lightcms.me) lê e grava os metadados da frente YAML na parte superior dos seus arquivos Markdown. Um cabeçalho padrão inclui:

```markdown
---
título: Descrição do meu primeiro artigo
: uma breve visão geral do artigo para SEO e cartões.
data: 2026-10-14T10:00:00Z
rascunho: false
tags:
  - tecnologia
  - blogando
---

O conteúdo do seu artigo começa aqui...
```

---

## 2. Instalar o aplicativo do GitHub [LightCMS](https://lightcms.me

Para permitir que [LightCMS](https://lightcms.me) leia seus arquivos e commit artigos recém escritos:

1. Entre na sua instância [LightCMS](https://lightcms.me) usando sua conta do GitHub.
2. Navegue até o seu painel de controle e clique em **Conectar Repositório** (ou **Instalar aplicativo GitHub**).
3. O GitHub pedirá para você selecionar em qual conta ou organização instalar o aplicativo.
4. Você pode conceder acesso a **Todos os repositórios** ou selecionar **Somente repositórios selecionados** para limitar o acesso estritamente ao repositório do seu blog.
5. Uma vez autorizado, seu repositório aparecerá no painel [LightCMS](https://lightcms.me).

---

## 3. Configurar implantações de CI/CD automatizadas

Toda vez que você clicar em **Publicar** ou **Salvar** no [LightCMS](https://lightcms.me), o aplicativo compromete o conteúdo como arquivo Markdown diretamente no seu repositório Git. Para transformar esses commits em atualizações ao vivo do site, configure um fluxo de trabalho do GitHub Actions.

### Exemplo: Implantação Astro (GitHub Pages / Host Estático)

Crie `.github/workflows/deploy.yml` no seu repositório:

```yaml
Nome: Implantar o site

em:
  push:
    branches:
      - permissões principais

:
  conteúdos: ler
  páginas: escrever
  id-token: escrever

concurracia:
  grupo: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node. s
        usos: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Upload Pages artefato
        uses: actions/upload-pages-artifact@v3
        with:
          path: . dist

  deploy:
    environment:
      name: github-pages
      url: ${% raw %}{{ steps.deployment.outputs.page_url }}{% endraw %}
    runs-on: ubuntu-latest
    precisa: criar
    steps:
      - Nome de implantação para o GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Exemplo B: Implantação Hugo (páginas de Cloudflare ou Vercel)

Se você está usando [Hugo](https://gohugo.io), plataformas como **Cloudflare Pages**, **Netlify**, ou a **Vercel** pode criar seu repositório automaticamente quando eles recebem um evento push no GitHub:

1. Conecte o seu repositório do GitHub diretamente no [Cloudflare Pages](https://pages.cloudflare.com) ou [Vercel](https://vercel.com).
2. Defina o comando de compilação para `hugo --minify`.
3. Defina o diretório de saída da compilação para `public`.
4. Sempre que [LightCMS](https://lightcms.me) empurra uma nova publicação para `principal`, a plataforma de hospedagem gera automaticamente e implementa seu site globalmente em segundos.

---

## 4. Recomendações da Plataforma de Hospedagem

Várias plataformas confiáveis oferecem níveis gratuitos generosos para hospedar sites estáticos:

- **[Vercel](https://vercel.com)**: Implementações de configuração Zero para frameworks JS modernos, SSL automática, pré-visualizar URLs para rascunhos de pull requests.
- **[Cloudflare Pages](https://pages.cloudflare.com)**: Rede de bordas global em mais de 300 cidades, largura de banda ilimitada no nível gratuito.
- **[Netlify](https://www.netlify.com)**: Pioneer de Jamstack hosting com formulário rico e manipulação de ativos.
- **[GitHub Pages](https://pages.github.com)**: Hospedagem direta para repositórios pessoais e de código aberto.
- **[Deno Deploy](https://deno.com/deploy)**: Hospedagem de aresta leve para recursos de web estáticos e JavaScript.

---

## 5. Verificar o Loop de Publicação

Uma vez que seu repositório é configurado e CI/CD é executado:

1. Abra o seu editor [LightCMS](https://lightcms.me) e crie uma nova publicação.
2. Adicione seu conteúdo e clique em **Publish**.
3. Verifique a guia **Acções** no seu repositório do GitHub. Seu fluxo de trabalho CI/CD é executado no commit [LightCMS](https://lightcms.me).
4. Dentro de um minuto ou dois, sua nova postagem estará disponível no seu site.
