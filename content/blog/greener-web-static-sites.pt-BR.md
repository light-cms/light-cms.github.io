---
title: "Sites Estáticos e Emissões de Carbono: Construindo uma Web de Baixo Impacto"
description: Como sites estáticos, cache de CDN e recursos eficientes podem reduzir o uso de energia do site, com formas práticas de medir e melhorar as emissões das páginas.
date: 2026-10-14T13:30:00.000Z
draft: false
tags:
  - site de baixo carbono
  - site estático co2
  - web verde
  - design web sustentável
  - Pegada de carbono do site
slug: greener-web-static-sites
---
Os sites estáticos podem reduzir a energia necessária para servir páginas da web movendo o trabalho de cada solicitação para criar tempo e servindo arquivos armazenados em cache de uma CDN. Não são automaticamente hipocarbões, mas para sites com conteúdo pesado muitas vezes evitam computações desnecessárias no lado dos servidores.

## Por que a entrega estática pode usar menos energia

Sites dinâmicos muitas vezes executam código do aplicativo, consultam um banco de dados e montam HTML para cada requisição. Static sites generate HTML during a build and serve the resulting files repeatedly.| Factor | Dynamic request path | Static cached path |
\| :--- | :--- | :--- |
\| Per-request work | Application logic and database queries may run | File can be served from cache |
\| Always-on infrastructure | App server/database often required | Build runs on demand; hosting can be file/CDN based |
\| Caching | Possible, but often more complex | Natural fit for immutable/static assets |
\| Payload control | Depends on app and client bundle | Depends on build output and asset choices |

O impacto real depende do tráfego, taxa de acerto do cache, hospedagem de fontes, peso da página e JavaScript do lado do cliente.

## Como medir o impacto de carbono do site

Estimativas são úteis para direcionamento, e não contabilidade precisa. Use várias ferramentas e acompanhe as mudanças ao longo do tempo.

- [Website Carbon Calculator](https://www.websitecarbon.com/) estima as emissões por exibição de página.
- [Ecograder](https://ecograder.com/) fornece uma pontuação e recomendações orientadas para a sustentabilidade.
- Métricas de desempenho do navegador, como o maior Contentful Paint, o tamanho total de transferência e o custo de execução do JavaScript ajudam a identificar os drivers técnicos do peso da página.

Uma linha de base prática é medir suas principais páginas de destino, tamanho da transferência de registro e métricas chave de desempenho, e depois repetir após otimizações.

## Práticas que reduzem o impacto na página

1. Serve arquivos estáticos de uma CDN: Cache HTML, CSS, JS e imagens próximas dos usuários.
2. Reduce JavaScript: Ship only the client side code needed for the page.
3. Otimizar mídia: Comprimir imagens, usar formatos modernos quando apropriado e o tamanho dos arquivos corretamente.
4. Configura cabeçalhos de cache: Os tempos de vida da cache longa reduzem transferências repetidas.
5. Escolha hospedagem com cuidado: a fonte de energia do centro de dados afeta o pegada.
6. Mantenha o conteúdo durável: Markdown simples no Git reduz os desperdícios de reconstrução e migração ao longo do tempo.

## Trade offs to keep in mind

A arquitectura estática não é uma estratégia completa de sustentabilidade. Um site estático com imagens grandes, vídeo de reprodução, scripts de terceiros pesados ou cache ruins pode ter uma pegada maior do que um site dinâmico cuidadosamente otimizado. A pergunta útil não é "estática ou dinâmica?" mas "quanto trabalho e dados são necessários para cada visualização da página?"

Para orientação de arquitetura relacionada, veja [Sites Estáticos vs. Sites Dinâmicos](/blog/static-vs-dynamic/) e [Por que LightCMS](/blog/why-this/).