---
title: "Configurando seu repositório e CI/CD para LightCMS"
description: "Conecte um repositório estático ao LightCMS e configure CI/CD para que commits Git façam deploy de seu site automaticamente."
serial: 3
date: "2026-09-18T01:42:00.000Z"
draft: false
tags:
  - repositório
  - Configuração
  - github
  - estático
  - Site
  - gerador
  - Astro
  - hugo
preview: og-image.png
slug: configuring-your-repository-cicd
---

Para publicar com o LightCMS, você precisa de um repositório Git que contenha o conteúdo do Markdown e um fluxo de trabalho CI/CD que compila e implementa o site quando chegarem commits. LightCMS lida com a edição de conteúdo e commits do Git; seu build pipeline manipula a renderização e hospedagem.

## Estrutura do repositório LightCMS espera

O LightCMS funciona com geradores de site estáticos que leem arquivos Markdown com a matéria frontal, como Astro, Hugo, Zola, Jekyll ou Eleventy.

```text
meu-blog-repo/
─── content/ # ou src/content/blog/ no Astro
├── hello-world.md
── meu-second-post.md
├. ithub/
── fluxos de trabalho/
── deploy.yml # Construa e use o oleoduto
─ pacote. son # Para ferramentas de nós como Astro
── hugo.toml # Ou astro.config.mjs, zola.toml
```

O diretório exato do conteúdo depende do seu gerador. Por exemplo, muitos sites do Hugo usam `content/`, enquanto as coleções de conteúdo do Astro comumente usam `src/content/`.

## Formato da matéria frontal

O LightCMS lê e escreve metadados no topo dos arquivos Markdown. Um bloco de questão frontal YAML comum se parece com isto:

```yaml
---
título: "Meu primeiro artigo"
descrição: "Um breve resumo do artigo para visualizar cartões e resultados de pesquisa.
data: 2026-10-14T10:00:00Z
rascunho: false
tags:
  - tecnologia
  - engenharia
---
```

Caso o site utilize o TOML ou outro formato de conta inicial, confirme que o LightCMS o suporta antes de conectar o repositório.

## Conectar o repositório do GitHub

Quando possível, use uma instalação com escopo do GitHub App em vez de um token de acesso pessoal vivido há muito tempo. Uma instalação com escopo limita o acesso ao repositório e é mais fácil de auditar.

1. Entrar no [Painel LightCMS](https://www.lightcms.me).
2. Selecione a opção para conectar um repositório.
3. Escolha a conta do GitHub ou a organização proprietária do repositório.
4. Conceder acesso somente ao repositório que você deseja que o LightCMS edit.
5. Confirme que a pasta de ramificação e conteúdo esperados aparecem no LightCMS.

## Configurar implantações automatizadas

Quando você publica no LightCMS, a alteração torna-se um commit Git. Sua plataforma de implantação precisa construir o site a partir desse commit.

### Example: GitHub Actions for GitHub Pages

Este exemplo mostra uma compilação Astro implantada no GitHub Pages. Ajuste os comandos de instalação/compilação e o diretório de saída para o seu gerador.

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
        uses: actions/setup-node@v4
        com:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build static site
        run: npm run build

      - name: Upload Pages artefato
        uses: actions/upload-pages-artifact@main
        with:
          path: . dist

  deploy:
    environment:
      name: github-pages
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy para o GitHub Pages
        id: deploy
        uses: actions/deploy-pages@main
```

### Opção: Hospedagem gerenciada

Páginas do Cloudflare, Vercel, e Netlify também podem criar a partir dos commits do repositório. As configurações da compilação típica incluem:

| Plataforma | Exemplo de comando de compilação | Diretório de saída exemplo |
| :--------- | :------------------------------- | :------------------------- |
| Hugo       | `hugo --minify`                  | Público\`                  |
| Espaço     | `npm run build`                  | `dist`                     |
| Zola       | `compilação` zola                | Público\`                  |

Plataformas gerenciadas reduzem a configuração do CI, mas adicionam outro serviço ao seu caminho de publicação. O GitHub Actions mantém a definição de compilação no seu repositório, o que pode facilitar as auditorias e migrações.

## Verificar a repetição de publicação

Uma vez que o LightCMS estiver conectado e o deploy estiver configurado, teste todo o caminho de publicação:

1. Crie uma postagem rascunho no LightCMS.
2. Publicar a publicação.
3. Confirme que um commit aparece no seu repositório do GitHub.
4. Confirme que sua plataforma de hospedagem ou CI/CD inicia uma compilação para esse commit.
5. Abra a URL de produção e verifique a nova página.

Se o commit aparecer, mas o site não atualiza, o problema é geralmente na configuração de compilação ou de implantação, não no próprio commit do Markdown. Comece verificando os logs do CI, crie o comando, o diretório de saída e as configurações do ramo.
