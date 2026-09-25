# fonecheck.app: code optimization plan

Date: 24 September 2026
Scope: the Astro site in `C:\Dev\fonecheck-website` (Astro 7.3.2, static output, deployed on Cloudflare)
Status: plan only, nothing in this document has been implemented yet

## 1. Summary

The site is already in good technical shape. A production build was measured with Lighthouse 13.5 (lab data, local server) on four representative pages:

| Page | Mobile perf | Desktop perf | Accessibility | Best practices | SEO |
|---|---|---|---|---|---|
| `/` | 98 | 100 | 94 | 100 | 100 |
| `/guides/` | 100 | 100 | 98 | 100 | 100 |
| `/guides/android-camera-not-working/` | 100 | **87** | 94 | 100 | 100 |
| `/privacy/` | 100 | 100 | 98 | 100 | 100 |

Total blocking time is 0 ms everywhere, and the JavaScript and CSS payloads are small (largest script 5.9 KB gzipped, CSS 7 KB gzipped in total).

So this is **not** a rewrite. There is one real performance bug (a layout shift on guide pages), a few accessibility fixes, missing Cloudflare deployment config, and some cleanup. Everything below is based on a measured finding. Items that were checked and need no change are listed in section 6, so they are not "fixed" by accident.

## 2. Must fix before launch

### 2.1 Layout shift on guide pages at desktop width (CLS 0.24)

**Finding:** At 1350 px width, guide pages shift by CLS 0.24 about 80 ms after load (Google's "good" limit is 0.1). The H1 reflows when DM Sans replaces the fallback font, and the whole article below it moves up by 61 px. The homepage and mobile widths are not affected (0.000 to 0.003).

**Cause:** the fonts are loaded through Fontsource CSS imports with `font-display: swap`, with no preload and no metric-matched fallback font. A long guide title wraps onto one more line in the fallback font than in DM Sans.

**Fix:** move font loading to Astro's built-in Fonts API (available in the installed Astro 7.3.2 through `fontProviders`). It generates preload links and a size-adjusted fallback font automatically. Use the Fontsource provider for DM Sans (variable, latin and latin-ext) and JetBrains Mono 400 (latin), so the font files stay self-hosted. Then remove the manual `@fontsource` imports from `InstrumentLayout.astro`.

If the Fonts API causes problems, the fallback option is to preload the latin DM Sans woff2 manually and define a local fallback `@font-face` with `size-adjust`, `ascent-override` and `descent-override`.

**Done when:** CLS is under 0.05 on `/guides/android-camera-not-working/` at 1350 x 940 and at 412 x 823, and the fonts still look identical.

### 2.2 No `<main>` landmark on any page

**Finding:** Lighthouse reports "Document does not have a main landmark" on every page. Screen reader users use it to skip straight to the content.

**Fix:** wrap the page content in `<main>` in `index.astro` and in `PageShell.astro`. The site header and `SiteFooter` stay outside it. Check that the existing skip link targets (`#hero-title`, `#page-title`) are still inside `<main>`.

### 2.3 Table of contents links fail contrast on guide pages

**Finding:** When the "In this guide" list is tracking scroll position, the links that are not current are `#87867a` on `#d8d2bd`, which is a contrast ratio of 2.42:1. The minimum for body-size text is 4.5:1.

**Fix:** darken the inactive link colour to at least 4.5:1 against the page background. Show the current item with weight or the accent colour, not by making the other items fainter. Do not add any new lines or borders to do this.

### 2.4 Cloudflare deployment config is missing

**Finding:** the repository has no `_headers` file, no `wrangler` config and no decision on Cloudflare Pages vs Workers. The local test showed that hashed files in `/_astro/` got no cache lifetime. Cloudflare's defaults are better than the local server, but they do not mark hashed assets as immutable.

**Decide first:** Cloudflare Pages or Workers static assets. Both support `_headers` and `_redirects`. Pages serves `404.html` automatically. Workers needs `not_found_handling = "404-page"` in the config.

**Fix:** add `public/_headers` with:

- `/_astro/*`: `Cache-Control: public, max-age=31536000, immutable` (these filenames change whenever the content changes)
- all pages: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and a `Permissions-Policy` that turns off features the site never uses (camera, microphone, geolocation)
- the preview domain (`*.pages.dev` or `*.workers.dev`): `X-Robots-Tag: noindex`, so that Google does not index a duplicate copy of the site (see the SEO plan, 3.1)

Leave out a Content-Security-Policy for now. The layout uses inline scripts, and a CSP would need script hashes that change with every build. Revisit this after launch if needed.

**Done when:** after deploying, the response headers for one `/_astro/` file, one page and the preview domain have been checked with `curl -I`.

### 2.5 Local price detection on Cloudflare

The regional price script (`LocalPrice.astro`) uses `/cdn-cgi/trace` on the site's own domain. That endpoint only exists behind Cloudflare. After the first deploy, check it on the real domain by opening `/?country=IN` (manual override) and then the plain `/` from a VPN in another country. The time zone fallback covers the case where the endpoint is missing, so this is a check, not a code change.

## 3. Should fix (low effort, real benefit)

### 3.1 Remove unused code and assets

These files are not imported anywhere. Astro does not ship them, so this does not change page speed, but it makes the project easier to maintain and avoids editing the wrong file:

- Components: `Arrow.astro`, `Explorer.astro`, `GuideArt.astro`, `HeroPreview.astro`, `TryTouchSection.astro`
- Images only used by those components: `src/assets/home-dark.png`, `home-light.png`, `display*.png`, `battery*.png`, `camera*.png`, `audio*.png`, `report.png` (keep `report-light.png`, it is used by `AreasSection`)
- `src/assets/hero/`: every `.webp` file, and every `.png` except `home.png`, `thermal.png` and `audio.png`

Move them to a dated `_backup-...` folder like the earlier cleanups, rather than deleting them. Run `npm run check` and `npm run build` afterwards.

### 3.2 Update `.gitignore`

Add `_backup-*/` and `Claude outputs/`, so that backups, screenshots and tarballs do not end up in git or in a deploy.

## 4. Verify, probably no change needed

These were flagged by Lighthouse, but are most likely caused by the entrance animation at the moment Lighthouse measured the page. Re-check them after the fixes above, with reduced motion turned on in the emulated browser:

- **Hero facts bar contrast on `/`** (1.19:1): measured while the facts bar was still fading in (`html.fc-pre`). At full opacity the colours are the normal ink colours.
- **Heading order on `/`**: the built HTML has a correct order (h1, h2, h3, h3, h3, h2, h2, h2). The flag probably comes from the heading mask animation temporarily rewriting the h2 content.

Only fix these if they still fail when the animation is not running.

## 5. Decision for Emma, no action by default

**Intro animation and LCP.** The logo intro that plays on the first visit of a session delays the hero. Mobile lab LCP on `/` is 2.1 s, which is inside Google's "good" limit (2.5 s) but the slowest value on the site. The recommendation is to keep it as it is and look at real user data in Search Console after launch. Only change it if field LCP goes over 2.5 s.

## 6. Checked and fine, do not change

- Images: responsive `srcset`, `width`/`height` set, `loading="lazy"` below the fold, decorative images have empty `alt`
- The 19 KB price script is 5.9 KB gzipped and runs after load. The time zone table could be made smaller, but the benefit is not worth the added complexity
- Inline scripts: the homepage has about 6 KB of inline JavaScript (intro 3.7 KB, scroll reveal 1.9 KB, areas 0.7 KB). Astro inlines small scripts on purpose to save requests, and the intro script has to be inline to run before first paint. Moving them to separate files would not make the site faster
- The homepage JSON-LD is 10 KB because it lists the price for 171 countries. That is about 1 to 2 KB after compression and is fine
- Single CSS bundle per page, no render-blocking third-party resources, no third-party requests at all
- `astro check`: 0 errors, 0 warnings
- `trailingSlash: 'always'` is consistent with canonical URLs and the sitemap

## 7. Suggested order of work

One task at a time, reviewing each result before the next:

1. 2.1 font loading (largest measurable effect)
2. 2.2 `<main>` landmark and 2.3 TOC contrast (small, same review round)
3. 3.1 and 3.2 cleanup
4. 2.4 Cloudflare config, once Pages vs Workers is decided
5. Re-run Lighthouse on the same four pages, then do section 4 checks and 2.5 after the first deploy
