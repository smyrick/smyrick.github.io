# smyrick.github.io

Personal website and blog for Shane Myrick.

Live site: <https://shanemyrick.com/>

## Tech Stack

- Astro
- Tailwind CSS
- Markdown content collections
- Node 24 from `.nvmrc`
- npm 11.16.0 with `package-lock.json`
- GitHub Pages deployment

## Repository Guide

- `AGENTS.md` - Instructions for AI agents working in this repo.
- `ARCHITECTURE.md` - Architecture overview, content pipeline, and deployment flow.
- `src/pages/` - Astro file-based routes.
- `src/components/` - Shared Astro components.
- `src/layouts/` - Page layouts.
- `src/content/blog/` - Markdown blog posts.
- `src/lib/` - Small content helpers.
- `public/` - Static files copied directly into the built site.

## Local Setup

Use the Node version from `.nvmrc`.

```bash
nvm use 24
npm install -g npm@11.16.0
npm ci
```

Start the local development server:

```bash
npm start
```

Build the production site:

```bash
npm run build
```

Serve the production build locally:

```bash
npm run serve
```

## Content Editing

Blog posts live in `src/content/blog/` as Markdown files with frontmatter validated by `src/content.config.ts`.

Common frontmatter fields:

- `path` - Public URL for the post.
- `title` - Display title.
- `description` - Optional SEO/listing description.
- `date` - Publish date used for sorting and display.
- `draft` - Draft posts are excluded from pages.
- `featuredImage` - Optional public image path.

Site-wide identity, social links, and default metadata are in `src/site.ts`.

## Build and Deployment

Pull requests run:

```bash
npm ci
npm run build
```

Pushes to `master` build the Astro site and deploy `dist/` to GitHub Pages. `public/CNAME` preserves the `shanemyrick.com` custom domain.

## Maintenance Notes

- There is no dedicated test suite; `npm run build` is the main regression check.
- The site intentionally has no client framework runtime.
- The live site updates only after GitHub Actions rebuilds and publishes from `master`.
