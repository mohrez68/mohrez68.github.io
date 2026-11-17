# AIMLab Hugo Theme

AIMLab is a responsive Hugo theme for academic research labs. It includes an editorial home page, research and publication listings, a people directory, blog layouts, and RTL/Persian support. The visual system is deliberately light and fixed: one institutional palette, self-hosted serif and sans typefaces, and no runtime color or background randomization.

## Requirements

- Hugo Extended 0.123.0 or newer
- Node.js and npm
- Tailwind CSS and PostCSS

## Install

1. Create a Hugo site and place this theme in `themes/aimlab`.
2. Copy `themes/aimlab/example-config.toml` to the site root as `hugo.toml` (or merge its settings into your existing configuration).
3. Copy the example Tailwind and PostCSS files into your site root:

   ```sh
   cp themes/aimlab/examples/tailwind.config.js .
   cp themes/aimlab/examples/postcss.config.js .
   ```

4. Install the CSS build dependencies in the site root:

   ```sh
   npm install
   ```

5. Add your pages and static files under `content/` and `static/`, then run Hugo:

   ```sh
   hugo server
   ```

The theme uses Hugo's PostCSS integration and the `postcss.config.js` file in the site root. If Hugo reports that PostCSS is unavailable, install the dependencies above and run the server again.

## Content sections

The theme uses Hugo page bundles with language-suffixed files. Create one folder per item under the matching section:

```text
content/blog/<slug>/index.en.md
content/blog/<slug>/index.fa.md
content/blog/<slug>/cover.jpg

content/research/<slug>/index.en.md
content/research/<slug>/index.fa.md
content/research/<slug>/cover.png

content/publications/<slug>/index.en.md
content/publications/<slug>/index.fa.md

content/people/<slug>/index.en.md
content/people/<slug>/index.fa.md
content/people/<slug>/photo.jpg
```

If a language file is missing, the item is simply not built for that language.

Blog and research entries use Hugo front matter. Research entries can set `title`, `description`, `featured_image`, `area`, and `weight`.

Publication pages use front matter:

```yaml
title: "Your publication title"
authors: ["Author One", "Author Two"]
venue: "Journal or conference"
year: 2025
abstract: "A short summary."
tags: ["Topic"]
external_url: "https://example.org/publication"
weight: 1
```

Use `external_url` (not `url`, which Hugo reserves for page URLs). The publication list links each title to its own page and shows the external link separately.

People pages use front matter such as `title`, `role`, `category`, `bio`, `email`, `scholar`, `github`, `linkedin`, `website`, and `weight`. The home page and `/people/` both read from the `people` section.

## Configuration

See `example-config.toml` for site settings, language configuration, and social links. Visual tokens (palette, type, spacing) live in `assets/css/main.css` and `tailwind.config.js`; the theme no longer loads random palettes or remote background images.

## License

MIT. See [LICENSE](LICENSE).
