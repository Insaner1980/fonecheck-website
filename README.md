# fonecheck website

English pre-release marketing site for fonecheck, built with Astro. Static HTML, locally hosted fonts, optimised app screenshots and small vanilla TypeScript interactions. No account, newsletter, analytics or backend.

## Local use

Requires Node.js 22.23.4+, 24.22.1+, or 26.12.1+ within the release lines allowed by `package.json`; built locally with Node.js 24.22.1.

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
node --test scripts/security-csp.test.mjs
npm run preview
```

Production output is `dist/`. Production domain is configured as `https://fonecheck.app`. Deployment is not performed by the build command.

## Cloudflare Pages

The Wrangler Direct Upload project is `fonecheck-website` (production branch `main`). It has no deployment yet. When the SEO launch checks are complete and publication is authorized, build and deploy with `npm run build` and `npx wrangler pages deploy dist --project-name fonecheck-website --branch main`.

Pages serves the generated `404.html` for missing routes. Astro copies `public/_headers` into `dist/`; it sets long-lived caching for hashed `/_astro/` assets, common response headers, and `noindex` on Pages preview domains. Verify those response headers on the production and preview domains after the first deployment.

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

## Model code lookup

`/model-lookup/` finds the phone behind an Android model code (for example SM-S911B), or a phone by name, and shows its chip, memory, storage, display, battery and release date. `/model-lookup/<maker>/` lists each maker's devices with their codes as static, indexable pages. The makers are defined in `directory` in `src/data/model-lookup.ts`.

- Data: `src/data/devices.json` is a committed snapshot of the LineageOS Wiki device data (`github.com/LineageOS/lineage_wiki`, `_data/devices/*.yml`), licensed under CC BY-SA 3.0. The pages credit the wiki and the licence; the shortened data is shown under the same licence. The build reads only this snapshot.
- Coverage: about 760 devices, 640 of them phones, mostly popular models from Samsung, Xiaomi, Motorola, Google, OnePlus, LG and Sony. Many devices list their model codes; Pixel devices are found by name or codename. The page says so and never treats a missing code as a problem with the phone.
- Update: `npm run devices:update`, then rebuild. `scripts/update-devices.mjs` uses the GitHub API once for the commit and file list, downloads each device file, and keeps the old snapshot if too few files are read or the count drops sharply.
- The browser downloads `/model-lookup/devices.json` (generated at build by `src/pages/model-lookup/devices.json.ts`). Matching rules live in `src/data/model-lookup.ts` and are shared by the build and the search script.
- Google Play's supported devices list and the Play Console device catalog are deliberately not used: neither states permission to republish it.

## Content and assets

- Product descriptions and launch pricing derive from the supplied 8 September 2026 website brief and `C:\Dev\fonecheck\PROJECT.md`.
- App images are copies of selected user-provided screenshots in `src/assets/`; their source files are unchanged. They show pre-release example data, not general performance or condition claims.
- `src/data/product.ts` contains the diagnostic catalogue and FAQ. The homepage contains the pricing presentation.
- Astro's Fonts API bundles DM Sans and JetBrains Mono into the static build with a metric-adjusted fallback for DM Sans. The font licence files are in `public/licenses/`.
- The hero offers six real app views in both themes, swipe navigation, and an enlarged screenshot dialog. With JavaScript disabled, the overview and direct screenshot links remain available. Diagnostic areas and FAQ use native `details` elements. Motion respects reduced-motion preferences.

## Before publication

Confirm the content against the app version being released. In particular, update privacy information for the actual Crashlytics configuration and hosting provider, confirm Google Play pricing and billing behaviour, and refresh pre-release screenshots if needed. Keep the page in the announced fall-2026 state until the actual release. There is intentionally no Play download link or invented exact release date.

The initial guides are original launch-site copy based on the supplied product material. Review them editorially before publication.
