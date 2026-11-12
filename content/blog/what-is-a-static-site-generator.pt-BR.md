---
title: "O que é um Gerador do Site Estático?"
description: "Um gerador de site estático compila páginas antes do tempo de templates e arquivos de conteúdo."
serial: 46
date: 2026-10-16T11:20:00Z
draft: false
keywords:
  - o que é um gerador de site estático
  - gerador de site estático
  - Explicação ssg
  - como funcionam os sites estáticos
  - HTML pré-renderizado
preview: /og-image.webp
taxonomies:
  tags:
    - estático-sítios
    - ssg
    - explicadores
    - Web
---

Um **gerador estático do site (SSG)** é um programa que recebe conteúdo e modelos e produz um site completo como HTML simples, CSS, e arquivos JavaScript, antes de qualquer pessoa visitar.

Em vez de montar uma página por pedido, o trabalho acontece uma vez, no horário de compilação. O que navios para o leitor é o artefato acabado.

---

## O Modelo em um Diagrama

```text
Conteúdo (Markdown + questão frontal) ((
Templates (HTML / JSX / Go templates)─> SSG build ─> public/ ─> CDN ─> Browser
Configuração, dados, estilos +
```

Executa a compilação e um diretório `public/` aparece contendo todas as páginas do site. Implantar esse diretório em qualquer lugar que possa servir arquivos e o site está ao vivo.

---

## O que a Build realmente faz

1. **Lê conteúdo.** Arquivos Markdown com [questão frontal](/blog/what-is-front-matter/): títulos, datas, tags, rascunho de bandeiras.
2. **Aplica templates.** Cada tipo de conteúdo mapeia para um layout: página de postagem, listagem, índice de tags, página inicial.
3. **Gera cada página.** páginas de artigos, listas paginadas, arquivos de tags, feeds RSS e sites pré-renderizados.
4. **Copia ativos.** Imagens, fontes, estilos, scripts.
5. **Emite `public/`.** Uma pasta de arquivos sem tempo de execução anexado.

Alguns geradores fazem isso em milissegundos; alguns em segundos. Nada disso acontece enquanto um leitor está esperando.

---

## Por que a diferença é importante

Um site dinâmico (WordPress, Rails, a maioria dos frameworks renderizados pelo servidor) funciona em cada solicitação: executar código, consultar um banco de dados, montar HTML, responder. Um site estático já fez isso funcionar.

As consequências são estruturais:

- **Velocidade.** A borda CDN mais próxima já tem a página. Não há consulta, não há renderização, não há início frio.
- **Segurança.** Nenhum código no lado do servidor é executado por solicitação, nenhum banco de dados ouvindo em uma porta, nenhum login de administrador para brute-force. A superfície de ataque é uma pasta de arquivos.
- **Responsabilidade.** Nada para quebrar às 3 da manhã. O modo de falha mais comum é um deploy ruim, que foi desfeito reimplantando o anterior.
- **Custo.** Largura de banda é barata; computação sempre ativa não é. Sites estáticos custam um erro de arredondamento em quase qualquer nível de tráfego.
- **Longe.** Os arquivos permanecem legíveis. A ferramenta de ferramentas de compilação pode envelhecer, mas a saída não apodrece.

Há também um argumento ambiental que vale a pena levar a sério: servir arquivos em cache próximos do leitor utiliza uma fracção da energia de execução do código por view. [Sites estáticos e CO2](/blog/greener-web-static-sites/) vai para os números.

---

## O que os SSIG são bons At, e onde eles lutam

**Excelente para:** blogs, documentação, páginas inicial, portfólios e qualquer site onde alterações de conteúdo ocasionalmente e leitura acontecem constantemente.

**Prêmio:** conteúdo que deve ser atualizado sobre a alteração de dados. (pode ser feito com hidratação parcial)

A interatividade não está fora dos limites. O padrão moderno pré-renderiza tudo e anexa as ilhas pequenas de JavaScript onde necessário (formas, pesquisa, modo escuro alterna), a ideia atrás de [Astro](/blog/astro-vs-hugo-which-static-site-generator-should-you-use-in-2026/) e ferramentas similares.

---

## As Opções em Breve

| Gerador                 | Idioma / modelo         | Força da assinatura                                        |
| :---------------------- | :---------------------- | :--------------------------------------------------------- |
| **Hugo**                | Ir modelos              | Velocidade de construção bruta, grande ecossistema de tema |
| **Astro**               | Componentes `.astro`    | Arquitetura em ilhas, coleções de conteúdo                 |
| **Elevação**            | Nunjucks, Liquid e mais | Minimalismo Zero-JS, controle total                        |
| **Jekyll**              | Líquido                 | GitHub Pages heritage, simplicity                          |
| **Zola**                | Tera                    | binário único, baterias incluídas                          |
| **SvelteKit / Next.js** | React/Svelte            | Sites que crescem em aplicativos                           |

A pesquisa completa está em [melhores geradores de site estáticos](/blog/best-static-site-generators/). Todos eles consomem o mesmo input: Markdown com front matter.

---

## Onde o CMS cabe

Um SSG resolve _renderização_; não diz nada sobre _autor_. Deixado sozinho, publicação significa edição de arquivos em um editor de código e envio de commits: praticável para desenvolvedores, uma barreira para todos os outros.

Um Git backCMS preenche que lacuna: escreve Markdown e front matter no repositório através de um editor visual, e o SSG faz o que sempre fez. O gerador nunca muda; a experiência do escritor muda. Essa é toda a premissa atrás de [LightCMS](/blog/what-is-lightcms/), e o jeito mais rápido de vê-lo é [copiar um modelo inicial](/blog/start-with-a-lightcms-template/) com a compilação já configurada.

---

## Perguntas Frequentes

### Um SSG é o mesmo que um framework?

Não. Um framework lida com solicitações em tempo de execução; um gerador é executado no tempo de compilação e produz arquivos. Algumas ferramentas desfocam a linha: SvelteKit e Next.js podem fazer as duas.

### Os sites estáticos suportam comentários, formulários ou pesquisar?

Sim, através de serviços de terceiros ou de JavaScript do lado do cliente: endpoints, provedores de comentários e índices de pesquisa do lado do navegador são comuns.

### Com que frequência eu preciso reconstruir?

Somente quando conteúdo ou código muda. Um típico blog baseia-se em cada publicação, um processo medido em segundos.

### Um site estático é bom para SEO?

Very. Carregamento rápido, fortes Web Vitais, HTML rastejante e sem problemas de renderização duplicada.

### Um site estático consegue lidar com alto tráfego?

Sim. Tráfego é servido do cache, portanto espinhos são baratos. Um sítio dinâmico funciona do outro modo, onde picos custam dinheiro.

---

Relacionado: [static vs dinâmicos sites](/blog/static-vs-dynamic/), [quanto é a Jamstack?](/blog/what-is-jamstack/), e [onde hospedar um site estático](/misc/top-static-site-hosting/).
