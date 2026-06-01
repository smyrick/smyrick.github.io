# AGENTS.md

Instructions for AI agents working in this repository.

## Communication

- Keep responses short, dense, and technical.
- Be direct about risks, tradeoffs, and unknowns.
- Do not add broad praise or filler.

## Repo Scope

This is Shane Myrick's personal website and blog at <https://shanemyrick.com/>.
It is a Gatsby 2 static site with React 16 and Emotion 10.

Primary source areas:

- `src/pages/` - Gatsby page components.
- `src/components/` - Shared React components and global CSS.
- `src/templates/` - Gatsby templates for generated pages.
- `src/content/` - Markdown blog posts.
- `src/images/` - Source images processed by Gatsby.
- `static/` - Files copied directly to the published site.

## Worktree Rules

- Check `git status --short` before editing.
- Do not revert, overwrite, or reformat unrelated user changes.
- Keep changes scoped to the user request.
- Prefer small, reviewable edits over broad rewrites.
- For manual file edits, use patch-style edits and preserve existing conventions.

## Commands

Use Node 14 from `.nvmrc`.

```bash
nvm use 14
npm install
npm start
npm run build
npm run serve
npm run clean
```

Command meanings:

- `npm start` runs `gatsby develop`.
- `npm run build` creates the production site in `public/`.
- `npm run serve` serves the built `public/` output.
- `npm run clean` clears Gatsby build caches.

There is no dedicated test suite. Treat `npm run build` as the main regression check.

## Search and Inspection

- Prefer `rg` and `rg --files` for searching.
- Inspect the relevant component, page, config, and workflow files before editing.
- Confirm commands against `package.json`, not memory.
- Confirm deployment behavior against `.github/workflows/`.

## Site Architecture Notes

- Site metadata, social links, source plugins, image processing, Markdown processing, sitemap, PWA manifest, and offline support are configured in `gatsby-config.js`.
- Markdown blog posts are sourced from `src/content/`.
- `gatsby-node.js` creates blog pages using `src/templates/blog-post.js`.
- Browser-only CSS imports and font loading are in `gatsby-browser.js`.
- PRs run `npm install` and `npm run build`.
- Pushes to `master` build and publish `public/` to GitHub Pages with CNAME `shanemyrick.com`.

## Frontend Change Rules

- Preserve the current Gatsby/React/Emotion stack unless the user explicitly asks to modernize it.
- Do not introduce a new UI framework without approval.
- Keep responsive behavior in mind for desktop and mobile.
- Verify visual changes locally when possible with `npm start` or `npm run build` plus `npm run serve`.
- Prefer real site content and assets over placeholder copy.

## Out of Scope Unless Asked

- Gatsby, React, Node, or GitHub Actions modernization.
- Dependency upgrades.
- Large visual redesigns.
- Replacing the blog/content pipeline.
- Changing deployment targets.
