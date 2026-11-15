---
title: "Rascunhos, revisões e reversões: Controle de Versão para Escritores"
description: "LightCMS transforma histórico Git em um fluxo de trabalho editorial: rascunhos, commits, pull requests, e reversão com um clique, sem pedir a um escritor para aprender Git."
serial: 34
date: 2026-10-16T09:40:00Z
draft: false
keywords:
  - git versioning content
  - Workflow rascunho de cms
  - content rollback
  - histórico de versões markdown
  - rascunhos de luzes
preview: /og-image.webp
taxonomies:
  tags:
    - luzes
    - git
    - workflow
    - colaboração
---

O controle de versão é o melhor argumento para um CMS baseado em Git e o mais mal explicado. Os autores não querem ouvir falar de compromissos, de avanços rápidos ou de árvores. Eles querem saber três coisas: **Posso salvar isso sem publicá-lo, ver o que mudou e desfazer se eu errar?**

Git responde a todos os três sem um escritor aprender Git.

---

## O rascunho fica como um rascunho

`rascunho: verdadeiro` na parte da frente é o mecanismo inteiro. Quando você cria ou edita uma postagem em [LightCMS](https://lightcms.me), a bandeira mora na frente do arquivo e seu SSG pula durante a construção. A postagem está localizada no repositório, revisável e segura e nunca renderiza no site em produção.

Vire isto para `false` na publicação e a próxima criação o pega. Nenhum "banco de dados de rascunhos" separado pode derivar do que tem no seu repositório, e um rascunho não pode vazar porque dois sistemas discordam sobre seu estado.

Porque um rascunho é apenas um arquivo, todo o resto também funciona nele: ele pode sentar em um ramo ao vivo atrás de um pull request, seja editado por outra pessoa, e seja comparado linha por linha antes de sair ao vivo.

---

## Cada Salvar é um Commit

Cada publicação em [LightCMS](https://lightcms.me) cria um commit com uma mensagem coerente, o que dá a você:

- **História completa.** Quem mudou o quê e quando. Nenhum plugin necessário.
- **Verdadeiros diffs.** Os diffs do Markdown são legíveis, ao contrário das linhas em uma coluna `post_content`.
- **culpe isso significa alguma coisa.** Você pode perguntar quando um parágrafo mudou e obter uma resposta.
- **Backup gratuitos.** Cada clone do repositório é uma cópia completa do seu conteúdo.

Para um escritor solo esta é uma infra-estrutura invisível. Para uma equipa, é a trilha de auditoria que a maior parte das CMS comerciais cobre.

---

## Branches e Pull Requests: Revisão Editorial, Propriedade

[LightCMS](https://lightcms.me) pode publicar em dois modos e escolher entre eles está escolhendo o seu processo editorial:

| Modo                 | Fluxo                                                    | Melhor para                                                |
| :------------------- | :------------------------------------------------------- | :--------------------------------------------------------- |
| **Commit direto**    | Publicar → commit → compilações de CI → produção ao vivo | Solo escritores, edições de baixo risco, correções rápidas |
| **Solicitar pedido** | Publicar → PR → review → merge → CI builds               | Equipe, rascunhos com supervisão e mudanças sensíveis      |

O modo de pull request merece a atenção. Isso dá-lhe um verdadeiro portão editorial: um colega lê o Markdown proposto e Deixa um comentário na exata frase a qual eles objetam e mescla quando ela estiver correta. Esse portão é executado nas ferramentas de revisão nativas do GitHub, em vez de um sistema de aprovação adicional que bloqueia seu conteúdo a um fornecedor.

Ativar a proteção de branch e "publicar" significa "enviar para revisão". Desligar e "publicar" significa "publicar".

---

## Reverter: As Pessoas em Recurso Esqueçam Pedir

Todos os CMS devem responder rapidamente a uma pergunta: **algo errado está acontecendo, então como posso corrigi-lo?**

Com o conteúdo baseado no Git, a resposta é um reverso:

1. Abre o histórico do arquivo no GitHub (ou [LightCMS](https://lightcms.me)).
2. Escolha a última versão boa.
3. Revert.

Os commits de correção como qualquer outra edição, o seu pipeline é reconstruído e a versão ruim sumiu, geralmente dentro de um minuto em um host moderno. Restaurar um backup de banco de dados no 2am também reverte todas as _outras_ alterações feitas no meio. Com histórico de arquivos, você reverte uma publicação, não todo o site.

---

## Por que não usar apenas palavras e e-mail?

Porque essa ida e volta perde conteúdo. A versão no anexo não é a versão do site, ninguém sabe qual arquivo é canônico e eventualmente alguém publica o `final-v3-USE-THIS.md`. Um repositório compartilhado com um editor visual recolhe o laço: um arquivo, um histórico, um botão de publicação.

---

## Uma configuração prática de equipe

Para uma pequena equipe, o arranjo que tende a ficar:

- **A branch principal é sempre implantável.** Somente as combinações a alcançam.
- **Funcionalidades e rascunhos em branches.** Há trabalhos de longa forma em andamento que ficam fora do principal sem serem ocultados.
- **Pull requests para qualquer coisa editorialmente sensível**, commits diretos para correções de tipos, porque exigir revisão em uma correção de vírgula garante que as pessoas trabalharão ao redor do processo.
- **Marcadores ou marcos** se você publicar em um agendamento; um deploy falhado pode então ser rastreado por um conjunto conhecido de alterações.

Nada disso está configurado dentro de [LightCMS](https://lightcms.me). Esta é a prática padrão do GitHub, que é o ponto: o CMS herda um fluxo de trabalho que seu repositório já possui.

---

## Perguntas Frequentes

### Os autores precisam aprender o Git?

Não. Eles usam o editor e um botão de publicação. Branches, commits e pull requests existem abaixo e são entregues apenas quando você escolhe usá-los.

### Posso restaurar uma versão antiga de uma publicação?

Sim. Reverter para um commit anterior restaura o conteúdo do arquivo e o próximo build publica-o.

### Os rascunhos estão visíveis para o público?

Não. Um post com `draft: true` é excluído da compilação, então ele nunca chega ao site implantado. É visível para qualquer pessoa com acesso ao repositório, que é o ponto.

### O que acontece se duas pessoas editarem a mesma postagem?

O segundo conflito de commit e a Git bandeiras explicitamente em vez de sobrescrever silenciosamente. Para a maioria das equipes, publicar em uma branch e rever com uma pull request remove o problema antes que aconteça.

### [LightCMS](https://lightcms.me) mantém sua própria cópia do meu conteúdo?

Não. O repositório é a fonte da verdade, o mesmo [princípio do bloqueio de zero](/blog/what-is-lightcms/) que torna a abordagem que vale a pena escolher.

---

Veja [starting from a starter template](/blog/start-with-a-lightcms-template/) para configurar um repositório com este fluxo de trabalho já conectado, ou [o tutorial do editor](/blog/lightcms-editor-tour/) para visualizar o lado da escrita dele.
