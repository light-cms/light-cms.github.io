---
title: "O que é importante na frente em Markdown?"
description: "A matéria frontal é YAML, TOML ou JSON metadados no topo de um arquivo Markdown que os geradores de site estáticos usam para os títulos, datas, tags e modelos."
serial: 45
date: 2026-10-16T11:10:00Z
draft: false

tags:
  - markdown
  - explicadores
  - estático-sítios
  - SMS
---

A matéria frontal é um bloco de metadados no topo de um arquivo de conteúdo que descreve a página para um gerador de site estático. Geralmente contém campos como título, descrição, data, tags, estado do rascunho e informações do modelo.

## Formatos da frente comum

A maioria dos geradores de site estáticos suportam a matéria frontal YAML, e alguns também suportam TOML ou JSON.

```md
---
título: "Notas sobre Geradores de Site Estáticos"
descrição: "Um breve resumo usado em metadados e pré-visualizações.
data: 2026-10-16T09:00Z
draft: false
tags:
 - static-sites
 - ferramentas
---
```

Os metadados estão entre delimitadores na parte superior do arquivo. O corpo do Markdown segue abaixo dele.

## Que controles frontais de matéria

| Campo       | Uso comum                               | Impacto de compilação                                     |
| :---------- | :-------------------------------------- | :-------------------------------------------------------- |
| `title`     | Título e título da página               | títulos em falta podem quebrar modelos ou listagens       |
| Data        | Classificação e publicação de metadados | Datas inválidas podem causar erros de criação             |
| `rascunho`  | Estado de rascunho/publicado            | Rascunhos podem ser excluídos das compilações de produção |
| `tags`      | Páginas e filtros de taxonomia          | Estrutura inválida pode quebrar a geração de taxonomia    |
| `slug`      | Substituição da URL                     | Pode alterar URLs canônicas                               |
| `descrição` | Metadados e pré-visualizações           | Afeta trechos e pré-visualizações sociais                 |

## Erros comuns

Erros frontais são uma causa frequente de falhas na criação do site estático. Problemas comuns incluem indentação YAML inválida, formatos de data incorretos, aspas faltando em torno de caracteres especiais e nomes de campo inconsistentes entre arquivos.

A Git based CMS can reduce these errors by exposing front matter as form fields and validating values before saving. Mesmo com um editor visual, mantenha o formato front-matter subjacente consistente em seu repositório de conteúdo.

Para leitura relacionada, consulte [O que é Markdown?](/blog/what-is-markdown/) e [The LightCMS Editor Tour](/blog/lightcms-editor-tour/).
