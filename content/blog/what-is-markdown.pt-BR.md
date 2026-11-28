---
title: "O que é Markdown?"
description: "Markdown é um formato markup que usa símbolos simples para formatação de texto."
date: "2026-10-14T15:00:00.000Z"
draft: false

slug: what-is-markdown
---

Markdown é um formato de marcação de texto simples para escrever documentos estruturados com símbolos simples. É comumente usado para a documentação, arquivos README, notas, e conteúdo estático do site porque a fonte permanece legível como texto e pode ser convertida em HTML.

## Sintaxe básica Markdown

````md
# Título 1

## Título 2

A parágrafo com texto em negrito e _itálico_.

- Um item de bala
- Outro item de bala

1. Um item numero
2. Outro item numerado

[Link text](https://example.com)
![Alt text](/images/photo.jpg)

`inline code`

```js
console.log("olá, web");
```
````

Diferentes sabores Markdown adicionam recursos como tabelas, listas de tarefas, notas de rodapé e atributos de código cercados. Os sabores comuns incluem CommonMark e GitHub com Markdown.

## Por que o Markdown funciona bem para sites estáticos

| Propriedade          | Benefício prático                                          | Operação                                                 |
| :------------------- | :--------------------------------------------------------- | :------------------------------------------------------- |
| Texto sem formatação | Fácil de armazenar, diff e versão no Git                   | Controle de layout limitado sem extensões                |
| Fonte legível        | Autores podem editar sem um editor proprietário            | Documentos complexos podem precisar de MDX ou shortcodes |
| Conversão de HTML    | Geradores de site estáticos o tornam em páginas da web     | A saída depende do gerador e tema                        |
| Portabilidade        | Os arquivos podem se mover entre ferramentas e plataformas | Diferenças de sabor podem afetar a renderização          |

## Markdown e primeira matéria

Geradores de site estáticos costumam parear Markdown com questão inicial, um bloco de metadados na parte superior do arquivo.

```md
---
title: "Meu primeiro post"
data: 2026-10-14T10:00:00Z
tags:
  - blogando
---

O corpo do artigo começa aqui.
```

Metadados na loja frontal; Markdown armazena conteúdo. Juntos, eles formam um formato de conteúdo portátil para a publicação de fluxos de trabalho baseados na Git. Para obter mais detalhes, consulte [O que é importante na Front Front em Markdown?](/blog/what-is-front-matter/) e [O que é um CMS baseado no Git, ](/blog/Git based-cms-explained/).
