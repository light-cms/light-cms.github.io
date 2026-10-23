# Zola Blog (boilerplate)

Basic displayable [Zola](https://www.getzola.org/) starter with a built-in minimal theme (no external theme): home, about, blog section, 2 sample posts.

The `austere-theme-zola/` directory is an untouched upstream clone kept for reference only; the site uses the built-in templates in `templates/`.

## Images

**Raster images must be WebP.** Vector graphics are inline SVG (hero art, icons, favicon); anything photographic or exported as a bitmap goes in `static/` as `.webp`:

```sh
magick input.png -resize 1200x -strip -quality 82 output.webp
```

One exception: `og-image.png` stays PNG on purpose — Facebook, LinkedIn, and X card scrapers do not reliably accept WebP for `og:image`, so the social card is the only PNG that ships. It is referenced only from front matter `preview:`, never rendered on the page.
