---
title: "Um passeio do editor LightCMS: WYSIWYG que produz Clean Markdown"
description: "Dentro da superfície de escrita do LightCMS: Edição visual baseada em Dicas com matemática, destaque de código, tabelas, listas de tarefas e mídias que ainda produzem Markdown editável à mão."
serial: 31
date: 2026-10-16T09:10:00Z
draft: false
keywords:
  - editor de luzes
  - wysiwyg markdown editor
  - editor de visual para markdown
  - tiptap editor
  - markdown wysiwyg
preview: /og-image.webp
taxonomies:
  tags:
    - luzes
    - Editor
    - markdown
    - escrevendo
---

A maioria dos "editores de Markdown" é uma área de texto com um painel de pré-visualização guardado para o lado. Você escreve sintaxe bruta, olha o resultado e espera que o aninhamento esteja certo. O editor de lightCMS funciona da outra maneira. **Você escreve e o editor escreve Markdown debaixo da neath.**

Esta é uma pista pela letra da história: o que faz, porque funciona dessa forma, e o que se recusa deliberadamente a fazer.

---

## A ideia principal: Veja o documento, não a sintaxe.

O editor é construído sobre [TipTap](https://tiptap.dev), uma estrutura de texto rich baseada em ProseMirror, configurado para serializar tudo o que produz em Markdown mais YAML.

Isso significa que:

- **Bold** é um botão da barra de ferramentas ou `Cmd+B`, e escreve `**bold**` no arquivo.
- Um título é um menu suspenso e escreve `## Cabeçalho`.
- Uma tabela é inserida, arrastada e editada como uma tabela, e fica como uma tabela de tubos no seu repositório.

Você obtém a urgência de um processador de texto com a durabilidade de um texto sem formatação. Não há nenhum formato de documento proprietário, sem blob, nem nenhuma etapa de conversão quando você sair.

---

## Em que você pode entrar em uma postagem

### Texto estruturado
Títulos, citações de blocos, listas ordenadas e não ordenadas, regras horizontais e listas de tarefas: a estrutura completa de um artigo técnico, todos os teclados acessíveis.

### Blocos de Código com Destaque
Insira um bloco cercado, escolha o idioma, e o editor mantém a cerca e a etiqueta de linguagem intacta. Sua postagem publicada renderiza com o mesmo destaque de sintaxe que seu SSG já se aplica.

### Matemática com KaTeX
Escreva matemática em linha ou exiba equações e as veja digitando ao vivo. Para publicação técnica, como posts ML , notas de física e escrita de algoritmos, isso remove o loop "compilar para verificar a fórmula".

### Tabelas
Inserir linhas e colunas visualmente. As tabelas Markdown são miseráveis para o autor manualmente; aqui estão apenas células.

### Multimídia
Arraste as imagens para a página. [LightCMS](https://lightcms.me) armazena o arquivo, gera a referência e o escreve no seu conteúdo, então uma captura de tela vai da área de transferência para publicada sem uma viagem pelo seu sistema de arquivos.

---

## Matéria frontal sem o YAML

A outra metade de qualquer post estático no site é sua primeira questão, e é onde a edição por mão geralmente dá errado, uma guia perdida, uma data no formato errado, uma cotação não fechada, e as pausas de compilação.

Em [LightCMS](https://lightcms.me), o front-matter é um formulário: título, descrição, data, tags, palavras-chave e qualquer outra coisa que o esquema declina. O editor valida conforme você digita e grava YAML formatado corretamente na publicação. Os autores nunca veem a sintaxe, e o repositório ainda recebe o que o SSG espera.

Uma grande parte da "minha construção está falhando" suporta os segmentos nas comunidades estáticas de volta à matéria inicial mal formada, e um formulário visual remove essa classe de erro.

---

## Temas construídos para sessões longas

O editor é fornecido com modos claros e escuros. Isso parece cosmético até que você tenha escrito por três horas: um puro fundo `#ffffff` ao 1am é hostil, e a maioria dos painéis de administração não se importa. [LightCMS](https://lightcms.me) escolhe as suas paletas para ler e escrever durante longas sessões, não para uma captura de tela em uma página inicial.

---

## O que o Editor não fará

Dois limites são intencionais:

1. **Isso não vai te deixar quebrar o formato.** Cada mapa de ação para Markdown válido. Não há nenhum estado em que o editor salve algo que o seu SSG não consegue ler.
2. **Não é uma ferramenta de design.** Layout, tema e apresentação pertencem aos seus templates: o CMS possui o conteúdo, o repositório possui o código do código. Manter essa linha limpa é o que permite que designers e escritores trabalhem no mesmo repositório sem pisar um ao outro.

---

## Por que não usar apenas um Editor de Código?

Você pode e os desenvolvedores com frequência. Mas assim que uma segunda pessoa tocar no repositório, "basta editar o Markdown" se torna um fardo de suporte: matéria frontal errada, tabelas escarpadas acidentais, commits espaços em branco acidentais. Corrigir um erro de digitação significa então instalar um editor, clonar um repositório e aprender um fluxo de trabalho na filial.

O editor [LightCMS](https://lightcms.me) deixa o fluxo de trabalho do desenvolvedor intocado e remove essas barreiras para todos os outros.

---

## Perguntas Frequentes

### O editor produz um Markdown confuso?

Não. Ele serializa para o padrão de Markdown com a frente YAML, a mesma saída que um humano cuidadoso escreveria. Abra qualquer postagem publicada no VS Code e ela lê normalmente.

### Eu ainda posso editar os arquivos à mão?

Sempre. [LightCMS](https://lightcms.me) commits no seu repositório como qualquer outra pessoa. Edições manuais, edições de editores e AI edita todas as terras como os mesmos arquivos `.md`.

### Apoia Markdown Short-Codes?

Os códigos curtos dos seus SSG vivem no conteúdo como texto simples e são passados intocados; o editor não tenta interpretar nem reformá-los.

### E sobre Imagens?

Arraste e solte. [LightCMS](https://lightcms.me) coloca o ativo e escreve a referência, então o caminho corresponde ao que a construção espera.

---

Próximo: [Copilot de IA](/blog/lightcms-ai-copilot/) que vivem ao lado deste editor, e [ditar um rascunho com sua voz](/blog/lightcms-voice-to-text/) quando digitar é a parte lenta.
