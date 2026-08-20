# Review Log — 2026-08-20 Site Improvement Pass

Scope: deep assessment and comprehensive implementation of SEO, performance,
content, accessibility, and code-hygiene improvements across the public site
(9 pages + simulations catalogue). Style constraint: keep the no-build,
single-file-per-page philosophy; no dependencies added.

## SEO

- Added `<meta name="description">`, `author`, full Open Graph
  (type/site_name/title/description/url/image + dimensions), Twitter
  `summary_large_image` cards, and `<link rel="canonical">` to all 9 pages
  (`index.html`, 8 under `pages/`).
- Standardised `<title>` pattern to `Page — Active Inference Institute`
  (was a mix of commas, hyphens, and en/em dashes).
- Added favicons: `assets/favicon-32.png`, `favicon-64.png`,
  `apple-touch-icon.png` (pi glyph on black, matching brand) + `<link>` tags
  on all pages.
- Added `assets/og-image.png` (1200x630 brand card: pi glyph, wordmark,
  tagline, Act-Serve-Infer).
- Added `robots.txt` (with sitemap reference) and `sitemap.xml` (9 primary
  URLs, dated).

## Performance

- Hero background and hero logo `requestAnimationFrame` loops now pause when
  the tab is hidden (`visibilitychange`) or the hero scrolls out of view
  (`IntersectionObserver`), and resume on return. Verified: `heroVisible`
  flips false after scrolling past; loops stop.
- Intro sequence settles: after the prism flash + spectral wave complete
  (~4.9 s), the logo loop stops on its final frame instead of animating
  forever (this also removes the per-frame `measureText` cost in
  `drawSpectralText`). Verified: `logoSettled === true` after 7 s.
- `prefers-reduced-motion: reduce` now draws one static frame of the hero
  logo (no prism, no spectral wave, no audio) and skips both rAF loops.
- Hero background canvas DPR capped at 2 (was uncapped; 3x screens redrew
  9x the pixels for a near-invisible gradient).

## Content

- Simulations catalogue drift fixed: added "More To Explore - Biological
  Inference & Variants" group linking `cochlea.html`, `human_eye.html`, and
  `t_maze_crr.html` (with concept tags and difficulty). `Apple-Frog.html`
  was already linked. `human_ai_fep(experiment_only_for_discussion_AICACP).html`
  intentionally remains unlisted (experiment-only, per filename and README).
- Hero now has two CTAs: "Watch Introduction" (YouTube, `rel="noopener"`
  added) and "Join the Community" (anchor to the existing CTA section) -
  the join path was previously below the fold only.
- Stats section: added "Figures as of August 2026" footnote.
- Friston quote attribution now links his Scientific Advisory Board
  membership (closes the loop with `sab.html`).
- Footer "Tutorials" label renamed "Interactive Simulations" to match nav.
- Mobile nav restored missing paths: Internship Programme (Learn -> Study),
  RxInfer.jl and Open-Source Code (Learn -> Tools). Desktop/mobile parity.
- UK spelling standardised in body prose (rigour, organisation, behaviour -
  the dominant usage); proper nouns and cited titles (textbook subtitle,
  journal names, quotes) left verbatim.
- Removed the runtime UK/US localisation block from `site-components.js`
  (fragile DOM regex rewrite, text-flash for en-GB users, missed canvas
  text). Site is now statically consistent.

## Accessibility

- Skip-to-content link on every page (`site-components.js` + `.skip-link`
  in `site.css`); `<main id="main-content">` landmark added on `index.html`.
- Canvas logos given accessible names: `role="img"` +
  `aria-label="Active Inference Institute"` on header, footer, and hero
  canvases; header logo wrapped in labelled home link.
- Mega menus now open on keyboard focus (`focusin`) and close when focus
  leaves (`focusout`), in addition to existing hover/Escape behaviour.
  Verified: Tab to "About" opens the menu.
- Small link text contrast: `.edu-section a`, `.course-card .course-link`,
  `.intern-section a`, `.intern-card a`, `.research-section a`,
  `.r-card a` switched from `--accent` (#c54a2a, ~4.2:1) to `--accent-deep`
  (#b33d20, >=4.5:1 AA).

## Code hygiene

- `index.html`: removed ~80 lines of dead commented-out CSS blocks (VMO,
  History, People, Programs, Tutorials) and the empty 1200px media query.
- Removed CSS duplicated between `index.html` inline styles and `site.css`
  (`.btn*`, section rules, entire footer block, footer responsive rules).
- Fixed `resizeHeroCanvas` transform-compounding bug: `setTransform` reset
  before `scale` (previously each resize multiplied the scale).

## Verification (real execution)

- `node --check` passes on `site-components.js` and the inline
  `index.html` script.
- Local HTTP server: all 18 asset/page paths return 200; internal link
  scan across all pages + `site-components.js` finds zero broken targets.
- Playwright/Chromium: all 9 pages load with header/footer injection,
  4 nav items, skip-link present, single `h1`, canvas aria-labels, dynamic
  footer year, standardised titles - zero JS console/page errors on every
  page.
- Hero verified visually (screenshot review): pi logo + wordmark +
  "Est. 2020" + "Act - Serve - Infer" render correctly after settle;
  both CTAs present; no garbling or overlap.
- Keyboard: menu opens on focus. Scroll: `heroVisible` false past hero.

## Deferred / not changed

- `assets/2022_ActiveInference_Textbook.pdf` (6.3 MB) left as-is; it is
  the authoritative textbook artifact and not page-critical.
- `human_ai_fep(...)` simulation left deployed but unlisted (experiment-only
  intent); consider excluding from any future sitemap expansion.
- Stats counts still hand-maintained; now footnoted with an as-of date.
