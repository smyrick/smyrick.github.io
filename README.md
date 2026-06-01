# smyrick.github.io

Personal website and blog for Shane Myrick.

Live site: <https://shanemyrick.com/>

This site provides profile information, social/contact links, and long-form blog content. It is built with [Gatsby](https://www.gatsbyjs.com/) and originally started from [gatsby-starter-julia](https://www.gatsbyjs.com/starters/niklasmtj/gatsby-starter-julia).

## Tech Stack

- Gatsby 2
- React 16
- Emotion 10
- Markdown blog posts through `gatsby-transformer-remark`
- Gatsby image processing through Sharp plugins
- Font Awesome social icons
- Node 14 from `.nvmrc`
- npm with `package-lock.json`

## Repository Guide

- `AGENTS.md` - Instructions for AI agents working in this repo.
- `ARCHITECTURE.md` - Architecture overview, diagrams, content pipeline, and deployment flow.
- `CONTRIBUTING.md` - Existing local setup and contribution notes.
- `src/pages/` - Gatsby page components.
- `src/components/` - Shared React components and global CSS.
- `src/templates/` - Gatsby templates for generated pages.
- `src/content/` - Markdown blog posts.
- `src/images/` - Images processed by Gatsby.
- `static/` - Static files copied directly into the built site.

## Local Setup

Use the Node version from `.nvmrc`.

```bash
nvm use 14
npm install
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

Clean Gatsby caches and generated output:

```bash
npm run clean
```

## Content Editing

Blog posts live in `src/content/` as Markdown files with frontmatter. Gatsby loads these files and creates public blog pages through `gatsby-node.js` and `src/templates/blog-post.js`.

Common frontmatter fields:

- `path` - Public URL for the post.
- `title` - Display title.
- `date` - Publish date used for sorting and display.
- `draft` - Draft posts are excluded from generated pages.
- `featuredImage` - Image used by the blog post template.

Site-wide title, subtitle, description, social links, site URL, and default social image are configured in `gatsby-config.js` under `siteMetadata`.

## Build and Deployment

Pull requests run a GitHub Actions build check with:

```bash
npm install
npm run build
```

Pushes to `master` run the publish workflow, build the site, and deploy the generated `public/` directory to GitHub Pages with the CNAME `shanemyrick.com`.

## Known Maintenance Notes

- The project uses an older Gatsby/React stack: Gatsby 2, React 16, and Node 14.
- There is no dedicated test suite; `npm run build` is the main regression check.
- The live site updates only after GitHub Actions rebuilds and publishes from `master`.
- Dependency and tooling modernization should be planned separately from content or design updates.
