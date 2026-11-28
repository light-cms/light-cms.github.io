---
title: Sites estáticos e a construção de redes amigas do ambiente menos poluentes
description: >-
  Como os sítios estáticos e a gestão eficiente de activos podem reduzir o consumo de energia e as emissões de carbono.
date: '2026-10-14T13:30:00.000Z'
draft: false
tags:
  - co2
  - carbono
  - oxidação
  - energia
  - Site
  - carbono
  - implantação
  - compartilhando
slug: greener-web-static-sites
---
Os sites estáticos podem reduzir a energia necessária para servir páginas da web movendo o trabalho de cada solicitação para criar tempo e servindo arquivos armazenados em cache de uma CDN. Não são automaticamente hipocarbões, mas para sites com conteúdo pesado muitas vezes evitam computações desnecessárias no lado dos servidores.

## Por que a entrega estática pode usar menos energia

Sites dinâmicos normalmente executam o código do aplicativo, consulta um banco de dados, e gera HTML para cada requisição.

Sites estáticos geram HTML durante uma compilação e servem os arquivos resultantes repetidamente.

| **Fator**                   | **Caminho dinâmico da solicitação**                                           | **Caminho estático em cache**                                                  |
| :-------------------------- | :---------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| Requerir trabalho           | Lógica de aplicação e consultas à base de dados podem ser executadas          | Um arquivo pode ser servido no cache                                           |
| Infraestrutura sempre ativa | Um servidor de aplicativos e um banco de dados são frequentemente necessários | Builds executadas sob demanda; hospedagem pode ser baseada em arquivos ou CDNs |
| Cache                       | Possível, mas frequentemente mais complexo                                    | Um ajuste natural para ativos imutáveis ou estáticos                           |
| Controle de carga           | Depende do pacote de aplicativo e cliente                                     | Depende da compilação de saída e escolhas de ativos                            |

O impacto real depende do tráfego, taxa de acerto do cache, hospedagem de fontes, peso da página e JavaScript do lado do cliente.

## Como medir o impacto de carbono do site

Estimativas são úteis para direcionamento, e não contabilidade precisa. Use várias ferramentas e acompanhe as mudanças ao longo do tempo.

- [Website Carbon Calculator](https://www.websitecarbon.com/) Estima as emissões por exibição de página.
- [Ecograder](https://ecograder.com/) Fornece pontuação e recomendações orientadas para a sustentabilidade.
- Métricas de desempenho do navegador, como o maior Contentful Paint, o tamanho total de transferência e o custo de execução do JavaScript ajudam a identificar os drivers técnicos do peso da página.

Uma linha de base prática é medir suas principais páginas de destino, tamanho da transferência de registro e métricas chave de desempenho, e depois repetir após otimizações.

## Práticas que reduzem o impacto na página

1. Serve arquivos estáticos de uma CDN: Cache HTML, CSS, JS e imagens próximas dos usuários.
2. Reduzir JavaScript: Ship somente o código lateral do cliente necessário para a página.
3. Otimizar mídia: Comprimir imagens, usar formatos modernos quando apropriado e o tamanho dos arquivos corretamente.
4. Configura cabeçalhos de cache: Os tempos de vida da cache longa reduzem transferências repetidas.
5. Escolha hospedagem com cuidado: a fonte de energia do centro de dados afeta o pegada.
6. Mantenha o conteúdo durável: Markdown simples no Git reduz os desperdícios de reconstrução e migração ao longo do tempo.

## Troque descontos para ter em mente

A arquitectura estática não é uma estratégia completa de sustentabilidade. Um site estático com imagens grandes, vídeo de reprodução, scripts de terceiros pesados ou cache ruins pode ter uma pegada maior do que um site dinâmico cuidadosamente otimizado. A pergunta útil não é "estática ou dinâmica?" mas "quanto trabalho e dados são necessários para cada visualização da página?"

Para orientação de arquitetura relacionada, veja [Sites Estáticos vs. Sites Dinâmicos](/blog/static-vs-dynamic/) e [Por que LightCMS](/blog/why-this/).
