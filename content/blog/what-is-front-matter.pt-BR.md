---
title: "O que é importante na frente? O Bloco de Metadados no Topo do Seu Conteúdo"
description: "A matéria principal é o bloco YAML ou TOML no topo de um arquivo Markdown que diz ao seu site seu título, data, tags e status rascunho, com exemplos."
serial: 45
date: 2026-10-16T11:10:00Z
draft: false
keywords:
  - o que é de frente
  - marcação de cunho frontal
  - questão inicial yaml
  - metadados do site estático
  - markdown metadata
preview: /og-image.webp
taxonomies:
  tags:
    - markdown
    - explicadores
    - estático-sítios
    - SMS
---

**Página inicial** é o bloco de metadados no topo de um arquivo de conteúdo, cercado do próprio artigo. É onde um arquivo Markdown declara o que _é_ (título, data, tags, autor, status de rascunho), para que o gerador de site possa renderizar, ordenar e filtrá-lo.

Se Markdown é o corpo de um cargo, a frente é o seu rótulo.

---

## O que parece

```markdown
---
título: Notas sobre os Geradores de Site Estáticos
descrição: Um breve resumo usado para cartões SEO e sociais.
data: 2026-10-16T09:00:00Z
rascunho: false
tags:
  - static-sites
  - tooling
keywords:
  - geradores estáticos do site
  - comparação
preview: /og-image ebp
---

O corpo do artigo começa aqui, depois do fechamento `---`.
```

Vale a pena notar três coisas:

1. **As fendas.** Uma linha de três traços abre e fecha o bloco. Tudo o que pertence aos metadados; tudo depois de pertencer ao artigo.
2. **O formato.** Esse exemplo é YAML, o padrão para a maioria dos geradores. TOML (`+++`) e JSON (`{...}`) também são usados; O Zola aceita todas as três, por exemplo.
3. **Os campos.** Chaves padrão como `title` e `date` são compreendidos por geradores; chaves personalizadas como `palavras-chave` ou `preview` estão disponíveis para seus templates.

---

## O que é importante de frente realmente faz

Cada campo move um comportamento concreto na compilação:

| Campo                 | Efeito                                        |
| :-------------------- | :-------------------------------------------- |
| `title`               | Página `<title>`, cabeçalhos e listas         |
| `descrição`           | Descrição meta, cartões, lista de resumos     |
| Data                  | Ordenando, "publicado no" monitor, feeds      |
| `tags` / `categorias` | Páginas de taxonomia e cruzamento de links    |
| `rascunho`            | Excluído da compilação quando `true`          |
| `slug`                | Sobrescreve o URL derivado do nome do arquivo |
| `modelo`              | Escolhe qual layout renderiza a página        |
| `peso`                | Ordenação manual dentro de uma seção          |

É por isso que um erro de digitação no front-matter pode quebrar uma compilação: `date: 2026-13-45` ou uma guia perdida sob `tags:` é YAML inválido, e o gerador falha antes de escrever uma única página.

---

## Porque a matéria frontal existe

Geradores de site estáticos não podem perguntar a um banco de dados "O que é esta página?" porque não há banco de dados. Eles precisam de metadados para viver **com** o conteúdo de uma forma, tanto uma máquina quanto uma humana podem ler. A matéria frontal resolve que:

- **Arquivos auto-descreventes.** Um post carrega tudo que é necessário para renderizar. Mova o arquivo e a sua identidade se move com ele.
- **Metadados difusíveis.** Alterar o título é um commit de uma linha que você pode revisar e reverter como qualquer outra alteração.
- **Ferramenta-amigável.** Editores, linters e scripts CI podem validar metadados antes da compilação.
- **Portabela.** O mesmo bloco funciona entre geradores, com pequenas diferenças de chave.

---

## Convenções comuns

Já existem convenções suficientes que a consistência vale mais do que a esperança:

- **Datas na ISO 8601**: `2026-10-16T09:00Z`. Unambiguous em localidades, classifica corretamente.
- **Tags como uma lista**, não uma string separada por vírgulas, então uma tag que contém um espaço não se divide ao meio.
- **Slugs minúsculas com hífens.** Nomes de arquivos se tornam URLs, então 'meu-grandioso-post' bate em 'Meus Grandes Post.md'.
- **`draft: true` para trabalho inacabado.** A maneira segura de salvar sem publicar.
- **Uma verdadeira `descrição`.** O campo mais frequentemente deixou vazio e depois lamentou quando o link é compartilhado.

---

## Onde um CMS cabe

A primeira questão é a do Markdown que os escritores não técnicos não deveriam ter de ver. É sintaxe com arestas afiadas: assuntos de indentação, cita os assuntos, formatos de data importam.

Um CMS baseado no Git manipula-o como um **formulário** (preencha o título, escolha a data, clique em tags) e serialize YAML válido ao salvar. Escritores nunca pensam sobre a cerca; o repositório ainda recebe o que o gerador espera. Essa funcionalidade única elimina um dos modos de falha mais comuns na publicação de um site estático.

A LightCMS, por exemplo, valida a primeira matéria conforme você o digita e o escreve sobre commit (veja [o tutorial editor](/blog/lightcms-editor-tour/)), portanto, os metadados permanecem corretos, não importa quem esteja publicando.

---

## Perguntas Frequentes

### O front matter é necessário?

Para páginas em uma seção ordenada por data, sim: geradores esperam pelo menos um título e uma data. As exigências exatas dependem do esquema do seu gerador.

### YAML vs TOML vs JSON: qual devo usar?

Seja qual for o seu gerador padrão. Consistência em um repositório importa mais do que o formato em si.

### A página inicial pode conter listas e objetos?

Sim. Mapas e listas aninhadas são norma: galerias de imagens, autores com papéis e títulos alternativos em forma.

### Qual o comprimento da descrição?

Aponte para cerca de 140 a 160 caracteres: longo o suficiente para fazer sentido nos resultados de busca, curto o suficiente para não ser truncado.

### A front-matter afeta o SEO?

diretamente: é de onde vem o título e a meta descrição, então é uma das coisas pequenas mais valiosas em um sítio estático.

---

Relacionado: [o que é Markdown?](/blog/what-is-markdown/), [editor de LightCMS](/blog/lightcms-editor-tour/) e [o que faz um gerador de site estático](/blog/what-is-a-static-site-generator/).
