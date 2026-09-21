# fonecheck website

English pre-release marketing site for fonecheck, built with Astro. Static HTML, locally hosted fonts, optimised app screenshots and small vanilla TypeScript interactions. No account, newsletter, analytics or backend.

## Local use

Requires Node.js 22.12 or later; built locally with Node.js 24.

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
npm run preview
```

Production output is `dist/`. Production domain is configured as `https://fonecheck.app`. Deployment is not performed by the build command.

Astro 7 can run its local server in the background. Stop a preview started for review with `npm run preview -- stop` when finished.

## Add a guide

Add a Markdown file in `src/content/guides/`. The filename becomes `/guides/filename/`. Include this frontmatter:

```yaml
---
title: A clear guide title
description: A short description for the page and guide listing.
category: Know your hardware
published: 2026-09-10
order: 4
illustration: phone
draft: false
---
```

`illustration` accepts `phone`, `battery` or `report`. Set `draft: true` to exclude an entry from routes and listings. Use H2 headings for the automatic table of contents. The homepage shows the first three non-draft guides sorted by `order`. Dates are displayed in UTC to avoid timezone shifts.

## Content and assets

- Product descriptions and launch pricing derive from the supplied 8 September 2026 website brief and `C:\Dev\fonecheck\PROJECT.md`.
- App images are copies of selected user-provided screenshots in `src/assets/`; their source files are unchanged. They show pre-release example data, not general performance or condition claims.
- `src/data/product.ts` contains the diagnostic catalogue and FAQ. The homepage contains the pricing presentation.
- Fontsource packages supply DM Sans and JetBrains Mono locally, with their respective licence files included in the installed packages.
- The hero offers six real app views in both themes, swipe navigation, and an enlarged screenshot dialog. With JavaScript disabled, the overview and direct screenshot links remain available. Diagnostic areas and FAQ use native `details` elements. Motion respects reduced-motion preferences.

## Before publication

Confirm the content against the app version being released. In particular, update privacy information for the actual Crashlytics configuration and hosting provider, confirm Google Play pricing and billing behaviour, and refresh pre-release screenshots if needed. Keep the page in the announced fall-2026 state until the actual release. There is intentionally no Play download link or invented exact release date.

The initial guides are original launch-site copy based on the supplied product material. Review them editorially before publication.
