---
title: "Eleventy vs Astro: Minimalista JavaScript vs Ilhas de Interatividade"
description: Eleventy e Astro comparados em filosofia de saída, template, coleções de conteúdo, ecossistemas de plugins e que o gerador zero se encaixa ao seu projeto.
serial: 27
date: 2026-10-14T15:20:00Z
draft: false
keywords:
  - elevatório vs astro
  - astro x elevação
  - 11ty vs Astro
  - site estático em javascript zero
  - melhor ssg mínimo
preview: /og-image.webp
taxonomies:
  tags:
    - elevatoformat@@0
    - Astro
    - ssg
    - estático-sítios
---

Eleventy e Astro concordam com o princípio mais importante no desenvolvimento web moderno (**navio menos JavaScript**) e discordam em quão longe ele pode levar. Eleventy produz arquivos estáticos puro gerados por modelos JavaScript, sem tempo de execução do cliente, nunca. O Astro também entrega zero JavaScript por padrão, mas mantém componentes React/Svelte/Vue que são importados fora. Escolher entre eles é escolher entre purismo e alcance.

---

## Filosofia

- **Eleventy (11ty)** é um corredor de modelo: leva seus modelos e Markdown e produz HTML estático. Não existe nenhum quadro do lado do cliente que o exclua, porque nunca houve nenhum. Linguagens template são sua escolha: Nunjucks, Liquid, Markdown, HTML e muito mais.
- **Astro** é um componente framework: páginas são componentes `.astro`, conteúdo vem de coleções tipadas, e interatividade chega como ilhas hidratadas usando estruturas de UI reais.

## Modelo e Conteúdo

A flexibilidade do Elevador é sua assinatura: misture modelos de idiomas por projeto, estrutura de dados com arquivos de dados globais e mantenha a configuração mínima. As coleções de conteúdo de Astro's somam o que Eleventy deixa a convenção: **questão frontal validada pelo esquema** que não consegue construir sobre dados malformados.

Ambos consomem Markdown com YAML front matter de seu repositório, o que faz tanto cidadãos de primeira classe para [Git based CMS publishing](/blog/git-cms-vs-traditional-cms/).

## Quando você precisa de interatividade

Este é o garfo da estrada:

- No elevador, widgets interativos significam a alavanca do JavaScript vanilla ou incorporando outra ferramenta: um processo manual deliberado.
- No Astro, derrubar `<Button client:visible />` em uma página é tudo o que precisa; o framework lida com os limites de hidratação para você.

Se um site ou publicação de documentação pode aumentar um widget de pesquisa, uma alternância de tema com estado, ou um exemplo interactivo, as ilhas de Astro's são o caminho mais suave. (Para a documentação específica, os pacotes Starlight vão mais longe; veja [Hugo vs Astro Starlight](/blog/hugo-vs-astro-starlight/).)

## Ajuste Ecossistema

Eleventy é popular no indie-web e no pequeno mundo de publicação: mínimo, estável e compostável. Astro tem o impulso, com mais novos modelos, um ecossistema de componente mais profundo e o caminho mais claro para as equipes de conteúdo. O contexto mais amplo está nos [melhores geradores de site estáticos](/blog/best-static-site-generators/).

---

## Qual você deveria escolher?

- **Elevado** se você quiser a menor ferramenta possível entre seu Markdown e seu HTML, deixe de escolher sua própria linguagem de modelos e confie que o site ficará mais estático.
- **Astro** se você quer coleções de conteúdo digitadas, autoria conduzida por componentes e escotilhas de escape interativas construídas dentro do padrão, para a maioria dos novos projetos em 2026.

Ambos são disponibilizados gratuitamente para o [Cloudflare Pages ou GitHub Pages](/blog/cloudflare-pages-vs-github-pages/), e ambos emitem o baixo carbon, saída estática em cached descrita em [Sites estáticos e CO2](/blog/greener-web-static-sites/).

---

## Perguntas Frequentes

### É Elevado mais rápido do que Astro?

Comparações em tempo real favorecem Eleventy em locais pequenos; ambos produzem produção de qualidade idêntica para os visitantes: HTML estático sem tempo de execução do cliente.

### Será que o Eleventy suporta os componentes?

Não como um conceito-quadro; é baseado em modelos. Componentes interativos requerem o JS vanilla ou incorporados, enquanto Astro trata-os como de primeira classe.

### O que é melhor para blogs?

Ambos são excelentes. Eleventy para o purista minimalista; Astro para escritores que podem querer elementos interativos ou componentes da UI compartilhados mais tarde.

### Um Git baseado em CMS pode publicar para ambos?

Sim, ambos leiam Markdown com questão frontal diretamente do seu repositório, então qualquer CMS baseado em Git também funciona de forma idêntica.
