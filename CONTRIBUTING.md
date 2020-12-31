# Contributing

This is a personal website / blog using [Gatsby](https://www.gatsbyjs.org/), [Markdown](https://www.markdownguide.org/), [Styled Components](https://styled-components.com/), & [React Font Awesome](https://github.com/FortAwesome/react-fontawesome/).

## Environment Setup

Install the version of Node defined in `.nvmrc`. You can use [nvm](https://github.com/nvm-sh/nvm) quickly change your Node versions.

## Running Locally

Install the local dependencies
```bash
npm install
```

Start the local server
```bash
npm start
```

## Build
To see the production build run:

```bash
npm run build
```

The compiled site will be available at `/public`.

If you want to see the compiled site locally run:

```bash
npm run serve
```

## Deployment

The content is published to GitHub pages on every merge with GitHub Actions. See the [workflow files](./.github/workflows) for more details.
