---
title: "The LightCMS AI Copilot: Rascunho da ajuda que fica no seu repositório"
description: "O rascunho do copiloto de IA, reescreve parágrafos e corrige gramática dentro do LightCMS, executando em qualquer provedor compatível com OpenAI-compatível com o que você escolher."
serial: 32
date: 2026-10-16T09:20:00Z
draft: false
keywords:
  - ai cms
  - assistente de escrever markdown
  - lightcms ai copiloto
  - cms compatível com openai
  - workflow de conteúdo ai
preview: /og-image.webp
taxonomies:
  tags:
    - luzes
    - ai
    - escrevendo
    - workflow
---

A maneira mais rápida de fazer uma ferramenta de escrita impopular é preenchê-la com o texto gerado que você não pediu. O [LightCMS](https://lightcms.me) AI copiloto funciona de forma diferente: o modelo ajuda e você mantém a propriedade do rascunho.

Não é uma janela de bate-papo. É um conjunto de ações que funcionam com o texto que você já está editando.

## O que ele faz

Selecione um parágrafo, ou não selecione nada, e o copilot oferece quatro opções:

- **Esboçamento**: Transforme um tópico em uma estrutura que você pode aceitar, reordenar ou excluir.
- **Refrase**: reescreva a mesma ideia em um tom diferente. Você pode apertar uma frase longa, fazer uma nota mais formal ou suavizar uma linha rigorosa.
- **Expanda**: Transforme uma ideia curta em um rascunho completo quando você souber o que dizer, mas não quanto escrever.
- **Corrigir gramática**: Limpar pontuação, gramática e erros de digitação antes de publicar.

Todos os resultados aparecem no documento como texto editável. Você pode aceitá-lo, mudar ou desfazer. Nada é salvo até que você publique, e nada é publicado até que o tenha lido.

## Traga o seu próprio modelo

O LightCMS funciona com qualquer ponto de acesso compatível com OpenAI.

| Fornecedor     | Por que as pessoas escolhem                                                |
| :------------- | :------------------------------------------------------------------------- |
| **Abrir**      | Modelos familiares com grande capacidade                                   |
| **OpenRouter** | Uma chave para muitos modelos, com troca fácil                             |
| **Gráfico**    | inferência rápida e um nível livre                                         |
| **NVIDIA NIM** | Endpoints que você pode executar, incluindo configurações amigáveis ao GPU |

Como o LightCMS utiliza o formato padrão `/v1/chat/completions`, outros endpoints compatíveis também podem funcionar. Isso inclui um modelo local por trás de um proxy compatível com OpenIA, um gateway privado ou um ponto de extremidade da empresa.

Sua chave de API permanece na sua instância LightCMS. O texto que você envia para uma ação copiloto vai para o provedor que você configurou. Para uma ferramenta auto-hospedada, licenciada por Apache, que controla a importância.

## Por que ele vive no editor

Um chat pode produzir um texto longo e genérico que você ainda precisa colar, formatar e reescrever. As ações contextuais evitam esse problema.

- **Pequeno escopo**: Reescrever um parágrafo tem um resultado claro. "Escrever-me uma postagem de blog" não tem.
- **A formatação permanece intacta**: o copiloto trabalha dentro do editor, então as listas de espera e a primeira matéria permanecem intocadas.
- **Iteração rápida**: Se você não gosta do resultado, recrie o texto selecionado em vez de todo o documento.

Isto faz com que AI se sinta como um conjunto de pequenas edições, mais perto de como um editor de cópias funciona.

## Use-o responsavelmente

- **Escreva a voz você mesmo**: use contornos e expansões como pontos de partida, e então mantenha as frases que soam como você.
- **Verifique os fatos**: o modelo não sabe sua base de código, seu produto ou seus números.
- **Mantenha os segredos fora de avisos**: qualquer coisa que você enviar para um provedor é visível para esse provedor.

LightCMS salva apenas o que você aprova. Ele não gera conteúdo em segundo plano, armazena rascunhos nos servidores do LightCMS, nem utiliza seus rascunhos para treinamento.

## Quando isso ajuda mais

- **Começando**: um contorno transforma uma página em branco em um rascunho que você pode reagir.
- **Reescrevendo no final**: Acompanhe a introdução depois que você souber o que diz a publicação.
- **Última limpeza**: Execute um passe gramática nos últimos minutos antes de publicar.

## Perguntas Frequentes

### Eu preciso de uma chave de API?

Sim, para usar o copiloto que você precisa configurar um provedor na sua instância LightCMS. Tudo o resto no editor funciona sem uma chave de API.

### Meu conteúdo será usado para treinar modelos?

Não. LightCMS envia apenas o texto que você selecionar para uma ação ao ponto de extremidade configurado. Ele não envia seu repositório ou rascunhos para nenhum outro lugar.

### Posso usar um modelo local?

Sim. Se o modelo expõe uma API compatível com OpenIA, o ponto LightCMS nesse ponto e o copiloto funciona da mesma maneira.

### Isso vai mudar a minha questão?

Não. Ações Copilot afetam apenas o conteúdo que você seleciona.

Emparelhado com [voice-to-text](/blog/lightcms-voice-to-text/), o copiloto ajuda com ambos os lados da redação: pegar palavras rapidamente e transformá-las em uma publicação publicável.
