---
title: "Por que o CMS claro existe"
description: "Por que o LightCMS usa o Markdown baseado no Git e um editor visual para tornar a publicação estática do site sem desistir do controle de versão."
serial: 2
date: 2026-09-18T00:41:00Z
draft: false
tags:
  - SMS
  - filosofia
  - luzes
---

Estamos construindo [LightCMS](https://lightcms.me) porque a publicação em um site estático não deve exigir que todos os escritores sigam um fluxo de trabalho de desenvolvedor. Você pode gravar em um editor de navegador, enquanto seu conteúdo permanece no Git como arquivos Markdown.

## O problema com a publicação de fluxos de trabalho estáticos

Geradores estáticos de site tornam direto para construir e implantar um site. Escrever por alguém ainda pode significar clonar um repositório, editar marcação, gerenciar a conta inicial, comprometer e esperar por CI/CD.

Este é um território familiar para os desenvolvedores. Para escritores e editores, ele pode entrar na via da publicação.

## Por que o conteúdo baseado no Git ainda importa

Manter o conteúdo no Git oferece algumas coisas práticas:

- Um histórico de alterações que você pode revisar, comparar ou reverter.
- Arquivos Markdown que você pode mover entre geradores, hosts e editores.
- Um caminho direto para a compilação e implantação do Git com base nos fluxos de trabalho de muitos sites estáticos já utilizados.
- Uma cópia do seu conteúdo no repositório, em vez de um banco de dados CMS proprietário.

## O LightCMS oferece

O LightCMS é construído em torno da publicação do Git, e não de recursos de aplicativos em tempo real. Isso funciona bem para blogs, documentações e sites de marketing. Se você precisar de personalização, relações complexas entre conteúdo ou consultas de banco de dados em tempo de execução, outro tipo de CMS pode lhe permitir melhor.

Você escreve em um editor visual, enquanto arquivos Markdown e histórico Git continuam sendo a fonte da verdade. Para saber mais sobre o produto, veja [O que é LightCMS?](/blog/what-is-lightcms/).
