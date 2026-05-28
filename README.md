# spencermoxley-web

Personal website for **Spencer Moxley** — a static [Astro](https://astro.build) site with a
self-hosted blog, deployed to Netlify.

Based on the open-source [astro-portfolio-theme](https://github.com/MarcusHoltz/astro-portfolio-theme)
(Astro 6 + Tailwind 4 + TypeScript), extended with a real content-collection blog.

## Develop

```bash
# node/npm come from nvm here:
export NVM_DIR="$HOME/.nvm"; [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

npm install
npm run dev        # http://localhost:4321  (blog at /blog)
npm run build      # static output -> dist/
npm run preview    # preview the built site
```

The `predev`/`prebuild` step (`scripts/download-assets.mjs`) downloads fonts and icons at
build time; it needs network access and writes to `public/fonts/` (gitignored).

## Editing content

All site content is data-driven — edit the JSON in `src/data/`:

| File | Controls |
| --- | --- |
| `personal.json` | Name, bio, contact, social handles |
| `site.json` | Site title/SEO, footer, **`web3formsKey`**, nav externals, "what I run" cards |
| `menu.json` | Main navigation (includes the internal **Blog** link) |
| `expertise.json`, `skills.json`, `projects.json`, `portfolio.json`, `certifications.json` | Homepage sections |

**Contact form:** set `web3formsKey` in `src/data/site.json` (free key at
<https://web3forms.com>). The form is inert until that key is provided.

## Blog

The blog is a real Astro content collection — **not** an external RSS link.

- Posts: `src/content/blog/*.md` or `*.mdx` with frontmatter
  (`title`, `date`, `description`, `tags`, `draft`).
- Schema: `src/content.config.ts`.
- Pages: `src/pages/blog/index.astro` (newest-first list) and
  `src/pages/blog/[...slug].astro` (individual post).
- Set `draft: true` to keep a post visible in `npm run dev` but excluded from production builds.

To add a post, drop a new Markdown file in `src/content/blog/`. The filename becomes the URL
slug (e.g. `my-post.md` → `/blog/my-post`).

## Deploy (Netlify)

Configured in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- `BASE_PATH = "/"` (served from the domain root)

Secrets are never committed. If you later want project images auto-fetched from GitHub READMEs,
set `GITHUB_USER` and a `GITHUB_TOKEN` **as Netlify environment variables** (not in the repo).
