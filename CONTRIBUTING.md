# Contributing

This is a personal website/blog using Astro, Tailwind CSS, Markdown, and GitHub Pages.

## Environment Setup

Install the version of Node defined in `.nvmrc`.

```bash
nvm use 24
npm install -g npm@11.16.0
npm ci
```

## Running Locally

Start the local server:

```bash
npm start
```

## Build

To create the production build:

```bash
npm run build
```

The compiled site will be available in `dist/`.

Preview the compiled site locally:

```bash
npm run serve
```

## Deployment

The site is published to GitHub Pages on every push to `master`. See `.github/workflows/` for the exact build and deploy steps.
