# Research

Pre-draft notes and AI-assisted research for potential blog posts.

This folder is **not part of the published site**. Astro only builds `src/` and `public/`, so nothing here appears on shanemyrick.com or in `dist/`. Files here are also **not** validated by `src/content.config.ts`.

## Layout

Group material by the intended post slug:

```
research/<post-slug>/
  notes.md      # main scratchpad / outline
  sources.md    # links, citations, quotes (optional)
```

Use lowercase kebab-case for `<post-slug>` so it matches the eventual blog path (`/blog/<post-slug>`).

## Promotion path

When a post is ready to draft:

1. Create `src/content/blog/<post-slug>.md` with valid frontmatter (`title`, `date`, `path: /blog/<post-slug>`, `draft: true`).
2. Pull content from `research/<post-slug>/` into the blog post.
3. Set `draft: false` when ready to publish.

Research folders can stay in the repo as reference or be removed after promotion.
