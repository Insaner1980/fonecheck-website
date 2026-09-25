# fonecheck.app: SEO audit and plan

Date: 24 September 2026
Scope: all 16 built pages (homepage, guides index, 12 guides, privacy, 404), plus the Cloudflare setup the site will run on
Status: audit done, nothing in this document has been implemented yet. Companion document: `fonecheck-code-optimization-plan.md`

## 1. Summary

The technical SEO foundation is solid. Lighthouse SEO is 100 on every tested page. Every page has a unique title and meta description, one H1, a canonical URL and an `og:image`. The sitemap and `robots.txt` are correct, and the 404 page is `noindex` and not in the sitemap.

The gaps are in four areas:

1. **Hosting setup** that can quietly hurt indexing on Cloudflare: a duplicate preview domain, AI crawler settings, Search Console
2. **Guide page metadata**: titles too long for search results, no Article structured data, the same social image on every guide
3. **Internal linking** between guides: there is only one link from one guide to another in all 12 guides
4. **Launch-day updates**, since the site currently says "coming fall 2026" everywhere

## 2. What was checked

| Check | Result |
|---|---|
| Titles | Unique on all pages. 9 of 12 guide titles are 62 to 81 characters with the " — fonecheck" suffix, so Google will cut them off |
| Meta descriptions | Unique on all pages, 117 to 157 characters. Homepage is 174, too long |
| H1 | Exactly one per page |
| Canonical | Present on all pages, absolute, trailing slash matches the sitemap |
| `robots.txt` | Allows everything, points to `sitemap-index.xml` |
| Sitemap | 15 URLs, 404 excluded correctly. No `lastmod` dates |
| Structured data | Homepage: SoftwareApplication with prices for 171 countries. Guides and guides index: none |
| Open Graph | Present everywhere, but `og:type` is `website` on guides and all pages share `social.png` |
| Images | Correct `alt` handling, `width`/`height` set, lazy loading, responsive `srcset` |
| Internal links | Homepage links to 7 of 12 guides. Guides link to each other only through one "Next guide" link. Guide text contains one internal link in total |
| Language | `lang="en"` on all pages. English only, so no hreflang is needed |
| Speed | Covered in the code plan. The only SEO-relevant issue is the layout shift on guide pages (CLS 0.24 at desktop width) |

## 3. Before launch: hosting and indexing

### 3.1 Stop the Cloudflare preview domain from being indexed

**Problem:** Cloudflare publishes the site on a `*.pages.dev` (or `*.workers.dev`) address in addition to `fonecheck.app`. Google can find and index that copy, which splits ranking signals.

**Fix:** send `X-Robots-Tag: noindex` on the preview domain through `public/_headers` (see code plan 2.4). If Workers is used, the `workers.dev` route can be turned off instead. Also decide on either `www.fonecheck.app` or plain `fonecheck.app` and redirect the other one to it with a 301 redirect in Cloudflare.

### 3.2 Check Cloudflare's AI crawler settings

**Background:** from 15 September 2026, Cloudflare blocks "Training" and "Agent" bots by default on ad-monetized pages of newly added domains. Googlebot, Bingbot and Applebot also do training crawls, so blocking training can block them too. fonecheck has no ads, so the default most likely does not apply, but this needs to be checked in the dashboard, not assumed.

**Action:** after adding the domain, open the zone's security and AI crawler settings (AI Crawl Control) and confirm that:

- Search crawlers (Googlebot, Bingbot) are allowed
- "Managed robots.txt" is either off, or its output is acceptable. When it is on, Cloudflare adds its own rules to the site's `robots.txt`

**Decision for Emma:** whether AI search and assistant crawlers (for example OAI-SearchBot, PerplexityBot, Claude-SearchBot) may read the site. Allowing them means the guides can be quoted and linked in AI answers. Blocking only training crawlers while allowing search crawlers is a common middle ground.

### 3.3 Search Console and Bing Webmaster Tools

- Verify `fonecheck.app` as a **Domain property** in Google Search Console (DNS TXT record in Cloudflare), and submit `https://fonecheck.app/sitemap-index.xml`
- Add the site to Bing Webmaster Tools (it can import the Search Console setup). Bing's index is also used by several AI search products
- Turn on **Crawler Hints** in Cloudflare. It notifies IndexNow-compatible search engines (Bing, Yandex and others) automatically when pages change

### 3.4 Privacy page: two facts are now known

The privacy page still says hosting information "will be added when the production hosting arrangement is confirmed". Before launch, update it to:

- name Cloudflare as the hosting provider
- say that the page asks Cloudflare which country a visit comes from, only to show the Google Play price in the local currency, and that nothing is stored

This is not a ranking factor, but an accurate privacy page is part of looking trustworthy, which matters for a diagnostics app that asks for permissions.

## 4. Guide page metadata

### 4.1 Shorten guide titles in search results

**Problem:** with the " — fonecheck" suffix, 9 of 12 guide titles are longer than about 60 characters and will be cut off in Google. The separator is also inconsistent: the homepage and guides index use `|`, the other pages use an em dash.

**Fix:**

- Guide pages: use the guide title alone as the `<title>`, with no brand suffix. Google shows the site name separately (see 5.1)
- Other pages: keep the " | fonecheck" pattern everywhere, and replace the em dash on the privacy and 404 pages
- The visible H1 does not change

Titles that are still over 60 characters without the suffix (black screen during calls: 68, USB file transfer: 65, microphone: 63) can get a shorter `seoTitle` field in the frontmatter, only if Emma wants that. Otherwise leave them.

### 4.2 Homepage meta description

Shorten it from 174 to about 150 characters, so that "Coming to Google Play in fall 2026" is not cut off. Suggested text (148 characters): *Test your Android phone's screen, sound, cameras, battery and more across 14 areas, then keep a report you can compare. Coming to Google Play in fall 2026.*

### 4.3 Guide social images

**Problem:** all 12 guides share `social.png`, whose alt text is about the app, not the guide. Links shared on social media or chat apps all look the same.

**Fix:** generate a 1200 x 630 image for each guide at build time from the guide's existing illustration (`src/assets/guides/<slug>.webp`), using Astro's image tools. Set `og:image`, `og:image:alt` (the guide title) and `twitter:image` per guide. Set `og:type` to `article` on guides and add `article:published_time`.

## 5. Structured data

### 5.1 WebSite (homepage)

Add a small `WebSite` JSON-LD block with `name: "fonecheck"` and `url`. Google uses this to show "fonecheck" as the site name in search results, which is what makes it safe to remove the brand suffix from guide titles (4.1).

### 5.2 Article (every guide)

Add `Article` JSON-LD to the guide template with `headline`, `description`, `datePublished`, `dateModified`, `image` (the image from 4.3), `publisher` (fonecheck, with its logo) and `author`.

This needs one small content change: an optional `updated` date in the guide frontmatter. Until a guide is edited, `dateModified` is the same as `published`.

**Decision for Emma:** who the `author` is. The options are the organization (fonecheck or Finnvek) or Emma Hotakainen as a person. A named person with a short "about" page is a stronger trust signal for troubleshooting and health-of-device content. This only affects metadata and a possible byline, not the text of the guides.

### 5.3 SoftwareApplication (homepage), after launch

Leave as it is until the app is live. At launch, add `downloadUrl` / `installUrl` (the Play Store link) and `sameAs` (the Play Store listing).

Only add `aggregateRating` if the Play rating is also shown on the page and kept up to date. Google does not show software app rich results without a rating or reviews, so until then the markup mainly helps other search engines and AI tools understand the page.

### 5.4 Not recommended

- **FAQPage markup:** Google restricted FAQ rich results to government and health sites in 2023, so there is no search result benefit
- **BreadcrumbList:** the site is only two levels deep, and the benefit is small. Skip it for now

## 6. Internal linking

**Problem:** the guides barely link to each other. There is one contextual link in all 12 guides, plus the automatic "Next guide" link, which follows a fixed order rather than topic. The homepage shows 7 of the 12 guides. Internal links are how Google finds pages, understands which pages belong together, and passes ranking value between them.

**Fix (content work, done guide by guide):**

- Add 2 to 3 contextual links in each guide's text to a related guide, where it helps the reader. Obvious pairs:
  - camera, microphone and touchscreen guides → "document an intermittent problem" and "protect your data before a repair"
  - black screen during calls ↔ touchscreen (proximity sensor vs touch)
  - no SIM ↔ intermittent problem
  - battery health ↔ protect your data before a repair
- Optional code change: replace the fixed-order "Next guide" link with "Related guides" chosen by matching `category`. Only if Emma wants this, since it changes the layout

Links must be written into the text naturally, not added as a list of keywords.

## 7. Sitemap `lastmod`

Add `lastmod` to each guide URL from its `updated` (or `published`) date through the sitemap integration's `serialize` option. Google uses `lastmod` when it is consistently accurate, so it must not be set to the build date on every page.

## 8. Launch day checklist

When the app is live on Google Play:

1. Replace "Coming to Google Play in fall 2026" / "Fall 2026" with the real Play Store link: homepage hero, facts bar, guide call to action, FAQ, meta descriptions, `og:image:alt`
2. Update the "When can I download fonecheck?" FAQ answer
3. Update `social.png` if it contains "Coming fall 2026"
4. Add the Play Store link to the SoftwareApplication data (5.3)
5. Check that the prices on the site match Play Console (`src/data/prices.ts`)
6. Request indexing of the homepage in Search Console

## 9. After launch

- After 4 to 6 weeks, review Search Console: which queries show the guides, pages that are "Crawled, currently not indexed", and the Core Web Vitals report with real user data
- Plan new guides based on the queries that actually appear, while keeping to the rule that guides cover what the app's 14 diagnostic areas can check
- Link to the site from the Play Store listing (the developer website field) and from finnvek.com, which already links to it from the footer

## 10. Checked and fine, do not change

- Canonical URLs, trailing slash handling and sitemap coverage
- `robots.txt` content
- `noindex` on the 404 page
- One H1 per page, logical heading structure in guides (H1 then H2 sections)
- Image alt text: decorative guide illustrations correctly have empty `alt`
- Meta descriptions on guides: unique and within length
- Guide length (500 to 1,100 words) fits the topics. Nothing needs to be made longer for SEO
- External links to Google and Android documentation as sources: good for credibility, keep them

## 11. Suggested order

1. 4.1, 4.2 and 5.1 together (titles, homepage description, WebSite markup), one small change
2. 5.2 and 7 together (Article markup, `updated` field, sitemap `lastmod`), after Emma decides on the author
3. 4.3 guide social images
4. 3.1 to 3.4 when the Cloudflare project is set up
5. 6 internal links, guide by guide, alongside normal article editing
6. Section 8 on launch day, section 9 afterwards

## Sources

- [Google: Software app structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [Google: How Google crawls locale-adaptive pages](https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages)
- [Cloudflare blog: new AI traffic options and 15 September 2026 defaults](https://blog.cloudflare.com/content-independence-day-ai-options/)
- [Cloudflare: Migrate from Pages to Workers (`_headers`, `_redirects`, 404 handling)](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/)
- [Astro docs: Using custom fonts (Fonts API)](https://docs.astro.build/en/guides/fonts/)
