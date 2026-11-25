---
title: "Drafts, Revisions, and Rollbacks in a Git Based CMS"
description: "How Git based content workflows handle drafts, commit history, pull request review, and rollbacks for static site publishing."
serial: 34
date: 2026-10-16T09:40:00Z
draft: false
tags:
  - luzes
  - git
  - workflow
  - colaboração
---

A Git based CMS can handle drafts, revisions, and rollbacks by storing content as files in a repository and using Git history as the audit trail. O valor prático é simples: você pode salvar o trabalho sem publicá-lo, inspecionar o que mudou e reverter uma edição ruim sem restaurar um banco de dados inteiro.

## Rascunhos como estado do arquivo

Em muitos fluxos de trabalho estáticos do site, um rascunho é representado pela matéria frontal, como `draft: true`. O arquivo pode existir no repositório, enquanto o gerador de site estático o ignora durante as compilações de produção.

```yaml
---
title: "Publicação de rascunho"
data: 2026-10-16T09:40:00Z
draft: true
---
```

Esta abordagem mantém o projecto de estado próximo do conteúdo. A troca é a visibilidade: qualquer pessoa com acesso ao repositório pode ver o arquivo de rascunho, mesmo que o site público não o renderize.

## Revisões através de commits

Cada alteração salva ou publicada pode criar um commit Git. Isso lhe dá um histórico legível para arquivos Markdown, incluindo diffs, metadados do autor e carimbos de tempo.

| Necessário                | Git based workflow                                 | Operação                                                             |
| :------------------------ | :------------------------------------------------- | :------------------------------------------------------------------- |
| Ver alterações            | `git diff` ou diff de pull request                 | Requer mensagens de commit claras para ser útil                      |
| Histórico de auditoria    | Commit log e culpa                                 | Controles do modelo de acesso do repositório que podem inspecioná-lo |
| Recuperar conteúdo        | Reverter o commit ou restaurar a versão do arquivo | Reverter pode exigir resolução de conflitos                          |
| Revisar antes de publicar | Branch e pull request                              | Adiciona sobreposição de processo para pequenas edições              |

Para as equipes, os pull requests fornecem um portão de revisão editorial. Para escritores solares, commits diretos para um branch principal podem ser mais rápidos, mas eles removem o passo de revisão.

## Reverter como uma operação Git normal

Quando uma publicação tem um erro, o Git permite reverter o commit que o introduziu ou restaurar uma versão anterior do arquivo. Depois que a correção for realizada, seu pipeline CI/CD reconstrui e implementa o site.

Uma reversão de nível de arquivo é mais estreita que uma restauração de banco de dados. Pode desfazer um post enquanto deixa outras mudanças recentes intactas.

## Escolhendo um workflow

Use commits diretos quando a velocidade for importante e o risco de erro for baixo. Use branches e pull requests quando o conteúdo precisa ser revisado, aprovação legal ou tempo de lançamento coordenado. O melhor fluxo de trabalho é o mais leve que ainda dá a sua equipe os controles de revisão e recuperação de que precisa.

For related reading, see [The LightCMS Editor Tour](/blog/lightcms-editor-tour/) and [What Is a Git based CMS?](/blog/Git based-cms-explained/).
