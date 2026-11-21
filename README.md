# AIM Lab Website

Academic website for **AIM Lab** (AI in Media Laboratory), built with [Hugo](https://gohugo.io/) and the custom **AIMLab** theme in `themes/aimlab`.

The site is bilingual (English and Persian) and includes research pages, publications, a people directory, and a blog.

## Requirements

- Hugo Extended **0.123.7** (the version used by Cloudflare Pages)
- Node.js and npm

## Local development

```bash
npm install
npm run dev
```

The site is served at `http://localhost:1313`.

## Build

```bash
npm run build
```

The generated site is written to `public/`. Hugo runs Tailwind through PostCSS, so `npm install` is required before building.

## Deployment

Pushing to `main` triggers an automatic build on **Cloudflare Pages** (project `mohrez68-github-io`). The site is served at `aimlab.ir`; DNS and the custom domain are managed in Cloudflare. The Pages project uses `HUGO_VERSION=0.123.7`.

## Project structure

- `content/` — all editable content (English `*.en.md`, Persian `*.fa.md`)
  - `content/blog/<slug>/` — blog posts and their images
  - `content/research/<slug>/` — research areas and their images
  - `content/publications/<slug>/` — publication pages and optional PDFs
  - `content/people/<slug>/` — lab member pages and optional photos
- `config.toml` — site configuration (maintainers only)
- `config/_default/` — per-language menus (maintainers only)
- `themes/aimlab/` — custom theme (vendored, not a submodule)
- `themes/aimlab/assets/images/logo.png` — global site logo
- `layouts/shortcodes/` — site-level shortcode overrides

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for the day-to-day editing workflow.

## Theme

The theme was originally derived from CareerCanvas (MIT) and has been substantially adapted for this lab site. See `themes/aimlab/README.md` for theme-specific documentation.

## License

MIT. See [LICENSE](LICENSE).
