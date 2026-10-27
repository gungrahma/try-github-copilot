# Morrow

A responsive landing page for Morrow, a sample workspace for small teams. The page is built with TypeScript, Vite, and plain CSS, with no runtime dependencies.

**Live site:** [gungrahma.github.io/try-github-copilot](https://gungrahma.github.io/try-github-copilot/)

## Getting started

Requires Node.js 22 or later.

```sh
npm ci
npm run dev
```

Vite prints a local URL when the development server starts.

## Build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. The build script runs the TypeScript compiler in check-only mode before building with Vite.

## Deployment

GitHub Actions deploys the site to GitHub Pages when changes are pushed to `main`. You can also start a deployment manually from the **Actions** tab with the **Deploy to GitHub Pages** workflow.
